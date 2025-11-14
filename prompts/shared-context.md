# Kahu – Shared Context for AI Tools

> Paste this at the top of prompts for ChatGPT, Lovable, and Figma Make when working on Kahu.

---

## 1. About Kahu

Kahu is an AI-powered dog training and wellness app.

- It helps humans become confident, compassionate **guardians** for their dogs (we avoid the term “owner”).
- It combines:
  - Evidence-based training content
  - Daily guided exercises
  - Health and vet record support
  - Integrations with vet clinics and other trusted pet services

The app is mobile-first (React Native) and will later have web experiences built on the same design system and components.

Initial focus markets are **New Zealand and Australia**, with future expansion to other Western markets.

---

## 2. Target Users

Kahu is primarily for:

1. **New dog guardians**  
   - First-time dog people, or those early in their journey.
   - They need structured guidance, reassurance, and practical steps.

2. **Prospective dog guardians (pre-purchase)**  
   - People considering getting a dog.
   - They often underestimate the time, financial, and emotional commitment.

3. **Existing guardians with specific challenges**  
   - Behaviour issues (barking, separation anxiety, reactivity, etc.).
   - Need clear troubleshooting flows and progress tracking.

4. **Vet clinics and professionals**  
   - Use Kahu as a companion app.
   - Benefit from having richer dog histories and behaviour context at appointment time.

Design, content, and flows should work for a broad age range (teens to retirees), but always assume **non-technical, everyday users** unless specified.

---

## 3. Brand Voice & Tone

Kahu’s voice is:

- **Calm and reassuring**, not hyped or alarmist.
- **Evidence-based and practical**, not fluffy or pseudo-scientific.
- **Empowering**, focusing on what the guardian can do next.
- **Non-judgmental**, avoiding shame or guilt about past mistakes.

Language guidelines:

- Prefer “guardian” over “owner”.
- Avoid jargon unless we immediately explain it.
- Use clear, plain language with short, direct sentences.
- In stressful contexts (health scares, behaviour issues), be especially gentle, clear, and step-by-step.

Example tone:

- ✅ “Here’s a simple way to help Jett feel calmer when you leave the house.”
- ❌ “You’ve done this wrong; you must never do that again.”

---

## 4. Design System Overview

Kahu uses a central set of design tokens defined in `design-system.json` (Design Tokens v1 schema). These tokens drive Figma components and React Native implementation.

Key points:

- **Primary colour family:** `colors.primary.emerald` (e.g. 500: `#10b981`)  
- **Secondary colours:** amber and orange neutrals for warmth and highlights.  
- **Accent colours:** blue, purple, pink for emphasis and feedback.  
- **Neutral palette:** `colors.neutral.gray` scale plus white and black.
- **Light/dark modes:** defined via `modes.light` and `modes.dark` with background/text/border/gradient tokens.
- **Typography:** roles defined under `typography.roles` (e.g. `heading1`, `body`, `caption`, `button`).  
- **Layout:** mobile-first container widths, gutters, padding, gaps, safe areas (status bar, bottom safe area).
- **Components:** Buttons, inputs, cards, header, tab bar, FAB, modal, badge, avatar, switch, checkbox, radio, slider, link, etc.  
  - Each has variants, sizes, and states mapped to the tokens.

When generating UI or code, **use semantic roles and tokens instead of hard-coded values**. For example:

- Use `colors.primary.emerald.500` rather than `#10b981`.
- Use `typography.roles.button` for button text rather than arbitrary font settings.
- Respect elevation and shadow tokens for consistent depth.

---

## 5. Product Pillars & Key Features

Design and implementation should align with these core pillars:

1. **Training**
   - Structured training programs and journeys.
   - Daily sessions with clear goals, steps, and tracking.
   - Troubleshooting flows for specific behaviour problems.

2. **Health & Records**
   - Dog profiles (basic info, breed, age, history).
   - Health records (visits, meds, conditions, notes).
   - Upcoming appointments and reminders.

