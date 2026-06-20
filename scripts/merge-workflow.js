export const meta = {
  name: 'md-pdf-merge-builder',
  description: 'Build the 22 missing *_MD+PDF.md merge source docs (markitdown text + visual PDF descriptions)',
  phases: [
    { title: 'Beschreiben' },
    { title: 'Prüfen' },
    { title: 'Zusammensetzen' },
  ],
}

const ROOT = 'C:/Users/zt6xjhh/OneDrive - Allianz/Uni/Lernapp/StudyOS-2.0-main'
const RENDER = 'C:/Users/zt6xjhh/pdf-render-tmp'
const EXEMPLAR = ROOT + '/sources/semester-4/human-resources/Markitdown/Markitdown+PDF/HR4_md+PDF.md'
const MAX_CHUNK = 28

// --- skript registry -------------------------------------------------------
const AM = ROOT + '/sources/semester-4/asset-management'
const BF = ROOT + '/sources/semester-4/behavioral-finance'
const HR = ROOT + '/sources/semester-4/human-resources'

const SKRIPTS = [
  // ----- Asset Management -----
  { key: 'am-01', module: 'Asset Management', pages: 17, pdf: 'skript-01-einfuehrung.pdf',
    md: AM + '/MDs/skript-01-einfuehrung.md',
    out: AM + '/MDs/MD+PDF/skript-01-einfuehrung_MD+PDF.md',
    docTitle: 'skript-01-einfuehrung_MD+PDF - Einführung in das Asset Management: fehlende visuelle Inhalte für React' },
  { key: 'am-02', module: 'Asset Management', pages: 33, pdf: 'skript-02-traditionelle-assetklassen.pdf',
    md: AM + '/MDs/skript-02-traditionelle-assetklassen.md',
    out: AM + '/MDs/MD+PDF/skript-02-traditionelle-assetklassen_MD+PDF.md',
    docTitle: 'skript-02-traditionelle-assetklassen_MD+PDF - Traditionelle Assetklassen: fehlende visuelle Inhalte für React' },
  { key: 'am-03', module: 'Asset Management', pages: 46, pdf: 'skript-03-alternative-assetklassen.pdf',
    md: AM + '/MDs/skript-03-alternative-assetklassen.md',
    out: AM + '/MDs/MD+PDF/skript-03-alternative-assetklassen_MD+PDF.md',
    docTitle: 'skript-03-alternative-assetklassen_MD+PDF - Alternative Assetklassen: fehlende visuelle Inhalte für React' },
  { key: 'am-04', module: 'Asset Management', pages: 56, pdf: 'skript-04-mathemat-strat-grundlagen.pdf',
    md: AM + '/MDs/skript-04-mathemat-strat-grundlagen.md',
    out: AM + '/MDs/MD+PDF/skript-04-mathemat-strat-grundlagen_MD+PDF.md',
    docTitle: 'skript-04-mathemat-strat-grundlagen_MD+PDF - Mathematische und statistische Grundlagen: fehlende visuelle Inhalte für React' },
  { key: 'am-05', module: 'Asset Management', pages: 50, pdf: 'skript-05-grundlagen-der-portfoliotheorie.pdf',
    md: AM + '/MDs/skript-05-grundlagen-der-portfoliotheorie.md',
    out: AM + '/MDs/MD+PDF/skript-05-grundlagen-der-portfoliotheorie_MD+PDF.md',
    docTitle: 'skript-05-grundlagen-der-portfoliotheorie_MD+PDF - Grundlagen der Portfoliotheorie: fehlende visuelle Inhalte für React' },
  { key: 'am-06', module: 'Asset Management', pages: 28, pdf: 'skript-06-portfoliomanagement.pdf',
    md: AM + '/MDs/skript-06-portfoliomanagement.md',
    out: AM + '/MDs/MD+PDF/skript-06-portfoliomanagement_MD+PDF.md',
    docTitle: 'skript-06-portfoliomanagement_MD+PDF - Portfoliomanagement: fehlende visuelle Inhalte für React' },
  { key: 'am-07', module: 'Asset Management', pages: 28, pdf: 'skript-07-performanceanalyse.pdf',
    md: AM + '/MDs/skript-07-performanceanalyse.md',
    out: AM + '/MDs/MD+PDF/skript-07-performanceanalyse_MD+PDF.md',
    docTitle: 'skript-07-performanceanalyse_MD+PDF - Performanceanalyse: fehlende visuelle Inhalte für React' },
  { key: 'am-08', module: 'Asset Management', pages: 30, pdf: 'skript-08-aktives-vs-passives-management.pdf',
    md: AM + '/MDs/skript-08-aktives-vs-passives-management.md',
    out: AM + '/MDs/MD+PDF/skript-08-aktives-vs-passives-management_MD+PDF.md',
    docTitle: 'skript-08-aktives-vs-passives-management_MD+PDF - Aktives vs. Passives Management / Indizes: fehlende visuelle Inhalte für React' },
  { key: 'am-09', module: 'Asset Management', pages: 17, pdf: 'skript-09-fintechs-im-asset-management.pdf',
    md: AM + '/MDs/skript-09-fintechs-im-asset-management.md',
    out: AM + '/MDs/MD+PDF/skript-09-fintechs-im-asset-management_MD+PDF.md',
    docTitle: 'skript-09-fintechs-im-asset-management_MD+PDF - FinTechs im Asset Management / Robo Advisors: fehlende visuelle Inhalte für React' },
  // ----- Behavioral Finance -----
  { key: 'bf-01', module: 'Behavioral Finance', pages: 32, pdf: 'skript-01-einfuehrung.pdf',
    md: BF + '/MDs/skript-01-einfuehrung.md',
    out: BF + '/MDs/MD+PDF/skript-01-einfuehrung_MD+PDF.md',
    docTitle: 'skript-01-einfuehrung_MD+PDF - Einführung in die Behavioral Finance: fehlende visuelle Inhalte für React' },
  { key: 'bf-02', module: 'Behavioral Finance', pages: 82, pdf: 'skript-02-heuristiken-und-kognitive-verzerrungen.pdf',
    md: BF + '/MDs/skript-02-heuristiken-und-kognitive-verzerrungen.md',
    out: BF + '/MDs/MD+PDF/skript-02-heuristiken-und-kognitive-verzerrungen_MD+PDF.md',
    docTitle: 'skript-02-heuristiken-und-kognitive-verzerrungen_MD+PDF - Heuristiken und kognitive Verzerrungen: fehlende visuelle Inhalte für React' },
  { key: 'bf-03', module: 'Behavioral Finance', pages: 16, pdf: 'skript-03-modell-der-zwei-systeme.pdf',
    md: BF + '/MDs/skript-03-modell-der-zwei-systeme.md',
    out: BF + '/MDs/MD+PDF/skript-03-modell-der-zwei-systeme_MD+PDF.md',
    docTitle: 'skript-03-modell-der-zwei-systeme_MD+PDF - Modell der zwei Systeme: fehlende visuelle Inhalte für React' },
  { key: 'bf-04', module: 'Behavioral Finance', pages: 34, pdf: 'skript-04-entscheidungen-unter-unsicherheit.pdf',
    md: BF + '/MDs/skript-04-entscheidungen-unter-unsicherheit.md',
    out: BF + '/MDs/MD+PDF/skript-04-entscheidungen-unter-unsicherheit_MD+PDF.md',
    docTitle: 'skript-04-entscheidungen-unter-unsicherheit_MD+PDF - Entscheidungen unter Unsicherheit: fehlende visuelle Inhalte für React' },
  { key: 'bf-05', module: 'Behavioral Finance', pages: 26, pdf: 'skript-05-zeit-in-der-oekonomie.pdf',
    md: BF + '/MDs/skript-05-zeit-in-der-oekonomie.md',
    out: BF + '/MDs/MD+PDF/skript-05-zeit-in-der-oekonomie_MD+PDF.md',
    docTitle: 'skript-05-zeit-in-der-oekonomie_MD+PDF - Zeit in der Ökonomie: fehlende visuelle Inhalte für React' },
  { key: 'bf-06', module: 'Behavioral Finance', pages: 45, pdf: 'skript-06-prospect-theory-und-ihre-konsequenzen.pdf',
    md: BF + '/MDs/skript-06-prospect-theory-und-ihre-konsequenzen.md',
    rawMd: BF + '/MDs/skript-06-prospect-theory-und-ihre-konsequenzen-raw.md',
    out: BF + '/MDs/MD+PDF/skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF.md',
    docTitle: 'skript-06-prospect-theory-und-ihre-konsequenzen_MD+PDF - Prospect Theory und ihre Konsequenzen: fehlende visuelle Inhalte für React' },
  { key: 'bf-07', module: 'Behavioral Finance', pages: 37, pdf: 'skript-07-altersvorsorge-und-private-finanzplanung.pdf',
    md: BF + '/MDs/skript-07-altersvorsorge-und-private-finanzplanung.md',
    rawMd: BF + '/MDs/skript-07-altersvorsorge-und-private-finanzplanung-raw.md',
    out: BF + '/MDs/MD+PDF/skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF.md',
    docTitle: 'skript-07-altersvorsorge-und-private-finanzplanung_MD+PDF - Altersvorsorge und private Finanzplanung: fehlende visuelle Inhalte für React' },
  { key: 'bf-08', module: 'Behavioral Finance', pages: 21, pdf: 'skript-08-spekulationsblasen-an-finanzmaerkten.pdf',
    md: BF + '/MDs/skript-08-spekulationsblasen-an-finanzmaerkten.md',
    out: BF + '/MDs/MD+PDF/skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF.md',
    docTitle: 'skript-08-spekulationsblasen-an-finanzmaerkten_MD+PDF - Spekulationsblasen an Finanzmärkten: fehlende visuelle Inhalte für React' },
  { key: 'bf-09', module: 'Behavioral Finance', pages: 47, pdf: 'skript-09-kapitalanlage-und-kapitalmarktanomalien.pdf',
    md: BF + '/MDs/skript-09-kapitalanlage-und-kapitalmarktanomalien.md',
    out: BF + '/MDs/MD+PDF/skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF.md',
    docTitle: 'skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF - Kapitalanlage und Kapitalmarktanomalien: fehlende visuelle Inhalte für React' },
  // ----- Human Resources -----
  { key: 'hr-07', module: 'Human Resources', pages: 21, pdf: 'skript-07-personalauswahl.pdf',
    md: HR + '/Markitdown/skript-07-personalauswahl.md',
    out: HR + '/Markitdown/Markitdown+PDF/HR7_md+PDF.md',
    docTitle: 'HR7_md+PDF - Personalauswahl: fehlende visuelle Inhalte für React' },
  { key: 'hr-08', module: 'Human Resources', pages: 51, pdf: 'skript-08-personaladministration.pdf',
    md: HR + '/Markitdown/skript-08-personaladministration.md',
    out: HR + '/Markitdown/Markitdown+PDF/HR8_md+PDF.md',
    docTitle: 'HR8_md+PDF - Personaladministration, Sozialversicherung und DSGVO: fehlende visuelle Inhalte für React' },
  { key: 'hr-09', module: 'Human Resources', pages: 36, pdf: 'skript-09-personalcontrolling.pdf',
    md: HR + '/Markitdown/skript-09-personalcontrolling.md',
    out: HR + '/Markitdown/Markitdown+PDF/HR9_md+PDF.md',
    docTitle: 'HR9_md+PDF - Personalcontrolling, Onboarding und Laufbahnplanung: fehlende visuelle Inhalte für React' },
  { key: 'hr-10', module: 'Human Resources', pages: 35, pdf: 'skript-10-arbeitsorganisation-und-personalbeurteilung.pdf',
    md: HR + '/Markitdown/skript-10-arbeitsorganisation-und-personalbeurteilung.md',
    out: HR + '/Markitdown/Markitdown+PDF/HR10_md+PDF.md',
    docTitle: 'HR10_md+PDF - Arbeitsorganisation und Personalbeurteilung: fehlende visuelle Inhalte für React' },
]

