# React + Vite + Tailwind + shadcn/ui

This project was scaffolded directly in this folder using Vite (React + TypeScript), Tailwind CSS, and shadcn/ui. Primary brand color is blue (non‑purple) per preference.

## Stack
- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3 + tailwindcss-animate
- shadcn/ui primitives (Radix UI, cva)

## Scripts
```fish
# install deps
pnpm install

# dev server (does not auto-start here)
pnpm dev

# production build
pnpm build

# preview build
pnpm preview
```

## Tailwind
- Config: `tailwind.config.ts`
- CSS entry: `src/index.css` (includes CSS variables and Tailwind layers)

## shadcn/ui
- Config: `components.json`
- Example component: `src/components/ui/button.tsx`
- Utility: `src/lib/utils.ts` (cn helper)

Add more components with the CLI (generates files into `src/components/ui/`):
```fish
# choose components to add, e.g., card, input, textarea, badge, etc.
pnpm dlx shadcn@latest add card input textarea badge
```

Aliases:
- `@/components` → `src/components`
- `@/lib/*` → `src/lib/*`

## Project Structure
- `index.html` – Vite HTML entry
- `src/main.tsx` – React mount
- `src/App.tsx` – Demo page using `<Button />`

## Notes
- Dev server is not auto-started. Run `pnpm dev` manually when ready.
- Colors are set via CSS variables in `src/index.css` (blue primary).
