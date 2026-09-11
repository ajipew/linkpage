import { siteConfig } from "@/config/site.config";

export default function Footer() {
  const year = new Date().getFullYear();
  const { footer, handle } = siteConfig;
  const hasLinks = footer.showPrivacy || footer.showTerms || footer.showContact;

  return (
    <footer className="mt-10 flex flex-col items-center gap-2 text-center animate-fade-up">
      {handle && (
        <p className="font-secondary text-xs font-medium text-text-main/60">{handle}</p>
      )}

      {hasLinks && (
        <div className="flex items-center gap-3 text-xs text-text-main/50">
          {footer.showPrivacy && (
            <a href={footer.privacyUrl ?? "#"} className="hover:text-text-main/80">
              Privacy
            </a>
          )}
          {footer.showTerms && (
            <a href={footer.termsUrl ?? "#"} className="hover:text-text-main/80">
              Terms
            </a>
          )}
          {footer.showContact && (
            <a href={footer.contactUrl ?? "#"} className="hover:text-text-main/80">
              Contact
            </a>
          )}
        </div>
      )}

      <p className="text-[11px] text-text-main/40">
        © {year} {siteConfig.businessName}
      </p>
    </footer>
  );
}
