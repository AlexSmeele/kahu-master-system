# Changelog

All notable changes to the Kahu Master Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-12-28

### Added
- **Complete Design Token System** with 180+ tokens
- **Color System:**
  - Primary emerald scale (50-900)
  - Secondary amber and orange scales
  - Accent purple, pink, and blue scales
  - Neutral gray scale with white/black
  - Semantic colors (success, warning, error, info)
- **Light/Dark Modes:**
  - Complete light mode specification
  - Complete dark mode specification
  - Mode-agnostic token references
  - Gradient presets for both modes
- **Typography System:**
  - Font families (sans, mono)
  - Font sizes (xs - 6xl)
  - Line heights (none - loose)
  - Font weights (normal - extrabold)
  - Letter spacing (tighter - widest)
  - 12 typographic roles (heading1-6, body, caption, label, button variants)
- **Spacing System:**
  - Base spacing scale (0 - 96px)
  - 8px grid system
  - Consistent gaps and padding
- **Layout System:**
  - Container sizes (xs - 2xl, mobile/tablet/desktop)
  - Gutters for different screen sizes
  - Safe area insets for iOS/Android devices
  - Device-specific configurations (iPhone 15 Pro, iPhone 14, iPhone SE, Android)
  - Header height calculations
- **Shadow System:**
  - 7 shadow presets (sm - 2xl, inner, none)
  - 9 elevation levels (0 - 24)
  - Platform-specific shadow configurations (iOS, Android, Web)
- **State System:**
  - Hover state (opacity, scale, transition, shadow)
  - Pressed state (opacity, scale, transition, shadow)
  - Focus state (outline, border, shadow)
  - Disabled state (opacity, cursor, colors)
  - Active state (colors, shadow)
  - Loading state (opacity, cursor)
- **Component Presets:**
  - Header configuration
  - TabBar configuration
  - Card configuration with hover/pressed states
  - Button variants (primary, secondary, tertiary, ghost, outline)
  - Input field configuration
  - Modal configuration
- **Gradients:**
  - Button gradients (emerald, amber, blue, purple)
  - Background gradients (glass, primary, amber)
  - Mode-specific gradient presets
- **Additional Tokens:**
  - Border radius scale (none - full)
  - Blur effects (none - 3xl)
  - Opacity scale (0 - 100)
  - Transitions (fast, base, slow, bounce)
  - Z-index scale (base - tooltip)

### Changed
- Migrated from ad-hoc token usage to centralized design system
- Standardized all color values to hex format for consistency
- Aligned spacing to strict 8px grid system
- Updated component configurations to use token references

### Documentation
- Added comprehensive README.md
- Created IMPLEMENTATION_GUIDE.md for integration
- Created TAILWIND_V4_SETUP.md for Tailwind v4.0 projects
- Created TOKEN_REFERENCE.md for complete token documentation

### WCAG Compliance
- All color combinations verified for WCAG AAA compliance
- Normal text: 7:1 contrast ratio minimum
- Large text: 4.5:1 contrast ratio minimum
- UI components: 3:1 contrast ratio minimum

---

## [1.0.0] - 2025-11-15

### Added
- Initial design system structure
- Basic color palette
- Primary emerald colors
- Basic spacing tokens
- Typography foundation

### Notes
- First version of centralized design system
- Used across kahu production app
- Foundation for multi-repo sync

---

## Versioning Guidelines

### Major Version (X.0.0)
**Breaking changes** - Requires migration in consuming projects

Examples:
- Removing existing tokens
- Renaming token keys
- Changing token value types (e.g., px to rem)
- Restructuring token hierarchy

**Migration Required:**
- Update consuming projects to new token names
- Test all components using affected tokens
- Update documentation

---

### Minor Version (x.X.0)
**Backward-compatible additions** - Safe to update

Examples:
- Adding new color shades
- Adding new typography roles
- Adding new component presets
- Extending existing token scales

**Migration Optional:**
- New features available but not required
- Existing tokens unchanged
- No breaking changes

---

### Patch Version (x.x.X)
**Bug fixes and documentation** - Safe to update

Examples:
- Fixing color contrast issues
- Correcting token values
- Documentation improvements
- Typo fixes

**Migration Not Required:**
- Bug fixes only
- No API changes
- Safe to auto-update

---

## Migration Notes

### Migrating to 2.0.0 from 1.0.0

#### Breaking Changes
- **Typography:** Font size keys changed from numbers to semantic names
  - `fontSize.16` → `fontSize.base`
  - `fontSize.24` → `fontSize.2xl`
- **Spacing:** All values now in px (was mixed px/rem)
- **Colors:** New color scale structure
  - Old: `colors.emerald500`
  - New: `colors.primary.emerald.500`

#### New Features
- Light/dark mode tokens
- Component presets
- Elevation system
- State configurations
- Gradient presets

#### Action Items
1. **Update color references:**
   ```diff
   - colors.emerald500
   + colors.primary.emerald.500
   ```

2. **Update font size references:**
   ```diff
   - fontSize.16
   + fontSize.base
   ```

3. **Add @theme directive for Tailwind v4.0:**
   ```css
   @theme {
     --color-primary-500: #10b981;
     /* ... other colors ... */
   }
   ```

4. **Regenerate platform tokens:**
   ```bash
   node scripts/sync-from-master.js
   ```

5. **Test components:**
   - Verify colors render correctly
   - Check typography scales
   - Test light/dark mode switching
   - Validate accessibility (WCAG AAA)

---

## Planned Features

### Version 2.1.0 (Planned)
- [ ] Animation presets for common transitions
- [ ] Icon size scale
- [ ] Grid system tokens
- [ ] Breakpoint tokens for responsive design
- [ ] Additional component presets (Dropdown, Tooltip, Toast)

### Version 3.0.0 (Planned)
- [ ] Theming system for custom brand colors
- [ ] Token aliases for semantic naming
- [ ] Component composition patterns
- [ ] Design token JSON schema validation
- [ ] Automated token generation from Figma

---

## Support

For questions about migration or breaking changes:
- Open an issue: [GitHub Issues](https://github.com/AlexSmeele/kahu-master-system/issues)
- Check documentation: See [`docs/`](./docs/) folder
- Review implementation guide: [`docs/IMPLEMENTATION_GUIDE.md`](./docs/IMPLEMENTATION_GUIDE.md)

---

**Last Updated:** December 28, 2025  
**Current Version:** 2.0.0
