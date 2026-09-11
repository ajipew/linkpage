/**
 * ═══════════════════════════════════════════════════════════════
 *  SITE CONFIGURATION
 *  This is the ONLY file you need to edit to rebrand this page
 *  for a different business, creator, or personal brand.
 * ═══════════════════════════════════════════════════════════════
 */

export type LinkIcon =
  | "website"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "messenger"
  | "whatsapp"
  | "youtube"
  | "shopee"
  | "lazada"
  | "etsy"
  | "store"
  | "portfolio"
  | "drive"
  | "catalog"
  | "order"
  | "booking"
  | "email"
  | "phone"
  | "link";

export interface SiteLink {
  /** Unique id used for analytics event names, e.g. "facebook" -> facebook_click */
  id: string;
  /** Text shown on the button */
  title: string;
  /** Destination URL. Use tel: / mailto: for phone/email. */
  url: string;
  /** Icon key — see LinkIcon type and components/icons.tsx */
  icon: LinkIcon;
  /** Toggle a button on/off without deleting it */
  enabled: boolean;
  /** Open in a new tab (recommended true for anything that isn't tel:/mailto:) */
  newTab?: boolean;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  description: string;
  /** Path inside /public, e.g. "/logo.png" — swap the file to rebrand */
  logo: string;
  /** Shown next to the business name if true */
  verified: boolean;
  /** Handle shown near the footer, e.g. "@mademintdigitalco" (optional) */
  handle?: string;
  /** The one permanent URL this page lives at — used for QR + metadata */
  siteUrl: string;
  links: SiteLink[];
  footer: {
    showPrivacy: boolean;
    showTerms: boolean;
    showContact: boolean;
    privacyUrl?: string;
    termsUrl?: string;
    contactUrl?: string;
  };
  /** Turn all analytics tracking on/off in one place */
  analyticsEnabled: boolean;
  seo: {
    title: string;
    description: string;
    ogImage: string; // path inside /public
  };
}

export const siteConfig: SiteConfig = {
  businessName: "MadeMint Digital Co.",
  tagline: "Fresh Ideas. Made Digital.",
  description: "Digital Products • Custom Designs • Ready-to-Print",
  logo: "/logo.png",
  verified: true,
  handle: "@mademintdigitalco",

  // ⚠️ Replace with your real deployed domain once you connect one.
  siteUrl: "https://mademintdigital.vercel.app",

  links: [
    {
      id: "website",
      title: "Visit Our Website",
      url: "https://example.com", // PLACEHOLDER — replace with your real site
      icon: "website",
      enabled: true,
      newTab: true,
    },
    {
      id: "facebook",
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61594012509992", // PLACEHOLDER
      icon: "facebook",
      enabled: true,
      newTab: true,
    },
    {
      id: "instagram",
      title: "Instagram",
      url: "https://instagram.com/example", // PLACEHOLDER
      icon: "instagram",
      enabled: true,
      newTab: true,
    },
    {
      id: "message",
      title: "Message Us",
      url: "https://m.me/example", // PLACEHOLDER
      icon: "messenger",
      enabled: true,
      newTab: true,
    },
    {
      id: "tiktok",
      title: "TikTok",
      url: "https://tiktok.com/@example", // PLACEHOLDER
      icon: "tiktok",
      enabled: false,
      newTab: true,
    },
    {
      id: "shopee",
      title: "Shopee Store",
      url: "https://shopee.ph/example", // PLACEHOLDER
      icon: "shopee",
      enabled: false,
      newTab: true,
    },
    {
      id: "order-form",
      title: "Order Form",
      url: "https://forms.gle/example", // PLACEHOLDER
      icon: "order",
      enabled: false,
      newTab: true,
    },
    {
      id: "email",
      title: "Email Us",
      url: "mailto:hello@example.com", // PLACEHOLDER
      icon: "email",
      enabled: false,
      newTab: false,
    },
  ],

  footer: {
    showPrivacy: false,
    showTerms: false,
    showContact: false,
  },

  analyticsEnabled: true,

  seo: {
    title: "MadeMint Digital Co. | Official Links",
    description:
      "Explore MadeMint Digital Co. — digital products, custom designs, ready-to-print solutions and official social channels.",
    ogImage: "/og-image.png",
  },
};
