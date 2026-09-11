"use client";

import { siteConfig } from "@/config/site.config";

/**
 * Minimal, privacy-friendly event tracking.
 *
 * By default this only logs to the console so the project works with
 * zero setup. To wire it to a real analytics provider, drop your
 * snippet into app/layout.tsx (e.g. Plausible, Umami, or GA4) and
 * this function will automatically also call `window.gtag` /
 * `window.plausible` if it detects them — no other code changes needed.
 *
 * No personal data (name, email, IP, precise location, etc.) is ever
 * collected here — only an event name and which link was clicked.
 * Set siteConfig.analyticsEnabled = false to disable tracking entirely.
 */
export function trackEvent(eventName: string, payload?: Record<string, string>) {
  if (!siteConfig.analyticsEnabled) return;
  if (typeof window === "undefined") return;

  // Console fallback — always safe, visible in browser dev tools.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[analytics]", eventName, payload ?? {});
  }

  // Plausible Analytics (if script is present in layout.tsx)
  const plausible = (window as unknown as { plausible?: (e: string, o?: unknown) => void })
    .plausible;
  if (typeof plausible === "function") {
    plausible(eventName, { props: payload });
  }

  // Google Analytics 4 (if gtag.js is present in layout.tsx)
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, payload);
  }
}

export function trackLinkClick(linkId: string, title: string) {
  trackEvent("link_click", { link_id: linkId, link_title: title });
  trackEvent(`${linkId}_click`, { link_title: title });
}

export function trackPageView() {
  trackEvent("page_view", { page: "landing" });
}
