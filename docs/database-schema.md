### Skills Table - Category Column Migration

**Migration Date:** November 2025

**Change:** The `category` column has been migrated from `TEXT` to `TEXT[]` (PostgreSQL array type).

**Previous Structure:**
- Single compound string: `"Fun / Trick / Movement"`

**New Structure:**
- Array of tags: `["Fun", "Trick", "Movement"]`

**Benefits:**
- Enables filtering by individual category tags
- Supports multi-category skills
- Improves query performance with GIN index

**Implementation:**
- GIN index on category column for optimized array searches
- CHECK constraint ensures non-empty arrays
- Migration uses `string_to_array(category, ' / ')` for conversion
