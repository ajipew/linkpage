import type { Metadata } from "next";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `QR Code — ${siteConfig.businessName}`,
  robots: { index: false, follow: false },
};

export default function QrAdminPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-page flex-col items-center justify-center gap-6 px-5 py-12">
      <div className="text-center">
        <h1 className="font-heading text-lg font-semibold text-secondary">
          Landing Page QR Code
        </h1>
        <p className="mt-1 text-xs text-text-main/60">
          Admin tool — not linked from the public page.
        </p>
      </div>
      <QRCodeGenerator />
    </main>
  );
}
