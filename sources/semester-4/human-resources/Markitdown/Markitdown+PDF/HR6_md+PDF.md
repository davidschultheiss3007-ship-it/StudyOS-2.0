# HR6_md+PDF - Personalauswahl und Arbeitszeugnisse: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-06-hr6.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-06-hr6.pdf` verloren gegangen, nur als Folientitel übertragen oder fachlich unzureichend strukturiert wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von Markdown zu React keine Diagramme, Tabellenlogiken, Bewertungsbögen oder Bedeutungszuordnungen aus den Arbeitszeugnis-Folien verloren gehen.

**Quelle:** `skript-06-hr6.pdf` mit 18 Folien und die dazugehörige Markitdown-Datei `skript-06-hr6.md`.

**Wichtig:** Wiederkehrende Gestaltungselemente wie HBW-Logo, grauer Kopfbereich, Folientitel-Layout und Copyright-Footer sind keine fachlichen Inhalte. Diese können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem der Bewerbungsprozess als Zahnrad-/Prozessgrafik, die Übersicht der Personalauswahlverfahren, die Beurteilungskriterien-Tabelle, die Struktur eines Arbeitszeugnisses, die Tabellen zu Zeugnisformulierungen und der Bewertungsbogen für Arbeitszeugnisse.

---

## Globale Umsetzungsregeln für React

1. **Leere Folientitel nicht übernehmen:** In der MD sind mehrere Folien nur als Titel vorhanden, obwohl die PDF dort zentrale Tabellen, Formulare oder Prozessgrafiken enthält.
2. **Tabellen semantisch nachbauen:** Die Zeugnistext-Bedeutungsfolien müssen als echte Vergleichstabellen oder Phrase-Cards umgesetzt werden. Nicht als Bild-Screenshot, weil die Zuordnung Text -> Bedeutung prüfungsrelevant ist.
3. **Zuordnungen korrigieren:** In der Markitdown-Extraktion sind einige Spalten durcheinander oder getrennt dargestellt. Für React ist die PDF-Zuordnung maßgeblich.
4. **Arbeitszeugnis-Bestandteile als Prozess/Checkliste darstellen:** Die Folien 4-7 bilden gemeinsam die Struktur eines Arbeitszeugnisses ab. Sinnvoll ist eine gegliederte Checkliste mit Abschnitten.
5. **Bewertungsbogen als Formular rekonstruieren:** Folien 17-18 zeigen ein Formular mit Eingabefeldern, Checkboxes und Skalen. Für React sollte daraus eine interaktive Formular- oder Audit-Komponente entstehen.
6. **Prüfungs- und Lernkontext beachten:** Die Zeugnisformulierungen sind als Lernbeispiele für codierte/deutungsbedürftige Formulierungen gedacht. Umsetzung sollte die Doppeldeutigkeit klar sichtbar machen.
7. **Keine Rechtsberatung darstellen:** Die Inhalte sind Vorlesungsmaterial. In React sollte ein kurzer Hinweis möglich sein: „Vorlesungs-/Lernkontext, keine arbeitsrechtliche Beratung.“

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ApplicationProcessGears` | 1 | Rheinmetall-Bewerbungsprozess als sechsstufige Zahnrad-Prozessgrafik darstellen |
| `SelectionMethodsFlow` | 2 | Personalauswahlmethoden und Assessment-Center-Zusammenhang als Flowchart zeigen |
| `ApplicantEvaluationTable` | 3 | Bewerbungsunterlagen nach Beurteilungskriterien strukturieren |
| `CertificateStructureChecklist` | 4-7 | Bestandteile eines Arbeitszeugnisses als modulare Checkliste abbilden |
| `CertificatePhraseMeaningTable` | 8-16 | Zeugnisformulierungen und Bedeutungen paarweise darstellen |
| `HiddenMeaningFlashcards` | 8-16 | Lernkarten für Zeugniscode: Vorderseite Formulierung, Rückseite Bedeutung |
| `CertificateRatingForm` | 17-18 | Bewertungsbogen als nachgebautes Formular mit Skala 1-5 und Checkboxen |
| `ExamFocusBox` | alle | Kernaussagen und typische Prüfungsfallen hervorheben |

---

# Folienweise Ergänzungen

## Folie 1 - Bewerbungsprozess: Beispiel Rheinmetall

### In der MD vorhanden
Nur der Titel `Bewerbungsprozess - Beispiel Rheinmetall` ist vorhanden. Die eigentliche Prozessgrafik fehlt vollständig.

### Fehlende visuelle Inhalte
Die Folie zeigt eine **horizontale Zahnrad-Prozessgrafik** in Blau. Sechs nummerierte Zahnräder sind von links nach rechts angeordnet. Die Zahnräder symbolisieren, dass die Schritte ineinandergreifen und der Bewerbungsprozess als koordinierter Ablauf funktioniert.

### Inhaltliche Rekonstruktion der Prozessschritte

| Schritt | Prozessphase | Inhalt laut Grafik | React-Hinweis |
|---:|---|---|---|
| 1 | Bewerbung | Bewerber findet eine passende Stelle und bewirbt sich online in wenigen Minuten. | Startkarte mit Dokument-/Bewerbungsicon |
| 2 | Bewerbungscheck | Recruiting-Team sichtet Unterlagen und meldet sich anschließend telefonisch oder per E-Mail. | Prüf-/Check-Icon, Status `screening` |
| 3 | Prüfung durch den Fachbereich | Der zuständige Fachbereich prüft die Bewerbung. | Fachbereichs-/Handshake-Icon |
| 4 | Persönliches Gespräch | Bei überzeugender Bewerbung findet ein Gespräch mit Fachbereich und HR statt. | Gesprächs-/Personen-Icon |
| 5 | Entscheidung | Vertragsdetails werden geklärt und anschließend wird der Arbeitsvertrag erhalten. | Wegweiser-/Entscheidungs-Icon |
| 6 | Willkommen | Willkommen bei Rheinmetall; der Bewerber wird Teil des Teams. | Team-/Onboarding-Icon |

### Fachliche Aussage
Der Bewerbungsprozess wird als mehrstufiger Auswahl- und Abstimmungsprozess dargestellt. Er beginnt bei der Online-Bewerbung und endet mit Vertragsabschluss bzw. Onboarding. Die Grafik verdeutlicht die Verbindung von Recruiting, Fachbereich und HR.

### React-Vorschlag
Komponente: `ApplicationProcessGears`.

Umsetzungsidee:

```text
1 Bewerbung
   -> 2 Bewerbungscheck
      -> 3 Prüfung durch Fachbereich
         -> 4 Persönliches Gespräch
            -> 5 Entscheidung
               -> 6 Willkommen
