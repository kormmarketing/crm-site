# CRM & Automation Landing Page

Premium digital landing page for a CRM specialist (Bitrix24, sales automation, Telegram bots, analytics).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `/src/app` — App Router, layout, global styles
- `/src/components` — UI components and sections
- `/src/components/ui` — Reusable UI primitives

## Customization

1. **Telegram link**: Replace `https://t.me/` with your actual Telegram username in:
   - `Hero.tsx`
   - `Services.tsx`
   - `FinalCTA.tsx`
   - `Footer.tsx`
   - `Header.tsx`

2. **Colors**: Edit `tailwind.config.ts` for brand colors.

3. **Content**: All text content is in component files for easy editing.
