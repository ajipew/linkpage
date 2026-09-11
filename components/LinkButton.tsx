"use client";

import { ArrowRight } from "lucide-react";
import { LinkIconGlyph } from "./icons";
import { trackLinkClick } from "./analytics";
import type { SiteLink } from "@/config/site.config";

function isSafeUrl(url: string) {
  return (
    url.startsWith("https://") ||
    url.startsWith("http://") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  );
}

export default function LinkButton({ link, index }: { link: SiteLink; index: number }) {
  if (!isSafeUrl(link.url)) {
    // Fail closed: never render a link we can't validate as safe.
    return null;
  }

  const isPlaceholder = link.url.includes("example.com") || link.url.includes("example.");
  const external = link.newTab ?? link.url.startsWith("http");

  return (
    <a
      href={link.url}
      onClick={() => trackLinkClick(link.id, link.title)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${index * 60}ms` }}
      className="
        group relative flex w-full items-center gap-4 rounded-brand
        bg-button-bg px-5 py-4 text-button-text shadow-sm border border-black/5
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-md
        active:translate-y-0 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        animate-fade-up
      "
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-secondary">
        <LinkIconGlyph icon={link.icon} className="h-5 w-5" />
      </span>
      <span className="flex-1 text-left font-secondary text-[15px] font-medium tracking-wide">
        {link.title}
        {isPlaceholder && (
          <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
            placeholder
          </span>
        )}
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-text-main/40 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
