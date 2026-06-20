# CONTENT_INDEX.md

Purpose: compact repository map for StudyOS 2.0 agents. Use this file to locate the smallest relevant file set without scanning the whole repository.

## Default Context Rule

Before a normal task, read only:

1. `AGENTS.md`
2. `CONTENT_INDEX.md`
3. the directly affected module/topic/component files

Do not scan the full repo. Do not search broadly through all markdown, sources, prompts, legacy skills, generated folders, or agent folders unless the task explicitly requires it.

## Heavy / Do Not Read By Default

Avoid these paths unless the user explicitly asks for source extraction, source verification, agent migration, prompt work, skill work, or workflow maintenance:

- `sources/`
- `.codex/agents/`
- `.claude/agents/`
- `.claude/worktrees/`
- `Prompts/`
- `tools/prompts/`
- `tools/templates/`
- `dist/`
- `node_modules/`
- `*.tmp`, `*.s1.tmp`, generated scratch files

Known source archives:

- `sources/semester-4/asset-management/`
- `sources/semester-4/behavioral-finance/`

These source archives are not default context. Open them only when exact PDF/source fidelity, missing content, page/slide references, formulas, or source-based auditing are required.

## Runtime Architecture

Core app paths:

- App entry: `src/main.jsx`
- Router shell: `src/App.jsx`
- Router shell styles: `src/App.css`
- Routes: `src/app/routes.jsx`
- App constants: `src/app/config.js`
- Persistence/localStorage: `src/app/storage.js`
- Theme helpers: `src/app/theme.js`
- Dashboard data: `src/data/dashboard.js`
- Base React styles: `src/index.css`
- Global design tokens: `src/styles/tokens.css`
- Global styles: `src/styles/globals.css`
- Utilities: `src/styles/utilities.css`

Main route pages:

- Home: `src/pages/Home.jsx`
- Semester view: `src/pages/Semester.jsx`
- Module view: `src/pages/Module.jsx`
- Topic view: `src/pages/Topic.jsx`
- Quiz view: `src/pages/Quiz.jsx`
- Settings: `src/pages/Settings.jsx`

Layouts:

- App layout: `src/layouts/AppLayout.jsx`
- Learning layout: `src/layouts/LearningLayout.jsx`
- Layout styles: `src/layouts/*.css`

Shared component areas:

- Cards: `src/components/cards/`
- Navigation: `src/components/navigation/`
- Topic navigation: `src/components/navigation/TopicNavigation.jsx`
- Learning UI: `src/components/learning/`
- Learning visuals: `src/components/learning/visuals/`
- Learning interactive components: `src/components/learning/interactive/`
- Quiz UI: `src/components/quiz/`
- Exam UI: `src/components/exams/`
- Base UI: `src/components/ui/`

## Registry / Navigation Source of Truth

Use these files when adding, removing, or connecting modules:

- Module registry: `src/data/moduleRegistry.js`
- Semester registry: `src/data/semesters.js`

Current registered modules:

- `asset-management`
- `behavioral-finance`
- `human-resources`
- `business-english`

Semester 4 is current. Semester 5 exists as a planned empty semester.

## Module Bundle Pattern

Each module should follow:

```text
src/modules/{semesterId}/{moduleId}/
  index.js
  module.js
  questions.js
  exams.js              # optional; currently used by Asset Management
  topics/
    index.js
    NN-topic-id.jsx
```

Runtime data flows through:

```text
src/modules/.../{moduleId}/index.js
→ src/data/moduleRegistry.js
→ pages/components
```

Normal topic work should usually touch only:

- the affected `topics/NN-topic-id.jsx`
- the module `topics/index.js` if adding/removing a topic
- the module `module.js` if topic metadata changes
- `questions.js` / `exams.js` only if quiz or exam content changes

Do not edit `src/data/moduleRegistry.js` or `src/data/semesters.js` unless adding/removing modules.

---

# Semester 4 Modules

## Asset Management

Module root:

- `src/modules/semester-4/asset-management/`

Bundle files:

- Bundle export: `src/modules/semester-4/asset-management/index.js`
- Module metadata/topic stubs: `src/modules/semester-4/asset-management/module.js`
- Topic exports: `src/modules/semester-4/asset-management/topics/index.js`
- Quiz questions: `src/modules/semester-4/asset-management/questions.js`
- Exams: `src/modules/semester-4/asset-management/exams.js`

Current topics from module metadata:

