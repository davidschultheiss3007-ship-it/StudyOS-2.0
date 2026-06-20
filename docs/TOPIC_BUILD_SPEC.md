# Topic Build Spec — Remaining 25 MDX Topics

**Purpose:** This file is the single source of truth for rebuilding the remaining StudyOS topics
in MDX format, in the exact visual style the user already approved on the AM exemplars. Any
chat/agent building topics MUST read this file first. It encodes decisions that are NOT
derivable from the code or `CLAUDE.md` alone.

**Approved exemplars (the reference look — match these):**
- `src/modules/semester-4/asset-management/topics/01-einfuehrung.{js,mdx}`
- `src/modules/semester-4/asset-management/topics/02-traditionelle-assetklassen.{js,mdx}`
- `src/modules/semester-4/asset-management/topics/04-mathemat-strat-grundlagen.{js,mdx}`

---

## 1. Visual style (what the user wants — learned over 7 rounds of feedback)

The target is a **Hefteintrag / Uni-Skript look**: bullet-point dense, NOT prose. Every subtopic
is a clearly delineated block on a tinted "board". The user's repeated, explicit asks:

1. **Bullets over prose.** Stichpunkte, not Fließtext. Short, scannable lines.
2. **Strong block separation.** Every distinct content block sits in its own card/box, visibly
   separated from the next. "Too few cards" was the #1 recurring complaint — when in doubt, add
   another card.
3. **Use horizontal space.** Put 2–3 bullet-blocks side by side with `<Columns count={2|3}>`,
   even when each block is itself a `<Card>`. Don't stack everything in one tall column.
4. **Group related cards under sub-headings.** When a section has several comparison/definition
   cards on different facets, separate them with `### ` sub-headings (they render as accent-bar
   block separators). See AM topic 02 §"Aktien-Gattungen" (`### 1 · Stimmrecht`, `### 2 ·
   Übertragbarkeit`, `### 3 · Kapitalbezug`).
5. **Mark exam-relevant content** so the learner isn't overwhelmed by volume — see §3.
6. **Clean formatting.** No misaligned bullets, no scattered bold runs. (The shared CSS handles
   this now; just write normal markdown lists and `**bold**`.)

### How the board renders (already wired in `FullContentView.css` — do NOT re-style per topic)
- Each `<section>` becomes a tinted board (elevated bg + subtle radial accent + rounded + shadow).
- `## Section title` (h3) gets an accent bar and a bottom divider automatically.
- `### / #### ` sub-headings (h4/h5) render as in-section block separators (h4 gets a left accent bar).
- A **bare** top-level `<ul>`, `<ol>`, or `<p>` directly in a section gets its OWN white card
  surface (border + shadow) automatically — so even un-wrapped bullet lists read as separate blocks.
- Palette components (`Card`, `CompareCard`, `DefinitionBox`, …) bring their own white surface + shadow.

**Implication:** you get block separation "for free" from the CSS. Your job is to choose the right
component per block and to use `<Columns>` to place blocks side by side.

> ⚠ **Tailwind is NOT wired into this build.** Utility classes in `.jsx` (`rounded-xl`, `border`,
> `bg-card`, `shadow-sm`, `md:*`, arbitrary values) render as DEAD no-ops. Only the small hand-written
> set in `src/styles/utilities.css` and the `.lc-*` / section rules in `FullContentView.css` actually
> style learning content. **Never "fix" a visual by adding Tailwind classes to a palette component** —
> add real CSS (`.lc-*`) in `FullContentView.css` instead. Inline `style` props (incl. CSS custom
> properties) DO work. Topic builders write MDX and only reuse existing palette components, so this
> mostly matters for audit/quality agents tempted to touch a component.

---

## 2. New palette components (created in this project — use them freely in MDX)

All three are auto-injected via MDXProvider — **no import needed inside `.mdx`**.

