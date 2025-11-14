# KButton

Canonical button component for Kahu.

## Purpose

Primary and secondary actions across the app: training flows, health records, settings, etc.

## Variants

- `primary`
- `secondary`
- `outline`
- `ghost`
- `destructive`

## Sizes

- `xs`, `sm`, `md`, `lg`, `xl`

(Exact spacing, typography, and colors are defined in `design-tokens/design-system.json`.)

## Conceptual Props

- `variant`: one of the variants above
- `size`: one of the sizes above
- `label`: string
- `iconLeft` / `iconRight`: optional icons
- `loading`: boolean
- `disabled`: boolean

## States

- default, hover, pressed, focus, disabled, loading

## Usage

- Prefer a single `primary` button per screen.
- Use `destructive` only for destructive or high-risk actions.
