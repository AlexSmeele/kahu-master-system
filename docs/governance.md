# Governance & Contribution

## Purpose

Keep Kahu’s design system, product specs, and integrations coherent across all platforms (Lovable web, Figma, future React Native).

## Guidelines

- Changes to tokens, components, or patterns must update:
  - `/design-tokens`
  - Relevant files under `/ui`
  - Relevant mappings in `/platforms/*`

- New features should have:
  - A brief spec under `/docs` or `/api`
  - Component usage documented under `/ui/*` if UI-related
  - Prompt templates updated if AI workflows change (`/prompts`)

- Use pull requests with short “why” notes for each change.
