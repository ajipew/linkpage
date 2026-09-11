import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { VerifiedBadge } from "./icons";

export default function BrandHeader() {
  return (
    <header className="flex flex-col items-center gap-3 text-center animate-fade-up">
      <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-black/5">
        <Image
          src={siteConfig.logo}
          alt={`${siteConfig.businessName} logo`}
          fill
          sizes="80px"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex items-center gap-1.5">
        <h1 className="font-heading text-xl font-bold tracking-tight text-secondary">
          {siteConfig.businessName}
        </h1>
        {siteConfig.verified && (
          <VerifiedBadge className="h-4 w-4 shrink-0 text-primary" aria-label="Verified" />
        )}
      </div>

      <p className="font-secondary text-sm font-medium text-text-main/80">
        {siteConfig.tagline}
      </p>

      {siteConfig.description && (
        <p className="max-w-[280px] text-xs leading-relaxed text-text-main/60">
          {siteConfig.description}
        </p>
      )}
    </header>
  );
}
