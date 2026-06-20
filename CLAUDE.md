# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build (run after changes to verify no errors)
npm run lint       # ESLint check
npm run preview    # Preview production build
```

On Windows PowerShell, use `npm.cmd run build` if `npm run build` fails.

No test framework is configured. Correctness is verified via `npm run build` and manual review in the browser.

## Architecture

React 19 + Vite + React Router DOM v7. No state management library — state lives in components and `localStorage` via `src/app/storage.js`. The app is fully client-side and runs locally; no GitHub Pages or offline-first constraints apply.

### Routing

Routes are defined in `src/app/routes.jsx` using `createBrowserRouter`:

```
/                          → Home
/semester/:semesterId      → Semester (module list)
/module/:moduleId          → Module (topic list + quiz entry)
/topic/:moduleId/:topicId  → Topic (learning content)
/quiz/:moduleId            → Quiz
/settings                  → Settings
```

### Module Registry

`src/data/moduleRegistry.js` is the single source of truth for runtime data access. It imports all module bundles and exposes `getModuleById`, `getTopicsForModule`, `getQuestionsForModule`, `getExamsForModule`, etc.

`src/data/semesters.js` defines semester metadata. When adding a new module, update both files.

### Module Bundle Structure

Each module lives under `src/modules/{semesterId}/{moduleId}/` and exports a `bundle`:

```
src/modules/{semesterId}/{moduleId}/
  index.js          ← exports { module, topics, questions, exams }
  module.js         ← module metadata + topic list
  questions.js      ← quiz questions array
  exams.js          ← exam objects array (may be empty)
  topics/
    index.js        ← merges meta + MDX Content into topic objects
    01-{topic-id}.js   ← static meta export
    01-{topic-id}.mdx  ← MDX body
```

**To add a new module:** create the full folder structure, then import the bundle in `moduleRegistry.js` and add the `moduleId` to `semesters.js`.

### Topic Format (MDX)

Every topic = two files:

**`NN-slug.js`** — static meta object:
```js
export const meta = {
  id: 'kebab-case-id',           // must match the id in module.js topics array
  title: 'Kapitel N · Title',
  source: 'Module · Chapter · Folien XX–YY',
  estimatedMinutes: 45,
  sections: [{ id: 'section-id', title: 'Section Title' }],
  keyTakeaways: [],   // 5–8 central statements
  examFocus: [],      // 4–8 exam-relevant points
  pitfalls: [],       // typical exam traps
};
```

**`NN-slug.mdx`** — MDX body with palette components and section wrappers:
```mdx
import { Callout, Formula, DataChart, Diagram, DefinitionBox, CompareCard, Timeline, KpiGrid, DataTable, SpectrumAxis, DecisionTree, SourceNote } from '@/components/learning/visuals'

