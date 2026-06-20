# Design

Visual system for StudyOS 2.0. Source of truth for tokens is
`src/styles/tokens.css`; this file documents intent and usage. Strategy and
principles live in `PRODUCT.md`.

## Theme

Restrained product UI. **Light is the default theme**; the app opens on a calm
cool-gray page with white cards, used at a desk in normal daytime ambient light.
A single cobalt accent carries meaning (actions, selection, state). **Dark is
opt-in** (`<html data-theme="dark">`, set from Settings, persisted in
`localStorage` under `studyos_theme`). Both themes share one token contract;
only color/shadow tokens change between them.

Color strategy: **Restrained.** Tinted neutrals plus one cobalt accent (sky-blue
as a sparing secondary). Accent appears only on primary actions, current
selection, and state — never as decoration.

## Color

All values are tokens in `tokens.css`. Light is `:root`; dark overrides under
`:root[data-theme="dark"]`. Surfaces form one neutral ramp; definition comes
from borders + soft low-alpha shadows.

Light (default):

| Role | Token | Value |
|---|---|---|
| App background (page) | `--color-bg-base` | `#eef1f6` |
| Sidebar / rail / card | `--color-bg-sidebar/-surface/-card` | `#ffffff` |
| Card hover | `--color-bg-card-hover` | `#f5f8fc` |
| Elevated (inputs, chips) | `--color-bg-elevated` | `#eef2f8` |
| Border subtle / base / strong | `--color-border-*` | `#eef1f5` / `#e2e8f0` / `#cbd5e1` |
| Text primary / secondary / muted | `--color-text-*` | `#15213b` / `#41506b` / `#5b6880` |
| Accent (cobalt) | `--color-accent` | `#3b76f6` |
| Accent hover / pressed | `--color-accent-hover/-pressed` | `#2f63da` / `#2553c0` |
| Accent secondary (sky) | `--color-accent-2` | `#0ea5e9` |
| Success / Warning / Error / Info | `--color-*` | `#16a34a` / `#d97706` / `#e11d48` / `#0ea5e9` |

Dark (opt-in) keeps the prior cool-slate palette (base `#0a0e16`, card `#141b29`,
accent `#4f86f7`, text `#eaf0f9`).

Module accents (`--color-module-blue/purple/teal/orange/pink/green`) tag modules
across cards, week-plan chips, progress bars, dots, and focus cards. They are
content labels, not chrome — chrome stays neutral + cobalt.

Contrast: primary/secondary text clear AA on white and on the gray page; muted is
tuned to ≥4.5:1 on both. Color is never the only signal — icons, shape, and text
back every state.

## Typography

One family: Inter, falling back to the system sans stack (`-apple-system`,
`Segoe UI`). Web fonts via CDN are permitted. Mono
(`JetBrains Mono` stack) is reserved for code in topic content.

Fixed rem scale (~1.2 ratio), not fluid — product UI viewed at consistent DPI:
`xs .75 / sm .875 / base .9375 / md 1.0625 / lg 1.25 / xl 1.5 / 2xl 1.875 / 3xl 2.25 rem`.
Weights 400/500/600/700. Headings use tight letter-spacing and `text-wrap: balance`;
prose uses `text-wrap: pretty`. No display fonts in labels, buttons, or data.

## Components

- **Sidebar**: fixed left rail (236px), brand zone (logo chip + "StudyOS /
  Lernzentrale"), icon+label nav. States: default (secondary text), hover (card
  bg), active (accent-subtle bg + accent text + accent icon), focus (ring),
  disabled (dimmed). Collapses to a horizontal scroll bar under 900px.
- **TopBar**: semester breadcrumb chip + search + "Prüfungen" action + bell +
  avatar.
- **Heute lernen cards**: three concrete next actions (resume topic, start quiz,
  prepare exam). Card 1 shows a circular progress ring (module %); cards 2–3 use
  a module-accent icon disc. Uppercase kicker, title, meta, CTA with arrow nudge.
- **Wochenplan**: week grid (module rows × Mon–Sun day columns) with
  accent-tinted event chips, today column highlighted, prev/next week nav, and a
  Woche/Monat segmented toggle (Monat = month grid with chips).
- **Lernfortschritt**: large cobalt progress ring (overall %) beside a per-module
  legend (dot + name + bar + %).