// --- helpers ---------------------------------------------------------------
function pad3(n) { return ('000' + n).slice(-3) }

function chunkRanges(pages) {
  const nChunks = Math.ceil(pages / MAX_CHUNK)
  const base = Math.floor(pages / nChunks)
  const rem = pages - base * nChunks
  const ranges = []
  let start = 1
  for (let i = 0; i < nChunks; i++) {
    const size = base + (i < rem ? 1 : 0)
    ranges.push([start, start + size - 1])
    start += size
  }
  return ranges
}

function imgList(key, s, e) {
  const lines = []
  for (let p = s; p <= e; p++) lines.push(`${RENDER}/${key}/page-${pad3(p)}.png`)
  return lines.join('\n')
}

const SLIDE_SCHEMA = {
  type: 'object',
  properties: {
    markdown: { type: 'string', description: 'Die vollständigen "## Folie N ..."-Blöcke für diesen Seitenbereich, in Markdown.' },
    slidesCovered: { type: 'integer' },
  },
  required: ['markdown'],
  additionalProperties: false,
}

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    markdown: { type: 'string', description: 'Die korrigierte, vollständige Markdown-Fassung der Folienblöcke für diesen Bereich.' },
    corrections: { type: 'array', items: { type: 'string' } },
  },
  required: ['markdown'],
  additionalProperties: false,
}

