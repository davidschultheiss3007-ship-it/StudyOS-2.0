# AGENTS.md

## Projektziel

StudyOS 2.0 ist ein hochwertiges, React-basiertes Lernsystem fuer Uni-Module. Es laeuft lokal; eine Offline-first- oder GitHub-Pages-Anforderung besteht nicht mehr.

Ziel ist eine stabile, visuell starke Lernplattform mit Moduluebersicht, Themen-/Vorlesungsnavigation, Lernbereich, Quiz- und Pruefungsbereich, Suche oder Command Palette, Desktop- und Mobile-Ansicht sowie optional druckfreundlicher Ansicht fuer PDF/GoodNotes.

Das Projekt soll professionell wirken, aber technisch robust und wartbar bleiben.

## Grundregeln

- Vor Aenderungen immer relevante Struktur und bestehende Patterns pruefen.
- Bestehende Architektur erhalten, ausser ein Refactor ist klar noetig.
- Keine globalen Styles brechen.
- Keine unnoetigen Frameworks oder Dependencies hinzufuegen.
- Bestehende Projekttechnologien respektieren.
- Vanilla HTML/CSS/JS bevorzugen, sofern das Projekt nicht bereits React/Vite oder eine andere Architektur nutzt.
- Relative Pfade verwenden, damit lokale Nutzung funktioniert. GitHub Pages ist kein Ziel mehr.
- Keine Inhalte loeschen, ausser die Aufgabe verlangt es ausdruecklich.
- Keine erfundenen Quellen, Zahlen oder fachlichen Aussagen ergaenzen.
- Fachliche Inhalte aus Skripten pruefungsorientiert, aber vollstaendig und nachvollziehbar aufbereiten.
- Aenderungen moeglichst klein, lokal und nachvollziehbar halten.

## Architekturregeln

Codex soll vor Aenderungen pruefen:

- Wo Module registriert werden.
- Wo Topics/Kapitel liegen.
- Wie Navigation, Suche, Quiz und Lernbereiche aufgebaut sind.
- Welche Datei fuer globale Styles verantwortlich ist.
- Welche Komponenten oder Patterns bereits existieren.
- Ob Aenderungen lokal im betroffenen Modul moeglich sind.

Wenn neue Topics oder Module erstellt werden:

- Bestehendes Export-/Registrierungsformat uebernehmen.
- Bestehende Namenskonventionen uebernehmen.
- Neue Dateien korrekt verlinken.
- Keine doppelten IDs erzeugen.
- Quellen-/Seiten-/Folienangaben erhalten, falls vorhanden.

## Designregeln

StudyOS 2.0 soll hochwertig aussehen und den installierten visuellen Stack vollstaendig ausschoepfen.

Pflicht:

- klare visuelle Hierarchie
- moderne App-Optik
- gute Typografie
- konsistente Cards, Tabellen, Callouts und Lernboxen
- ausreichend Whitespace
- keine abgeschnittenen Texte
- keine horizontalen Overflows
- gute Mobile-Darstellung
- saubere Druck-/PDF-Darstellung, wenn relevant

Zusaetzlich fuer Topic-Content (installierter Stack):

- **Recharts** fuer alle Inhalte mit Zahlenwerten, Vergleichen oder Zeitreihen einsetzen — nicht als Tabelle belassen, wenn ein Chart klarer waere.
- **Mermaid** fuer alle Prozesse, Fluesse, Taxonomien und Entscheidungsbaeume — nicht als Aufzaehlung belassen, wenn ein Diagramm die Beziehung klarer zeigt.
- **KaTeX** fuer alle Formeln und mathematischen Ausdruecke — keine LaTeX-Strings als Plaintext.
- **Lerninhalt ist standardmaessig statisch.** Eine interaktive Steuerung (Parameter-Slider, der eine Formel/Grafik live neu berechnet) nur dann, wenn eine *veraenderliche Groesse* den Lerneffekt traegt — sparsam, hoechstens ein solches Element pro Section. Definitorischer, beschreibender oder fest vergleichender Inhalt bleibt statisch.
- **Keine Wissensabfrage im Lerninhalt:** keine Quizfragen, Selbsttests, Uebungsaufgaben oder Frage-Antwort-/Reveal-/Toggle-Karten in Topic-Sections. Abfragen gehoeren ausschliesslich in den Quizbereich (`questions.js`) und den Pruefungsbereich (`exams.js`). Alle primaeren Inhalte sind beim ersten Rendern sichtbar, nie hinter einem Klick.
- **Varianz erzwingen:** Keine zwei benachbarten Sections duerfen denselben dominanten visuellen Aufbau haben.

