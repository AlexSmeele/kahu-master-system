# SkillCard Component

## Overview

The `SkillCard` component visually represents a dog training skill with its proficiency level, unlock status, and progress indicators. It provides interactive elements for both desktop (hover cards) and mobile (dialogs) to preview locked skills and displays detailed progression information for unlocked skills.

## Component Purpose

- Display skill metadata (name, category, difficulty, progress)
- Show unlock status with visual feedback (locked/unlocked states)
- Provide proficiency level progression (Basic → Generalized → Proofed)
- Preview locked skill information via hover/tap interactions
- Navigate to detailed skill views on click

## Props Interface

```typescript
interface SkillCardProps {
  skill: {
    id: string;
    name: string;
    category: string[];              // Array of category tags
    difficulty: number;              // 1-5 star rating
    short_description?: string;
    estimated_time_weeks?: number;
  };
  proficiencyLevel: 'basic' | 'generalized' | 'proofed' | null;
  isUnlocked: boolean;
  prerequisites?: Array<{
    skill_name: string;
    required_proficiency: string;
    is_met: boolean;
  }>;
  dogTrickProgress?: {
    id: string;
    status: 'learning' | 'mastered';
    total_sessions: number;
    proficiency_level: string;
  };
  onClick: () => void;
}
```

## Category Structure

### Migration: TEXT → TEXT[]

The `category` field has been migrated from a single compound string (e.g., `"Fun / Trick / Movement"`) to a PostgreSQL `TEXT[]` array type containing individual tags as separate elements (e.g., `["Fun", "Trick", "Movement"]`).

**Benefits:**
- Enables filtering by individual category tags
- Supports multi-category skills without string parsing
- Optimized array searches via GIN index
- Better data normalization

### Category Display

```typescript
// Primary category for display (first element)
const primaryCategory = skill.category?.[0] || 'Skill';

// All categories for filtering/badges
const allCategories = skill.category || [];
```

### Category Color Mapping

```typescript
const categoryColors: Record = {
  obedience: 'from-blue-500 to-blue-600',
  performance: 'from-purple-500 to-purple-600',
  practical: 'from-green-500 to-green-600',
  body_control: 'from-orange-500 to-orange-600',
  // Additional categories from array elements
};
```

## Visual States

### Unlocked Skill
- Full color gradient based on category
- Interactive hover/press states
- Progress ring showing completion percentage
- Proficiency badge (Basic/Generalized/Proofed)

### Locked Skill
- Faded/desaturated appearance
- Small lock icon badge (top-right corner)
- Hover card (desktop) or dialog (mobile) showing:
  - Full skill description
  - Prerequisites with completion status
  - Required proficiency levels

### Can Level Up
- Subtle pulsing animation or highlight
- Indicates skill is ready for proficiency advancement

## Related Components

### SkillDetailPage
Full-page view displaying comprehensive skill information including all categories as tags/badges.

### SkillProgressionModal
Modal for tracking practice sessions across proficiency levels, filtering by category tags.

### Skills Library Grid
2-column gallery view displaying `SkillCard` components, supporting category filter chips using array overlap queries.

## Implementation Notes

### Category Array Handling
```typescript
// Filter skills by category tag
const filteredSkills = skills.filter(skill => 
  skill.category?.includes(selectedCategory)
);

// Display all category tags
{skill.category?.map(cat => (
  {cat}
))}
```

### Database Queries
```typescript
// Supabase query using array operators
const { data } = await supabase
  .from('skills')
  .select('*')
  .contains('category', ['Obedience']); // Array contains

// Multiple category filter (OR logic)
const { data } = await supabase
  .from('skills')
  .select('*')
  .overlaps('category', ['Obedience', 'Practical']); // Array overlap
```

## Accessibility

- Semantic HTML structure
- ARIA labels for status indicators
- Keyboard navigation support
- Touch-friendly tap targets (44x44px minimum)
- Sufficient color contrast for all states

## Design Tokens

- Uses `button.primary.[category]` gradient tokens
- Respects `spacing.card`, `radius.card`, `shadow.card` tokens
- Typography follows `text.role.body` and `text.role.caption` scales

## Platform Notes

- Desktop: HoverCard for locked skill previews
- Mobile: Dialog for locked skill previews
- Capacitor: Native haptic feedback on tap (future enhancement)
```