const FORMAT = `FORMAT JE FOLIE (exakt diese Unterstruktur, wie im Beispiel ${EXEMPLAR}):
## Folie N - <Folientitel laut Folie>
### In der MD vorhanden  (oder: "### In der MD problematisch/fehlend")
<was die Markitdown-Datei zu dieser Folie enthält bzw. wo sie versagt>
### Fehlende visuelle Inhalte
<JEDE Grafik, jedes Diagramm, Organigramm, Schaubild, Icon, Foto, jede Formel und jede Tabelle KONKRET beschreiben: Achsenbeschriftungen, Kurvenverläufe, Pfeilrichtungen, Knoten, Farben mit Bedeutung, Zellinhalte, Werte. So, dass man die Grafik ohne das Original nachbauen kann.>
### Visuelle Rekonstruktion
<ASCII-Skizze / Pfeilkette / Tabellengerüst, wo sinnvoll>
### Inhaltliche Rekonstruktion
<Tabellen mit echten Zellwerten von der Folie; Listen; Formeln als Klartext/Markdown>
### Fachliche Aussage
<1-3 Sätze, was die Folie fachlich vermittelt>
### React-Vorschlag
<konkreter Komponentenname (PascalCase) + kurze Umsetzungsidee>`

const RULES = `WICHTIGE REGELN:
- Sprache: Deutsch. Du schreibst ein "React-Umsetzungsbriefing".
- ERFINDE NICHTS. Nutze ausschließlich, was auf den Folien sichtbar bzw. in der Markitdown-Datei vorhanden ist. Sind Werte aus einer Grafik nur visuell abgeschätzt, kennzeichne sie mit "ca." oder "(visuell abgelesen)".
- Bilde JEDE Folie des Bereichs als eigenen "## Folie N"-Block ab, lückenlos, in Reihenfolge. N = die PDF-Seitennummer (= page-NNN.png).
- Reine Layout-Elemente (HBW-Logo, graue Kopfzeile, "Asset Management / CS / Folie X", Copyright-Footer) sind NICHT fachlich; nicht als Inhalt behandeln.
- Der Schwerpunkt liegt auf dem, was Markitdown NICHT extrahieren konnte: Diagramme, Schaubilder, Organigramme, Formeln, Icons, Fotos und zerbrochene/als Bild eingebettete Tabellen.
- Quellenangaben auf Folien (z. B. "Quelle: ...") beibehalten.
- Gib NUR die "## Folie N"-Blöcke zurück (kein Dokumentkopf, keine Rahmensektionen).`

