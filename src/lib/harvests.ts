import { collection, getDocs, limit, query, type DocumentData, where } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

const DEFAULT_STORAGE_INSTRUCTIONS = "Please Keep Refrigerated.";
const DEFAULT_SHELF_LIFE = "5-7 Days";

export interface HarvestPassportRecord {
  lotId: string;
  productName: string;
  weight: string;
  harvestDate: string;
  storageInstructions: string;
  shelfLife: string;
  status: string;
}

function formatWeight(value: unknown): string {
  if (typeof value === "number") {
    return `${value} oz`;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }

  return "Not specified";
}

function formatBatchWeight(data: DocumentData): string {
  const explicitWeight = formatWeight(data.weight);

  if (explicitWeight !== "Not specified") {
    return explicitWeight;
  }

  if (typeof data.availableOz === "number") {
    return `${data.availableOz} oz`;
  }

  if (typeof data.remainingOz === "number") {
    return `${data.remainingOz} oz`;
  }

  return "Not specified";
}

function formatHarvestDate(value: unknown): string {
  if (value instanceof Timestamp) {
    return value.toDate().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (value instanceof Date) {
    return value.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsedDate = new Date(value);

    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    return value;
  }

  return "Not specified";
}

function formatText(value: unknown, fallback = "Not specified"): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function normalizeHarvestRecord(data: DocumentData): HarvestPassportRecord | null {
  const lotId = formatText(data.lotId, "");

  if (!lotId) {
    return null;
  }

  return {
    lotId,
    productName: formatText(data.productName !== "Not specified" ? data.productName : data.cropName),
    weight: formatWeight(data.weight),
    harvestDate: formatHarvestDate(data.harvestDate),
    storageInstructions: DEFAULT_STORAGE_INSTRUCTIONS,
    shelfLife: DEFAULT_SHELF_LIFE,
    status: formatText(data.status),
  };
}

function normalizeHarvestBatchRecord(data: DocumentData): HarvestPassportRecord | null {
  const lotId = formatText(data.lotId, "");

  if (!lotId) {
    return null;
  }

  return {
    lotId,
    productName: formatText(data.cropName),
    weight: formatBatchWeight(data),
    harvestDate: formatHarvestDate(data.activatedAt ?? data.harvestDate),
    storageInstructions: DEFAULT_STORAGE_INSTRUCTIONS,
    shelfLife: DEFAULT_SHELF_LIFE,
    status: formatText(data.status),
  };
}

async function getFirstMatchingRecord(
  collectionName: string,
  lotId: string,
  normalizer: (data: DocumentData) => HarvestPassportRecord | null,
): Promise<HarvestPassportRecord | null> {
  const snapshot = await getDocs(
    query(
      collection(firestore, collectionName),
      where("lotId", "==", lotId),
      limit(1),
    ),
  );

  const firstDocument = snapshot.docs[0];

  if (!firstDocument) {
    return null;
  }

  return normalizer(firstDocument.data());
}

export async function getHarvestByLotId(lotId: string): Promise<HarvestPassportRecord | null> {
  const trimmedLotId = lotId.trim();

  if (!trimmedLotId) {
    return null;
  }

  const harvestRecord = await getFirstMatchingRecord(
    "harvests",
    trimmedLotId,
    normalizeHarvestRecord,
  );

  if (harvestRecord) {
    return harvestRecord;
  }

  return getFirstMatchingRecord(
    "harvestBatches",
    trimmedLotId,
    normalizeHarvestBatchRecord,
  );
}