3. **Pre-Purchase Education**
   - Interactive course for people thinking about getting a dog.
   - Covers lifestyle fit, financial commitment, time requirements, and realistic expectations.
   - Includes quizzes or readiness checks and tailored breed/size suggestions.

4. **Connected Care**
   - Integrations with **vet clinics** (e.g. ezyVet and other platforms) to:
     - Create/view appointments.
     - Share relevant health or behaviour summaries.
   - Integrations with **third-party services**:
     - Dog walkers.
     - Groomers.
   - Search flows to find, add, and manage these services.

5. **Notifications & Guidance**
   - Smart reminders for training, medication, appointments, and care routines.
   - Contextual tips (short, actionable content) instead of long, dense articles.

---

## 6. UX & Interaction Principles

When proposing or implementing flows, follow these UX principles:

- **Guided, progressive flows**
  - Complex tasks broken into simple steps (wizards, step indicators, clear progress).
- **Minimal cognitive load**
  - Avoid overloaded screens; prioritise one main action per view.
- **High feedback**
  - Clear feedback for loading, success, errors, and progress.
- **Accessibility**
  - Good contrast, large touch targets, and clear language.
- **Mobile-first layouts**
  - Consider different phone sizes, safe areas, notches/dynamic island.
  - Use the layout tokens for padding, gutters, and containers.

---

## 7. Platform & Tech Stack (High-Level)

- **Client:** React Native mobile app (Expo-based setup is expected).
- **Design system:** Driven by `design-system.json` tokens + Figma component library.
- **Backend:** Kahu-specific API(s) for:
  - Users, dogs, households
  - Training programs, sessions, exercises
  - Health records, meds, vet notes
  - Notifications and reminders
- **Integrations (examples):**
  - **Vet platforms (e.g. ezyVet)** for appointments and clinical data (subject to permissions).
  - **Google Maps / Places** for searching and selecting vet clinics, walkers, groomers.

When generating code or backend flows, assume modern best practices (typed APIs, secure auth, and least-privilege access to data).

---

## 8. Permissions & Data Sensitivity

Kahu may process **sensitive data** (health information, behaviour notes, vet records). Designs and flows must:

- Make permissions explicit (e.g. when sharing data with a vet clinic).
- Explain what is shared and why in clear language.
- Allow guardians to revoke or adjust permissions where practical.
- Avoid showing sensitive health details in places where they don’t need to appear (e.g. generic notifications).

Example:

- When a vet clinic requests access to a dog’s health records, show a clear prompt with:
  - Who is requesting
  - What they’ll see
  - Duration or scope if applicable
  - Clear “Approve” and “Reject” actions

---

## 9. How AI Tools Should Use This Context

When you (the AI tool) generate anything for Kahu, you should:

1. **Stay on-brand**
   - Use the voice and tone described above.
   - Use “guardian” instead of “owner” and avoid shaming language.

2. **Align with the design system**
   - Reference tokens and components rather than inventing new visual styles.
   - When describing UI, use existing components (`button`, `card`, `modal`, `input`, etc.) and patterns (forms, empty states).

3. **Respect product pillars**
   - Keep features anchored in the pillars: training, health, pre-purchase education, connected care, notifications.

4. **Be implementation-friendly**
   - For Lovable and dev-focused prompts, specify:
     - Component names, props, and states.
     - Clear data contracts (request/response shapes).
     - Integration points and error handling.

5. **Be explicit about flows**
   - When designing a flow, describe:
     - Entry point(s)
     - Key steps and decisions
     - Exit states (success, failure, cancellation)
     - Relevant notifications or follow-up actions

---

## 10. Things to Avoid

- Introducing new visual styles that don’t fit the existing token system (random colours, fonts, or shadows).
- Overcomplicating onboarding or daily tasks.
- Using guilt-driven messaging (e.g. implying a guardian is “bad” or “failing”).
- Sharing sensitive health/behaviour data without clear consent flows.

---

Using this context, generate outputs that are:

- Consistent with Kahu’s mission, tone, and design system.
- Concrete and implementation-ready.
- Easy to plug into React Native + Figma using the defined tokens and components.
