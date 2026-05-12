import { NextResponse } from "next/server";
import QRCode from "qrcode";

const LOT_BASE_URL = "https://thrivinggreens.com/lot";

interface RouteContext {
  params: Promise<{
    lotId: string;
  }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    const resolvedParams = await params;
    const lotId = decodeURIComponent(resolvedParams.lotId ?? "").trim();

    if (!lotId) {
      return NextResponse.json({ error: "Missing lotId" }, { status: 400 });
    }

    const lotUrl = `${LOT_BASE_URL}/${encodeURIComponent(lotId)}`;
    const pngBuffer = await QRCode.toBuffer(lotUrl, {
      errorCorrectionLevel: "H",
      margin: 4,
      type: "png",
      width: 1200,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    return new NextResponse(new Uint8Array(pngBuffer), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Content-Disposition": `inline; filename="${lotId}-passport-qr.png"`,
      },
    });
  } catch (error) {
    console.error("Failed to generate QR code:", error);

    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 },
    );
  }
}