<section id="section-id">
## Section Title
...
</section>
```

**`topics/index.js`** — merges meta + compiled MDX:
```js
import { meta as meta01 } from './01-slug.js'
import Content01 from './01-slug.mdx'
export const topics = [{ ...meta01, Content: Content01 }, ...]
```

`FullContentView.jsx` renders `topic.Content` via `MDXProvider` with the full palette injected as components. No `dangerouslySetInnerHTML`. KaTeX CSS is imported globally in `main.jsx`.

### Quiz Question Shape

```js
{
  id: 'unique-id',
  type: 'single' | 'multiple',
  question: '...',
  options: ['...'],
  correctAnswer: 0,      // for single
  correctAnswers: [0,2], // for multiple
  explanation: '...',
}
```

### Exam Object Shape

Exams contain `sections[].tasks[]`. Task types include `single-choice`, `multiple-choice`, `open`, `calculation`, `case-study`. See `src/modules/semester-4/asset-management/exams.js` for the full schema.

### Design System

All design tokens are in `src/styles/tokens.css`. Use CSS custom properties — never hard-code colors, spacing, or radii. Module accent colors use `--color-module-blue/purple/teal/orange/pink/green`. Per-component CSS files live next to their component.

### Visual Palette (available in MDX topic files via MDXProvider)

All palette components are auto-injected into every `.mdx` file — no import needed inside MDX. They can also be imported directly in `.jsx` files via `@/components/learning/visuals`.

| Component | Use for |
|---|---|
| `<Formula>` | Every mathematical expression (KaTeX) |
| `<DataChart>` | Quantitative data with numbers from source (Recharts, lazy-loaded) |
| `<Diagram>` | Processes, flows, taxonomies (Mermaid, lazy-loaded) |
| `<Callout type="merksatz|examfocus|pitfall|info|tip|warn">` | Highlighted key statements |
| `<DefinitionBox>` | Term definitions |
| `<CompareCard>` | Side-by-side comparisons (A vs B) |
| `<Timeline>` | Chronological sequences |
| `<KpiGrid>` | Key figures / metric overviews |
| `<DataTable>` | Structured tables |
| `<DecisionTree>` | Decision logic |
| `<SpectrumAxis>` | Scale / spectrum placements |
| `<SourceNote>` | Source citations |

**Interactivity rule:** Learning content is **static by default**. Add an interactive control only when a **variable quantity carries the learning** — i.e. a parameter the learner changes to watch a formula and its chart recompute. Use it sparingly: at most one such element per section, and only where manipulating the value is the point. Every section is fully readable on first view — **no primary content behind a click**.

**No assessment in learning content:** Quizzes, self-tests, exercises, and question-and-answer / reveal / toggle cards do **not** belong in topic content. Knowledge checks live exclusively in the Quiz section (`questions.js`) and the Exam section (`exams.js`), which have their own routes. Topic sections explain; they never quiz. This means: no `SelfCheckQuiz`, no `*Exercise`, no reveal/flip card that hides an answer behind a click.

### localStorage Persistence

`src/app/storage.js` manages all persistence: completed topics, quiz results, last visited topic, and derived stats. Keys are prefixed `studyos_*`.

## Rules

- Always check existing module and topic patterns before creating new files — follow the exact same export format, naming, and IDs.
- **New topics use MDX format only:** `NN-slug.js` (meta) + `NN-slug.mdx` (body). Do not create `.jsx` topic files for new content.
- IDs must be lowercase, URL-safe, hyphen-separated, no umlauts.
- No new dependencies or frameworks without a clear reason. The full stack (MDX, Recharts, Mermaid, KaTeX, palette components) is already installed and approved — use it freely in topic files.
- No changes to global styles, shared components, routing, or the registry unless the task explicitly requires it.
- No commits, branches, or pushes unless explicitly requested.
- Never invent facts, figures, formulas, or examples not present in the provided source material.
- **Visual quality rule:** Every topic section must use the most expressive **static** visual form the content allows. Plain prose without any visual structure is not acceptable for sections that contain processes, comparisons, formulas, statistics, or relationships. Use Recharts for quantitative data, Mermaid for processes and flows, KaTeX for math, comparison/definition cards for the rest. The goal is maximum clarity and exam-readiness, not decoration — and not interactivity for its own sake.
- **Interactivity is the exception, not the rule:** A topic is static unless a section genuinely turns on a variable the learner must feel (a parameter slider that recomputes a formula/chart). Then use exactly one such control. Do not add sliders, tabs, or toggles to content that is definitional, descriptive, or a fixed comparison.
- **No assessment in topic content:** No quizzes, self-tests, exercises, or question→answer reveal/toggle cards inside learning content. All knowledge checks belong in `questions.js` (Quiz) and `exams.js` (Exam). Topic content explains only.
- **No click-walls:** All primary learning content must be visible on first render. Nothing required is hidden behind a click.

## Specialist agents

The former `.agents/skills/` workflows have been retired; their roles now live as agent definitions in `.claude/agents/` (Claude Code) and `.codex/agents/*.toml` (Codex). Prefer them over ad-hoc approaches for larger tasks:

| Agent | Use when |
|---|---|
| `studyos-pdf-topic-builder` | Converting a PDF script into a new module/topic |
| `studyos-md-topic-builder` | Converting a Markdown script into a new module/topic; PDFs only as targeted screenshots for unclear local context |
| `content-fidelity-auditor` | Auditing existing content against source material |
| `topic-quality-upgrader` | Improving readability/structure of an existing topic |
| `exam-content-builder` | Building exam-focused content from existing sources |

Standard PDF-to-module pipeline: `studyos-pdf-topic-builder` → `content-fidelity-auditor` → `topic-quality-upgrader` → `exam-content-builder`.

Standard MD-to-module pipeline: `studyos-md-topic-builder` -> `content-fidelity-auditor` -> `topic-quality-upgrader` -> `exam-content-builder`. Markdown is the primary source. PDFs may only be used through targeted screenshots of concrete unclear references; never read, extract, or inspect a full PDF for the MD workflow.

**Visual stack expectation for all skills:** When building or upgrading topic content, the `*_MD+PDF.md` briefing files in the sources folder describe what visual reconstructions are needed per slide. These must be implemented using Recharts, Mermaid, KaTeX, or static inline React components — not re-described as prose. The briefing files take precedence over generic layout patterns **for visual structure**, but the interactivity and no-assessment rules above override them: where a briefing suggests a quiz/exercise component (e.g. `ChoiceQuiz`, `PrimingQuiz`, `MiniQuiz`, `ExerciseCard`) or an interactive reveal, render that material as a **static** explanatory visual instead, and move any genuine question into `questions.js` / `exams.js`.

## After Changes

Run `npm run build` and confirm zero errors. Also verify: no broken imports/exports, no duplicate IDs, correct relative paths, no horizontal overflow introduced, mobile layout plausible, MDX section `id` attributes match `meta.sections[].id` entries, Diagram/DataChart render without blank output.

### Change Logging

After completing a task, append a concise summary of changes to `TASK_LOG.md`. 
Format: `[YYYY-MM-DD] <Agent>: <Summary>`.
Maintain file size: if `TASK_LOG.md` exceeds 5000 characters, remove the oldest entries.
