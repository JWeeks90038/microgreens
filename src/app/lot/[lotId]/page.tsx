"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getHarvestByLotId, type HarvestPassportRecord } from "@/lib/harvests";
import LotQrCode from "@/components/LotQrCode";

const FARM_LOCATION = "Murrieta, CA";
const LOT_BASE_URL = "https://thrivinggreens.com/lot";

interface LotPassportPageProps {
  params: Promise<{
    lotId: string;
  }>;
}

function PassportField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-sage-200 bg-sage-50/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">{label}</p>
      <p className="mt-2 text-base font-medium text-primary-900">{value}</p>
    </div>
  );
}

export default function LotPassportPage({ params }: LotPassportPageProps) {
  const [lotId, setLotId] = useState("");
  const [passport, setPassport] = useState<HarvestPassportRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadPassport = async () => {
      try {
        const resolvedParams = await params;
        const routeLotId = decodeURIComponent(resolvedParams.lotId ?? "").trim();

        if (!isActive) {
          return;
        }

        setLotId(routeLotId);

        if (!routeLotId) {
          setPassport(null);
          setError("Missing lot number.");
          setLoading(false);
          return;
        }

        const harvestRecord = await getHarvestByLotId(routeLotId);

        if (!isActive) {
          return;
        }

        setPassport(harvestRecord);
        setError(harvestRecord ? null : "Lot not found.");
      } catch (loadError) {
        console.error("Failed to load lot passport:", loadError);

        if (!isActive) {
          return;
        }

        setPassport(null);
        setError("We could not load this passport right now.");
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    void loadPassport();

    return () => {
      isActive = false;
    };
  }, [params]);

  const passportUrl = useMemo(() => {
    return lotId ? `${LOT_BASE_URL}/${encodeURIComponent(lotId)}` : LOT_BASE_URL;
  }, [lotId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-3xl animate-pulse rounded-[2rem] border border-sage-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="h-4 w-24 rounded bg-sage-200" />
          <div className="mt-6 h-10 w-2/3 rounded bg-sage-200" />
          <div className="mt-3 h-4 w-1/2 rounded bg-sage-200" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-24 rounded-2xl bg-sage-100" />
            ))}
          </div>
          <div className="mt-8 h-80 rounded-[2rem] bg-sage-100" />
        </div>
      </div>
    );
  }

  if (!passport || error) {
    return (
      <div className="min-h-screen bg-cream-50 px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-sage-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage-600">Lot Passport</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">Passport unavailable</h1>
          <p className="mt-3 text-base text-sage-700">{error ?? "This lot could not be found in Firebase."}</p>
          {lotId ? (
            <p className="mt-2 text-sm text-sage-600">Requested lot: <span className="font-semibold text-primary-800">{lotId}</span></p>
          ) : null}
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-800"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link href="/" className="text-sm font-medium text-primary-700 transition-colors duration-200 hover:text-primary-900">
            Back to Thriving Greens
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">Lot Passport</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-sage-200 bg-white shadow-sm">
          <div className="border-b border-sage-200 bg-gradient-to-br from-cream-100 via-white to-sage-50 px-6 py-8 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">Thriving Greens</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-5xl">{passport.productName}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-700 px-4 py-2 text-sm font-semibold text-white">Lot {passport.lotId}</span>
              <span className="rounded-full bg-sage-100 px-4 py-2 text-sm font-medium text-sage-800">Status: {passport.status}</span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-sage-700 sm:text-base">
              Scan-friendly traceability details sourced directly from Firebase harvest records.
            </p>
          </div>

          <div className="grid gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.35fr)_320px] lg:items-start">
            <section className="grid gap-4 sm:grid-cols-2">
              <PassportField label="Product Name" value={passport.productName} />
              <PassportField label="Lot ID" value={passport.lotId} />
              <PassportField label="Weight" value={passport.weight} />
              <PassportField label="Harvest Date" value={passport.harvestDate} />
              <PassportField label="Storage Instructions" value={passport.storageInstructions} />
              <PassportField label="Shelf Life" value={passport.shelfLife} />
              <PassportField label="Farm Location" value={FARM_LOCATION} />
              <PassportField label="Passport URL" value={passportUrl} />
            </section>

            <aside className="lg:sticky lg:top-6">
              <LotQrCode url={passportUrl} lotId={passport.lotId} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}