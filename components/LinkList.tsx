import { siteConfig } from "@/config/site.config";
import LinkButton from "./LinkButton";

export default function LinkList() {
  const enabledLinks = siteConfig.links.filter((link) => link.enabled);

  if (enabledLinks.length === 0) {
    return (
      <p className="text-center text-sm text-text-main/60">
        No links are enabled yet — turn some on in{" "}
        <code className="rounded bg-black/5 px-1 py-0.5">config/site.config.ts</code>.
      </p>
    );
  }

  return (
    <nav aria-label="Business links" className="flex w-full flex-col gap-3">
      {enabledLinks.map((link, i) => (
        <LinkButton key={link.id} link={link} index={i} />
      ))}
    </nav>
  );
}
