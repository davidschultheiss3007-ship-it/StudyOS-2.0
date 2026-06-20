# StudyOS 2.0 - Gemini Expert Guide

This document is the authoritative "North Star" for Gemini CLI when working in the StudyOS 2.0 repository. It consolidates architectural mandates, design principles, content-didactic rules, and operational workflows.

## Project Vision & Principles
StudyOS 2.0 is a high-quality, locally-run React-based learning system for university modules. No GitHub Pages deployment or offline-first constraint applies.
- **Data-Driven:** Content is stored in modular bundles (`src/modules/`).
- **Local-first:** No backend, no accounts, persists via `localStorage`. Web fonts and CDN resources are permitted.
- **High-Fidelity UI:** Professional, polished, and didactic visuals — using the full installed visual stack (Recharts, Mermaid, KaTeX).
- **Integrity:** Strict adherence to existing patterns and ID consistency.

## Technical Architecture
- **Framework:** React 19 + Vite + React Router 7.
- **State:** Component-local + `src/app/storage.js` (localStorage wrapper).
- **Styles:** Vanilla CSS + CSS Variables (`src/styles/tokens.css`).
- **Registry:** `src/data/moduleRegistry.js` is the single source of truth for runtime data.
- **Bundles:** Each module exports `{ module, topics, questions, exams }`.

## Specialized Workflows (Skills & Subagents)

### 1. PDF-to-Topic Pipeline
Use the `studyos-pdf-topic-builder` skill for converting PDFs.
- **Grounding:** Use ONLY provided PDFs. Do not invent facts or use external web sources.
- **Dramaturgie:** Don't use a single template. Map content to "Stofftypen" (Definition, Process, Formula, Comparison, etc.) and design unique visual layouts for each section.
- **Structure:** 5-8 `keyTakeaways`, 4-8 `examFocus`, and relevant `pitfalls`.
- **Integration:** Ensure IDs match across `module.js` and the topic file.

### 2. Structural Integrity Audit
When checking or adding modules/topics, verify:
- **ID Consistency:** IDs must be lowercase, URL-safe, kebab-case (no umlauts).
- **Export Chain:** Topic file → `topics/index.js` → `index.js` → `moduleRegistry.js`.
- **Registration:** Check `src/data/moduleRegistry.js` and `src/data/semesters.js`.
- **Relative Paths:** Ensure all paths work locally.

### 3. Didactic Content Improvement
Use `topic-quality-upgrader` to improve existing topics.
- **Visual Hierarchy:** Use tables, comparison boxes, and process diagrams.
- **Installed visual stack (use it):** Recharts for quantitative comparisons and statistics, Mermaid for processes/flows/taxonomies, KaTeX for all formulas. Plain prose is not acceptable for content types that a chart or diagram would clarify.
- **Exam Focus:** Highlight definitions, formulas, and typical exam traps.
- **Engagement:** Break long prose with lists, examples, and callouts.
- **Static by default; no assessment in content:** Learning content carries no quizzes, self-tests, exercises, or reveal/toggle cards — those live in the Quiz (`questions.js`) and Exam (`exams.js`) sections. Add an interactive control only when a variable quantity drives the learning (a slider that recomputes a formula/chart), and at most one per section.
- **No click-walls:** All primary content must be visible on first render.
- **`*_MD+PDF.md` briefings:** If a briefing file exists for the topic, read it and implement all described visual reconstructions.

## Design System & UX
- **Tokens:** Always use `--color-*`, `--space-*`, `--radius-*`. Never hardcode values.
- **Cobalt Accent:** `--color-accent` is used only for actions, selection, and state.
- **Module Colors:** Use `--color-module-*` for content labeling (cards, progress bars).
- **Responsive:** Verify layout on mobile (no horizontal overflows, no cut-off text).
- **Print:** Content should be print-friendly (consider `ExamPrintButton`).

## Quality Assurance Checklist
1. **Build:** Run `npm run build` (or `npm.cmd run build` on Windows) and fix all errors/warnings.
2. **IDs:** Verify topic IDs match in `module.js` and registry.
3. **Paths:** Ensure imports are relative and correct.
4. **Visuals:** Check responsiveness and design token usage.
5. **Content:** Verify sources are cited and no facts are invented.

## Sub-Agent Delegation Strategy
- **Repetitive Tasks:** Use `generalist` for batch updates across multiple modules.
- **Complex Research:** Use `codebase_investigator` for architectural mapping or bug root-cause analysis.
- **UI Audit:** Use `impeccable` skill for fine-tuning CSS and layouts.

## Operational Mandates
- **No Reverts:** Do not revert changes unless they cause errors.
- **No Commits:** Do not commit unless explicitly asked.
- **Validation:** Always verify changes with a build and (if possible) manual browser check instructions.
- **Change Logging:** After every task, append a concise summary of changes to `TASK_LOG.md`. Format: `[YYYY-MM-DD] <Agent>: <Summary>`. If the file exceeds 5000 characters, remove the oldest entries to maintain efficiency.
- **Brevity:** Keep communication concise and high-signal.