```

Interaktiv sinnvoll:

- Progress-Stepper mit sechs Schritten.
- Jeder Schritt als Zahnrad- oder Prozesskarte.
- Bei Hover/Click kurze Beschreibung anzeigen.
- Statusfarben: `offen`, `in Prüfung`, `Gespräch`, `Entscheidung`, `Onboarding`.

---

## Folie 2 - Personalauswahl: Übersicht

### In der MD vorhanden
Die Auswahlmethoden sind einzeln als Text vorhanden, aber der Zusammenhang der Grafik fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt ein **Flowchart zur Personalauswahl**. Oben stehen zwei Startpunkte:

- `Analyse der Bewerbung oder Daten`
- `Fragebogen`

Zwischen beiden besteht eine horizontale Verbindung. Von beiden Startpunkten führen gestrichelte Verbindungen zum `Background-Check`. Darunter stehen mehrere Auswahlverfahren, die über Linien aus der oberen Ebene gespeist werden:

- `Vorstellungsgespräch`
- `Testverfahren`
- `Situative Verfahren`
- `Grafologische Gutachten`

Unter `Vorstellungsgespräch`, `Testverfahren` und `Situative Verfahren` liegt eine verbindende Klammer bzw. ein Balken mit der Beschriftung `= Assessment Center`. Ganz unten steht als übergreifender weiterer Prüfungsschritt die `Ärztliche Eignungsuntersuchung`, die über vertikale Pfeile aus den Verfahren erreicht werden kann.

### Inhaltliche Rekonstruktion

| Ebene | Verfahren/Elemente | Bedeutung |
|---|---|---|
| Eingangsanalyse | Analyse der Bewerbung oder Daten | Sichtung vorhandener Bewerbungsinformationen und Unterlagen |
| Eingangsanalyse | Fragebogen | Standardisierte Erhebung zusätzlicher Informationen |
| Prüfung | Background-Check | Prüfung von Hintergrundinformationen; in der Grafik mit Bewerbungsanalyse und Fragebogen verbunden |
| Auswahlverfahren | Vorstellungsgespräch | Persönliche Einschätzung von Person, Motivation, Fit und Verhalten |
| Auswahlverfahren | Testverfahren | Standardisierte Tests, etwa Leistung, Persönlichkeit oder Fähigkeiten |
| Auswahlverfahren | Situative Verfahren | Verhalten in praxisnahen Situationen prüfen |
| Auswahlverfahren | Grafologische Gutachten | Schrift-/Handschriftgutachten; als separates Verfahren dargestellt |
| Kombinationsform | Assessment Center | In der Folie als Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren markiert |
| Zusatzprüfung | Ärztliche Eignungsuntersuchung | Medizinische Eignungsprüfung, in der Grafik als unterster Prüfbaustein |

### Fachliche Aussage
Personalauswahl besteht nicht aus einem einzelnen Gespräch, sondern aus mehreren möglichen Verfahren. Das Assessment Center ist kein einzelnes isoliertes Instrument, sondern entsteht aus der Kombination verschiedener Verfahren.

### React-Vorschlag
Komponente: `SelectionMethodsFlow`.

Darstellung:

```text
Analyse der Bewerbung/Daten <--> Fragebogen
        \                         /
         \---- Background-Check --/

Vorstellungsgespräch | Testverfahren | Situative Verfahren | Grafologische Gutachten
       \_______________ Assessment Center _______________/