Bei Designaufgaben:

- Bestehendes Designsystem respektieren.
- Nicht wahllos neue Effekte hinzufuegen.
- Animationen nur einsetzen, wenn sie stabil und hilfreich sind.
- Lesbarkeit ist wichtiger als Dekoration.
- Wenn ein bestehendes Modul oder Screenshot als Vorlage dient, dessen Logik und visuelle Sprache respektieren.

## Content-Regeln

Bei Uni-/Lerninhalten:

- Pruefungsrelevante Inhalte vollstaendig erfassen.
- Definitionen, Formeln, Beispiele und Pruefungsfallen sichtbar hervorheben.
- Komplexe Inhalte durch Tabellen, Vergleichsboxen, Prozessdarstellungen oder Mini-Diagramme erklaeren.
- Keine reine 1:1-Kopie erzeugen, wenn eine didaktische Aufarbeitung verlangt ist.
- Keine relevanten Inhalte auslassen, ausser ausdruecklich eine Kurz-/Praesentationsversion verlangt ist.
- Seiten-, Folien- oder Quellenangaben beibehalten.
- Keine externen Quellen ergaenzen, wenn die Aufgabe ausdruecklich auf bereitgestellte Skripte/PDFs beschraenkt ist.

## Planmodus

Bei groesseren Aufgaben zuerst nur planen.

Der Plan muss enthalten:

- Ziel der Aufgabe
- relevante AGENTS.md- und Agent-Definitionen (`.claude/agents/`, `.codex/agents/`)
- empfohlene Subagents, falls sinnvoll
- betroffene Dateien
- Umsetzungsschritte
- Qualitaetspruefung
- Risiken und Annahmen

Keine Implementierung ohne ausdrueckliche Freigabe, wenn der Nutzer ausdruecklich Planmodus oder vorherige Kontrolle verlangt.

Wenn keine Skills oder Subagents sinnvoll sind, kurz begruenden.

## Aktive Codex Subagents

Aktive Codex Subagents liegen unter:

```text
.codex/agents/
```

Diese Agenten ersetzen die frueheren spezialisierten StudyOS-Skills als aktive Codex-Rollen. Die alten Skill-Dateien wurden entfernt; massgeblich sind ausschliesslich die Agent-Definitionen unter `.codex/agents/` (Codex) bzw. `.claude/agents/` (Claude Code).

Verwende:

- `studyos-pdf-topic-builder`
  - Fuer PDF-Skripte zu StudyOS-React-Modulen oder Topic-Dateien.
  - Nutzt nur bereitgestellte PDFs als fachliche Quelle.
  - Erzeugt pruefungsorientierten Lerncontent mit Quellenangaben, Tabellen, Formeln, `keyTakeaways`, `examFocus` und `pitfalls`.

- `studyos-md-topic-builder`
  - Fuer Markdown-Skripte zu StudyOS-React-Modulen oder Topic-Dateien.
  - Nutzt Markdown als primaere fachliche Quelle.
  - Darf PDF-Dateien nur punktuell per gezieltem Screenshot fuer unklaren Kontext nutzen, niemals vollstaendig lesen oder seitenweise durcharbeiten.
  - Erzeugt pruefungsorientierten Lerncontent mit Quellenangaben, Tabellen, Formeln, `keyTakeaways`, `examFocus` und `pitfalls`.

- `content-fidelity-auditor`
  - Fuer Quellenabgleich und Vollstaendigkeitspruefung bestehender StudyOS-Inhalte.
  - Findet Auslassungen, erfundene Inhalte, Quellenprobleme und fachliche Verkuerzungen.
  - Liefert Befunde und konkrete Korrekturen, keine direkten UI-Redesigns.

- `topic-quality-upgrader`
  - Fuer didaktische, visuelle und strukturelle Verbesserung bestehender Topics.
  - Verbessert Hierarchie, Lernboxen, Tabellen, Diagrammflaechen, `keyTakeaways`, `examFocus` und `pitfalls`.
  - Keine neuen fachlichen Aussagen ohne Quellenbasis und keine grossen Refactors ohne Freigabe.

