# Figma Make – Screen Design Template

1. Use `kahu-master-system` as the source of truth:
   - design-tokens/design-system.json
   - docs/design-principles.md
   - docs/brand-voice.md
   - ui/components/*.md
   - ui/patterns/*.md
   - prompts/shared-context.md

2. Assume a React + Tailwind + shadcn stack for code export.

3. Requirements:
   - Follow Kahu colors, typography, spacing, and elevation from tokens.
   - Use Kahu components (KButton, KCard, KInput, KTabs, KDialog, etc.).
   - Optimise for mobile-first, with a realistic phone frame for desktop preview that is not part of the app UI on-device.

4. Output:
   - A Figma page with the screen design.
   - Annotation layer explaining which components and tokens are used.