Ärztliche Eignungsuntersuchung
```

Interaktiv sinnvoll:

- Flowchart mit klickbaren Knoten.
- Assessment-Center-Bereich als hervorgehobener Container um drei Verfahren.
- `Background-Check` als mittiger Knoten mit gestrichelten Verbindungen.
- Tooltip: `Assessment Center = Kombination aus mehreren Auswahlmethoden`.

---

## Folie 3 - Personalauswahl: Beurteilungskriterien

### In der MD vorhanden
Nur der Titel ist vorhanden. Die Tabelle fehlt vollständig.

### Fehlende visuelle Inhalte
Die Folie zeigt eine zweispaltige Tabelle. Links stehen Kategorien der Bewerbungsunterlagen, rechts konkrete Prüfkriterien. In der Kopfzeile stehen außerdem Beispielangaben:

- `Stelle: Entwicklungsreferent/in`
- `Name: Susi Schweiz`

### Inhaltliche Rekonstruktion der Tabelle

| Bereich | Kriterien / Angaben |
|---|---|
| Stelle | Entwicklungsreferent/in |
| Name | Susi Schweiz |
| Form | Sauber |
| Anschreiben | Gliederung, Länge, Gestaltung, Schlüsselbegriffe, gekündigt/ungekündigt, derzeitige Tätigkeit, Stil |
| Lebenslauf | Angaben zur Person, Form, Besonderheiten, Zertifikatsanalyse, Positionsanalyse, Branchenanalyse |
| Zeugnisse | Ausbildungszeugnisse, Arbeitgeberzeugnisse |
| Referenzen | Aussagekraft, Auskünfte |
| Arbeitsprobe | Aussagekraft |

### Fachliche Aussage
Bewerbungsunterlagen werden nicht nur inhaltlich, sondern auch formal bewertet. Die Tabelle zeigt, dass Anschreiben, Lebenslauf, Zeugnisse, Referenzen und Arbeitsproben jeweils eigene Bewertungskriterien haben.

### React-Vorschlag
Komponente: `ApplicantEvaluationTable`.

Umsetzung:

- Als Tabelle oder Audit-Checklist.
- Kopfbereich mit Beispielstelle und Beispielname.
- Jede Kategorie als Accordion mit Kriterienliste.
- Besonders wichtig: `Form`, `Anschreiben`, `Lebenslauf`, `Zeugnisse`, `Referenzen`, `Arbeitsprobe`.

---

## Folie 4 - Arbeitszeugnis: Bestandteile I

### In der MD vorhanden
Text ist vorhanden, aber ohne erkennbare Struktur als Bestandteillogik.

### Fehlende Struktur / visuelle Aussage
Die Folie zeigt drei Bestandteile eines Arbeitszeugnisses als getrennte Abschnitte:

1. `Beendigungsgrund`
2. `Schlusssatz`
3. `Ausstellungsdatum und Unterschrift`

Jeder Abschnitt hat eine kurze Erklärung. Die Folie ist nicht als Tabelle gesetzt, sondern als klare Dokumentstruktur.

### Inhaltliche Rekonstruktion

| Bestandteil | Inhalt |
|---|---|
| Beendigungsgrund | Beendigungsformel bzw. Beendigungsinitiative, eventuell mit Begründung; beim Zwischenzeugnis Grund für die Erstellung |
| Schlusssatz | Dankes- bzw. Bedauernsformel, Zukunftswünsche, Empfehlung, Verständnis, Bitte um Wiederbewerbung und Wiedereinstellungsaussage, Zukunfts- und Erfolgswunsch |
| Ausstellungsdatum und Unterschrift | Unterschrift des Arbeitgebers bzw. der Personalleitung oder einer Führungskraft |

### Fachliche Aussage
Der Schluss eines Arbeitszeugnisses enthält mehr als nur eine formale Verabschiedung. Besonders Beendigungsformel und Schlusssatz können Bedeutungen transportieren.

### React-Vorschlag
Komponente: `CertificateStructureChecklist` mit Abschnitt `Abschlussbestandteile`.

---

## Folie 5 - Arbeitszeugnis: Bestandteile II

### In der MD vorhanden
Text ist vorhanden, aber ohne visuelle Gliederung.

### Fehlende Struktur / visuelle Aussage
Die Folie zeigt den Beginn bzw. Grundaufbau eines Arbeitszeugnisses. Drei Abschnitte stehen jeweils mit Detailbeschreibung:

1. `Überschrift`
2. `Einleitung`
3. `Tätigkeits-, Positions- und Laufbahnbeschreibung`

### Inhaltliche Rekonstruktion

| Bestandteil | Inhalt |
|---|---|
| Überschrift | Zeugnis, Arbeitszeugnis, Dienstzeugnis, Ausbildungszeugnis, Praktikantenzeugnis, Zwischenzeugnis |
| Einleitung | Titel, Vorname, Adresse, Eintritts- und Austrittsdatum, Tätigkeit |
| Tätigkeits-, Positions- und Laufbahnbeschreibung | Unternehmen, Branche, Laufbahnhistorie, hierarchische Position, Einordnung, Berichtspflicht, Haupt- und Sonderaufgaben, Projekte, Vollmachten und Prokura, Befugnisse, Verantwortung für Umsatz, Budget, Investitionen, Kapital, Bilanzen etc. |

### Fachliche Aussage
Ein Arbeitszeugnis beginnt mit einer formalen Identifikation der Person und einer Beschreibung der Tätigkeit, Position und organisatorischen Einordnung.

### React-Vorschlag
Als erster Abschnitt in `CertificateStructureChecklist`: `Formaler Einstieg und Tätigkeitsbeschreibung`.

---

## Folie 6 - Arbeitszeugnis: Bestandteile III - Leistung und Erfolg

### In der MD vorhanden
Text ist vorhanden, aber für React sollte er klarer gegliedert werden.

### Fehlende Struktur / visuelle Aussage
Die Folie ordnet die **Beurteilung der Leistung und des Erfolgs** in fünf Unterkategorien:

1. Leistungsbereitschaft / Arbeitsmotivation
2. Arbeitsbefähigung
3. Arbeitsweise
4. Arbeitserfolg
5. Führungsfähigkeit

### Inhaltliche Rekonstruktion

| Beurteilungskategorie | Typische Kriterien |
|---|---|
| Leistungsbereitschaft / Arbeitsmotivation | Einsatzwille, Einsatzbereitschaft, Identifikation, Engagement, Initiative, Elan, Dynamik, Zielstrebigkeit, Fleiß, Interesse, Bereitschaft zur Mehrarbeit |
| Arbeitsbefähigung | Belastbarkeit, Ausdauer, Stressstabilität, Flexibilität, Auffassungsgabe, logisch-analytisches Denkvermögen, Systematik, Methodik, Urteilsvermögen, Kreativität, Planung, Organisation, Fachwissen, Ausbildung, Berufserfahrung, praktische Fähigkeiten, Aktualität, Umfang, Tiefe und Anwendung des Fachwissens, Kompetenzen, Fort- und Weiterbildung, Zertifikate |
| Arbeitsweise | Schnelligkeit, Sorgfalt, Zuverlässigkeit, Pflichtgefühl, Gewissenhaftigkeit, Vertrauenswürdigkeit, Loyalität, Systematik, Methode, Planung, Selbständigkeit, Eigenverantwortlichkeit, Genauigkeit, Arbeitssicherheit, Sauberkeit |
| Arbeitserfolg | Zielerreichung, Arbeitsqualität, Arbeitsgüte, Arbeitsquantität, Arbeitstempo, Arbeitsintensität, Arbeitseffizienz, Verwertbarkeit, Termintreue |
| Führungsfähigkeit | Führungsumstände wie Zahl und Art der Mitarbeiter, Leistung, Arbeitszufriedenheit und Motivation der Mitarbeiter |

### Fachliche Aussage
Die Leistungsbeurteilung ist mehrdimensional. Ein gutes React-Lernmodul sollte zeigen, dass Arbeitszeugnisse nicht nur die reine Arbeitsleistung, sondern Motivation, Fähigkeiten, Arbeitsweise, Ergebnisqualität und Führungsverhalten bewerten.

### React-Vorschlag
Komponente: `PerformanceCriteriaGrid` oder Untermodul von `CertificateStructureChecklist`.

---

## Folie 7 - Arbeitszeugnis: Bestandteile IV - Gesamtbeurteilung und Sozialverhalten

### In der MD vorhanden
Text ist vorhanden, aber die Struktur sollte für React klarer abgebildet werden.

### Fehlende Struktur / visuelle Aussage
Die Folie ergänzt die Arbeitszeugnisstruktur um:

- Zusammenfassende Beurteilung
- Beurteilung des Sozialverhaltens
- Verhalten gegenüber Vorgesetzten und Kollegen
- Verhalten gegenüber Mitarbeitern
- Verhalten gegenüber Externen
- Soziale Kompetenzen

### Inhaltliche Rekonstruktion

| Bereich | Kriterien / Formulierungsfelder |
|---|---|
| Zusammenfassende Beurteilung | Zufriedenheitsaussage, Erwartungshaltung, Loyalität, Ehrlichkeit, Pflichtbewusstsein, Gewissenhaftigkeit |
| Verhalten gegenüber Vorgesetzten und Kollegen | vorbildlich oder einwandfrei, Teamfähigkeit, Kooperation, Hilfsbereitschaft, Freundlichkeit, Wertschätzung, Anerkennung, Beliebtheit, Informationsbereitschaft |
| Verhalten gegenüber Mitarbeitern | vorbildlich oder einwandfrei, Teamfähigkeit, Kooperation, Hilfsbereitschaft, Freundlichkeit, Wertschätzung, Anerkennung, Beliebtheit, Informationsbereitschaft |
| Verhalten gegenüber Externen | vorbildlich und einwandfrei, Auftreten, Kontaktfähigkeit, Gesprächsverhalten, Verhandlungsstärke, Akquisitionsstärke, Kundenzufriedenheit |
| Soziale Kompetenzen | Vertrauenswürdigkeit, Ehrlichkeit, Integrität, Loyalität, Diskretion, Kompromissbereitschaft, Durchsetzungsfähigkeit, Überzeugungsvermögen |

### Fachliche Aussage
Arbeitszeugnisse bewerten neben Leistung auch Sozialverhalten. Die Reihenfolge der genannten Personengruppen und die Bewertung des Umgangs können in der Praxis bedeutsam sein.

### React-Vorschlag
Komponente: `SocialBehaviorCriteria` mit drei Beziehungsebenen: intern oben, Mitarbeitende, externe Stakeholder.

---

## Folie 8 - Arbeitszeugnisse: Texte und Bedeutung - Leistung I

### In der MD vorhanden
Die Texte sind vorhanden, aber ohne stabile Tabellenstruktur.

### Fehlende visuelle Inhalte
Die Folie zeigt eine zweispaltige Zuordnung `Zeugnistext zur Leistung` -> `Bedeutung`.

### Inhaltliche Rekonstruktion

| Zeugnistext zur Leistung | Bedeutung |
|---|---|
| War für die Position die ideale Besetzung | Sehr gute Eignung |
| Hatte Verständnis für seine Arbeit | Ungenügende Leistungsbereitschaft |
| Hatte Gelegenheit, sich Wissen anzueignen | Hat die Gelegenheit nicht genutzt |

### Fachliche Aussage
Arbeitszeugnisformulierungen können positiv klingen, aber eine negative Bedeutung transportieren. Die Tabelle sollte als „Formulierungs-Code“ visualisiert werden.

### React-Vorschlag
Komponente: `CertificatePhraseMeaningTable` mit Kategorie `Leistung`.

---

## Folie 9 - Arbeitszeugnisse: Texte und Bedeutung - Leistung II

### Inhaltliche Rekonstruktion

| Zeugnistext zur Leistung | Bedeutung |
|---|---|
| Verfügte über Fachwissen und ein gesundes Selbstvertrauen | Überspielte geringes Fachwissen mit Geschwätzigkeit |
| Hielt jedem Termindruck stand | Gute Ausdauer und Belastbarkeit |
| Bevorzugte eine gleichbleibende Tätigkeit | Schlechte Ausdauer und Belastbarkeit |

### Fachliche Aussage
Die gleiche Kategorie `Leistung` differenziert zwischen fachlicher Qualität, Belastbarkeit und Arbeitspräferenz. Besonders die Formulierung „gesundes Selbstvertrauen“ ist als Warnsignal zu markieren.

### React-Vorschlag
Als Flashcards umsetzen:

- Vorderseite: Zeugnisformulierung
- Rückseite: Bedeutung
- Schwierigkeit: mittel bis hoch, weil Formulierungen teilweise positiv wirken

---

## Folie 10 - Arbeitszeugnisse: Texte und Bedeutung - Leistung III

### Inhaltliche Rekonstruktion

| Zeugnistext zur Leistung | Bedeutung |
|---|---|
| Hat alle Aufgaben in seinem Interesse und im Interesse der Firma gelöst | Beging schwere Unkorrektheiten |
| Nutzt jede Chance, Fachwissen fortzuentwickeln | Sehr gute Entwicklung |
| Hatte Gelegenheit, sich Wissen anzueignen | Hat die Gelegenheit nicht genutzt |

### Fachliche Aussage
Wichtig ist die Reihenfolge und Gewichtung in Formulierungen. `in seinem Interesse und im Interesse der Firma` klingt neutral, wird hier aber negativ gedeutet. Eine gute React-Umsetzung sollte diese Problemstellen hervorheben.

---

## Folie 11 - Arbeitszeugnisse: Texte und Bedeutung - Erfolg

### Inhaltliche Rekonstruktion

| Zeugnistext zum Erfolg | Bedeutung |
|---|---|
| Erzielte selbständig optimale Lösungen | Sehr gute Arbeitsweise mit sehr gutem Erfolg |
| War bei unseren Kunden schnell beliebt | Machte schnell Zugeständnisse |
| Bemüht, den Anforderungen gerecht zu werden | Die Bemühungen führten nicht zum Erfolg |
| War bei allen Problemen kompromissbereit | War besonders nachgiebig |

### Fachliche Aussage
Die Folie trennt zwischen Arbeitserfolg und Verhalten gegenüber Kunden/Problemen. Einige scheinbar positive Soft-Skill-Formulierungen können negativ bewertet werden.

### React-Vorschlag
Darstellung mit Warnhinweis-Chips:

- `positiv gemeint`
- `ambivalent`
- `negativ codiert`

---

## Folie 12 - Arbeitszeugnisse: Texte und Bedeutung - Allgemeine Formulierungen / Notenskala

### In der MD vorhanden
Die Formulierungen und Bedeutungen sind vorhanden, aber die Zuordnung muss sauber als Notenskala dargestellt werden.

### Inhaltliche Rekonstruktion

| Zeugnistext - allgemeine Formulierung | Bedeutung / Note |
|---|---|
| Stets zu unserer vollsten Zufriedenheit | Sehr gut |
| Stets zu unserer vollen Zufriedenheit | Gut |
| Zu unserer vollen Zufriedenheit | Befriedigend |
| Zu unserer Zufriedenheit | Ausreichend |
| Im Großen und Ganzen zu unserer Zufriedenheit | Mangelhaft |
| Hat sich bemüht / Zu unserer Zufriedenheit zu erledigen versucht | Ungenügend |

### Fachliche Aussage
Die Zufriedenheitsformel bildet eine zentrale Notenskala im Arbeitszeugnis. Kleine Wörter wie `stets`, `voll` und `vollsten` verändern die Bedeutung stark.

### React-Vorschlag
Komponente: `SatisfactionFormulaScale`.

Umsetzungsidee:

```text
Sehr gut       -> stets + vollsten
Gut            -> stets + vollen
Befriedigend   -> vollen
Ausreichend    -> Zufriedenheit
Mangelhaft     -> im Großen und Ganzen
Ungenügend     -> bemüht / versucht
```

Interaktiv sinnvoll:

- Farbige Notenskala von 1 bis 6.
- Markierung der Schlüsselwörter.
- Mini-Quiz: „Welche Note steckt in dieser Formulierung?“

---

## Folie 13 - Arbeitszeugnisse: Texte und Bedeutung - Sozialverhalten I

### Inhaltliche Rekonstruktion

| Zeugnistext - Sozialverhalten | Bedeutung |
|---|---|
| Führung der Mitarbeiter war stets vorbildlich | Hervorragende Führungskraft |
| War seinen Mitarbeitern jederzeit ein verständnisvoller Vorgesetzter | War nicht durchsetzungsfähig und besaß keine Autorität |
| Vorbild für Vorgesetzte, Kollegen und Mitarbeiter | Sehr gutes Sozialverhalten |
| Zeigte durchweg eine erfrischende Offenheit | War immer sehr vorlaut |
| Für die Belange der Belegschaft großes Einfühlungsvermögen | Liebschaften |

### Fachliche Aussage
Sozialverhalten kann durch scheinbar wohlwollende Begriffe negativ codiert werden. Besonders „verständnisvoll“, „erfrischende Offenheit“ und „Einfühlungsvermögen“ sind in der Folie als kritische Bedeutungen eingeordnet.

### React-Vorschlag
Komponente: `SocialBehaviorCodeCards`.

---

## Folie 14 - Arbeitszeugnisse: Texte und Bedeutung - Sozialverhalten II

### Inhaltliche Rekonstruktion

| Zeugnistext - Sozialverhalten | Bedeutung |
|---|---|
| Gesellige Art zur Verbesserung des Betriebsklimas | Übermäßiger Alkoholgenuss |
| Aufgaben mit vollem Erfolg delegiert | War faul und ließ andere darunter leiden |
| Durch seine Bildung ein gesuchter Gesprächspartner | War geschwätzig, führte lange Privatgespräche |
| Wusste sich gut zu verkaufen | Tat selbst nicht viel, schmeichelte sich ein |

### Fachliche Aussage
Die Folie zeigt, dass auch soziale und kommunikative Formulierungen in Arbeitszeugnissen verdeckte negative Botschaften enthalten können.

### React-Vorschlag
Als `HiddenMeaningFlashcards` umsetzen. Lernmodus mit Antwortauswahl:

- `positive Bedeutung`
- `neutrale Bedeutung`
- `kritische Bedeutung`

---

## Folie 15 - Arbeitszeugnisse: Texte und Bedeutung - Beendigungsgrund

### Inhaltliche Rekonstruktion

| Zeugnistext - Beendigungsgrund | Bedeutung |
|---|---|
| Auf eigenen Wunsch | Kündigung durch den/die Arbeitnehmer/in |
| In beiderseitigem / gegenseitigem Einvernehmen | Aufhebungsvertrag wegen Unstimmigkeiten |
| Aus organisatorischen Gründen | „Ein vorgeschobener Grund“ |
| Endet umgehend mit dem heutigen Tage | Außerordentliche, fristlose Entlassung |

### Fachliche Aussage
Auch der Beendigungsgrund transportiert Informationen über die Trennungssituation. Die Folie zeigt, dass vermeintlich neutrale Formulierungen unterschiedliche Hintergründe signalisieren können.

### React-Vorschlag
Darstellung als `TerminationReasonDecoder` mit zwei Spalten `Formulierung` und `Interpretation`.

---

## Folie 16 - Arbeitszeugnisse: Texte und Bedeutung - Schlusssatz

### Inhaltliche Rekonstruktion

| Zeugnistext - Schlusssatz | Bedeutung |
|---|---|
| Wir wünschen für die Zukunft weiterhin viel Erfolg! | War für das Unternehmen sehr wertvoll |
| Wir wünschen für die Zukunft alles Gute! | Neutrale Formulierung |
| Wir wünschen für die Zukunft vor allem Gesundheit! | War dauernd krank |
| Wir wünschen für die Zukunft viel Glück! | Es gab Probleme in der Zusammenarbeit |

### Fachliche Aussage
Der Schlusssatz ist nicht nur Höflichkeitsformel. Zukunftswünsche können indirekte Bewertungen enthalten. Besonders „weiterhin viel Erfolg“ wird als positiv dargestellt, während „vor allem Gesundheit“ und „viel Glück“ kritisch interpretiert werden.

### React-Vorschlag
Komponente: `ClosingFormulaMeaning`.

---

## Folie 17 - Arbeitszeugnisse: Beispiel Bewertungsbogen I

### In der MD vorhanden
Nur der Titel ist vorhanden. Der gesamte Bewertungsbogen fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt einen **Arbeitszeugnis Bewertungsbogen** als zweispaltiges Formular. Links befinden sich Eingabefelder für Stammdaten, Zeugnisausstellung, Arbeitsverhältnis, Tätigkeitsbeschreibung und besondere Erfolge. Rechts befinden sich Bewertungsskalen für Leistung und Verhalten.

### Formularstruktur links

#### Persönliche Angaben
- Anrede, Titel
- Name, Vorname
- Geburtsdatum
- Geburtsort
- Eintrittsdatum
- Austrittsdatum
- Abteilung
- Positionsbezeichnung

#### Zeugnisausstellung
- Aussteller Bewertungsbogen
- Aussteller Arbeitszeugnis
- Voraussichtliches Ausstellungsdatum

#### Arbeitsverhältnis
- Berufsgruppe: Beispielwert `Angestellte`
- Beendigungsgrund des Arbeitsverhältnisses / Grund für das Zwischenzeugnis: Beispielwert `Zw.zeugnis`

#### Freitextbereiche
- Tätigkeitsbeschreibung
- Besondere Erfolge

### Formularstruktur rechts: Beurteilung der Leistung
Bewertungshinweis: **Notenstufen von 1 = sehr gut bis 5 = mangelhaft**. Zu jedem Kriterium gibt es Checkboxen für `1`, `2`, `3`, `4`, `5` sowie `keine Angabe`.

| Leistungsbereich | Skala |
|---|---|
| Fachkenntnis | 1-5 + keine Angabe |
| Weiterbildung | 1-5 + keine Angabe |
| Auffassungs- und Denkvermögen | 1-5 + keine Angabe |
| Belastbarkeit und Leistungsfähigkeit | 1-5 + keine Angabe |
| Arbeitsweise | 1-5 + keine Angabe |
| Leistungsbereitschaft | 1-5 + keine Angabe |
| Arbeitserfolg | 1-5 + keine Angabe |
| Leistungsbeurteilung gesamt | 1-5 + keine Angabe |
| Prüfungsergebnis (Auszubildende) | 1-5 + keine Angabe |

### Formularstruktur rechts: Beurteilung des Verhaltens
Auch hier gilt: **Notenstufen von 1 = sehr gut bis 5 = mangelhaft**.

| Verhaltensbereich | Skala / Option |
|---|---|
| Verhalten intern | 1-5 + keine Angabe |
| Zusammenarbeit | Checkbox `positiv hervorheben` + `keine Angabe` |
| Verhalten extern | 1-5 + keine Angabe |
| Auftreten | Checkbox `positiv hervorheben` + `keine Angabe` |
| Verhandlung | Checkbox `positiv hervorheben` + `keine Angabe` |

### Zusätzliche Kompetenzen
Unterhalb der Verhaltensbewertung stehen mehrere leere Zeilen/Platzhalter für zusätzliche Kompetenzen. Für jede Kompetenz gibt es eine Checkbox `positiv hervorheben`.

### Fachliche Aussage
Der Bewertungsbogen operationalisiert das Arbeitszeugnis: Aus Personendaten, Tätigkeitsbeschreibung, Leistungsbewertung, Verhaltensbewertung und Zusatzkompetenzen wird die Grundlage für ein Zeugnis erstellt.

### React-Vorschlag
Komponente: `CertificateRatingForm`.

Umsetzung:

- Linke Spalte: Stammdaten-Formular.
- Rechte Spalte: Rating-Matrix.
- Skala 1-5 als Radio-Buttons.
- `keine Angabe` als separate Option.
- Zusatzkompetenzen als dynamische Liste.
- Exportoption: JSON oder Markdown-Zusammenfassung.

---

## Folie 18 - Arbeitszeugnisse: Beispiel Bewertungsbogen II

### In der MD vorhanden
Nur der Titel ist vorhanden. Die zweite Seite des Bewertungsbogens fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt den unteren/abschließenden Teil des Bewertungsbogens. Im Mittelpunkt steht die **Schlussformulierung**. Darunter folgen Unterschriftsfelder.

### Inhaltliche Rekonstruktion

#### Schlussformulierung

| Bereich | Optionen |
|---|---|
| Dankes-Bedauern-Formel | Checkboxen für 1, 2, 3, 4, 5 sowie `keine Angabe` |
| Wiedereinstellungsversprechen | Checkbox `positiv hervorheben` sowie `keine Angabe` |
| Empfehlung | Checkbox `positiv hervorheben` sowie `keine Angabe` |

#### Unterschriftsbereiche

| Feld | Beschreibung |
|---|---|
| Datum | Linkes Datumsfeld für Vorgesetztenbereich |
| Unterschrift Vorgesetzter | Unterschriftslinie rechts oben |
| Datum | Zweites Datumsfeld für Personalbereich |
| Unterschrift Personalabteilung | Unterschriftslinie rechts unten |

### Fachliche Aussage
Der Schlussteil des Bewertungsbogens steuert, ob Dank, Bedauern, Wiedereinstellungsaussage und Empfehlung aufgenommen werden. Diese Elemente hängen mit den vorherigen Folien zu Schlusssätzen und Beendigungsformeln zusammen.

### React-Vorschlag
Unterkomponente: `CertificateClosingEvaluation`.

Umsetzung:

- `Dankes-Bedauern-Formel` als 1-5-Skala.
- `Wiedereinstellungsversprechen` und `Empfehlung` als Boolean-Optionen.
- Unterschriftsfelder als nicht-editierbare visuelle Platzhalter oder Formularfelder.

---

# Kompakte Gesamtstruktur für React

## Empfohlene Modulgliederung

```text
HR6: Personalauswahl und Arbeitszeugnisse
├─ 1. Bewerbungsprozess
│  └─ Rheinmetall-Prozess: Bewerbung bis Willkommen
├─ 2. Personalauswahlverfahren
│  ├─ Bewerbungsanalyse
│  ├─ Fragebogen
│  ├─ Background-Check
│  ├─ Vorstellungsgespräch
│  ├─ Testverfahren
│  ├─ Situative Verfahren
│  ├─ Grafologische Gutachten
│  ├─ Assessment Center
│  └─ Ärztliche Eignungsuntersuchung
├─ 3. Beurteilung von Bewerbungen
│  └─ Kriterien: Form, Anschreiben, Lebenslauf, Zeugnisse, Referenzen, Arbeitsprobe
├─ 4. Aufbau eines Arbeitszeugnisses
│  ├─ Formale Bestandteile
│  ├─ Tätigkeitsbeschreibung
│  ├─ Leistungsbeurteilung
│  ├─ Sozialverhalten
│  ├─ Beendigungsgrund
│  └─ Schlusssatz
├─ 5. Zeugnisformulierungen und Bedeutungen
│  ├─ Leistung
│  ├─ Erfolg
│  ├─ Allgemeine Zufriedenheitsformeln
│  ├─ Sozialverhalten
│  ├─ Beendigungsgrund
│  └─ Schlusssatz
└─ 6. Bewertungsbogen Arbeitszeugnis
   ├─ Stammdaten
   ├─ Leistungsbewertung
   ├─ Verhaltensbewertung
   ├─ Zusatzkompetenzen
   └─ Schlussformulierung / Unterschriften