- `exam-content-builder`
  - Fuer klausurnahe Pruefungsvorbereitung aus vorhandenen Quellen oder Topic-Inhalten.
  - Erstellt Pruefungsfragen, MC-Fragen, Transferfragen, Lueckentexte, Rechenaufgaben, Loesungen und kurze Begruendungen.
  - Nicht als zweiter allgemeiner Content-Builder verwenden.

## Standard-Subagents fuer groessere Aufgaben

Subagents liegen unter `.claude/agents/subagents/` (Claude Code) — nicht unter `.agents/subagents/` (Codex). So vermeiden Claude und Codex Verwechslungen.

Subagents sind optionale Hilfsrollen fuer groessere, parallelisierbare Aufgaben. Sie ersetzen keine Skills und sollen nicht mit spezialisierten StudyOS-Workflows konkurrieren.

Einsatzkriterien:

- Passende Spezial-Agenten unter `.codex/agents/` bzw. `.claude/agents/` zuerst pruefen und im Plan nennen.
- Ein passender Spezial-Agent hat Vorrang vor allgemeinen Subagents.
- Subagents nur ergaenzend nutzen, wenn getrennte Perspektiven echten Zusatznutzen bringen.
- Jeder Subagent bekommt einen klar begrenzten Auftrag, keine offene Generalaufgabe.
- Ergebnisse muessen kompakt, pruefbar und auf konkrete Dateien, Quellen oder Risiken bezogen sein.
- Kleine lokale Aufgaben ohne Subagents erledigen.

Standardrollen:

1. Architecture Agent
   - Prueft Struktur, Modulregistrierung, Topic-Exports, Datenfluss, relative Pfade und lokale Lauffaehigkeit.
   - Output: kurze Befundliste mit Dateien, Integrationsrisiken und minimalen Korrekturen.
   - Non-Goal: keine Neustrukturierung oder globalen Refactors ohne Auftrag.

2. UI/UX Agent
   - Prueft Responsiveness, Overflows, Typografie, Whitespace, Cards/Tabellen/Callouts, Print-/PDF-Tauglichkeit und visuelle Konsistenz.
   - Output: priorisierte UI-Befunde mit Ort, Auswirkung und minimaler Korrektur.
   - Non-Goal: kein neues Designsystem und kein Designwechsel ohne Auftrag.

3. Content Agent
   - Prueft fachliche Vollstaendigkeit, Quellennaehe, Definitionen, Formeln, Beispiele, Pruefungsfallen und Quizlogik.
   - Output: Befunde nach Schweregrad mit Quellenbezug und konkreter Korrekturempfehlung.
   - Non-Goal: keine externen Ergaenzungen, erfundenen Aussagen oder stillschweigenden Kuerzungen.

4. Technical Bug Agent
   - Prueft JavaScript-Fehler, kaputte Pfade, defekte Links, Event-Listener, Datenladefehler, Import-/Export-Probleme und Build-Risiken.
   - Output: reproduzierbare Befunde mit Datei/Route, Ursache und minimalem Fix.
   - Non-Goal: keine Feature-Erweiterungen oder breiten Refactors ohne direkten Fehlerbezug.

Subagent-Ergebnisse sind Entscheidungs- und Pruefhilfen. Die finale Umsetzung muss konsolidiert, lokal begrenzt und repo-konform erfolgen.

## Pipelines

Die spezialisierten Rollen (`studyos-pdf-topic-builder`, `studyos-md-topic-builder`, `content-fidelity-auditor`, `topic-quality-upgrader`, `exam-content-builder`) sind oben unter „Aktive Codex Subagents" beschrieben und als Agent-Definitionen unter `.codex/agents/` bzw. `.claude/agents/` hinterlegt. Die frueheren `.agents-legacy/skills/`-Dateien wurden entfernt. Empfohlene Reihenfolge:

Standard-Pipeline fuer PDF-zu-Modul/Topic:

