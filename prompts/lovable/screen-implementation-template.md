# Lovable – Screen Implementation Template

Use this when asking Lovable to build or update a screen.

1. Use Kahu’s master system repo:
   - design-tokens/design-system.json
   - ui/components/*.md
   - ui/patterns/*.md
   - platforms/web-react/mapping.md
   - prompts/shared-context.md

2. Respect the Lovable stack:
   - React 18 + TS
   - Vite
   - Tailwind CSS
   - shadcn/ui + Radix
   - Supabase
   - TanStack Query

3. Implement or update the screen using:
   - Existing Kahu components from `components/ui` where possible.
   - Tailwind utility classes that map to tokens in `design-system.json`.
   - Data loaded via Supabase + TanStack Query if needed.

4. Output:
   - The `.tsx` file(s) for the screen.
   - Any updates to `components/` if new variants are required.
   - A brief note on which Kahu components and tokens you used.

[Describe the screen/feature here]
