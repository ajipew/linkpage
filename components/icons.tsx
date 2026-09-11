import {
  Globe,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
  ShoppingBag,
  ShoppingCart,
  Store,
  Briefcase,
  FolderOpen,
  BookOpen,
  ClipboardList,
  CalendarCheck,
  Mail,
  Phone,
  Link2,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import type { LinkIcon } from "@/config/site.config";

// Simple inline glyphs for platforms lucide doesn't ship natively
function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-.9-.87-1.44-2.03-1.5-3.32h-3.05v13.86c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12V10.6a5.76 5.76 0 0 0-.8-.06 5.78 5.78 0 1 0 5.78 5.78V9.35a8.28 8.28 0 0 0 4.84 1.55V7.86a5.32 5.32 0 0 1-3.35-2.04z" />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.34 0-7.87 3.53-7.87 7.87 0 1.39.36 2.73 1.05 3.92L4 20l4.35-1.14a7.86 7.86 0 0 0 3.7.94h.01c4.34 0 7.87-3.53 7.87-7.87a7.83 7.83 0 0 0-2.33-5.61zm-5.55 12.1h-.01a6.5 6.5 0 0 1-3.32-.91l-.24-.14-2.47.65.66-2.41-.16-.25a6.53 6.53 0 0 1-1-3.49c0-3.6 2.93-6.53 6.54-6.53a6.5 6.5 0 0 1 4.62 1.92 6.5 6.5 0 0 1 1.91 4.62c0 3.6-2.93 6.54-6.53 6.54zm3.58-4.9c-.2-.1-1.16-.57-1.34-.64-.18-.06-.31-.1-.44.1-.13.2-.5.63-.62.76-.11.13-.23.14-.42.05-.2-.1-.83-.3-1.58-.97-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.34.1-.11.13-.2.2-.32.06-.13.03-.24-.02-.34-.05-.1-.44-1.05-.6-1.44-.16-.38-.32-.33-.44-.33-.11 0-.24-.02-.37-.02-.13 0-.34.05-.52.24-.18.2-.68.66-.68 1.6 0 .95.7 1.86.79 1.99.1.13 1.37 2.09 3.32 2.93.46.2.83.32 1.11.4.47.15.9.13 1.24.08.38-.06 1.16-.47 1.32-.93.16-.45.16-.85.11-.93-.05-.08-.18-.13-.38-.23z" />
    </svg>
  );
}

const iconMap: Record<LinkIcon, LucideIcon | typeof TikTokGlyph> = {
  website: Globe,
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TikTokGlyph,
  messenger: MessageCircle,
  whatsapp: WhatsAppGlyph,
  youtube: Youtube,
  shopee: ShoppingBag,
  lazada: ShoppingCart,
  etsy: Store,
  store: Store,
  portfolio: Briefcase,
  drive: FolderOpen,
  catalog: BookOpen,
  order: ClipboardList,
  booking: CalendarCheck,
  email: Mail,
  phone: Phone,
  link: Link2,
};

export function LinkIconGlyph({
  icon,
  className,
}: {
  icon: LinkIcon;
  className?: string;
}) {
  const Icon = iconMap[icon] ?? Link2;
  return <Icon className={className} />;
}

export { BadgeCheck as VerifiedBadge };
