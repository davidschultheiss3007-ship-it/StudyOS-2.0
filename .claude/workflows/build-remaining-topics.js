export const meta = {
  name: 'build-remaining-topics',
  description: 'Build the remaining 25 StudyOS MDX topics (AM/BF/HR) in the approved card-dense style, wire registries, audit fidelity, upgrade quality, then fill exams — per docs/TOPIC_BUILD_SPEC.md',
  whenToUse: 'Run to fan out the full remaining-topic build after the AM exemplars were approved. Reads docs/TOPIC_BUILD_SPEC.md for style + source mapping.',
  phases: [
    { title: 'Build', detail: '25 topic builders, each writes 2 files (NN-slug.js + .mdx)' },
    { title: 'Wire', detail: '3 module assemblers rewrite index.js + patch module.js, then build' },
    { title: 'Audit', detail: 'content-fidelity-auditor per topic vs its source, fix in place' },
    { title: 'Quality', detail: 'topic-quality-upgrader per topic, no new facts' },
    { title: 'Exams', detail: 'exam-content-builder per module fills questions.js + exams.js' },
  ],
}

// ---------------------------------------------------------------------------
// Source of truth for what to build. Mirrors docs/TOPIC_BUILD_SPEC.md §5.
// Map by SLUG. BF topics 02/03 use SWAPPED source-file numbers (see ⚠).
// ---------------------------------------------------------------------------
const SPEC = 'docs/TOPIC_BUILD_SPEC.md'

const AM_DIR = 'src/modules/semester-4/asset-management'
const BF_DIR = 'src/modules/semester-4/behavioral-finance'
const HR_DIR = 'src/modules/semester-4/human-resources'

const AM_SRC = 'sources/semester-4/asset-management/MDs/MD+PDF'
const BF_SRC = 'sources/semester-4/behavioral-finance/MDs/MD+PDF'
const HR_SRC = 'sources/semester-4/human-resources/Markitdown/Markitdown+PDF'