| Topic ID | Title | Current content file | Status | Source note |
|---|---|---|---|---|
| `traditionelle-assetklassen` | Kapitel 2 · Traditionelle Assetklassen | `src/modules/semester-4/asset-management/topics/02-traditionelle-assetklassen.jsx` | done | `Asset Management · Kapitel 2 · Traditionelle Assetklassen` |
| `alternative-assetklassen` | Kapitel 3 · Alternative Assetklassen | `src/modules/semester-4/asset-management/topics/03-alternative-assetklassen.jsx` | done | `Asset Management · Kapitel 3 · Alternative Assetklassen` |
| `mathemat-strat-grundlagen` | Kapitel 4 · Mathematische und statistische Grundlagen | `src/modules/semester-4/asset-management/topics/04-mathemat-strat-grundlagen.jsx` | done | `Asset Management · Kapitel 4 · Mathematische und statistische Grundlagen · Folien 97-152` |
| `grundlagen-der-portfoliotheorie` | Kapitel 5 · Grundlagen der Portfoliotheorie | `src/modules/semester-4/asset-management/topics/05-grundlagen-der-portfoliotheorie.jsx` | done | `Asset Management · Kapitel 5 · Grundlagen der Portfoliotheorie · Folien 153-202` |
| `portfoliomanagement` | Kapitel 6 · Portfoliomanagement | `src/modules/semester-4/asset-management/topics/06-portfoliomanagement.jsx` | done | `Asset Management · Kapitel 6 · Portfoliomanagement · Folien 203-230` |

Source archive:

- `sources/semester-4/asset-management/`

Default behavior:

- For visual/didactic improvements, use the topic file first.
- For factual/source audits, open the source archive only when the exact source file is needed.

## Behavioral Finance

Module root:

- `src/modules/semester-4/behavioral-finance/`

Bundle files:

- Bundle export: `src/modules/semester-4/behavioral-finance/index.js`
- Module metadata/topic stubs: `src/modules/semester-4/behavioral-finance/module.js`
- Topic exports: `src/modules/semester-4/behavioral-finance/topics/index.js`
- Quiz questions: `src/modules/semester-4/behavioral-finance/questions.js`

Current topics from module metadata:

| Topic ID | Title | Current content file | Status | Source note |
|---|---|---|---|---|
| `einfuehrung` | Kapitel 1 · Einführung in die Behavioral Finance | `src/modules/semester-4/behavioral-finance/topics/01-einfuehrung.jsx` | available | `Behavioral Finance · BF1 – Einführung · Folien 1–32` |
| `modell-der-zwei-systeme` | Kapitel 2 · Das Modell der zwei Systeme | `src/modules/semester-4/behavioral-finance/topics/02-modell-der-zwei-systeme.jsx` | available | `Behavioral Finance · BF2 – Modell 2 Systeme · Folien 33–48` |
| `heuristiken-und-kognitive-verzerrungen` | Kapitel 3 · Heuristiken und kognitive Verzerrungen | `src/modules/semester-4/behavioral-finance/topics/03-heuristiken-und-kognitive-verzerrungen.jsx` | available | `Behavioral Finance · BF3 – Heuristiken & Kognitive Verzerrung · Folien 49–130` |

Default behavior:

- For normal topic edits, read only the affected topic file plus `module.js` and `topics/index.js` if metadata/imports are relevant.
- For source-based Behavioral Finance work, use `sources/semester-4/behavioral-finance/` only after identifying the exact required PDF.
- Do not inspect other modules unless the task asks for cross-module consistency.
- Ignore `src/modules/semester-4/behavioral-finance/topics/01-einfuehrung.jsx.s1.tmp`; it is a temporary scratch file, not runtime content.

## Human Resources

Module root:

- `src/modules/semester-4/human-resources/`

Bundle files:

- Bundle export: `src/modules/semester-4/human-resources/index.js`
- Module metadata: `src/modules/semester-4/human-resources/module.js`
- Topic exports: `src/modules/semester-4/human-resources/topics/index.js`
- Quiz questions: `src/modules/semester-4/human-resources/questions.js`

Current status:

- Module status: `planned`
- Current `topics` array in `module.js`: empty

Default behavior:

- For adding HR content, create/update module topic metadata first, then add matching files under `src/modules/semester-4/human-resources/topics/`.
- Update `topics/index.js` after adding actual topic files.
- Do not modify registry files unless the module path or module ID changes.

## Business English

Module root:

- `src/modules/semester-4/business-english/`

Bundle files:

- Bundle export: `src/modules/semester-4/business-english/index.js`
- Module metadata: `src/modules/semester-4/business-english/module.js`
- Topic exports: `src/modules/semester-4/business-english/topics/index.js`
- Quiz questions: `src/modules/semester-4/business-english/questions.js`

