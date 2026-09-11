# Link Landing Page

A fast, premium "link in bio" landing page built for QR-code traffic —
one permanent URL, unlimited customizable buttons, built with
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

Default branding shown: **MadeMint Digital Co.** Swap the config files
and logo to rebrand it for any business, creator, or personal brand in
minutes — no component code needs to change.

---

## ✨ Features

- Fully responsive, mobile-first, centered card layout (480–600px max width)
- One central config file for business info + links, one for the theme
- Unlimited buttons — add, remove, rename, reorder, re-icon, enable/disable
- 19 built-in icon types (website, Facebook, Instagram, TikTok, Messenger,
  WhatsApp, YouTube, Shopee, Lazada, Etsy, store, portfolio, Drive, catalog,
  order form, booking, email, phone, custom link)
- Light/dark mode, gradient/pattern/solid backgrounds, adjustable colors,
  fonts, border radius, and button style — all via CSS variables
- Admin-only QR code generator at `/admin/qr` (PNG + SVG download,
  high-res, error-correction level H, white quiet zone, always encodes
  your one permanent page URL — never an individual social link)
- Privacy-friendly click analytics (`link_click`, `facebook_click`, etc.)
  with zero setup required, and one-line hooks for Plausible/GA4
- SEO + social sharing metadata (Open Graph, Twitter Card, favicon,
  auto-generated `robots.txt` and `sitemap.xml`)
- Automatically-updating copyright year in the footer
- Secure by default: HTTPS-only link validation, `rel="noopener noreferrer"`
  on external links, no secrets in client code

---

## 📁 Project Structure

```
/app
  layout.tsx        → fonts, metadata, theme wrapper
  page.tsx           → the public landing page
  admin/qr/page.tsx  → admin-only QR code generator page
  robots.ts          → auto-generated robots.txt
  sitemap.ts         → auto-generated sitemap.xml
/components
  BrandHeader.tsx    → logo, name, tagline, description
  LinkList.tsx       → renders all enabled buttons
  LinkButton.tsx      → a single button
  Footer.tsx         → handle + legal links + © year
  QRCodeGenerator.tsx→ admin QR tool
  icons.tsx          → icon lookup table
  analytics.ts       → click-tracking helper
/config
  site.config.ts     → ⭐ business name, tagline, links, SEO — EDIT THIS
  theme.config.ts    → ⭐ colors, fonts, radius, button/background style
/public
  logo.ico           → favicon (your uploaded logo)
  logo.png           → 512×512 header logo (generated from your .ico)
  og-image.png       → 1200×630 social-share preview image
/styles
  globals.css        → CSS variables + Tailwind layers
```

---

## 🚀 Local Development

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the landing page,
and [http://localhost:3000/admin/qr](http://localhost:3000/admin/qr) for
the QR code generator.

---

## ☁️ Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — GitHub + Vercel dashboard**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: Vercel auto-detects **Next.js** — no config needed.
4. Click **Deploy**. No environment variables are required for the
   default setup.

Vercel will give you a URL like `your-project.vercel.app` — copy it into
`siteUrl` in `config/site.config.ts` (see below) so the QR generator and
SEO metadata point at the right place, then redeploy.

---

## 🎨 Rebranding — Everything You'll Actually Edit

### 1. Change the logo
Replace the files in `/public`:
- `logo.ico` — your favicon (must be a valid multi-size `.ico`)
- `logo.png` — a square PNG, ideally 512×512, for the header
- `og-image.png` — a 1200×630 PNG shown when your link is shared on
  social media / messaging apps

Then confirm `logo: "/logo.png"` in `config/site.config.ts` still
matches the filename.

### 2. Change business info & links
Open `config/site.config.ts`:
```ts
export const siteConfig: SiteConfig = {
  businessName: "Your Business Name",
  tagline: "Your short tagline",
  description: "Optional longer description",
  logo: "/logo.png",
  verified: true,
  handle: "@yourhandle",
  siteUrl: "https://your-real-domain.com", // used by QR + SEO
  links: [
    {
      id: "website",              // used in analytics event names
      title: "Visit Our Website",
      url: "https://yoursite.com",
      icon: "website",            // see icons.tsx for the full list
      enabled: true,
      newTab: true,
    },
    // add, remove, or reorder as many of these as you want
  ],
  ...
};
```
- **Add a button** → add another object to the `links` array.
- **Remove a button** → delete its object (or set `enabled: false` to
  hide it without deleting).
- **Reorder buttons** → reorder the array items.
- **Disable temporarily** → `enabled: false`.
- Any URL still containing `example.com` is automatically flagged with
  a small "placeholder" badge on the button so you don't forget to
  replace it before launch.

### 3. Change colors, fonts, and style
Open `config/theme.config.ts`:
```ts
export const themeConfig: ThemeConfig = {
  colors: { primary: "#65D6AD", secondary: "#171717", ... },
  darkColors: { ... },
  fonts: { heading: "'Poppins', sans-serif", ... },
  borderRadius: "16px",        // try "9999px" for pill buttons
  buttonStyle: "solid",
  backgroundStyle: "gradient", // "solid" | "gradient" | "pattern"
  defaultMode: "light",        // "light" | "dark"
};
```
To use a different Google Font, change the import in `app/layout.tsx`
(`next/font/google`) and update the `fonts` values here to match.

### 4. Connect a custom domain
In the Vercel dashboard: **Project → Settings → Domains → Add**, then
follow the DNS instructions Vercel shows for your registrar (usually a
CNAME or A record). Once it's live, update `siteUrl` in
`config/site.config.ts` and redeploy.

### 5. Generate your QR code
1. Deploy the site and confirm `siteUrl` in `site.config.ts` matches
   your real, final domain.
2. Visit `/admin/qr` on your live site.
3. Download the **PNG** (for digital use) or **SVG** (for print / large
   signage — scales without quality loss).
4. Print or share it. Because it always encodes your one permanent
   `siteUrl`, you can keep changing the buttons on the page forever
   without ever reprinting the QR code.

> `/admin/qr` isn't linked anywhere in the public UI and is excluded
> from search engines via `robots.ts`, but it isn't password protected.
> If you'd like it locked down, the simplest option is Vercel's
> built-in **Password Protection** (Pro plans) scoped to that one path,
> or ask to have basic auth added to the route.

---

## 📊 Analytics

Click tracking works out of the box with zero setup — events log to
the browser console in development so you can verify wiring. Events
fired:
- `page_view`
- `link_click` (with `link_id` + `link_title`)
- `<link_id>_click` (e.g. `facebook_click`, `website_click`)

To send these to a real analytics provider, drop one script tag into
`app/layout.tsx` (see the comment already there) — Plausible and GA4
are auto-detected by `components/analytics.ts` with no further code
changes. Set `analyticsEnabled: false` in `site.config.ts` to disable
tracking entirely.

---

## 🔒 Security notes

- Only `https://`, `http://`, `mailto:`, and `tel:` URLs are ever
  rendered as buttons — anything else is silently dropped.
- All external links use `rel="noopener noreferrer"`.
- No API keys, tokens, or secrets are used or exposed in this project.

---

## 🧰 Tech Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS ·
lucide-react · `qrcode` — all deploy cleanly to Vercel with zero config.
