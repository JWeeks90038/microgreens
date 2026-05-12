import Image from "next/image";

interface LotQrCodeProps {
  url: string;
  lotId: string;
}

export default function LotQrCode({ url, lotId }: LotQrCodeProps) {
  const qrImageUrl = `/api/lot/${encodeURIComponent(lotId)}/qr`;

  return (
    <div className="rounded-[2rem] border border-sage-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-[1.5rem] bg-white p-4 ring-1 ring-sage-200">
          <Image
            src={qrImageUrl}
            alt={`QR code for lot ${lotId}`}
            width={240}
            height={240}
            unoptimized
            className="h-[240px] w-[240px] rounded-xl bg-white"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-primary-800">Traceability QR</p>
          <p className="mt-1 text-sm text-sage-600">Scan to open this lot passport on any phone camera.</p>
        </div>
        <a
          href={qrImageUrl}
          download={`${lotId}-passport-qr.png`}
          className="w-full rounded-full bg-primary-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-800"
        >
          Download PNG
        </a>
        <a
          href={qrImageUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary-700 underline decoration-primary-300 underline-offset-4"
        >
          Open print asset
        </a>
        <p className="text-center text-xs leading-5 text-sage-600">
          High-contrast PNG with quiet zone padding for label printing and small-size scanning.
        </p>
        <p className="text-center text-xs leading-5 text-sage-500 break-all">{url}</p>
      </div>
    </div>
  );
}