```

---

# Prüfungsrelevante Kernaussagen

1. **Bewerbungsprozesse sind mehrstufig:** Bewerbung, Check, Fachbereich, Gespräch, Entscheidung und Willkommen/Onboarding greifen ineinander.
2. **Personalauswahl nutzt mehrere Verfahren:** Bewerbungsanalyse, Fragebogen, Background-Check, Gespräch, Tests, situative Verfahren und ggf. medizinische Untersuchung.
3. **Assessment Center ist eine Kombination:** In der Folie umfasst es Vorstellungsgespräch, Testverfahren und situative Verfahren.
4. **Bewerbungsunterlagen werden formal und inhaltlich bewertet:** Form, Anschreiben, Lebenslauf, Zeugnisse, Referenzen und Arbeitsproben haben jeweils eigene Kriterien.
5. **Arbeitszeugnisse haben eine feste Struktur:** Überschrift, Einleitung, Tätigkeitsbeschreibung, Leistungsbeurteilung, Sozialverhalten, Beendigungsgrund, Schlusssatz, Datum/Unterschrift.
6. **Kleine Formulierungsunterschiede ändern die Bewertung:** `stets`, `voll`, `vollsten`, `bemüht` und `versucht` sind zentrale Signalwörter.
7. **Schlusssätze und Beendigungsgründe sind bedeutungstragend:** Zukunftswünsche, Bedauern, Wiederbewerbung und Beendigungsformel können indirekte Bewertungen enthalten.
8. **Bewertungsbögen operationalisieren Zeugnisse:** Sie strukturieren persönliche Angaben, Tätigkeit, Leistung, Verhalten, Zusatzkompetenzen und Schlussformulierung.

---

# Datenstruktur-Vorschlag für React

```js
export const hr6CertificatePhrases = [
  {
    category: "Leistung",
    phrase: "War für die Position die ideale Besetzung",
    meaning: "Sehr gute Eignung",
    sentiment: "positive"
  },
  {
    category: "Leistung",
    phrase: "Hatte Verständnis für seine Arbeit",
    meaning: "Ungenügende Leistungsbereitschaft",
    sentiment: "negative"
  },
  {
    category: "Allgemeine Formulierungen",
    phrase: "Stets zu unserer vollsten Zufriedenheit",
    meaning: "Sehr gut",
    grade: 1,
    sentiment: "positive"
  },
  {
    category: "Allgemeine Formulierungen",
    phrase: "Hat sich bemüht / Zu unserer Zufriedenheit zu erledigen versucht",
    meaning: "Ungenügend",
    grade: 6,
    sentiment: "negative"
  }
];
```

```js
export const hr6SelectionMethods = [
  "Analyse der Bewerbung oder Daten",
  "Fragebogen",
  "Background-Check",
  "Vorstellungsgespräch",
  "Testverfahren",
  "Situative Verfahren",
  "Grafologische Gutachten",
  "Assessment Center",
  "Ärztliche Eignungsuntersuchung"
];
```

```js
export const hr6CertificateRatingCriteria = {
  performance: [
    "Fachkenntnis",
    "Weiterbildung",
    "Auffassungs- und Denkvermögen",
    "Belastbarkeit und Leistungsfähigkeit",
    "Arbeitsweise",
    "Leistungsbereitschaft",
    "Arbeitserfolg",
    "Leistungsbeurteilung gesamt",
    "Prüfungsergebnis (Auszubildende)"
  ],
  behavior: [
    "Verhalten intern",
    "Zusammenarbeit",
    "Verhalten extern",
    "Auftreten",
    "Verhandlung"
  ],
  closing: [
    "Dankes-Bedauern-Formel",
    "Wiedereinstellungsversprechen",
    "Empfehlung"
  ]
};
```

---

# Qualitätscheck vor React-Konvertierung

- [ ] Folie 1 als sechsstufiger Bewerbungsprozess enthalten.
- [ ] Folie 2 als Flowchart der Personalauswahlverfahren enthalten.
- [ ] Folie 3 als Beurteilungskriterien-Tabelle rekonstruiert.
- [ ] Folien 4-7 als strukturierter Aufbau eines Arbeitszeugnisses umgesetzt.
- [ ] Folien 8-16 als korrekte Formulierung-Bedeutung-Tabellen umgesetzt.
- [ ] Zufriedenheitsformeln als Notenskala visualisiert.
- [ ] Folien 17-18 als Bewertungsbogen/Formular nachgebaut.
- [ ] Keine Tabelle nur als Bild übernommen, sofern Inhalt semantisch nachbaubar ist.
- [ ] Markitdown-Spaltenfehler korrigiert.
- [ ] Lernmodus/Quiz für Zeugnisformulierungen vorbereitet.
