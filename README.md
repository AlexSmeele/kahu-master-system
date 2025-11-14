# Kahu Master System

This repo is the single source of truth for Kahu’s product, design, and integration system.

It contains:

- **Design tokens** used across web and mobile
- **UI component & pattern specs** that mirror the Figma design system
- **API & integration contracts** for Kahu core and third-party services
- **Domain model & glossary**
- **Prompt library** for AI tools (ChatGPT, Lovable, Figma Make)
- **Platform mappings** for Web React (Lovable/Figma) and future React Native

## How to use

- For **design & UI work**: start with `/design-tokens`, `/ui`, `/platforms/web-react`, and the Figma design system file.
- For **feature & integration work**: start with `/docs`, `/api`, `/domain-model`, and `/prompts`.
- For **mobile (React Native)**: start with `/design-tokens`, `/ui`, `/platforms/native-react`.

All changes should go through pull requests so we keep a clear history of decisions.