function writePrompt(s, range) {
  const [a, b] = range
  return `Du erstellst einen Teil eines Quell-Briefings, das die Markitdown-Textextraktion eines Vorlesungsskripts um die visuell verlorenen Inhalte der zugehörigen PDF ergänzt.

Modul: ${s.module}
Skript: ${s.pdf}  (insgesamt ${s.pages} Folien)
Dein Bereich: Folie ${a} bis ${b}.

1) Lies ZUERST die Markitdown-Textdatei (sie enthält den bereits extrahierten Text, oft fehlerhaft/zerbrochen bei Grafiken):
   ${s.md}${s.rawMd ? `\n   (Roh-/Langfassung zusätzlich verfügbar: ${s.rawMd})` : ''}
2) Sieh dir DANN jede der folgenden gerenderten Foliengrafiken visuell an (mit dem Read-Tool, eine nach der anderen):
${imgList(s.key, a, b)}
3) Optional zur Formatorientierung: ${EXEMPLAR}

${RULES}

${FORMAT}

Liefere im Feld "markdown" die fertigen "## Folie N"-Blöcke für die Folien ${a}-${b}.`
}

function verifyPrompt(s, range, draft) {
  const [a, b] = range
  return `Du bist ein kritischer Fachprüfer. Ein Kollege hat für das Skript "${s.pdf}" (Modul ${s.module}) die Folien ${a}-${b} als "## Folie N"-Briefing beschrieben. Prüfe das adversarial gegen die echten Folien und korrigiere.

Sieh dir JEDE dieser Folien erneut visuell an (Read-Tool):
${imgList(s.key, a, b)}

Prüfe Punkt für Punkt:
- Ist JEDE Folie ${a}-${b} als eigener "## Folie N"-Block vorhanden? Fehlt eine, ergänze sie.
- Wurde JEDES Diagramm/Schaubild/Organigramm/jede Formel/Tabelle/jedes Icon konkret und korrekt beschrieben (Achsen, Werte, Pfeile, Zellinhalte)? Ergänze Fehlendes.
- Stehen erfundene Zahlen/Fakten drin, die auf der Folie NICHT sichtbar sind? Entferne sie oder markiere abgeschätzte Werte als "ca."/"(visuell abgelesen)".
- Stimmt die Foliennummerierung (N = PDF-Seitenzahl)?
- Format exakt wie vorgegeben (### In der MD vorhanden / Fehlende visuelle Inhalte / Visuelle Rekonstruktion / Inhaltliche Rekonstruktion / Fachliche Aussage / React-Vorschlag).

ENTWURF DES KOLLEGEN:
---
${draft}
---

Gib im Feld "markdown" die KORRIGIERTE, vollständige Fassung der Folienblöcke ${a}-${b} zurück (auch unveränderte Teile vollständig mitliefern). In "corrections" eine kurze Liste deiner wichtigsten Änderungen.`
}

