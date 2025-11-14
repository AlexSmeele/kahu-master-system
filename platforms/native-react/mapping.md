# React Native Platform Mapping (Future Mobile App)

The React Native app will:

- Consume `design-tokens/design-system.json`.
- Implement the same conceptual components:
  - `KButton`, `KCard`, `KInput`, `KDialog`, etc.
- Mirror the props and variants defined in `/ui/components/*.md`.

Styling:

- Likely NativeWind or a token-helper layer on top of `StyleSheet` / styled components.
- Layout and spacing derived from the same spacing and layout tokens.

Navigation:

- React Navigation (stack + tab navigators).
- Route structure based on IA/flows defined in docs & Miro/FigJam.
