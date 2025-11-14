# Web React Platform Mapping (Lovable & Figma)

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui + Radix UI
- Supabase
- TanStack Query

## Component mapping

Kahu conceptual components map to:

- KButton → `components/ui/button.tsx`
- KCard → `components/ui/card.tsx`
- KInput → `components/ui/input.tsx`
- KSelect → `components/ui/select.tsx`
- KDialog → `components/ui/dialog.tsx`
- KSheet → `components/ui/sheet.tsx`
- KTabs → `components/ui/tabs.tsx`
- KToast → `components/ui/toast.tsx`

## Tokens

- Canonical source: `design-tokens/design-system.json`.
- Tailwind and `styles/globals.css` must be configured to mirror these tokens.
- Components should use token-based classes, not arbitrary styles.

Any new component or variant must be reflected in:

- `/ui/components/*.md`
- `design-tokens/design-system.json`
- The relevant shadcn/Tailwind implementations.