// Only the TODO topics (the 3 approved AM exemplars are excluded).
const TOPICS = [
  // Asset Management (6 remaining)
  { mod: 'AM', dir: AM_DIR, nn: '03', slug: 'alternative-assetklassen',            src: `${AM_SRC}/skript-03-alternative-assetklassen_MD+PDF.md`,            newEntry: false },
  { mod: 'AM', dir: AM_DIR, nn: '05', slug: 'grundlagen-der-portfoliotheorie',     src: `${AM_SRC}/skript-05-grundlagen-der-portfoliotheorie_MD+PDF.md`,     newEntry: false },
  { mod: 'AM', dir: AM_DIR, nn: '06', slug: 'portfoliomanagement',                 src: `${AM_SRC}/skript-06-portfoliomanagement_MD+PDF.md`,                 newEntry: false },
  { mod: 'AM', dir: AM_DIR, nn: '07', slug: 'performanceanalyse',                  src: `${AM_SRC}/skript-07-performanceanalyse_MD+PDF.md`,                  newEntry: false },
  { mod: 'AM', dir: AM_DIR, nn: '08', slug: 'aktives-vs-passives-management',      src: `${AM_SRC}/skript-08-aktives-vs-passives-management_MD+PDF.md`,      newEntry: false },
  { mod: 'AM', dir: AM_DIR, nn: '09', slug: 'fintechs-im-asset-management',        src: `${AM_SRC}/skript-09-fintechs-im-asset-management_MD+PDF.md`,        newEntry: false },

  // Behavioral Finance (9) — ⚠ 02/03 swapped source numbers
  { mod: 'BF', dir: BF_DIR, nn: '01', slug: 'einfuehrung',                         src: `${BF_SRC}/skript-01-einfuehrung_MD+PDF.md`,                         newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '02', slug: 'modell-der-zwei-systeme',             src: `${BF_SRC}/skript-03-modell-der-zwei-systeme_MD+PDF.md`,             newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '03', slug: 'heuristiken-und-kognitive-verzerrungen', src: `${BF_SRC}/skript-02-heuristiken-und-kognitive-verzerrungen_MD+PDF.md`, newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '04', slug: 'entscheidungen-unter-unsicherheit',   src: `${BF_SRC}/skript-04-entscheidungen-unter-unsicherheit_MD+PDF.md`,   newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '05', slug: 'zeit-in-der-oekonomie',               src: `${BF_SRC}/skript-05-zeit-in-der-oekonomie_MD+PDF.md`,               newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '06', slug: 'prospect-theory-und-ihre-konsequenzen', src: `${BF_SRC}/skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF.md`, newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '07', slug: 'altersvorsorge-und-private-finanzplanung', src: `${BF_SRC}/skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF.md`, newEntry: false },
  { mod: 'BF', dir: BF_DIR, nn: '08', slug: 'spekulationsblasen-an-finanzmaerkten', src: `${BF_SRC}/skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF.md`, newEntry: true, title: 'Kapitel 8 · Spekulationsblasen an Finanzmärkten' },
  { mod: 'BF', dir: BF_DIR, nn: '09', slug: 'kapitalanlage-und-kapitalmarktanomalien', src: `${BF_SRC}/skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF.md`, newEntry: true, title: 'Kapitel 9 · Kapitalanlage und Kapitalmarktanomalien' },

  // Human Resources (10)
  { mod: 'HR', dir: HR_DIR, nn: '01', slug: 'einfuehrung',                              src: `${HR_SRC}/HR1_MD+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, nn: '02', slug: 'unternehmensstrategie-und-personalpolitik', src: `${HR_SRC}/HR2_MD+PDF.md`, newEntry: false },
  { mod: 'HR', dir: HR_DIR, nn: '03', slug: 'fuehrung-und-unternehmensethik',           src: `${HR_SRC}/HR3_MD+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, nn: '04', slug: 'operative-personalplanung',                src: `${HR_SRC}/HR4_md+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, nn: '05', slug: 'personalbeschaffung',                      src: `${HR_SRC}/HR5_md+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, nn: '06', slug: 'personalauswahl-und-arbeitszeugnisse',     src: `${HR_SRC}/HR6_md+PDF.md`,  newEntry: false },
  { mod: 'HR', dir: HR_DIR, nn: '07', slug: 'personalauswahl-verfahren',                src: `${HR_SRC}/HR7_md+PDF.md`,  newEntry: true, title: 'Kapitel 7 · Personalauswahl – Verfahren' },
  { mod: 'HR', dir: HR_DIR, nn: '08', slug: 'personaladministration-sozialversicherung-dsgvo', src: `${HR_SRC}/HR8_md+PDF.md`, newEntry: true, title: 'Kapitel 8 · Personaladministration, Sozialversicherung und DSGVO' },
  { mod: 'HR', dir: HR_DIR, nn: '09', slug: 'personalcontrolling-onboarding-laufbahnplanung', src: `${HR_SRC}/HR9_md+PDF.md`, newEntry: true, title: 'Kapitel 9 · Personalcontrolling, Onboarding und Laufbahnplanung' },
  { mod: 'HR', dir: HR_DIR, nn: '10', slug: 'arbeitsorganisation-und-personalbeurteilung', src: `${HR_SRC}/HR10_md+PDF.md`, newEntry: true, title: 'Kapitel 10 · Arbeitsorganisation und Personalbeurteilung' },
]