1. `studyos-pdf-topic-builder` fuer PDF-Extraktion, Modul-/Topic-Struktur und erste StudyOS-Integration.
2. `content-fidelity-auditor` fuer Quellenabgleich, Vollstaendigkeit und erfundene oder verkuerzte Inhalte.
3. `topic-quality-upgrader` fuer didaktische und visuelle Verbesserung ohne neue fachliche Aussagen.
4. `exam-content-builder` fuer Pruefungsfragen, Loesungen, Transferaufgaben, Wiederholungsbloecke und klausurnahe Abgrenzungen.
5. QA mit Architecture Agent, UI/UX Agent und Technical Bug Agent nach Bedarf.

Standard-Pipeline fuer MD-zu-Modul/Topic:

1. `studyos-md-topic-builder` fuer Markdown-Struktur, Modul-/Topic-Struktur und erste StudyOS-Integration.
2. `content-fidelity-auditor` fuer Quellenabgleich gegen die Markdown-Datei, Vollstaendigkeit und erfundene oder verkuerzte Inhalte.
3. `topic-quality-upgrader` fuer didaktische und visuelle Verbesserung ohne neue fachliche Aussagen.
4. `exam-content-builder` fuer Pruefungsfragen, Loesungen, Transferaufgaben, Wiederholungsbloecke und klausurnahe Abgrenzungen aus Markdown.
5. QA mit Architecture Agent, UI/UX Agent und Technical Bug Agent nach Bedarf.

PDFs im MD-Workflow sind nur punktuelle Kontext-Hilfen: bei unklarer Markdown-Stelle darf ein konkret benannter PDF-Ausschnitt gescreenshottet werden. PDFs duerfen in diesem Workflow nie vollstaendig gelesen, extrahiert oder seitenweise durchgearbeitet werden.

## Qualitaetspruefung nach Aenderungen

Nach Umsetzung pruefen oder begruenden, warum nicht geprueft werden konnte:

- Laedt die Seite/App ohne Fehler?
- Sind alle Pfade korrekt?
- Gibt es JavaScript- oder Build-Fehler?
- Funktioniert die Navigation?
- Funktioniert Suche/Command Palette, falls betroffen?
- Funktionieren Quiz-/Lernbereiche, falls betroffen?
- Gibt es horizontale Overflows?
- Wird Text abgeschnitten?
- Ist Mobile plausibel?
- Ist lokale Nutzung weiterhin moeglich?
- Wenn Recharts verwendet: Rendert `<ResponsiveContainer>` korrekt ohne feste px-Breiten?
- Wenn Mermaid verwendet: Wird das SVG korrekt gerendert (kein leeres Div)?
- Wenn KaTeX verwendet: Ist `katex/dist/katex.min.css` importiert?
- Sind alle primaeren Inhalte ohne Klick sichtbar (keine Click-Walls)?
- Enthaelt der Lerninhalt keine Quizze/Selbsttests/Uebungen/Reveal-Karten (gehoeren in `questions.js` / `exams.js`)?
- Ist Interaktivitaet auf Faelle beschraenkt, in denen eine veraenderliche Groesse den Lerneffekt traegt (sonst statisch)?

Wenn Build-Skripte vorhanden sind, bevorzugt verwenden:

```bash
npm run build
```

Unter Windows PowerShell ggf.:

```bash
npm.cmd run build
```

Keine neuen Testsysteme einfuehren, ausser es ist Teil der Aufgabe.

## Git- und Repo-Verhalten

- Keine Commits, Branches oder Pushes ausfuehren, ausser ausdruecklich gewuenscht.
- Keine sensiblen Dateien veraendern.
- Keine `.env`-Dateien, Tokens oder Credentials ausgeben oder veraendern.
- Keine grossen Umstrukturierungen ohne klaren Nutzen.
- Keine ungenutzten Dateien erzeugen.
- Keine Debug-Ausgaben hinterlassen.

## Antwortformat nach Umsetzung

Am Ende liefern:

1. Geaenderte Dateien
2. Neu angelegte Dateien
3. Verschobene Dateien
4. Wichtigste Aenderungen
5. Durchgefuehrte Pruefungen
6. Offene Risiken oder naechste sinnvolle Schritte

**Logging-Pflicht:**
Nach jeder Umsetzung eine kurze Zusammenfassung in `TASK_LOG.md` schreiben (Format: `[YYYY-MM-DD] <Agent>: <Summary>`). Falls die Datei zu groß wird (ca. 5000 Zeichen), die aeltesten Eintraege loeschen.