function assemblePrompt(s, foliesMarkdown) {
  return `Du baust die finale Quell-Briefing-Datei zusammen und SCHREIBST sie als Datei.

Modul: ${s.module}
Skript-PDF: ${s.pdf} (${s.pages} Folien)
Markitdown-Datei: ${s.md}
Zieldatei (mit dem Write-Tool exakt hierhin schreiben): ${s.out}

Öffne zur Formatorientierung das Referenzbeispiel und ahme dessen Aufbau exakt nach:
${EXEMPLAR}

Lies außerdem die Markitdown-Datei ${s.md} für Modulkontext (Titel, Agenda, Quellen).

Baue die Datei in genau dieser Reihenfolge auf:
1. "# ${s.docTitle}"
2. "**Zweck:**" – 2-3 Sätze: diese Datei ergänzt die Markitdown-Datei \`${s.pdf.replace('.pdf', '.md')}\` um die bei der Extraktion aus \`${s.pdf}\` verlorenen visuellen Inhalte; gedacht als React-Umsetzungsbriefing.
3. "**Quelle:** \`${s.pdf}\` mit ${s.pages} Folien und die dazugehörige Markitdown-Datei."
4. "**Wichtig:**" – Hinweis, dass wiederkehrende Layout-Elemente (HBW-Logo, Kopfzeile, Folien-Footer, Copyright) nicht fachlich sind; fachlich relevant sind Diagramme, Formeln, Tabellen, Schaubilder, Icons.
5. "---"
6. "## Globale Umsetzungsregeln für React" – nummerierte Liste, aus dem tatsächlichen Inhalt dieses Skripts abgeleitet.
7. "## Empfohlene React-Komponenten" – Markdown-Tabelle | Komponente | Einsatzfolien | Zweck |, gespeist aus den React-Vorschlägen der Folienblöcke unten.
8. "---"
9. "# Folienweise Ergänzungen" – danach die folgenden Folienblöcke EXAKT/VERBATIM einfügen (Reihenfolge nach Foliennummer, nichts inhaltlich kürzen):
---FOLIENBLÖCKE---
${foliesMarkdown}
---ENDE FOLIENBLÖCKE---
10. "# Kompakte Umsetzungspriorität" mit "## Muss rekonstruiert werden", "## Kann vereinfacht werden", "## Nicht fachlich relevant".
11. "# Datenorientierter React-Hinweis" – 1-2 \`js\`-Codeblöcke mit Datenobjekten (z. B. Listen/Tabellen aus dem Skript), nur aus tatsächlich vorhandenen Inhalten.

Regeln: Deutsch; nichts erfinden; die Folienblöcke nicht verfälschen. Nach dem Schreiben antworte mit einer Zeile: "<Dateiname>: <Anzahl Folienblöcke> Folien, <Zeichenzahl> Zeichen".`
}