- **Ring**: reusable SVG progress ring (track + accent arc, centered label).
- **MiniCalendar** (Prüfungsplan): Monday-first month grid, today filled cobalt,
  selected day elevated, event days marked with a sky dot, with a small legend.
- **TasksPanel**: checkable tasks with persisted done-state (line-through + muted).
- **Fokus Streak**: flame disc + day count + 7-day dot row (green checks).
- **Theme switch** (Settings): Hell/Dunkel select, persisted; light is default.
- **Badge / ProgressBar / SearchCommand / StatCard / SemesterCard**: shared
  primitives, token-driven.

Every interactive element defines default / hover / focus-visible / active, and
disabled where applicable.

## Topic Content Visuals

Topics must use the richest visual form the content and installed stack allow. Plain prose sections without any visual component are not acceptable for content that involves processes, comparisons, formulas, statistics, or relationships.

**Available visual tools (all installed, no CDN needed):**
- **Recharts** — quantitative data, statistics, comparisons with numbers, time series. Use `<ResponsiveContainer>` always. Pull colors from CSS custom properties via `var(--color-*)` or module accent tokens.
- **Mermaid** — processes, flows, decision trees, taxonomies, sequence diagrams, ER diagrams. Theme: `dark` or `neutral` (auto-detect from `data-theme`).
- **KaTeX** — all mathematical expressions: formulas, conditional probabilities, finance calculations. Use `<BlockMath>` for display-mode, `<InlineMath>` for inline.
- **React state** — only for a parameter control where a *variable quantity carries the learning* (a slider that recomputes a formula/chart, as in Asset-Management Kap. 4). Static by default; at most one such control per section. **No** reveal cards, self-tests, quizzes, or before/after toggles in learning content — knowledge checks belong in `questions.js` / `exams.js`. Never hide primary content behind clicks.

**Visual variety rule:** Each section must have a dominant visual form that differs meaningfully from its neighbors. Avoid repeating the same card-grid silhouette. The content type drives the choice:

| Content type | Preferred form |
|---|---|
| Unordered factors, assumptions, effects | Compact signal list or card grid |
| Real sequence or causal chain | Mermaid flowchart or process stack |
| Formula, math, probability | KaTeX block |
| Quantitative comparison or statistics | Recharts BarChart / RadialBar |
| Two-way comparison (A vs. B) | Two-column comparison card or table |
| Live parameter relationship (formula reacts to a variable) | One static-by-default control + recomputed KaTeX/Recharts (use sparingly) |
| Taxonomy or classification | Mermaid graph |

Self-tests, quizzes, exercises, and question→answer reveal cards do **not** appear in learning content — they belong in the Quiz (`questions.js`) and Exam (`exams.js`) sections.

**Strict anti-patterns:**
- No center-badge diagram (central pill with orbiting term pills) unless the content genuinely is center-periphery.
- No decorative factor webs.
- No horizontal arrow chains as default scaffolding.
- No repeated silhouette across adjacent sections.
- No section that is pure prose when a chart, diagram, or formula would be clearer.
- No quizzes, self-tests, exercises, or reveal/toggle cards in learning content (these belong in the Quiz and Exam sections).
- No interactivity added to definitional, descriptive, or fixed-comparison content — a control is justified only when a variable quantity drives the learning.

## Layout

Two-column app content: main column (`minmax(0,1fr)`) + sticky right rail
(`320px`). Responsive is structural:
- ≤1100px: rail drops below main as a 2-up grid.
- ≤1000px: KPIs 4→2.
- ≤760px: focus / semesters / recent collapse to one column; rail 1-up.
- ≤420px: KPIs 1-up.

All grid/flex children use `min-width: 0` to prevent horizontal overflow. Grids
use `minmax(0, 1fr)` tracks. `auto-fit minmax` is used where card count is
flexible.

## Motion

150–250ms transitions on color, border, transform, shadow. Motion conveys state
only: hover lift on cards, arrow nudge on CTAs, progress-bar width, focus ring.
No page-load choreography. Easing leans on `--ease-out-quart`. All motion
collapses under `prefers-reduced-motion: reduce` (globals.css).

## Elevation & Radii

Shadows are restrained (`--shadow-sm/md/lg`); cards rely on borders. Radii:
`sm 8 / md 10 / lg 14 / xl 20 / full`. Focus uses a 3px accent ring
(`--shadow-focus`). Z-index is a semantic scale
(`--z-dropdown < sticky < sidebar < modal < toast`).