// Shared style contract injected into every builder/upgrader prompt so a
// fresh agent reproduces the approved look without this chat's context.
const STYLE = `
STYLE CONTRACT (approved by the user — match the AM exemplars exactly):
- Read ${SPEC} FIRST. Also open the approved exemplars for reference:
  ${AM_DIR}/topics/01-einfuehrung.mdx, 02-traditionelle-assetklassen.mdx, 04-mathemat-strat-grundlagen.mdx.
- Hefteintrag/Uni-Skript look: BULLETS over prose. Short scannable lines, not paragraphs.
- STRONG block separation: every distinct content block in its own card/box. When in doubt, add
  another card — "too few cards" was the user's #1 recurring complaint.
- USE HORIZONTAL SPACE: place 2-3 bullet-blocks side by side with <Columns count={2|3}>, each child
  a <Card title tone>. Don't stack everything in one tall column.
- GROUP related cards under "### " sub-headings (render as accent-bar separators) when a section has
  several cards on different facets.
- MARK exam-relevant content: <Exam>inline phrase</Exam> (purple marker, use sparingly) and
  <Card title="..." exam> for a whole exam-central block (purple frame + badge). Plus
  <Callout type="examfocus">. This is so volume doesn't overwhelm the learner.
- NEW components (auto-injected, no import): <Card title tone={neutral|accent|purple|positive|negative|warning|teal|orange} compact exam>, <Columns count={2|3}>, <Exam>.
- Card/Columns CHILDREN are markdown (**bold**, <Exam>, "- bullet" all work).
- MDX TRAPS that break the build:
  * Bare < or > in prose are parsed as JSX. Write "unter pari"/"größer" or use <Formula>. Never a bare < or > before text/*.
  * **bold** in JS STRING props is NOT markdown — EXCEPT CompareCard points/subtitle (handled). Keep
    KpiGrid/DataTable/Callout-title string props PLAIN.
  * Section <section id> MUST equal a meta.sections[].id. No umlauts in ids/slugs.
- The board background, section headers, sub-heading separators, bullet alignment, and bare-list
  card surfaces are ALL handled centrally in FullContentView.css — do NOT add per-topic styling.
- Content rules: only facts present in the source — never invent. NO assessment in topic content
  (no quiz/self-test/reveal/flip). Static by default (one slider max per section, only if a variable
  carries the learning). No click-walls — all primary content visible on first render.
`

// ---------------------------------------------------------------------------
// PHASE 1 — Build: 25 topics in parallel. Each builder writes ONLY its two
// NN-slug files (never index.js / module.js — those are wired centrally).
// ---------------------------------------------------------------------------
phase('Build')
log(`Building ${TOPICS.length} topics across AM/BF/HR…`)

const BUILD_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['slug', 'mdxFile', 'metaFile', 'sectionIds', 'ok'],
  properties: {
    slug: { type: 'string' },
    mdxFile: { type: 'string', description: 'path to NN-slug.mdx written' },
    metaFile: { type: 'string', description: 'path to NN-slug.js written' },
    sectionIds: { type: 'array', items: { type: 'string' } },
    pdfFallbacks: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
    ok: { type: 'boolean', description: 'true if both files written and self-checked' },
  },
}

const built = await parallel(TOPICS.map((t) => () =>
  agent(
    `Build StudyOS MDX topic "${t.slug}" (${t.mod} Kapitel ${t.nn}).

PRIMARY SOURCE (read fully — it is Markdown, allowed): ${t.src}
TARGET FILES (write EXACTLY these two, nothing else):
  ${t.dir}/topics/${t.nn}-${t.slug}.js   (meta export; meta.id MUST equal "${t.slug}")
  ${t.dir}/topics/${t.nn}-${t.slug}.mdx  (body, 4-8 sections)

${t.newEntry
  ? `This is a NEW topic not yet in module.js. Use title "${t.title}" and a source label in the same "Module · ... " style as its sibling topics in ${t.dir}/module.js.`
  : `Copy title / source / estimatedMinutes VERBATIM from the matching topic entry in ${t.dir}/module.js (match by id "${t.slug}").`}

Do NOT edit ${t.dir}/topics/index.js or ${t.dir}/module.js — registry wiring happens in a later
central step. Write only the two files above.

${STYLE}

Run no build yourself (a central build runs after wiring). Return the structured result.`,
    { label: `build:${t.mod}-${t.nn}`, phase: 'Build', schema: BUILD_SCHEMA, agentType: 'studyos-md-topic-builder' },
  ),
)).then((r) => r.filter(Boolean))

