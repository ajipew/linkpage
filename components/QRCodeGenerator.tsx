"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Download, QrCode } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { themeConfig } from "@/config/theme.config";

/**
 * Admin-only QR code generator for the page's own permanent URL.
 * Not linked in the public nav — visit /admin/qr to use it.
 * Always encodes siteConfig.siteUrl, never an individual social link,
 * so the physical QR code never has to change again.
 */
export default function QRCodeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [svgMarkup, setSvgMarkup] = useState<string>("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, siteConfig.siteUrl, {
      width: 480,
      margin: 2, // quiet zone
      errorCorrectionLevel: "H",
      color: {
        dark: themeConfig.colors.secondary,
        light: "#FFFFFF",
      },
    }).then(() => setReady(true));

    QRCode.toString(siteConfig.siteUrl, {
      type: "svg",
      margin: 2,
      errorCorrectionLevel: "H",
      color: {
        dark: themeConfig.colors.secondary,
        light: "#FFFFFF",
      },
    }).then(setSvgMarkup);
  }, []);

  function downloadPng() {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page-qr.png";
    a.click();
  }

  function downloadSvg() {
    if (!svgMarkup) return;
    const blob = new Blob([svgMarkup], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page-qr.svg";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-surface p-6 shadow-md">
      <div className="flex items-center gap-2 text-secondary">
        <QrCode className="h-5 w-5" />
        <h2 className="font-heading text-lg font-semibold">QR Code Generator</h2>
      </div>

      <p className="text-center text-xs text-text-main/60">
        Encodes your permanent landing page URL:
        <br />
        <span className="font-medium text-text-main/80">{siteConfig.siteUrl}</span>
      </p>

      <div className="rounded-xl border border-black/5 bg-white p-4">
        <canvas ref={canvasRef} className="h-60 w-60" />
      </div>

      <div className="flex w-full gap-3">
        <button
          onClick={downloadPng}
          disabled={!ready}
          className="flex flex-1 items-center justify-center gap-2 rounded-brand bg-primary px-4 py-2.5 text-sm font-semibold text-secondary transition hover:brightness-95 disabled:opacity-50"
        >
          <Download className="h-4 w-4" /> PNG
        </button>
        <button
          onClick={downloadSvg}
          disabled={!svgMarkup}
          className="flex flex-1 items-center justify-center gap-2 rounded-brand border border-black/10 px-4 py-2.5 text-sm font-semibold text-secondary transition hover:bg-black/5 disabled:opacity-50"
        >
          <Download className="h-4 w-4" /> SVG
        </button>
      </div>

      <p className="text-center text-[11px] leading-relaxed text-text-main/50">
        High resolution (480px), error-correction level H, with a white quiet
        zone — safe to print. This QR always points at your one permanent
        page URL; change the links inside the page any time without
        reprinting it.
      </p>
    </div>
  );
}