Current status:

- Module status: `planned`
- Current `topics` array in `module.js`: empty

Default behavior:

- For adding Business English content, create/update module topic metadata first, then add matching files under `src/modules/semester-4/business-english/topics/`.
- Update `topics/index.js` after adding actual topic files.
- Do not modify registry files unless the module path or module ID changes.

---

# Prompt / Skill / Agent Areas

Only use these paths when the task is explicitly about agents, prompts, workflows, or migrations:

- Root Claude guidance: `CLAUDE.md`
- Root Codex/shared guidance: `AGENTS.md`
- Active Codex agents: `.codex/agents/`
- Claude agents: `.claude/agents/`
- Claude worktrees / agent scratch work: `.claude/worktrees/`
- User prompt collections: `Prompts/`
- Tool prompt templates: `tools/prompts/`
- Module/topic templates: `tools/templates/`

Do not read these by default for normal module, content, UI, quiz, or build tasks.

Known source-to-React workflows:

| Workflow trigger | Codex agent | Claude agent | Codex prompt | Claude prompt | Primary source rule |
|---|---|---|---|---|---|
| PDF to React, PDF zu React, PDF-zu-React | `.codex/agents/studyos-pdf-topic-builder.toml` | `.claude/agents/studyos-pdf-topic-builder.md` | `Prompts/Codex/PDF_zu_React/Prompt.md` | `Prompts/.Claude/PDF_zu_React/Prompt.md` | Use the provided PDF as the subject-matter source. |
| MD to React, MD zu React, Markdown to React, Markdown-zu-React | `.codex/agents/studyos-md-topic-builder.toml` | `.claude/agents/studyos-md-topic-builder.md` | `Prompts/Codex/MD_zu_React/PROMPT.md` | `Prompts/.Claude/MD_zu_React/PROMPT.md` | Use Markdown as the primary source. PDFs are only targeted screenshot fallbacks for unclear local context; never read or extract the full PDF. |

When a source-to-React workflow is requested, read:

- `AGENTS.md`
- `CONTENT_INDEX.md`
- the matching agent file for the active tool
- the matching orchestrator prompt
- the target module `module.js`, `topics/index.js`, and nearest relevant topic pattern
- the exact source file only after the source path is known

Do not scan all prompts, all agents, all sources, or `.claude/worktrees/`.

# Task-Specific Reading Rules

## UI / visual improvement of one topic

Read:

- `AGENTS.md`
- `CONTENT_INDEX.md`
- affected topic file
- relevant shared learning component only if rendering behavior is unclear
- `src/styles/tokens.css` only if design tokens are needed

Do not read:

- source archive
- unrelated module topics
- prompt/agent/legacy folders

## Add a new topic to an existing module

Read:

- `AGENTS.md`
- `CONTENT_INDEX.md`
- target module `module.js`
- target module `topics/index.js`
- nearest existing topic file as pattern
- source material only if the task is source-based

Update:

- new topic file
- `topics/index.js`
- `module.js`
- possibly `questions.js` / `exams.js` if requested

## Add a new module

Read:

- `AGENTS.md`
- `CONTENT_INDEX.md`
- `src/data/moduleRegistry.js`
- `src/data/semesters.js`
- `tools/templates/module-template/` only if templates are needed

Update:

- new module folder under `src/modules/{semesterId}/{moduleId}/`
- `src/data/moduleRegistry.js`
- `src/data/semesters.js`

## Source fidelity audit

Read:

- `AGENTS.md`
- `CONTENT_INDEX.md`
- affected topic/module files
- the exact source file(s) from `sources/` only after identifying the smallest required source set

Do not scan every source file.

## Agent / prompt maintenance

Read:

- `AGENTS.md`
- `CONTENT_INDEX.md`
- only the named agent/prompt/skill files

Do not inspect module content unless the prompt/agent behavior depends on a concrete module example.

For workflow trigger fixes, update this index together with the relevant root guidance file so agents can discover the workflow from `CONTENT_INDEX.md` without scanning `Prompts/` or agent folders.

# Maintenance Rules for This Index

Update this file when:

- a module is added, removed, or renamed
- a topic file is added, removed, renamed, or remapped
- a source archive folder is added
- the module registry or semester registry changes
- a source-to-React workflow, agent, prompt, or trigger phrase is added or renamed
- new default no-read folders are introduced

Keep this file compact. It is a navigation map, not a project history and not a content summary.