const failed = built.filter((b) => !b.ok)
log(`Build phase: ${built.length}/${TOPICS.length} returned, ${failed.length} self-reported not-ok.`)

// ---------------------------------------------------------------------------
// PHASE 2 — Wire: one assembler per module rewrites topics/index.js to import
// every NN-slug present and export the merged array, and adds the missing
// module.js entries. Then a single build verifies the whole app compiles.
// BARRIER is correct here: wiring needs ALL of a module's topic files present.
// ---------------------------------------------------------------------------
phase('Wire')

const MODULES = [
  { mod: 'AM', dir: AM_DIR, addEntries: [] },
  { mod: 'BF', dir: BF_DIR, addEntries: TOPICS.filter((t) => t.mod === 'BF' && t.newEntry) },
  { mod: 'HR', dir: HR_DIR, addEntries: TOPICS.filter((t) => t.mod === 'HR' && t.newEntry) },
]

const WIRE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['module', 'indexTopicsCount', 'ok'],
  properties: {
    module: { type: 'string' },
    indexTopicsCount: { type: 'integer' },
    moduleEntriesAdded: { type: 'array', items: { type: 'string' } },
    ok: { type: 'boolean' },
    notes: { type: 'string' },
  },
}

await parallel(MODULES.map((m) => () =>
  agent(
    `Wire the topic registry for the ${m.mod} module at ${m.dir}.

1. List every file matching ${m.dir}/topics/NN-slug.js (and its .mdx). Rewrite
   ${m.dir}/topics/index.js so it imports { meta as metaNN } and ContentNN for EACH present topic,
   in ascending NN order, and exports:
       export const topics = [ { ...metaNN, Content: ContentNN }, ... ];
       export default topics;
   Read the existing index.js first; keep the same import style. Include topics already present
   (do not drop the existing exemplars).
2. ${m.addEntries.length
      ? `Add these NEW topic entries to ${m.dir}/module.js topics[] (in NN order, matching the sibling
         object shape — id/title/status:'available'/hasContent:true/source/estimatedMinutes). Read the
         matching meta files to copy their title/source: ${m.addEntries.map((e) => `${e.nn}:${e.slug}`).join(', ')}.`
      : 'No new module.js entries needed for this module — leave module.js unchanged unless an entry is missing.'}

Edit ONLY ${m.dir}/topics/index.js and (if needed) ${m.dir}/module.js. Do not touch topic content
files. Return the structured result.`,
    { label: `wire:${m.mod}`, phase: 'Wire', schema: WIRE_SCHEMA, agentType: 'architecture-agent' },
  ),
)).then((r) => r.filter(Boolean))

const buildOut = await agent(
  `Run the production build and report the result.
Run: npm.cmd run build   (fallback: npm run build) in the repo root.
If it FAILS, read the error, identify the offending topic file(s), fix the MDX/JS error in place
(common causes: bare < or > in MDX prose, section id not matching meta, bad import path, duplicate
id), and re-run until GREEN or until you hit an error you cannot fix without inventing content.
Report: final build status (GREEN/RED), any files you fixed, and any remaining errors verbatim.`,
  { label: 'build:verify', phase: 'Wire', agentType: 'technical-bug-agent' },
)
log(`Wire/build: ${String(buildOut).slice(0, 200)}`)

// ---------------------------------------------------------------------------
// PHASE 3+4 — Audit then Quality, PIPELINED per topic: each topic is audited
// against its source and fixed, then quality-upgraded, independently. No
// barrier — a fast topic finishes both stages while a slow one is still auditing.
// ---------------------------------------------------------------------------
const AUDIT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['slug', 'fixesApplied', 'ok'],
  properties: {
    slug: { type: 'string' },
    findings: { type: 'array', items: { type: 'string' } },
    fixesApplied: { type: 'array', items: { type: 'string' } },
    ok: { type: 'boolean' },
  },
}