| Component | Use for | Props |
|---|---|---|
| `<Card title tone compact exam>` | A titled content block (the workhorse for a bullet-block) | `title` (string), `tone` = `neutral`/`accent`/`purple`/`positive`/`negative`/`warning`/`teal`/`orange`, `compact` (bool, tighter padding), `exam` (bool → purple frame + "Prüfungsrelevant" badge) |
| `<Columns count={2|3}>` | Lay 2–3 child blocks side by side (responsive: stacks on mobile) | `count` = 2 or 3 |
| `<Exam>…</Exam>` | Inline highlighter on an exam-critical phrase (purple marker underline) | children = the phrase |

**Canonical pattern (memorize this — it's the look):**
```mdx
<Columns count={3}>
  <Card title="Block A" tone="accent">
    - point one
    - point two with **bold term**
  </Card>
  <Card title="Block B" tone="purple">
    - point
  </Card>
  <Card title="Block C" tone="teal">
    - point with <Exam>exam-critical bit</Exam>
  </Card>
</Columns>
```

Use `<Card exam>` for a whole block that is exam-central; use `<Exam>` inline for a phrase.

---

## 3. Exam marking (so volume doesn't overwhelm)

Two levels, both already styled:
- **Inline:** wrap the critical phrase in `<Exam>…</Exam>` (purple marker). Use sparingly — a few
  per section, only the truly testable bits.
- **Whole block:** `<Card title="…" exam>` adds a purple frame + "Prüfungsrelevant" badge.
- `<Callout type="examfocus" title="…">` for an exam-focus call-out box.

This is on top of the meta `examFocus[]` / `pitfalls[]` arrays (which feed the topic's summary UI).

---

## 4. MDX traps (these WILL break the build if ignored)

1. **Bare `<` / `>` in prose are parsed as JSX.** `Kurs < pari` breaks. Write it in words
   ("Kurs unter pari", "ytm **größer** als Nominalzins") or inside a `<Formula>`. Never put a bare
   `<` or `>` followed by text/`*` in MDX body text.
2. **`**bold**` inside JS STRING props is NOT markdown.** In `<CompareCard items={[{points:['**x**']}]}>`
   the `**` is rendered literally — EXCEPT `CompareCard` now has a `renderRich()` helper that DOES
   parse `**bold**` in its `points` and `subtitle` strings. Other components' string props
   (KpiGrid `label`/`value`, DataTable cells, Callout `title`) do NOT parse markdown — keep those plain.
3. **`Card` / `Columns` children ARE markdown** (they're MDX children, not string props) — so
   `**bold**`, `<Exam>`, and `- bullet` lists all work normally inside `<Card>`.
4. **Section `id` must exactly match** the `meta.sections[].id` entry.
5. **No umlauts in ids/slugs.** Lowercase, hyphen-separated, URL-safe.
6. **Mermaid `<Diagram>` node labels — two recurring bugs:**
   - **Crash ("Syntax error in text"):** a label with `(` `)` `{` `}` or a bare `<`/`>` that is NOT
     wrapped in double quotes breaks the grammar. Always quote such labels: `S1["1) Foo"]`, not
     `S1[1) Foo]`. (Double-circle `X(("..."))` / hexagon `X{{"..."}}` are fine — just quote the inner text.)
   - **Clipping:** `htmlLabels:false` mis-sizes boxes for auto-wrapped text, so long labels get cut off.
     Keep node labels SHORT and insert explicit `<br/>` breaks; no single rendered line over ~42 chars.
     A node is a label, not a sentence — move prose to an adjacent Callout/Card. Quote labels that use `<br/>`.

---

## 5. Source → topic mapping (THE critical reference)

Sources live under `sources/semester-4/<module>/…/*_MD+PDF.md`. Build each topic from its mapped
source. **Map by SLUG, not by file number** (BF numbers are swapped — see ⚠).

File naming on disk uses the **module topic order** `NN` (the Kapitel number), not the source number.

### Asset Management — `src/modules/semester-4/asset-management/`  (sources: `MDs/MD+PDF/`)
| NN | slug | source file | status |
|----|------|-------------|--------|
| 01 | einfuehrung | skript-01-einfuehrung_MD+PDF.md | ✅ DONE |
| 02 | traditionelle-assetklassen | skript-02-traditionelle-assetklassen_MD+PDF.md | ✅ DONE |
| 03 | alternative-assetklassen | skript-03-alternative-assetklassen_MD+PDF.md | ⬜ TODO |
| 04 | mathemat-strat-grundlagen | skript-04-mathemat-strat-grundlagen_MD+PDF.md | ✅ DONE |
| 05 | grundlagen-der-portfoliotheorie | skript-05-grundlagen-der-portfoliotheorie_MD+PDF.md | ⬜ TODO |
| 06 | portfoliomanagement | skript-06-portfoliomanagement_MD+PDF.md | ⬜ TODO |
| 07 | performanceanalyse | skript-07-performanceanalyse_MD+PDF.md | ⬜ TODO |
| 08 | aktives-vs-passives-management | skript-08-aktives-vs-passives-management_MD+PDF.md | ⬜ TODO |
| 09 | fintechs-im-asset-management | skript-09-fintechs-im-asset-management_MD+PDF.md | ⬜ TODO |

All 9 AM entries already exist in `module.js`. Only `index.js` needs the new imports added.

### Behavioral Finance — `src/modules/semester-4/behavioral-finance/`  (sources: `MDs/MD+PDF/`)
⚠ **Topics 02 and 03 are swapped relative to source file numbers.**
| NN | slug | source file | module.js? |
|----|------|-------------|------------|
| 01 | einfuehrung | skript-01-einfuehrung_MD+PDF.md | exists |
| 02 | modell-der-zwei-systeme | **skript-03**-modell-der-zwei-systeme_MD+PDF.md ⚠ | exists |
| 03 | heuristiken-und-kognitive-verzerrungen | **skript-02**-heuristiken-und-kognitive-verzerrungen_MD+PDF.md ⚠ | exists |
| 04 | entscheidungen-unter-unsicherheit | skript-04-entscheidungen-unter-unsicherheit_MD+PDF.md | exists |
| 05 | zeit-in-der-oekonomie | skript-05-zeit-in-der-oekonomie_MD+PDF.md | exists |
| 06 | prospect-theory-und-ihre-konsequenzen | skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF.md | exists |
| 07 | altersvorsorge-und-private-finanzplanung | skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF.md | exists |
| 08 | spekulationsblasen-an-finanzmaerkten | skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF.md | **ADD entry (Kapitel 8)** |
| 09 | kapitalanlage-und-kapitalmarktanomalien | skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF.md | **ADD entry (Kapitel 9)** |

All 9 BF topics are TODO. `module.js` needs 2 new entries (08, 09). `index.js` needs all 9 imports.

### Human Resources — `src/modules/semester-4/human-resources/`  (sources: `Markitdown/Markitdown+PDF/`)
| NN | slug | source file | module.js? |
|----|------|-------------|------------|
| 01 | einfuehrung | HR1_MD+PDF.md | exists |
| 02 | unternehmensstrategie-und-personalpolitik | HR2_MD+PDF.md | exists |
| 03 | fuehrung-und-unternehmensethik | HR3_MD+PDF.md | exists |
| 04 | operative-personalplanung | HR4_md+PDF.md | exists |
| 05 | personalbeschaffung | HR5_md+PDF.md | exists |
| 06 | personalauswahl-und-arbeitszeugnisse | HR6_md+PDF.md | exists |
| 07 | personalauswahl-verfahren | HR7_md+PDF.md (title: "Personalauswahl") | **ADD entry (Kapitel 7)** |
| 08 | personaladministration-sozialversicherung-dsgvo | HR8_md+PDF.md | **ADD entry (Kapitel 8)** |
| 09 | personalcontrolling-onboarding-laufbahnplanung | HR9_md+PDF.md | **ADD entry (Kapitel 9)** |
| 10 | arbeitsorganisation-und-personalbeurteilung | HR10_md+PDF.md | **ADD entry (Kapitel 10)** |

All 10 HR topics are TODO. `module.js` needs 4 new entries (07–10). `index.js` needs all 10 imports.
HR07 slug deliberately differs from HR06 to avoid a collision (both touch Personalauswahl).

**Grand total remaining: 6 (AM) + 9 (BF) + 10 (HR) = 25 topics.**

---

## 6. Per-topic file contract

For each topic write exactly two files (do NOT touch `index.js` or `module.js` — see §7):
- `topics/NN-slug.js` — the `meta` export (shape per `CLAUDE.md`: `id`, `title`, `source`,
  `estimatedMinutes`, `sections[]`, `keyTakeaways[]` 5–8, `examFocus[]` 4–8, `pitfalls[]`).
  `meta.id` MUST equal the slug. For existing module.js topics, copy `title`/`source`/`estimatedMinutes`
  verbatim from `module.js`. For NEW topics (BF 08–09, HR 07–10), derive a "Kapitel N · …" title and a
  `source` label in the same style as siblings.
- `topics/NN-slug.mdx` — the body. 4–8 sections. Each `<section id>` matches a `meta.sections[].id`.
  Heavy use of `Card` + `Columns`, `CompareCard`, `DefinitionBox`, `KpiGrid`, `DataTable`, `Callout`,
  `Formula` (KaTeX), `Diagram` (Mermaid), `DataChart` (Recharts), `Exam` markers. End with `<SourceNote>`.

Content rules (from `CLAUDE.md`, non-negotiable): only facts present in the source — never invent
figures/formulas/examples; no assessment (no quiz/self-test/reveal) in topic content; static by
default (one slider max per section, only if a variable carries the learning); no click-walls.

---

## 7. Registry wiring (done CENTRALLY, never in parallel)

`index.js` and `module.js` are shared per module — concurrent edits corrupt them. Topic builders
must write ONLY their two `NN-slug` files. A single dedicated step per module then:
- rewrites `topics/index.js` importing every `meta`/`Content` and exporting the merged `topics[]`
  array in NN order (pattern: `{ ...metaNN, Content: ContentNN }`);
- adds any missing `module.js` topic entries (BF 08–09; HR 07–10) in NN order.

Pattern for `index.js`:
```js
import { meta as meta01 } from './01-einfuehrung.js';
import Content01 from './01-einfuehrung.mdx';
// …all NN…
export const topics = [
  { ...meta01, Content: Content01 },
  // …all NN in order…
];
export default topics;
```

---

## 8. QA / build

After every file-mutating phase: `npm run build` (PowerShell: `npm.cmd run build`) → must be GREEN,
zero errors. Then verify: section ids match meta, no duplicate ids, correct relative paths, no
invented content, Diagram/DataChart render (no blank output), no horizontal overflow.

Log changes to `TASK_LOG.md` as `[YYYY-MM-DD] <Agent>: <Summary>` (trim if > 5000 chars).

---

## 9. Pipeline order (the workflow)

1. **Build** — 25 topics in parallel (studyos-md-topic-builder), each writes its 2 files only.
2. **Wire** — 3 module assemblers (one per AM/BF/HR) rewrite index.js + patch module.js; then build.
3. **Audit** — content-fidelity-auditor per topic vs. its source; fix in place.
4. **Quality** — topic-quality-upgrader per topic (readability/structure/visual density); no new facts.
5. **Exams** — exam-content-builder per module fills questions.js + exams.js; final build.

The saved workflow `.claude/workflows/build-remaining-topics.js` implements exactly this.