// --- run -------------------------------------------------------------------
// args (optional): array of skript keys to (re)build, e.g. ["am-02","am-03"].
// If omitted, all SKRIPTS are built.
const onlyKeys = Array.isArray(args) && args.length ? new Set(args) : null
const TODO = onlyKeys ? SKRIPTS.filter((s) => onlyKeys.has(s.key)) : SKRIPTS

log(`Starte Merge-Build für ${TODO.length} Skripte (${TODO.reduce((n, s) => n + s.pages, 0)} Folien gesamt).`)

const results = await pipeline(
  TODO,
  // Stage 1: pro Skript alle Chunks schreiben + adversarial prüfen (chunks parallel)
  async (s) => {
    const ranges = chunkRanges(s.pages)
    const parts = await parallel(ranges.map((range) => async () => {
      const [a, b] = range
      const draft = await agent(writePrompt(s, range), {
        label: `write ${s.key} F${a}-${b}`, phase: 'Beschreiben', schema: SLIDE_SCHEMA, effort: 'high',
      })
      if (!draft || !draft.markdown) return null
      const checked = await agent(verifyPrompt(s, range, draft.markdown), {
        label: `verify ${s.key} F${a}-${b}`, phase: 'Prüfen', schema: VERIFY_SCHEMA, effort: 'high',
      })
      const markdown = (checked && checked.markdown) ? checked.markdown : draft.markdown
      return { start: a, markdown }
    }))
    const ok = parts.filter(Boolean).sort((x, y) => x.start - y.start)
    return { s, foliesMarkdown: ok.map((p) => p.markdown).join('\n\n') }
  },
  // Stage 2: finale Datei zusammensetzen und schreiben
  async (r) => {
    if (!r || !r.foliesMarkdown) return { key: '?', summary: 'SKIPPED (keine Folienblöcke)' }
    const summary = await agent(assemblePrompt(r.s, r.foliesMarkdown), {
      label: `assemble ${r.s.key}`, phase: 'Zusammensetzen', effort: 'medium',
    })
    return { key: r.s.key, out: r.s.out, summary }
  }
)

log('Fertig. Zusammenfassung:')
for (const r of results.filter(Boolean)) log(`- ${r.key}: ${r.summary}`)

return results.filter(Boolean)