const reviewed = await pipeline(
  TOPICS,
  // Stage 1 — fidelity audit + fix in place
  (t) => agent(
    `Audit StudyOS topic ${t.dir}/topics/${t.nn}-${t.slug}.mdx against its source ${t.src}.
Check for: missing exam-relevant content, invented claims/figures/formulas not in the source,
shortened definitions, wrong citations, section-id mismatches. Fix issues IN PLACE in the .mdx/.js,
preserving the approved style (${SPEC}). Never invent content to fill gaps — flag instead.
Return the structured result.`,
    { label: `audit:${t.mod}-${t.nn}`, phase: 'Audit', schema: AUDIT_SCHEMA, agentType: 'content-fidelity-auditor' },
  ),
  // Stage 2 — quality / visual-density upgrade
  (audit, t) => agent(
    `Upgrade readability, structure, and VISUAL DENSITY of ${t.dir}/topics/${t.nn}-${t.slug}.mdx.
Apply the approved card-dense style (read ${SPEC}): more <Card>/<Columns> for block separation,
side-by-side blocks, "### " sub-headings to group cards, <Exam> markers on testable bits. Convert any
leftover prose to bullets. Do NOT add subject-matter facts not already present. Keep meta
keyTakeaways/examFocus/pitfalls strong (5-8 / 4-8 / present). Return a one-line summary of changes.`,
    { label: `quality:${t.mod}-${t.nn}`, phase: 'Quality', agentType: 'topic-quality-upgrader' },
  ),
)
log(`Audit+Quality complete for ${reviewed.filter(Boolean).length}/${TOPICS.length} topics.`)

// ---------------------------------------------------------------------------
// PHASE 5 — Exams: one builder per module fills questions.js + exams.js from
// the now-complete topics, then a final build seals it.
// ---------------------------------------------------------------------------
phase('Exams')

await parallel(['asset-management', 'behavioral-finance', 'human-resources'].map((modId) => () =>
  agent(
    `Build exam-focused assessment for module src/modules/semester-4/${modId}.
Using the module's now-complete topic content and its sources, populate:
  src/modules/semester-4/${modId}/questions.js  — quiz questions (shape per CLAUDE.md: id, type
    'single'|'multiple', question, options, correctAnswer|correctAnswers, explanation).
  src/modules/semester-4/${modId}/exams.js       — exam objects (sections[].tasks[]; task types
    single-choice/multiple-choice/open/calculation/case-study). See
    src/modules/semester-4/asset-management/exams.js for the full schema if present.
Cover every topic. Only content grounded in the sources/topics — no invented facts. Ensure ids are
unique. Do NOT modify topic .mdx/.js files. Return a summary (counts of questions and exam tasks).`,
    { label: `exams:${modId}`, phase: 'Exams', agentType: 'exam-content-builder' },
  ),
)).then((r) => r.filter(Boolean))

const finalBuild = await agent(
  `Run the final production build: npm.cmd run build (fallback npm run build) in repo root.
Fix any errors in place until GREEN (do not invent content). Then append a one-line entry to
TASK_LOG.md: "[2026-06-19] build-remaining-topics: built 25 MDX topics (AM/BF/HR), wired registries,
audited fidelity, upgraded quality, filled questions.js + exams.js." (trim TASK_LOG.md if > 5000 chars).
Report final build status and the TASK_LOG line.`,
  { label: 'build:final', phase: 'Exams', agentType: 'technical-bug-agent' },
)

return {
  built: built.length,
  buildOk: !/RED|fail|error/i.test(String(buildOut)),
  reviewed: reviewed.filter(Boolean).length,
  finalBuild: String(finalBuild).slice(0, 400),
  notOk: failed.map((f) => f.slug),
}
