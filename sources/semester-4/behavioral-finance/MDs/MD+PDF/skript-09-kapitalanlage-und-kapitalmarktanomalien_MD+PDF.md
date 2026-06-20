# skript-09-kapitalanlage-und-kapitalmarktanomalien_MD+PDF - Kapitalanlage und Kapitalmarktanomalien: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-09-kapitalanlage-und-kapitalmarktanomalien.md` um die visuellen Inhalte, die bei der Markdown-Extraktion aus `skript-09-kapitalanlage-und-kapitalmarktanomalien.pdf` verloren gegangen, nur als kaputte Tabellen/gespiegelte Achsenlabels übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von MD zu React keine Diagramme, Formeln, Tabellenlogiken, Schaubilder oder Bildaussagen verloren gehen.

**Quelle:** `skript-09-kapitalanlage-und-kapitalmarktanomalien.pdf` mit 47 Folien und die dazugehörige Markitdown-Datei `skript-09-kapitalanlage-und-kapitalmarktanomalien.md`.

**Wichtig:** Wiederkehrende Layout-Elemente wie HBW-Logo, graue Kopfzeile, Folien-Footer (`Behavioral Finance / CS / Folie XXX`) und Copyright-Zeile sind keine fachlichen Inhalte und können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind die Diagramme (Rendite-/Beta-Charts, Kurstrend-Phasen), Formeln (Dividendenbarwertmodell), Tabellen (De Bondt/Thaler, Fama/French, Momentum-Matrix), Schaubilder (Pfeil-/Klammer-Logiken, Zeitstrahl) und Icons.

---

## Globale Umsetzungsregeln für React

1. **Gespiegelte/zerbrochene Diagrammlabels nicht übernehmen:** Mehrere Empirie-Folien (20, 23, 42, 43) enthalten in der MD gespiegelte Achsenbeschriftungen ("etidneR ehcilrhäJ" = "Jährliche Rendite") und verstümmelte Zahlenreihen. Dieser Text darf NICHT in React übernommen werden; die Diagramme sind aus dem Render neu aufzubauen.
2. **Kaputte Bildtabellen neu aufbauen:** Als Bild eingebettete Datentabellen (Ashton 2003, Fama/French 1998, Chan et al. 2003, BMW-Beispiel, Fama/French 1992 Size-Matrix) sind in der MD zerstört. Wo Werte im Render verlässlich lesbar sind, werden sie als echte `DataTable` rekonstruiert; wo nicht, nur Struktur + Platzhalter.
3. **Anomalie-Folien einheitlich modellieren:** Folien 9-16 folgen demselben Muster (Anomalie + Beschreibung + "Mögliche Erklärung"). Sie sollten über eine wiederverwendbare `AnomalyCard`/`AnomalyTable` abgebildet werden.
4. **Empirie-Charts als zweiachsige Combo-Diagramme:** Winner-Loser, Value und Momentum nutzen jeweils Quantilportfolios mit Rendite-Linie (linke y-Achse) und Beta-Linie (rechte y-Achse). Eine gemeinsame Chart-Komponente mit Props ist sinnvoll.
5. **Pfeil-/Klammer-Schaubilder semantisch erhalten:** Gegenüberstellungen (Folie 6), Ratio-Verzweigungen (Folie 22), Mean-Reversion-Flüsse (Folie 32) und Zeitstrahl-Abzinsung (Folien 35/36) tragen fachliche Bedeutung und sollten als SVG/Flow-Komponenten umgesetzt werden.
6. **Callouts/Merksätze erhalten:** Hellblau/beige hinterlegte Kernaussagen (Effizienz-Schlusssatz, Shiller-Zitat, "Vergangene Verlierer sind zukünftige Gewinner!", "Antizyklisches Handeln") als `Callout`-Komponente abbilden.
7. **Vierphasiges Kurstrend-Muster als eine parametrisierte Komponente:** Folien 44-47 zeigen dieselbe Ist-/Fair-Value-Kurve in vier Phasen mit wandernder Phasenmarkierung und wechselnder Füllfarbe (grün = Unterreaktion, rot = Übertreibung).
8. **Quellenangaben erhalten:** De Bondt/Thaler (1985), Chopra/Lakonishok/Ritter (1992), Fama/French (1992, 1998), Chan et al. (2003), Stotz et al. (2006), Rouwenhorst (1998), Ashton (2003), FIFAM als `SourceNote` beibehalten.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `ChapterTitleSlide` | 1 | Kapitel-Titelfolie mit optionalem Bildband |
| `AgendaList` | 2 | 10-Punkte-Agenda mit aktivem Kapitelmarker |
| `EfficiencyFormsCard` | 3 | Drei Formen der Informationseffizienz gestuft |
| `AssumptionsList` | 4 | Drei Annahmen zur Informationseffizienz |
| `ParadoxLoop` | 5 | Grossman/Stiglitz-Logikkreislauf |
| `ComparisonBraces` / `TwoColumnCompare` | 6 | Traditional vs. Behavioral Finance |
| `StudyEvidenceCard` + `DataTable` | 7 | Ashton-Studie mit Ergebnistabelle |
| `EvidenceList` + `ImageStrip` | 8 | Nicht-Informationen, Crash 1987 |
| `AnomalyCard` / `AnomalyTable` | 9-16 | Kapitalmarktanomalien einheitlich |
| `ScenarioCard` (`SupermarketVsMarket`) | 15-16 | Supermarkt- vs. Kapitalmarktverhalten |
| `SectionOverview` | 17 | Fünf Effekte als Navigationskarten |
| `StudySetupCard` | 18 | De Bondt/Thaler Studienaufbau |
| `CumulativeReturnChart` | 19 | CAR-Kurven Loser/Winner |
| `QuantilePerformanceChart` | 20, 23 | Rendite-/Beta-Combo über Quantile |
| `ExplanationList` + `Callout` | 21 | Psychologische Erklärungen Winner-Loser |
| `RatioBranch` | 22 | Buchwert/Marktwert-Verzweigung |
| `ValueGrowthBarChart` | 24 | Fallende Balken Value->Growth |
| `SurvivorshipFunnel` | 25 | Affe-Jodie-Ausscheidungstrichter |
| `InternationalReturnsTable` | 26 | Fama/French (1998) Länder-Tabelle |
| `RiskHypothesisChart` | 27 | Rendite über CAPM-Beta (Theorie) |
| `TheoryVsEmpiricsChart` | 28 | Scatterplot + Theorie/Empirie-Linien |
| `BulletCallout` | 29, 30 | Stichpunktlisten mit Schluss-Callout |
| `GrowthPersistenceTable` | 31 | Chan et al. (2003) Wachstumstabelle |
| `MeanReversionFlow` | 32 | Growth/Value-Pfeil-Schaubild |
| `BulletListWithArrows` | 33 | Mean-Reversion-Ursachen |
| `SummaryCard` | 34 | Zusammenfassung Value/Growth |
| `DiscountingTimeline` | 35, 36 | Zeitstrahl-Abzinsung Dividenden |
| `FormulaBlock` + `ThreePhaseList` | 37 | Summenformel + Modellphasen |
| `RiskPremiumExample` | 38 | BMW-Berechnungstabelle (10,65 %) |
| `KeyDriverList` | 39 | Risikoprämie als Performance-Treiber |
| `RiskPremiumCycleChart` | 40 | Schwingungskurve, antizyklisch |
| `SizeEffectTable` | 41 | Fama/French Size-Matrix (SMB) |
| `MomentumQuantileChart` | 42 | Momentum-Rendite über Quantile |
| `MomentumHorizonMatrix` | 43 | Heatmap + Balkendiagramm Laufzeiten |
| `TrendPhaseChart` | 44-47 | Vierphasiges Kurstrend-Muster |

---

# Folienweise Ergänzungen

## Folie 1 - Kapitel 9: Kapitalanlage und Kapitalmarktanomalien (Titelfolie)

### In der MD vorhanden
Titelzeilen vorhanden: "Behavioral Finance", "Kapitel 9", "Kapitalanlage und Kapitalmarktanomalien", Versionskennung "V26-05-17". Fußzeile "Behavioral Finance / CS / Folie 294".

### Fehlende visuelle Inhalte
Reine Titelfolie. Oben eine horizontale Reihe aus vier rechteckigen Fotos (Bildband): (1) Hand an einem Laptop/Tablet mit HBW-Logo auf dem Bildschirm, (2) lächelnde junge Frau (Porträt), (3) zwei Personen im Gespräch, (4) modernes Glas-/Bürogebäude. Hintergrund hellblau mit diagonalem Verlauf, unten zentriert der Kapiteltitel. Das HBW-Logo oben rechts ist reines Layout.

### Visuelle Rekonstruktion
```text
[Foto Laptop+Logo][Foto Frau][Foto Gespräch][Foto Gebäude]
            Kapitel 9
   Kapitalanlage und Kapitalmarktanomalien
```

### Inhaltliche Rekonstruktion
Kein Fachinhalt; nur Kapitelüberschrift.

### Fachliche Aussage
Eröffnungsfolie zu Kapitel 9 über Kapitalanlage und Kapitalmarktanomalien.

### React-Vorschlag
`ChapterTitleSlide` (globales Template): Bildband oben optional als dekorative Image-Strip-Komponente, darunter Kapitel-Titel zentriert.

---

## Folie 2 - Agenda

### In der MD vorhanden
Die vollständige 10-Punkte-Agenda ist als nummerierte Liste vorhanden.

### Fehlende visuelle Inhalte
Punkt 9 "Kapitalmarktanomalien" ist auf der Folie blau und fett hervorgehoben (aktiver Kapitelmarker) - die übrigen Punkte sind schwarz. Diese Hervorhebung geht in der MD verloren.

### Visuelle Rekonstruktion
```text
1. Einführung
2. Das Modell der zwei Systeme nach Kahneman
3. Heuristiken und kognitive Verzerrungen
4. Entscheidungen unter Unsicherheit
5. Die Rolle der Zeit in der Ökonomie
6. Die Prospect Theory und ihre Konsequenzen
7. Altersvorsorge und private Finanzplanung
8. Spekulationsblasen an Finanzmärkten
9. Kapitalmarktanomalien        <- aktiv (blau/fett)
10. Behavioral Corporate Finance
```

### Inhaltliche Rekonstruktion
Kapitelübersicht des gesamten Behavioral-Finance-Kurses; Kapitel 9 ist das aktuelle.

### Fachliche Aussage
Verortet das aktuelle Kapitel (9 Kapitalmarktanomalien) im Gesamtaufbau der Vorlesung.

### React-Vorschlag
`AgendaList` mit `activeIndex={8}`; aktiver Punkt via Accent-Color (`--color-module-*`) hervorgehoben.

---

## Folie 3 - Traditionelle Kapitalmarkttheorie: Informationseffizienz (Effiziente Märkte)

### In der MD vorhanden
Fama-Zitat und die drei Formen der Informationseffizienz (schwach, halb-streng, streng) sind vollständig als Text vorhanden, ebenso der Schlusskasten.

### Fehlende visuelle Inhalte
Blaue Zwischenüberschrift "Traditional Finance: Effiziente Märkte". Der Schlusssatz steht in einem hellblau hinterlegten, zentrierten Hervorhebungskasten (Callout) am unteren Folienrand: "Es lassen sich keine risikoadjustierten Überrenditen erzielen, Prognosen sind ‚überflüssig'. Jedes Risiko hat seinen richtigen Preis. Psychologie spielt keine Rolle." In der MD ist die Kastenformatierung verloren.

### Visuelle Rekonstruktion
Drei fett markierte Stichwörter führen die Bullets an: **Schwache** / **Halb-strenge** / **Strenge** Form.

### Inhaltliche Rekonstruktion
| Form der Informationseffizienz | In den (heutigen) Kursen enthalten |
|---|---|
| Schwache Form | Vergangene Informationen |
| Halb-strenge Form | Öffentlich zugängliche Informationen |
| Strenge Form | Öffentlich zugängliche und private Informationen |

Fama (Definition, exakt wie auf der Folie): "The market price at any time instantly reflects all available information in the market."

### Fachliche Aussage
Die traditionelle Theorie unterscheidet drei Stufen der Informationseffizienz; bei Effizienz sind weder Überrenditen erzielbar noch Prognosen sinnvoll, und Psychologie ist irrelevant.

### React-Vorschlag
`EfficiencyFormsCard` (drei gestufte Cards) + `Callout` (Variante info) für den Schlusssatz.

---

## Folie 4 - Traditionelle Kapitalmarkttheorie: Argumentation zugunsten der Informationseffizienz

### In der MD vorhanden
Die drei nummerierten Annahmen und der Schlussabsatz zur Konkurrenz unter Aktienhändlern sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine eigenständige Fachgrafik. Hervorhebungen im Fließtext gehen verloren: fett "rational", "unabhängige Abweichungen der Rationalität", "Arbitrage-Möglichkeit". (Hinweis: Diese Folie ist im Render relativ klein/grau dargestellt, der Text bleibt aber lesbar.)

### Visuelle Rekonstruktion
```text
Annahme 1: alle Investoren rational -> gleiche Interpretation neuer Informationen
Annahme 2: bei Interpretationsabweichungen heben sich diese auf
           (gleich viele Optimisten/Pessimisten)
Annahme 3: Profis nutzen Arbitrage -> Preis kehrt zum effizienten Niveau zurück
```

### Inhaltliche Rekonstruktion
1. Alle Investoren sind rational und kommen daher zur gleichen Interpretation neuer Informationen.
2. Wenn es Abweichungen bzgl. der Interpretation neuer Informationen gibt, wird ein informationseffizienter Markt immer noch durch unabhängige Abweichungen der Rationalität erreicht (gleich viele Optimisten wie Pessimisten).
3. Sollte es trotzdem zu Abweichungen vom einem rationalen Marktpreis kommen, nutzen professionelle, gut-informierte Händler die sich bietende Arbitrage-Möglichkeit und führen dadurch den informationseffizienten Preis wieder herbei.

### Fachliche Aussage
Die Konkurrenz gut informierter Profihändler und ihre ständige Arbitragesuche führen laut Traditional Finance zu informationseffizienten Märkten.

### React-Vorschlag
`AssumptionsList` (nummerierte Cards) mit hervorgehobenen Schlüsselbegriffen.

---

## Folie 5 - Traditionelle Kapitalmarkttheorie: Grossman/Stiglitz Informationsparadoxon

### In der MD vorhanden
Die vier Bullets zum Grossman/Stiglitz-Paradoxon (1980) und das Shiller-Zitat sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Blaue Zwischenüberschrift "Grossman/Stiglitz (1980): Information Paradoxon:". Das Shiller-Zitat steht in einem hellorange/beige hinterlegten Callout-Kasten am unteren Rand (Einleitung "Robert Shillers Kritik an der Interpretation empirischer Ergebnisse:", "Robert Shillers" fett). Die Kastenformatierung und Hervorhebung gehen in der MD verloren.

### Visuelle Rekonstruktion
```text
Logik-Kette (Paradoxon):
Information kostet -> ohne Ertrag sucht niemand Information
-> sucht niemand, lohnt sich Suche wieder
=> Gleichgewicht zwischen den Extremen
```

### Inhaltliche Rekonstruktion
- Ein vollständig informationseffizienter Markt ist nicht möglich, da die Beschaffung und Analyse von Informationen mit Kosten verbunden ist.
- Würde diese Tätigkeit keinen Ertrag liefern, würde niemand diese Kosten auf sich nehmen.
- Wenn niemand diese Tätigkeit auf sich nimmt, würde es sich wieder lohnen, Informationen zu beschaffen.
- Das Gleichgewicht muss also zwischen diesen beiden Extremen liegen.

Shiller (Callout): "Aus der Feststellung, dass Aktienpreise nicht vorhersagbar sind, die Schlussfolgerung zu ziehen, dass diese fundamental richtig sind, war eine der größten Fehler in der Geschichte des ökonomischen Denkens."

### Fachliche Aussage
Vollkommene Informationseffizienz ist logisch unmöglich (Informationskosten); empirische Unvorhersagbarkeit beweist nicht fundamentale Richtigkeit der Preise.

### React-Vorschlag
`ParadoxLoop` (zyklische Logikkette) + `Callout` (Variante quote/warning) für das Shiller-Zitat.

---

## Folie 6 - Traditional Finance vs. Behavioral Finance (Gegenüberstellung)

### In der MD problematisch/fehlend
Die Textbausteine sind vorhanden, aber zerbrochen: Die beiden gegenübergestellten Aussagenblöcke und die geschweiften Klammern, die sie den Labels "Traditional Finance" bzw. "Behavioral Finance" zuordnen, fehlen als Struktur.

### Fehlende visuelle Inhalte
Blaue Zwischenüberschrift "Traditional Finance versus Behavioral Finance". Zwei Textblöcke links, jeweils mit einer geschweiften Klammer "}" nach rechts versehen, die auf ein Label zeigt: oberer Block -> "Traditional Finance", unterer Block -> "Behavioral Finance". Unten ein hellblauer Callout-Kasten mit der Kernaussage. Fett hervorgehoben: jeweils der erste Satz beider Blöcke ("Mehrrendite ist das Ergebnis eines höheren Risikos." bzw. "Höhere Renditen lassen sich auch ohne höheres Risiko erzielen.").

### Visuelle Rekonstruktion
```text
[ Mehrrendite ist das Ergebnis eines höheren Risikos.                 ]
[ Wertpapierrenditen lassen sich nicht prognostizieren.   } -> Traditional Finance
[ Märkte sind effizient. Jeder Investor ist ein homo                  ]
[ oeconomicus, d.h. rational und nutzenoptimierend.                   ]

[ Höhere Renditen lassen sich auch ohne höheres Risiko erzielen.      ]
[ Wertpapierrenditen lassen sich zum Teil prognostizieren. } -> Behavioral Finance
[ Märkte sind teilweise falsch bewertet.                             ]

[Callout] Behavioral Finance: Kapitalmarktpreise werden
          durch beschränkt rationale Investoren beeinflusst
```

### Inhaltliche Rekonstruktion
| | Traditional Finance | Behavioral Finance |
|---|---|---|
| Mehrrendite | Ergebnis eines höheren Risikos | auch ohne höheres Risiko erzielbar |
| Wertpapierrenditen | nicht prognostizierbar | teilweise prognostizierbar |
| Märkte | effizient; Investor = homo oeconomicus (rational, nutzenoptimierend) | teilweise falsch bewertet; beschränkt rationale Investoren |

### Fachliche Aussage
Behavioral Finance widerspricht der Traditional Finance: Preise werden durch beschränkt rationale Investoren beeinflusst, Märkte können falsch bewertet und Renditen teilweise prognostizierbar sein.

### React-Vorschlag
`ComparisonBraces` oder `TwoColumnCompare`: zwei gegenübergestellte Blöcke, geschweifte Klammern als SVG, abschließender `Callout`.

---

## Folie 7 - Traditional vs. Behavioral Finance: Emotionen und Aktienkurse

### In der MD problematisch/fehlend
Die Kernaussage und Quelle sind vorhanden; die eingebettete Ergebnistabelle (Ashton 2003, "Table 1: Descriptive statistics") ist in der MD als kaputter Tabellentext extrahiert. In der hochaufgelösten Render-Ansicht sind die Werte jedoch klar lesbar und werden hier korrekt rekonstruiert (entgegen der ursprünglichen Annahme "nicht ablesbar").

### Fehlende visuelle Inhalte
- Rechts oben ein Foto: jubelnde Fußballer in roten Trikots (Siegesjubel, nicht eindeutig einer Nation zuzuordnen).
- Eine Ergebnistabelle "Table 1. Descriptive statistics" (Ashton 2003) mit Header-Spalten "Number of games", "Mean return after win (No. of wins)", "Mean return after draw (No. of draws)", "Mean return after loss (No. of losses)" sowie der Zusatzzeile "The FTSE 100 index: Period of Investigation 6 January 1984–3 July 2002. Unconditional Daily Return on the index 0.03511%".
- Unten zentrierte Kernaussage in größerer Schrift.

### Visuelle Rekonstruktion
```text
[Aussage links]                          [Foto: jubelnde Fußballer (rote Trikots)]
[Quelle: Ashton (2003)]
[Table 1. Descriptive statistics]

Investoren lassen sich von ihren Gefühlen beeinflussen.
Bei besserer Stimmung werden Investoren risikobereiter.
```

### Inhaltliche Rekonstruktion
Aussage: "Aktienkurse steigen in dem Land stärker, dessen Fußballmannschaft in einem großen Turnier gewonnen hat."
Quelle: Ashton (2003): Economic impact of national sporting success: evidence from the London stock exchange.

Tabelle (Werte aus dem Render abgelesen):
| | Number of games | Mean return after win (No. of wins) | Mean return after draw (No. of draws) | Mean return after loss (No. of losses) |
|---|---|---|---|---|
| All internationals | 210 | 0,1705 % (102) | −0,000481 % (70) | −0,1289 % (38) |
| Tournament finals and qualifying games | 99 | 0,3085 % (49) | −0,1843 % (33) | −0,1863 % (17) |
| Tournament finals games | 35 | 0,2698 % (12) | −0,2129 % (11) | −0,4150 % (12) |

FTSE 100 index: Untersuchungszeitraum 6. Januar 1984 – 3. Juli 2002; unbedingte tägliche Indexrendite 0,03511 %.

### Fachliche Aussage
Stimmungen/Emotionen (z. B. nationaler Sporterfolg) beeinflussen das Anlegerverhalten; bei guter Stimmung steigt die Risikobereitschaft - ein Beleg gegen rein rationale Märkte. Die Renditen nach Sieg sind durchweg positiv, nach Unentschieden/Niederlage negativ.

### React-Vorschlag
`StudyEvidenceCard` mit Aussage, optionalem Foto-Slot, Quellenfußnote und der wiedergegebenen Ergebnistabelle (`DataTable`).

---

## Folie 8 - Traditional vs. Behavioral Finance: Nicht-Informationen und Aktienkurse

### In der MD vorhanden
Die drei Bullets (Crash Oktober 1987 mit 22,6 % Rückgang; 50 größte Tagesbewegungen ohne neue Nachrichten; AOL +18 % bei S&P-Indexaufnahme) sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Unten zwei Bilder/Grafiken:
- Links: historischer Zeitungsausschnitt "The Philadelphia Inquirer" mit Schlagzeile "Dow Dives 508,32 Points / In Panic on Wall Street" (Crash 1987).
- Rechts: ein langfristiger Aktienindex-Chart (Liniendiagramm) mit deutlichem Einbruch im rechten Bereich (Crash-Verlauf); Achsenbeschriftungen im Render zu klein, um zuverlässig gelesen zu werden.

### Visuelle Rekonstruktion
```text
[Zeitungsausschnitt: "Dow Dives 508,32 Points / In Panic on Wall Street"]
[Liniendiagramm langfristiger Indexverlauf mit scharfem Einbruch rechts]
```

### Inhaltliche Rekonstruktion
- Aktienmarktcrash im Oktober 1987: 22,6 % Rückgang ohne relevante Nachrichten.
- Untersuchung der 50 größten Tagesbewegungen am amerikanischen Aktienmarkt: Tage ohne signifikant neue Nachrichten.
- Aufnahme von Aktien in einen großen Index: signifikant positive Preisreaktion (Beispiel: AOL stieg am Tag der Aufnahme in den S&P um 18 %).

### Fachliche Aussage
Große Kursbewegungen treten auch ohne neue fundamentale Informationen auf - ein Widerspruch zur reinen Informationseffizienz.

### React-Vorschlag
`EvidenceList` mit drei Befund-Cards; optionaler `ImageStrip` (Zeitungsbild + Crash-Chart) als illustrierende Beilage.

---

## Folie 9 - Anomalien an Finanzmärkten: Kalendereffekte und Chartanalyse

### In der MD vorhanden
Beide Abschnitte (Kalendereffekte mit Januar-Effekt; Chartanalyse) sind mit allen Bullets vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Layout: zwei blau überschriebene Blöcke ("Kalendereffekte", "Chartanalyse"); das Label "Mögliche Erklärung" ist jeweils unterstrichen.

### Inhaltliche Rekonstruktion
Kalendereffekte:
- Zu bestimmten Zeiten sind andere Renditen zu erzielen als in der Regelzeit.
- Beispiel Januar-Effekt: In den ersten zwei Januar-Wochen werden bei kleinen Unternehmen Überrenditen erzielt.
- Mögliche Erklärung: Mentale Kontenführung - Anleger veräußern kleine Unternehmen am Jahresende, um Verluste steuerlich zu realisieren. Im Januar werden diese Unternehmen dann wieder erworben, was zu steigenden Kursen führt.

Chartanalyse:
- Interpretation von Aktienmärkten aufgrund historischer Kursverläufe.
- Mögliche Erklärung: Repräsentativität - Anleger sehen Muster in Wertpapierkursen, die aber nur zufällig entstanden sind.

### Fachliche Aussage
Kalendereffekte und Chartanalyse sind Kapitalmarktanomalien, die sich verhaltensökonomisch (mentale Kontenführung, Repräsentativität) erklären lassen.

### React-Vorschlag
`AnomalyCard` (wiederverwendbar): Titel + Beschreibung + "Mögliche Erklärung"-Badge; hier zwei Instanzen.

---

## Folie 10 - Anomalien an Finanzmärkten: Dispositionseffekt

### In der MD vorhanden
Alle vier Bullets zum Dispositionseffekt inkl. goldener Börsenregel und Prospect-Theory-Erklärung sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Blaue Zwischenüberschrift "Dispositionseffekt"; "Mögliche Erklärung" unterstrichen; goldene Börsenregel als Zitat im Fließtext.

### Inhaltliche Rekonstruktion
- Bezeichnet die Neigung von Anlegern, jene Anteile abzustoßen, deren Wert gestiegen ist, und solche zu halten, deren Wert gesunken ist.
- Anleger ist überzeugt, dass das Minus, solange es nur auf dem Papier steht, nicht real sei. Außerdem weiß er, dass er frei von Schmerzen bleibt, solange er nicht verkauft.
- In der Praxis werden Gewinne viel zu früh und Verluste viel zu spät realisiert. Dieses Verhalten kann immer wieder beobachtet werden, obwohl dies goldenen Börsenregeln widerspricht: "Gewinne sinnvoll laufen lassen und Verluste klug begrenzen".
- Mögliche Erklärung: Prospect Theory - Verlustaversion.

### Fachliche Aussage
Der Dispositionseffekt beschreibt das verlustaverse Fehlverhalten, Gewinner zu früh und Verlierer zu spät zu verkaufen - erklärbar über die Prospect Theory.

### React-Vorschlag
`AnomalyCard` mit hervorgehobener Börsenregel als `Callout` (Variante quote).

---

## Folie 11 - Anomalien an Finanzmärkten: Home Bias, Überoptimismus, Investmenttrends

### In der MD vorhanden
Alle drei Abschnitte (Home Bias, Überoptimismus, Investmenttrends) mit Bullets und Erklärungen sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik; drei blau überschriebene Blöcke, "Mögliche Erklärung" unterstrichen. Hinweis: Beim Block Überoptimismus gibt es auf der Folie KEINE "Mögliche Erklärung"-Zeile.

### Inhaltliche Rekonstruktion
| Anomalie | Beschreibung | Mögliche Erklärung |
|---|---|---|
| Home Bias | Anleger investieren verstärkt in Wertpapiere des eigenen Landes | Verfügbarkeitsheuristik (Anleger verfügen über mehr Informationen über das Heimatland, was Sicherheit bei Investitionsentscheidungen gibt) |
| Überoptimismus | Menschen überschätzen ihre Fähigkeit, an der Börse Gewinn zu machen | (auf der Folie keine angegeben) |
| Investmenttrends | Investition in Produkte, welche gerade in Mode sind | Verfügbarkeitsheuristik (Produkte sind mental verfügbar, weil sie z. B. in den Medien besonders häufig genannt werden) |

### Fachliche Aussage
Home Bias, Überoptimismus und Investmenttrends sind Anomalien, die vor allem auf Verfügbarkeitsheuristik und Selbstüberschätzung zurückgehen.

### React-Vorschlag
`AnomalyCard` x3, ggf. als `AnomalyTable` zusammengefasst (Anomalie / Beschreibung / Erklärung).

---

## Folie 12 - Anomalien an Finanzmärkten: Ranglisten, Einstandspreise/Kursziele

### In der MD vorhanden
Beide Blöcke (Ranglisten; Einstandspreise/Kursziele) mit Bullets vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik; zwei blau überschriebene Blöcke ("Ranglisten", "Einstandspreise/Kursziele"), "Mögliche Erklärung" unterstrichen.

### Inhaltliche Rekonstruktion
| Anomalie | Beschreibung | Mögliche Erklärung |
|---|---|---|
| Ranglisten | jahrelanger Erfolg von Analysten und Vermögensverwaltern wird als Indiz für überlegene Fähigkeiten gewertet | Repräsentativitätsheuristik führt zu Investitionen auf Basis vergangener und damit unbedeutender Erfolge |
| Einstandspreise/Kursziele | funktionieren häufig als Anker | Prospect Theory und Confirmation Bias |

### Fachliche Aussage
Vergangene Erfolge (Ranglisten) und Einstandspreise/Kursziele lösen Fehleinschätzungen aus, erklärbar über Repräsentativität, Anker, Prospect Theory und Confirmation Bias.

### React-Vorschlag
`AnomalyCard` x2 (konsistent zu Folien 9-11).

---

## Folie 13 - Anomalien an Finanzmärkten: Über-/Unterreaktionen

### In der MD vorhanden
Alle Bullets inkl. der vier Unter-Erklärungen und der Schlussfolgerung sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Blaue Zwischenüberschrift "Über-/Unterreaktionen:". Verschachtelte Liste: "Mögliche Erklärungen" mit vier eingerückten Spiegelstrichen; Schlusszeile mit Pfeil "à" (im Render als Pfeil/=> dargestellt) als Folgerung.

### Inhaltliche Rekonstruktion
- Marktwerte reagieren auf Nachrichten stärker, als es die Fundamentaldaten rechtfertigen würden.
- Mögliche Erklärungen:
  - Verfügbarkeitsheuristik
  - Überoptimismus durch steigende Kurse
  - Ankereffekte: Erwartungen an Kapitalmärkte werden an vergangenen Kursen ausgerichtet
  - Confirmation Bias: Informationen, welche diesen Erwartungen widersprechen, werden ignoriert oder umgedeutet
- Wenn Investoren überreagieren, sind Wertpapiere mit guten Nachrichten zu teuer. Umgekehrtes gilt für Wertpapiere, die negativen Nachrichten ausgesetzt sind.
- => Gewinner (Verlierer) der vergangenen Jahre werden Verlierer (Gewinner) der Zukunft sein.

### Fachliche Aussage
Über- und Unterreaktionen führen zu vorübergehender Fehlbewertung; die Mean-Reversion-Folge ist die theoretische Basis des Winner-Loser-Effekts.

### React-Vorschlag
`AnomalyCard` mit verschachtelter Erklärungsliste und hervorgehobener Schlussfolgerung (Pfeil-Callout).

---

## Folie 14 - Anomalien an Finanzmärkten: Equity-Premium-Puzzle

### In der MD vorhanden
Beide Bullets (Definition des Puzzles; mentale Kontenführung als Erklärung) sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik; blaue Zwischenüberschrift "Equity-Premium-Puzzle:"; "Mögliche Erklärung" unterstrichen.

### Inhaltliche Rekonstruktion
- Aktien haben gegenüber Anleihen einen Risikoaufschlag, der größer ist, als es das größere Risiko der Aktien rechtfertigen würde; daher müsste mehr in Aktien investiert werden.
- Mögliche Erklärung: mentale Kontenführung - Investments werden in Jahreshorizonte aufgeteilt, so dass Aktien aufgrund ihrer jährlichen Performance als risikoreicher eingeschätzt würden, als langfristig sachgerecht wäre.

### Fachliche Aussage
Das Equity-Premium-Puzzle (zu hohe Aktien-Risikoprämie) wird verhaltensökonomisch über kurzfristige mentale Kontenführung erklärt.

### React-Vorschlag
`AnomalyCard` (konsistent).

---

## Folie 15 - Anomalien an Finanzmärkten: Kapitalmarkt und Supermarkt (Teil 1: Supermarkt)

### In der MD vorhanden
Das Szenario "Verhalten im Supermarkt" inkl. Frage und Antwort ist vollständig als Text vorhanden.

### Fehlende visuelle Inhalte
Blaue Zwischenüberschrift "Kapitalmarkt und Supermarkt"; blau unterstrichene Zwischenfragen "Verhalten im Supermarkt" und "Was machen Sie?". Rechts oben ein Foto: Fleisch-/Kühltheke im Supermarkt mit ausgelegten roten Steaks/Fleischwaren.

### Visuelle Rekonstruktion
```text
[Szenariotext links]   [Foto: Supermarkt-Fleischtheke]
Was machen Sie? -> Sie kaufen (gutes Preis-Leistungs-Verhältnis)
```

### Inhaltliche Rekonstruktion
Szenario: Sie gehen zum wöchentlichen Einkauf in den Supermarkt und sehen, dass Rindersteaks (eine Ihrer Lieblingsspeisen) im Angebot sind. Sie kosten 30 % weniger als üblich. Reaktion: Sie kaufen Rindersteaks, weil Sie wissen, dass dies ein gutes Angebot ist (Preis-Leistungs-Verhältnis ist gut) und freuen sich über ein gutes Essen.

### Fachliche Aussage
Beim Konsumgut handeln Menschen rational antizyklisch: niedrigerer Preis = Kaufanreiz (Aufhänger zum Kontrast mit dem Kapitalmarktverhalten auf Folie 16).

### React-Vorschlag
`ScenarioCard` (Foto-Slot + Frage/Antwort), Teil eines zweiteiligen `SupermarketVsMarket`-Vergleichs.

---

## Folie 16 - Anomalien an Finanzmärkten: Kapitalmarkt und Supermarkt (Teil 2: Kapitalmarkt)

### In der MD vorhanden
Das Szenario "Verhalten am Kapitalmarkt" inkl. Frage, Antwort und Schlussabsatz ist vollständig als Text vorhanden.

### Fehlende visuelle Inhalte
Links oben ein Foto: Handelssaal einer Börse (NYSE-artig) mit Händlern und Anzeigetafeln. Blaue Zwischenüberschrift "Kapitalmarkt und Supermarkt"; blau unterstrichene Zwischenfragen "Verhalten am Kapitalmarkt" und "Was machen Sie?".

### Visuelle Rekonstruktion
```text
[Foto: Börsenparkett/Handelssaal]   [Szenariotext rechts]
Markt -30% -> Sie verkaufen (statt zu kaufen)
Markt steigt -> Sie wollen mehr kaufen
=> typischer Anleger handelt zyklisch
```

### Inhaltliche Rekonstruktion
Szenario: Sie investieren am Kapitalmarkt. Sie sehen, dass der Markt um 30 % gesunken ist. Reaktion: Anstatt zu kaufen, verkaufen Sie Ihre Aktien. Ihre Bekannten verkaufen, die Presse malt düstere Szenarien, und Sie haben Angst, dass der Markt noch weiter fallen könnte. Ähnlich verhält es sich bei steigenden Kursen: Sie denken darüber nach, mehr zu kaufen, da Ihre Bekannten kaufen, die Stimmung gut ist und Sie befürchten, dass Ihnen Gewinne entgehen könnten. Fazit: Am Kapitalmarkt verhält sich der typische Anleger zyklisch; auf das Preis-Leistungs-Verhältnis wird nicht immer geschaut.

### Fachliche Aussage
Im Gegensatz zum Supermarkt handeln Anleger am Kapitalmarkt prozyklisch (kaufen teuer, verkaufen billig) - getrieben von Herdenverhalten und Emotionen.

### React-Vorschlag
`ScenarioCard` (zweiter Teil von `SupermarketVsMarket`), Kontrast zu Folie 15 visuell betonen.

---

## Folie 17 - Kapitalmarktanomalien: Kapitalmarktprognose und Investmentstrategien

### In der MD vorhanden
Leitfrage und die fünf Effekt-Bullets (Winner-Loser, Value, Risikoprämie, Size, Momentum) sind vollständig vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Folientitel "Kapitalmarktanomalien", blaue Zwischenüberschrift "Kapitalmarktprognose und Investmentstrategien". Reine Aufzählungs-/Überblicksfolie als Kapitel-Einleitung der Anomalie-Effekte.

### Inhaltliche Rekonstruktion
Leitfrage: "Welche Wertpapiere performen besser als andere?"
- Winner-Loser Effekt
- Value Effekt
- Risikoprämie
- Size Effekt
- Momentum Effekt

### Fachliche Aussage
Überblicksfolie: fünf empirische Effekte/Strategien, mit denen sich Über-/Unterperformance von Wertpapieren vorhersagen lässt.

### React-Vorschlag
`SectionOverview` (Liste der fünf Effekte als Navigationskarten zu den Folgefolien).

---

## Folie 18 - Winner-Loser-Effekt: Zukünftige und vergangene Kursentwicklung (De Bondt/Thaler 1985)

### In der MD problematisch/fehlend
Der Inhalt ist als kaputte Tabelle extrahiert (Zeitraum, Aktienuniversum, Loser-/Winner-Portfolio teils zerlegt). Die Studienbeschreibung ist aber rekonstruierbar und im Render klar lesbar.

### Fehlende visuelle Inhalte
Keine Diagramme. Blaue Zwischenüberschrift "Zukünftige und vergangene Kursentwicklung". Saubere Definitionsliste mit blau-fett hervorgehobenen Wörtern "schlechtesten" und "besten". Schlussfrage in Blau und fett hervorgehoben.

### Visuelle Rekonstruktion
```text
DIE Studie, mit der die Behavioral Finance angefangen hat:
De Bondt/Thaler (1985): Does the stock market overreact?
```

### Inhaltliche Rekonstruktion
| Parameter | Wert |
|---|---|
| Zeitraum | 1923 - 1982 |
| Aktienuniversum | Alle Aktien der NYSE |
| Loser-Portfolio | 35 Aktien mit der **schlechtesten** Performance der vergangenen 3 Jahre |
| Winner-Portfolio | 35 Aktien mit der **besten** Performance der vergangenen 3 Jahre |

Leitfrage: "Wie sieht die zukünftige Performance des Loser- und Winner-Portfolios aus?"

### Fachliche Aussage
Die Gründungsstudie der Behavioral Finance (De Bondt/Thaler 1985) bildet Extremportfolios nach Vergangenheitsperformance, um deren zukünftige Entwicklung zu untersuchen.

### React-Vorschlag
`StudySetupCard` (Definitions-/Parametertabelle) mit hervorgehobener Forschungsfrage.

---

## Folie 19 - Winner-Loser-Effekt: Zukünftige und vergangene Kursentwicklung (Ergebnis-Charts)

### In der MD problematisch/fehlend
In der MD nur die beiden Kernaussagesätze; die zwei Original-Ergebnisdiagramme aus De Bondt/Thaler fehlen komplett.

### Fehlende visuelle Inhalte
Zwei nebeneinander liegende wissenschaftliche Liniendiagramme (Originalabbildungen, Graustufen):
- Beide zeigen die kumulierten durchschnittlichen Überrenditen (Cumulative Average Residuals, CAR) über die Monate nach Portfoliobildung.
- "Loser Portfolio" verläuft als obere, steigende Kurve (positive kumulative Überrendite).
- "Winner Portfolio" verläuft als untere, fallende/flachere Kurve (negative bzw. geringere Überrendite).
- Bildunterschriften "Figure 1" bzw. "Figure 3" mit Beschreibungstexten ("Cumulative Average Residuals for Winner and Loser Portfolios of 35 Stocks ..."); Achse "months after portfolio formation". Konkrete Achsenwerte im Render nicht zuverlässig ablesbar.
- Darunter ein hellblauer Callout mit der Kernaussage.

### Visuelle Rekonstruktion
```text
CAR
 |          ___---  Loser Portfolio (steigt)
 |     ___--
 |----------------------------------
 | --___
 |      ---___      Winner Portfolio (fällt)
 +---------------------------------- Monate nach Portfoliobildung
```

### Inhaltliche Rekonstruktion
Kernaussage (Callout): "Vergangene Verlierer sind zukünftige Gewinner! Vergangene Gewinner sind zukünftige Verlierer!"
Konkrete Renditewerte der Original-Charts sind im Render nicht zuverlässig ablesbar.

### Fachliche Aussage
Die empirischen Charts belegen: ehemalige Verlierer-Aktien erzielen künftig Überrenditen, ehemalige Gewinner unterdurchschnittliche Renditen (Mean Reversion / Überreaktion).

### React-Vorschlag
`CumulativeReturnChart` (zwei Linien: Loser steigend, Winner fallend) + `Callout` mit der Merksatz-Aussage.

---

## Folie 20 - Winner-Loser-Effekt: "Winner/Loser"-Strategie (Empirie Chopra/Lakonishok/Ritter 1992)

### In der MD problematisch/fehlend
Die MD enthält die Strategie und Quelle, aber das Diagramm ist vollständig zerbrochen: Achsenbeschriftungen erscheinen gespiegelt/verstümmelt ("etidneR ehcilrhäJ" = "Jährliche Rendite", Zahlenreihen als Sonderzeichen). Der zerbrochene MD-Text darf NICHT übernommen werden.

### Fehlende visuelle Inhalte
Blaue Zwischenüberschrift „Winner/Loser"-Strategie, links unten Label "Empirie". Kombiniertes Diagramm über 20 Quantilportfolios (x-Achse 1-20: zunehmende historische Performance, von Loser-Portfolio links zu Winner-Portfolio rechts):
- Linie/Kurve "Jährliche Rendite" (linke y-Achse, 0,00 % bis 30,00 % in 5-%-Schritten): fällt von links (Loser, höchste Rendite knapp 30 % bei Quantil 1, visuell abgelesen) nach rechts (Winner, ca. 13-15 % am rechten Rand) deutlich ab.
- Blaue Linie "Beta" (rechte y-Achse, Skala 0,8 bis 1,8): verläuft NICHT flach, sondern fällt insgesamt ebenfalls von links nach rechts und ist leicht wellig (im Render im Bereich ca. oberhalb 1,0 links bis unter 1,0 rechts; alle Werte visuell abgelesen). Korrektur gegenüber Entwurf: Die Beta-Linie ist nicht "flach", sondern leicht fallend/wellig, und die rechte Achse beginnt bei 0,8 (nicht 0,9).
- Beschriftungen "Loser-Portfolio" (links), "Winner-Portfolio" (rechts), "Quantilportfolios", "zunehmende historische Performance".

### Visuelle Rekonstruktion
```text
Rendite %                                              Beta
30 | Loser-Portfolio                                   1,8
   |  \___                                             ...
   |      \____  (Rendite fällt)        Winner-Portf.  1,0
   |           \_____~~~_____                          
 0 |________________________________________________  0,8
    1   2 ... (zunehmende hist. Performance) ...   20
    Loser ----------------------------------- Winner
   (Beta-Linie: leicht fallend/wellig, von >1,0 nach <1,0)
```

### Inhaltliche Rekonstruktion
Strategie: Kaufe die Aktien mit einer vergangenen, über die letzten 5 Jahre schlechten Performance (Loser).
Quelle: Chopra, Lakonishok, Ritter (1992).
Untersuchungszeitraum 1930-1981, Universum: NYSE, einmal jährlich Bildung der 20 dargestellten Quantilportfolios, risikoadjustierte Renditedifferenz zwischen Extremen: **10,84 %**.
(y-Werte ca.: Jährliche Rendite 0-30 %, Beta-Skala 0,8-1,8; konkrete Punktwerte visuell abgelesen.)

### Fachliche Aussage
Empirisch erzielen Loser-Portfolios höhere Renditen als Winner-Portfolios - und das ohne höheres Beta, d. h. die Renditedifferenz von 10,84 % ist nicht durch höheres Risiko erklärbar.

### React-Vorschlag
`QuantilePerformanceChart` (Combo: Rendite-Linie + Beta-Linie, zweiachsig); zerbrochenen MD-Text NICHT übernehmen, Diagramm neu aufbauen; Quellfußnote als `SourceNote`.

---

## Folie 21 - Winner-Loser-Effekt: Psychologische Erklärungen

### In der MD vorhanden
Die psychologischen Erklärungen, der Steuer-Zusatz und die beiden Kernaussagen sind vollständig als Text vorhanden.

### Fehlende visuelle Inhalte
Keine Grafik. Folientitel "Winner-Loser Effekt / Zukünftige und vergangene Kursentwicklung", blaue Zwischenüberschrift "Psychologische Erklärungen:". Unten erneut der hellblaue Callout-Kasten mit den zwei Merksätzen (wie Folie 19).

### Inhaltliche Rekonstruktion
Psychologische Erklärungen:
- Überreaktionen
- Repräsentativitätsheuristik
- Anwendung von Daumenregeln
- … aber auch begründbar mit steuerinduzierten Transaktionen

Callout: "Vergangene Verlierer sind zukünftige Gewinner! Vergangene Gewinner sind zukünftige Verlierer!"

### Fachliche Aussage
Der Winner-Loser-Effekt wird psychologisch (Überreaktion, Repräsentativität, Daumenregeln) und alternativ steuerlich erklärt.

### React-Vorschlag
`ExplanationList` + `Callout` (Merksatz), konsistent zu Folie 19.

---

## Folie 22 - Value-Effekt: Aktienkurse und Bewertung (Fama/French 1992)

### In der MD problematisch/fehlend
Der Einleitungstext und die Definitionen sind vorhanden, aber die Buchwert/Marktwert-Zuordnung ist als verstreuter Text extrahiert; die Klammer-/Pfeilstruktur fehlt.

### Fehlende visuelle Inhalte
Folientitel "Value-Effekt / Aktienkurse und Bewertung". Links unten eine geschweifte Klammer um "Buchwert / Marktwert", aus der zwei Pfeile nach rechts abgehen:
- Pfeil oben -> "Hoch: geringe Wachstumsaussichten eingepreist"
- Pfeil unten -> "Niedrig: hohe Wachstumsaussichten eingepreist"
Korrektur gegenüber Entwurf: Beide Pfeile erscheinen im Render in derselben dunklen/schwarzen Farbe; eine rote Einfärbung des oberen Pfeils ist nicht erkennbar. Die beiden Zielzeilen "Hoch …" und "Niedrig …" sind fett. Die Begriffe "Buchwert" und "Marktwert" in der Definitionsliste sind blau hervorgehoben.

### Visuelle Rekonstruktion
```text
{ Buchwert  }  --> Hoch:    geringe Wachstumsaussichten eingepreist
{ Marktwert }  --> Niedrig: hohe Wachstumsaussichten eingepreist
```
(Gemeint ist das Verhältnis Buchwert/Marktwert (B/M-Ratio): hoch vs. niedrig.)

### Inhaltliche Rekonstruktion
Beispiel (Folientext): Ein Unternehmen führt ein neues und spannendes Produkt ein. Die Verkaufsaussichten des Produktes sind hervorragend, es werden hohe Umsätze und Gewinne erwartet. Die Aktie notiert um ein Vielfaches über dem Buchwert. Die Aktie ist eine typische "Wachstumsaktie": "gute Produkte = gutes Investment !?".
Fama/French (1992): The cross-section of expected stock returns (einer der meist zitierten Artikel im Finance Bereich). Alle Aktien der NYSE, AMEX und NASDAQ werden geordnet nach dem Verhältnis Buchwert des Eigenkapitals zum Marktwert des Eigenkapitals.
- Buchwert: vergangenheitsorientierte Bewertung.
- Marktwert: bewertet die Zukunftsaussichten.
- B/M hoch: geringe Wachstumsaussichten eingepreist.
- B/M niedrig: hohe Wachstumsaussichten eingepreist.

### Fachliche Aussage
Das Buchwert/Marktwert-Verhältnis gliedert Aktien in Value (hohes B/M) und Growth (niedriges B/M) - Grundlage des untersuchten Value-Effekts.

### React-Vorschlag
`RatioBranch` (Klammer + zwei Pfeile zu Hoch/Niedrig als SVG); kaputten MD-Text nicht übernehmen.

---

## Folie 23 - Value-Effekt: "Kurs zu Buchwert"-Strategie (Empirie Fama/French 1992)

### In der MD problematisch/fehlend
Die MD enthält Strategie und Quelle, das Diagramm ist aber zerbrochen (gespiegelte Achsenlabels "etidneR ehcilrhäJ Beta", Werte verloren). Der zerbrochene MD-Text darf NICHT übernommen werden.

### Fehlende visuelle Inhalte
Folientitel "Value-Effekt / Kurs zu Buchwert"-Strategie, Label "Empirie". Kombiniertes Diagramm über 12 Quantilportfolios (x-Achse: zunehmendes Kurs-Buchwert-Verhältnis, Werte als Spannen "0-5 %, 5-10 %, 10-20 %, 20-30 %, 30-40 %, 40-50 %, 50-60 %, 60-70 %, 70-80 %, 80-90 %, 90-95 %, 95-100 %"):
- Linie/Kurve "Jährliche Rendite" (linke y-Achse, 0,00 % bis 30,00 % in 5-%-Schritten): fällt von links (niedriges Kurs-Buchwert = Value, höchste Rendite ca. 25 % visuell abgelesen) nach rechts (hohes Kurs-Buchwert = Growth, niedrigste Rendite, am rechten Rand stark abfallend auf ca. 3-5 %) ab.
- Blaue Linie "Beta" (rechte y-Achse, Skala ca. 1,24 bis 1,38): wellig, im mittleren/linken Bereich tiefer, steigt zum rechten (Growth-)Bereich hin an.
- Beschriftungen "Quantilportfolios", "Zunehmendes Kurs-Buchwert-Verhältnis".

### Visuelle Rekonstruktion
```text
Rendite %                                  Beta
30 |~~~ (Value, ca. 25%)                    1,38
   |       \___                             1,34
   |           \___  Rendite fällt          1,30
   |               \___                     1,26
 0 |                   \__ (Growth, ~3-5%)  1,24
   +--------------------------------------
    0-5% --- Zunehmendes Kurs-Buchwert --- 95-100%
   (Value/niedrig)                  (Growth/hoch)
   (Beta-Linie: wellig, steigt nach rechts an)
```

### Inhaltliche Rekonstruktion
Strategie: Kaufe die Aktien mit einem niedrigen Kurs-Buchwert-Verhältnis.
Quelle: Fama/French (1992).
Untersuchungszeitraum 1963-1990, Universum: NYSE, AMEX, Nasdaq, einmal jährlich Bildung der 12 dargestellten Quantilportfolios, risikoadjustierte Renditedifferenz zwischen Extremen: **19,99 %**.
(y-Werte ca.: Jährliche Rendite 0-30 %, Beta-Skala ca. 1,24-1,38; konkrete Punktwerte visuell abgelesen.)

### Fachliche Aussage
Aktien mit niedrigem Kurs-Buchwert-Verhältnis (Value) erzielen deutlich höhere Renditen als Growth-Aktien (Differenz 19,99 %) - der Value-Effekt ist noch stärker als der Winner-Loser-Effekt.

### React-Vorschlag
`QuantilePerformanceChart` (wiederverwendet, Combo Rendite-Linie + Beta-Linie); `SourceNote` für Quelle/Methodik.

---

## Folie 24 - Value-Effekt: Aktienkurse und Bewertung (Ergebnis-Chart Fama/French 1992)

### In der MD problematisch/fehlend
In der MD stehen nur Quelle und die beiden Kernaussagesätze (verstreut); das eigentliche Original-Ergebnisdiagramm fehlt.

### Fehlende visuelle Inhalte
Folientitel "Value-Effekt / Aktienkurse und Bewertung". Ein Balkendiagramm (Graustufen, Originalabbildung) der annualisierten Rendite über zehn nach B/M sortierte Portfolios:
- y-Achse: "Annualized Rate of Return" (Skala bis ca. 20 %+).
- x-Achse: Portfolios 1-10, links "High Book/Market" (mit Label "Value"), rechts "Low Book/Market" (mit Label "Growth").
- Die Balken fallen von links (höchste Rendite bei Value/High B/M) nach rechts (niedrigste Rendite bei Growth/Low B/M) ab.
- Darunter eine kleine Tabelle/Skala mit Portfolio-Nummern 1-10: oben "hoch … Buchwert/Marktwert … niedrig", unten "günstige Aktien (Value)" links bis "teure (Growth)" rechts. Konkrete Renditewerte der Balken im Render nicht zuverlässig ablesbar.
- Rechts oben die Quellenangabe.

### Visuelle Rekonstruktion
```text
Rendite
 |█ (Value)
 |█ █
 |█ █ █ █
 |█ █ █ █ █ █ █ █ █ █ (Growth)
 +----------------------------
  High B/M (Value) ........... Low B/M (Growth)
   1  2  3  4  5  6  7  8  9  10
  [günstige Aktien (Value)]   [teure (Growth)]
```

### Inhaltliche Rekonstruktion
Quelle: Fama/French (1992): The cross-section of expected stock returns.
Kernaussagen:
- "Aktien mit hoher B/M-Ratio sind zukünftige Gewinner!"
- "Aktien mit niedriger B/M-Ratio sind zukünftige Verlierer!"
Konkrete Renditewerte des Original-Charts sind im Render nicht zuverlässig ablesbar.

### Fachliche Aussage
Das Original-Diagramm bestätigt empirisch: hohe B/M-Ratio (Value) bedeutet höhere Zukunftsrenditen, niedrige B/M-Ratio (Growth) niedrigere - Kernbeleg des Value-Effekts.

### React-Vorschlag
`ValueGrowthBarChart` (10 fallende Balken von Value zu Growth, Achsen-Labels High/Low Book-to-Market) + `Callout` mit den zwei Merksätzen; `SourceNote` für Fama/French (1992).

---

## Folie 25 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Zufall

### In der MD vorhanden
Der erläuternde Text ist vorhanden: Titel, der Text "Zusammenhang zwischen Book-to-Market könnte das Ergebnis von Zufall sein. Viele 'Researcher' schauen im gleichen Datenmaterial nach Mustern. Gute Performance-Ergebnisse müssen aber nicht von der Prognosefähigkeit abhängen, sondern können auch vom Zufall abhängen." sowie der Schlusssatz zum "Affe Jodie".
(Hinweis: Die im Entwurf genannte Quelle "Chan et al (2003): The level and persistence of growth rates" ist auf dieser Folie NICHT sichtbar – sie gehört zu einer anderen Folie. Falls in der MD vorhanden, ist sie hier zu entfernen.)

### Fehlende visuelle Inhalte
Die zentrale Grafik (mehrere Reihen kleiner brauner Affen-/Maskottchen-Figuren) wurde nicht extrahiert. Über fünf Spalten ("Periode 1" bis "Periode 5") ist jeweils eine Gruppe identischer kleiner Affen-Figuren abgebildet. Die Anzahl der Figuren nimmt von Periode zu Periode ab (links viele, nach rechts immer weniger), bis in "Periode 5" nur noch eine einzelne Figur ("Affe Jodie") übrig bleibt. Dies illustriert ein Ausscheidungsturnier nach dem Zufallsprinzip.

### Visuelle Rekonstruktion
```
Periode 1   Periode 2   Periode 3   Periode 4   Periode 5
(viele      (weniger    (weniger    (wenige     (einer =
 Figuren)    Figuren)    Figuren)    Figuren)     "Jodie")
```
(Genaue Figurenzahl je Spalte visuell nicht exakt abzählbar – Tendenz: streng abnehmend.)

### Inhaltliche Rekonstruktion
Aussage der Folie: Auch ohne jede Prognosefähigkeit bleibt nach 5 zufälligen Runden statistisch ein "perfekter Prognostiker" übrig. "Nach 5 Perioden ist der Affe Jodie der perfekte Prognostiker: 5 richtige Vorhersagen am Stück!"

### Fachliche Aussage
Gute Track Records können reines Zufallsergebnis von Data-Mining sein: Wer viele Researcher dasselbe Datenmaterial durchsuchen lässt, findet allein durch Zufall "erfolgreiche" Muster. Der Book-to-Market-Effekt könnte daher reiner Zufall sein.

### React-Vorschlag
`SurvivorshipFunnel` – horizontale Reihe von fünf Periodenspalten mit abnehmender Anzahl Icons (z. B. Emoji oder SVG), darunter Callout-Box mit der Pointe zum "Affe Jodie".

---

## Folie 26 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Zufall

### In der MD vorhanden
Der Begleittext: "ABER: Andere sample zeigen vergleichbare Ergebnisse wie in den USA." und die Quelle "(Fama/French, 1998: Value versus growth: The international difference)".

### Fehlende visuelle Inhalte
Die große, als Bild eingebettete internationale Renditetabelle wurde nicht extrahiert. Datentabelle aus Fama/French (1998) mit dem Titel "Annual Dollar Returns in Excess of U.S. T-Bill Rate for Market, Value, and Growth Portfolios, 1975-1995". Zeilen sind die untersuchten Länder (u. a. U.S., Japan, U.K., France, Germany, Italy, Netherlands, Belgium, Switzerland, Sweden, Australia, Hong Kong, Singapore). Spalten enthalten Renditegrößen für Market-, Value- und Growth-Portfolios sowie B/M- bzw. E/P-Sortierungen. Eine separate Spalte ganz rechts trägt die Überschrift "H-L (B/M)" (High minus Low). Die Zellwerte sind in der Renderung zu klein für eine zuverlässige Einzelablesung.

### Visuelle Rekonstruktion
```
Land            | Market | Value | Growth | ... | H-L (B/M)
U.S.            |  ...   |  ...  |  ...   |     |   ...
Japan           |  ...   |  ...  |  ...   |     |   ...
U.K.            |  ...   |  ...  |  ...   |     |   ...
...             |        |       |        |     |
(13 Länder)     |        |       |        |     |
```

### Inhaltliche Rekonstruktion
Konkrete Zellwerte sind in der Renderung nicht verlässlich ablesbar (Originaltabelle aus Fama/French 1998). Kernbotschaft der Tabelle: In nahezu allen untersuchten Ländern liegt die Value-minus-Growth-Differenz (B/M H-L) positiv, vergleichbar mit dem US-Befund.

### Fachliche Aussage
Der Value-Effekt ist kein US-spezifisches Zufallsartefakt: In zahlreichen weiteren Ländern (out-of-sample) zeigen sich vergleichbare Überrenditen von Value- gegenüber Growth-Aktien.

### React-Vorschlag
`InternationalReturnsTable` – scrollbare/responsive Tabelle (Länder × Renditekennzahlen) mit hervorgehobener H-L-Spalte; Quelle Fama/French (1998) als `source-note`.

---

## Folie 27 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Risiko

### In der MD vorhanden
Der Text ist vollständig: die klassische Argumentation der Traditional Finance (jede Überrendite = Ergebnis eines Risikofaktors, Risikofaktor = CAPM-Beta) und die Hypothese, dass Aktien mit hohem CAPM-Beta auch ein hohes Book-to-Market-Ratio haben müssten.

### Fehlende visuelle Inhalte
Das einfache Liniendiagramm in der Folienmitte fehlt. Achsen: y-Achse "Rendite", x-Achse "CAPM-Beta". Eine einzelne schwarze, leicht ansteigende Gerade verläuft von links unten nach rechts oben (positive Steigung). Sie zeigt den von der Theorie erwarteten positiven Zusammenhang: höheres Beta → höhere Rendite. (Keine Achsen-Skalenwerte angegeben.)

### Visuelle Rekonstruktion
```
Rendite ^
        |                _______/  (ansteigende Gerade)
        |        ______/
        |  _____/
        +-----------------------> CAPM-Beta
```

### Inhaltliche Rekonstruktion
Theorie-Erwartung: Rendite steigt (linear) mit dem CAPM-Beta. Daraus folgt die Hypothese: hohes Beta (hohes Risiko) ⇒ hohes Book-to-Market-Ratio.

### Fachliche Aussage
Die Folie formuliert die Risiko-Hypothese der Traditional Finance als testbare Vorhersage: Wenn Book-to-Market ein Risikofaktor wäre, müsste er positiv mit dem CAPM-Beta korrelieren.

### React-Vorschlag
`RiskHypothesisChart` – kleines SVG-Liniendiagramm mit einer ansteigenden Geraden (Rendite über CAPM-Beta), eingebettet zwischen den beiden Textblöcken.

---

## Folie 28 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Risiko

### In der MD vorhanden
Der Satz "Die Empirie zeigt genau das Gegenteil !".

### Fehlende visuelle Inhalte
Zwei Grafiken fehlen vollständig:
1. **Streudiagramm (links)** aus Fama/French 1992: x-Achse "Beta" (Skala 0.6 bis 1.8), y-Achse "Book-to-Market Equity" (Skala 0.5 bis 1). Mehrere schwarze Datenpunkte (Portfolios) bilden eine tendenziell fallende Wolke: bei niedrigem Beta (ca. 0,8) liegt B/M hoch (ca. 0,88), mit steigendem Beta sinkt B/M; der rechteste Punkt liegt bei Beta ca. 1,75 und B/M ca. 0,6 (alle Werte visuell abgelesen). Quelle darunter: "Source: E. Fama and K. French, 'The Cross-Section of Expected Stock Returns,' Journal of Finance, June 1992, Table II."
2. **Schematisches Vergleichsdiagramm (rechts)**: Achsen y "Rendite", x "CAPM-Beta". Zwei Linien: eine **schwarze ansteigende Gerade** mit Label "Theorie" und eine **rote, leicht fallende Gerade** mit Label "Empirie". Die beiden Linien kreuzen sich in der Mitte.

### Visuelle Rekonstruktion
```
links (Streudiagramm):              rechts (schematisch):
B/M ^                               Rendite ^      Theorie (schwarz)
1.0 |  ■                                   |     ___/
0.9 |   ■  ■ ■ ■                           | ___/  ‾‾‾‾‾ Empirie (rot, fällt)
0.8 |        ■   ■  ■                       |/        ‾‾‾‾
0.7 |              ■                       +----------------> CAPM-Beta
0.6 |                  ■
    +------------------------> Beta
     0.6  0.8 ... 1.4 1.6 1.8
```

### Inhaltliche Rekonstruktion
Empirie: Höheres Beta geht mit niedrigerem Book-to-Market einher (negativer statt erwartet positiver Zusammenhang). Theorie-Linie (schwarz) steigt, Empirie-Linie (rot) fällt.

### Fachliche Aussage
Die empirischen Daten widerlegen die Risiko-Erklärung: Hohes CAPM-Beta korreliert nicht mit hohem, sondern mit niedrigem Book-to-Market – das Gegenteil der Risiko-Hypothese.

### React-Vorschlag
`TheoryVsEmpiricsChart` – zweigeteilte Figur: links Scatterplot der Fama/French-Portfolios, rechts schematisches Diagramm mit gekreuzter "Theorie"-(schwarz) und "Empirie"-(rot) Linie; Quelle als `source-note`.

---

## Folie 29 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Risiko

### In der MD vorhanden
Vollständig: "Anhänger der traditionellen Finance geben hier aber noch nicht auf!", die blaue Zwischenüberschrift "Weitere Versuche, Book-to-Market als Risikofaktor zu erklären:", die Aufzählung (Book-to-Market ist ein Financial Distress Faktor; Unternehmen mit hohem Book-to-Market zeigen finanzielle Schwierigkeiten; Niedrige Rentabilitäten, Gewinnrückgänge, etc.) und der Schlusssatz "Aber: Alles reine Vergangenheitsbetrachtung !".

### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählungspunkten; keine Grafik, kein Diagramm, keine Tabelle. Lediglich farbliche Hervorhebungen (blaue Zwischenüberschrift, unterstrichenes "Aber:").

### Inhaltliche Rekonstruktion
- Book-to-Market als Financial-Distress-Faktor
- Unternehmen mit hohem B/M ⇒ finanzielle Schwierigkeiten
- Niedrige Rentabilitäten, Gewinnrückgänge, etc.
- Kritik: alles reine Vergangenheitsbetrachtung

### Fachliche Aussage
Letzter Verteidigungsversuch der Traditional Finance: B/M als Distress-Risikofaktor. Einwand: Diese Begründung stützt sich nur auf vergangene Daten und ignoriert die Zukunftsbewertung.

### React-Vorschlag
`BulletCallout` – Stichpunktliste mit blauer Zwischenüberschrift und hervorgehobenem Schluss-Callout ("Aber: Alles reine Vergangenheitsbetrachtung!").

---

## Folie 30 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Risiko

### In der MD vorhanden
(Im Entwurf des Kollegen FEHLTE diese Folie komplett – sie wird hier ergänzt. Die nachfolgenden Foliennummern wurden gegenüber dem Entwurf jeweils um +1 korrigiert.)
Vollständiger Text auf der Folie: "Anhänger der Behavioral Finance greifen das Thema Rentabilitäten und Wachstumsraten auf, aber statt in die Vergangenheit zu schauen, untersuchen sie zukünftige Rentabilitäten und Wachstumsraten:" mit der Aufzählung "Return on Equity / Gewinnwachstum / Umsatzwachstum / Cashflow Wachstum"; die blaue Hervorhebung "Marktpreis: Bewertung der zukünftigen Aussichten !"; sowie der Schlussabsatz: "Behavioral Finance Anhänger argumentieren, dass Value-Aktien unterbewertet sind, weil Investoren die schlechten fundamentalen Daten zu weit in die Zukunft fortschreiben. Bei Growth-Aktien sind Investoren zu optimistisch und sie schreiben die aktuelle gute fundamentale Situation ebenfalls zu weit in die Zukunft fort."

### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählungspunkten. Keine Grafik, kein Diagramm, keine Tabelle. Hervorhebungen: blau gesetzte Zwischenüberschrift ("Marktpreis: Bewertung der zukünftigen Aussichten !") und blau hervorgehobene Schlüsselbegriffe ("Value-Aktien", "unterbewertet", "Growth-Aktien", "zu optimistisch").

### Inhaltliche Rekonstruktion
- Behavioral-Finance-Vertreter betrachten zukünftige (statt vergangene) Rentabilitäten/Wachstumsraten: Return on Equity, Gewinnwachstum, Umsatzwachstum, Cashflow-Wachstum
- Marktpreis spiegelt die Bewertung der zukünftigen Aussichten wider
- Value-Aktien: unterbewertet, weil schlechte Fundamentaldaten zu weit fortgeschrieben werden
- Growth-Aktien: überbewertet, weil Investoren zu optimistisch sind und die gute Situation zu weit fortschreiben

### Fachliche Aussage
Die Behavioral-Finance-Erklärung des Value-Effekts setzt an der Extrapolation an: Anleger schreiben aktuelle gute (Growth) bzw. schlechte (Value) Fundamentaldaten zu weit in die Zukunft fort, wodurch Growth zu teuer und Value zu billig bewertet wird.

### React-Vorschlag
`BulletCallout` – Stichpunktliste der vier Zukunftskennzahlen, blau hervorgehobener Zwischen-Callout ("Marktpreis: Bewertung der zukünftigen Aussichten!") und ein Absatz mit farblich markierten Value-/Growth-Schlüsselbegriffen.

---

## Folie 31 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Fehlbewertungen

### In der MD vorhanden
(Im Entwurf war dies fälschlich als "Folie 30" geführt – die Tabelle gehört zu dieser Folie 31.)
Begleittext vorhanden: Quelle "Chan et al (2003): The level and persistence of growth rates" und der Schlusssatz zum Roulette-Vergleich ("Wahrscheinlichkeiten von überdurchschnittlichen Wachstumsraten verhalten sich ähnlich wie bei einem Roulettespiel: Jedes Jahr sinkt die Anzahl der Unternehmen mit überdurchschnittlichem Wachstum.").

### Fehlende visuelle Inhalte
Die zentrale, als Bild eingebettete Datentabelle aus Chan et al. (2003) fehlt komplett. Tabellenkopf: Spalten 1 bis 10 unter der Überschrift "study results … each year the number of years…" (Jahre 1-10). Zeilen (Variablen) umfassen u. a. "Average number of valid firms", "Percent above median", "Percent above average" für mehrere Teilperioden (z. B. 1951-2003, 1951-1977, 1978-1998), darunter ein zweiter Block "(B) Operating income before depreciation" mit denselben Zeilenarten. Die einzelnen Prozent-/Zahlwerte sind in der Renderung zu klein, um sie verlässlich abzulesen.

### Visuelle Rekonstruktion
```
Variable                         | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
Average number of valid firms    | … | … | … | … | … | … | … | … | … | …
Percent above median             | … | …
Percent above average            | … | …
(B) Operating income before depr.|
...                              |
```

### Inhaltliche Rekonstruktion
Einzelwerte nicht verlässlich ablesbar (Originaltabelle). Kernaussage: Die Wahrscheinlichkeit, dass ein Unternehmen über mehrere Jahre überdurchschnittlich wächst, fällt mit jedem Jahr stark ab – ähnlich wie beim Roulette die Wahrscheinlichkeit mehrerer Treffer in Folge.

### Fachliche Aussage
Anhaltend überdurchschnittliches Wachstum ist selten und kaum vorhersagbar; die Zahl der "Dauer-Wachstums-Unternehmen" schrumpft Jahr für Jahr – ein Hinweis auf Mean Reversion und damit auf Fehlbewertung von Growth-Aktien.

### React-Vorschlag
`GrowthPersistenceTable` – kompakte, responsive Tabelle (Variablen × Jahre 1-10) mit der Roulette-Analogie als Callout darunter; Quelle Chan et al. (2003) als `source-note`.

---

## Folie 32 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Fehlbewertungen

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 31" geführt.)
Der Text ist fragmentiert/in falscher Lesereihenfolge extrahiert: "Growth Aktien: hohes vergangenes Wachstum", "Value Aktien: niedriges vergangenes Wachstum", "zukünftiges Wachstum ist mean reverting → hohes W. und niedriges W. wird durchschnittlich", "Mean reversion wird bei Gewinnprognosen oft zu wenig berücksichtigt." sowie der Schlusssatz "Zukünftiges Wachstum gleicht sich schneller an, als es die Aktienkurse widerspiegeln."

### Fehlende visuelle Inhalte
Das Pfeil-Schaubild fehlt. Links zwei untereinanderstehende, unterstrichene Textblöcke ("Growth Aktien: hohes vergangenes Wachstum" und "Value Aktien: niedriges vergangenes Wachstum"). Von beiden Blöcken führen zwei rechtwinklig/abgesetzt verlaufende schwarze Pfeile nach rechts und münden in einen gemeinsamen, fett gesetzten Zielblock: "zukünftiges Wachstum ist mean reverting → hohes W. und niedriges W. wird durchschnittlich". Rechts darunter eine blau umrandete Box: "Mean reversion wird bei Gewinnprognosen oft zu wenig berücksichtigt." Ganz unten ein hellblau hinterlegter Balken mit dem Schlusssatz.

### Visuelle Rekonstruktion
```
Growth Aktien:                 ─┐
hohes vergangenes Wachstum      ├──►  zukünftiges Wachstum
                                │     ist MEAN REVERTING
Value Aktien:                  ─┘     → hohes W. und niedriges W.
niedriges vergangenes Wachstum        wird durchschnittlich

                         ┌────────────────────────────┐
                         │ Mean reversion wird bei     │
                         │ Gewinnprognosen oft zu      │
                         │ wenig berücksichtigt.       │
                         └────────────────────────────┘
[ Zukünftiges Wachstum gleicht sich schneller an, als es die Aktienkurse widerspiegeln. ]
```

### Inhaltliche Rekonstruktion
- Growth-Aktien (hohes vergangenes Wachstum) → Wachstum geht zurück Richtung Durchschnitt
- Value-Aktien (niedriges vergangenes Wachstum) → Wachstum steigt Richtung Durchschnitt
- Gemeinsamer Effekt: Mean Reversion des zukünftigen Wachstums
- In Gewinnprognosen wird dieser Effekt oft zu wenig berücksichtigt

### Fachliche Aussage
Wachstumsraten kehren zum Mittelwert zurück; weil Prognosen das ignorieren und Kurse sich langsamer anpassen als die Fundamentaldaten, entstehen Fehlbewertungen zwischen Growth und Value.

### React-Vorschlag
`MeanReversionFlow` – zwei Eingangsboxen (Growth/Value) mit Pfeilen, die in eine zentrale Zielbox münden; daneben eine umrandete Hinweisbox und ein abschließender Highlight-Banner.

---

## Folie 33 - Value-Effekt: Erklärungen für Book-to-Market Effekt: Fehlbewertungen

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 32" geführt.)
Der Text ist vollständig und gut lesbar: Frage "Warum sind Wachstumsraten, Profitabilitäten mean-reverting?", die vier Erklärungspunkte (Marktkräfte/Wettbewerb sorgen zum Mittelwert zurückgehende Wachstumsraten/Profitabilitäten; in Märkten mit hohen Profitabilitäten wird verstärkt investiert → Mehr Angebot, Margendruck; in Märkten mit niedrigen Profitabilitäten wird verstärkt umstrukturiert → Weniger Angebot, niedrigere Kosten, Margenerhöhung; in Preisen werden über-/unterdurchschnittliche Wachstumsraten/Profitabilitäten – falls diese prognostiziert werden können – zu weit in die Zukunft fortgeschrieben) sowie die beiden hellblau hinterlegten Schlusssätze zu Wachstums- und Value-Aktien.

### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählungspunkten und Pfeil-Einrückungen (→). Keine Grafik, kein Diagramm, keine Tabelle. Die beiden Schlusssätze sind hellblau hinterlegt.

### Inhaltliche Rekonstruktion
- Marktkräfte/Wettbewerb treiben Wachstum/Profitabilität zum Mittelwert zurück
- Hohe Profitabilität → mehr Investition → mehr Angebot, Margendruck
- Niedrige Profitabilität → Umstrukturierung → weniger Angebot, niedrigere Kosten, Margenerhöhung
- Über-/unterdurchschnittliche Wachstumsraten werden im Preis zu weit fortgeschrieben
- Wachstumsaktien: hohe Wachstumsraten werden zu lange in der Zukunft erwartet
- Value-Aktien: niedrige Wachstumsraten werden zu lange in der Zukunft erwartet

### Fachliche Aussage
Wettbewerb sorgt strukturell für Mean Reversion von Wachstum und Profitabilität; Anleger schreiben Extreme zu lange fort und erzeugen so die Fehlbewertung von Growth (zu teuer) und Value (zu billig).

### React-Vorschlag
`BulletListWithArrows` – verschachtelte Stichpunktliste mit eingerückten Pfeil-Konsequenzen, abschließend zwei Highlight-Banner für Wachstums- und Value-Aktien.

---

## Folie 34 - Value-Effekt: Zusammenfassung Value und Growth

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 33" geführt.)
Vollständig: Kernaussage "Value Aktien erzielen langfristig eine höhere Rendite als Growth Aktien", der Hinweis "Im Querschnitt von Aktien sind Bewertungsmaßstäbe (oder eine Kombination davon) gute Vorhersagevariablen.", die Gründe-Bewertung (Zufall: eher nein; Risiko: eher nein; Fehlbewertung: die wahrscheinlichste Erklärung), der Behavioral-Finance-Abschnitt zu Fondsmanagern/Extrapolation, Quelle "Stotz et al (2006): Do fund managers expect mean averting returns?" und die Schlussgründe "Repräsentativitätsheuristik, Overconfidence u.w.".

### Fehlende visuelle Inhalte
Reine Textfolie (Zusammenfassung) mit Aufzählung. Keine Grafik, kein Diagramm. Hervorhebungen: blaue Zwischenüberschriften, fett markierte Schlüsselbegriffe.

### Inhaltliche Rekonstruktion
Gründe für die bessere Value-Performance:
- Zufall: eher nein
- Risiko: eher nein
- Fehlbewertung: die wahrscheinlichste Erklärung

Behavioral Finance: Auch vermeintliche "Profis" (Fondsmanager) extrapolieren vergangene Entwicklungen zu weit in die Zukunft – für Länder, die in der Vergangenheit gut performt haben, wird eine positive Entwicklung erwartet; mit Expansion der Bewertungsverhältnisse, teure Märkte werden teurer, günstige Märkte werden günstiger, und das über einen Zeitraum von bis zu 10 Jahren. Gründe: Repräsentativitätsheuristik, Overconfidence u. w.

### Fachliche Aussage
Der Value-Effekt ist robust und am besten durch Fehlbewertung (nicht durch Zufall oder Risiko) erklärbar; selbst professionelle Investoren unterliegen systematisch der Extrapolationsneigung.

### React-Vorschlag
`SummaryCard` – Zusammenfassungskarte mit einer kleinen "Ja/Nein/Wahrscheinlich"-Liste der drei Erklärungen und einem hervorgehobenen Behavioral-Finance-Abschnitt; Quelle als `source-note`.

---

## Folie 35 - Risikoprämie: Die Ermittlung einer Risikoprämie: Die Idee

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 34" geführt.)
Die Textfragmente sind vorhanden, aber als Liste zerbrochen: "Dividenden-Diskontierungsmodell zur Bewertung eines Aktienkurses", "Prognosen der zukünftigen Dividenden für", "2024 2025 2026 2027 …", mehrfach "Abzinsen", "Fairer Preis der Aktie", "Abzinsen mit einem dem Risiko angemessenen Diskontierungszins" und "Sicherer Zins + 'faire' Risikoprämie".

### Fehlende visuelle Inhalte
Das Zeitstrahl-/Abzinsungsschaubild fehlt. Oben eine Zeitachse mit Jahresknoten "2024 | 2025 | 2026 | 2027 | …", überschrieben mit "Prognosen der zukünftigen Dividenden für". Von jedem Jahr führt ein nach links zeigender hellblau/grauer Pfeil mit der Beschriftung "Abzinsen" zu einer blauen Klammer links, die mit "Fairer Preis der Aktie" (blau) beschriftet ist. Unten führt vom unterstrichenen Wort "Diskontierungszins" ein blauer V-förmiger Doppelpfeil nach unten zu "Sicherer Zins + 'faire' Risikoprämie".

### Visuelle Rekonstruktion
```
                Prognosen der zukünftigen Dividenden für
                2024     2025     2026     2027     ...
                  |        |        |        |        |
Fairer Preis  {  ◄──Abzinsen──┘                       
der Aktie     {  ◄──Abzinsen──────┘  (alle Jahre per "Abzinsen" zurück)
              {  ◄────────────────────────────────
        Abzinsen mit einem dem Risiko angemessenen Diskontierungszins
                              ↓        ↓
                    Sicherer Zins  +  "faire" Risikoprämie
```

### Inhaltliche Rekonstruktion
Fairer Aktienpreis = Barwert aller zukünftigen Dividenden, abgezinst mit dem risikoadäquaten Diskontierungszins = Sicherer Zins + "faire" Risikoprämie.

### Fachliche Aussage
Das Dividenden-Diskontierungsmodell leitet den fairen Aktienpreis her, indem zukünftige Dividenden mit einem Zins abgezinst werden, der sich aus sicherem Zins plus fairer Risikoprämie zusammensetzt.

### React-Vorschlag
`DiscountingTimeline` – horizontaler Zeitstrahl mit Jahresknoten und nach links gerichteten "Abzinsen"-Pfeilen auf eine Preis-Klammer; darunter Aufspaltung des Diskontierungszinses in zwei Komponenten via verzweigter Pfeile.

---

## Folie 36 - Risikoprämie: Die Ermittlung einer Risikoprämie: Die Idee

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 35" geführt.)
Analog zu Folie 35, aber mit den abweichenden Begriffen: "Marktpreis der Aktie" statt "Fairer Preis", "Suche nach dem Diskontierungszins, so dass sich Marktpreis ergibt" und "Sicherer Zins + implizite Risikoprämie".

### Fehlende visuelle Inhalte
Identisches Zeitstrahl-Schaubild wie Folie 35, mit zwei Unterschieden: Die linke Klammer ist mit "Marktpreis der Aktie" beschriftet (blau, hellblau hinterlegt). Unten führen die blauen Pfeile vom unterstrichenen Wort "Diskontierungszins" zu "Sicherer Zins +" und einer grau hinterlegten/umrandeten Box "implizite Risikoprämie". Im Text unten ist "Marktpreis" kursiv/blau hervorgehoben.

### Visuelle Rekonstruktion
```
                Prognosen der zukünftigen Dividenden für
                2024     2025     2026     2027     ...
                  |        |        |        |        |
Marktpreis    {  ◄──Abzinsen── ... (alle Jahre zurückdiskontiert)
der Aktie     {  ◄────────────────────────────────
        Suche nach dem Diskontierungszins, so dass sich Marktpreis ergibt
                              ↓        ↓
                    Sicherer Zins  +  [ implizite Risikoprämie ]
```

### Inhaltliche Rekonstruktion
Umkehrung des Modells: Statt den Preis zu berechnen, wird der Diskontierungszins gesucht, der den beobachteten Marktpreis erklärt. Dieser Zins = Sicherer Zins + implizite Risikoprämie.

### Fachliche Aussage
Die implizite Risikoprämie wird invers aus dem tatsächlichen Marktpreis und den Dividendenprognosen abgeleitet (Reverse-Engineering des Diskontierungszinses).

### React-Vorschlag
`ImpliedRiskPremiumTimeline` – Variante von `DiscountingTimeline` mit "Marktpreis"-Klammer und hervorgehobener "implizite Risikoprämie"-Box (Wiederverwendung der gleichen Komponente mit Props).

---

## Folie 37 - Risikoprämie: Eine Möglichkeit zur Berechnung der impliziten Risikoprämie

### In der MD problematisch/fehlend
(Im Entwurf fälschlich als "Folie 36" geführt.)
Die Formel ist über die Folie verstreut und unleserlich extrahiert: einzelne Bruchstücke "Σ", "Preis der Aktie =", "t=1", "∞", "Dividende (t)", "(1 + sich. Zins + impl. Risikopr.)^t". Der Phasen-Text ist vorhanden.

### Fehlende visuelle Inhalte
Die als Bild gesetzte Summenformel ist nicht korrekt extrahiert. Darzustellen ist eine Bewertungsformel mit großem Summenzeichen (Laufindex t=1 bis ∞), Zähler "Dividende (t)", Nenner "(1 + sich. Zins + impl. Risikopr.)" hoch t.

### Visuelle Rekonstruktion
```
                ∞        Dividende (t)
Preis der Aktie = Σ   ──────────────────────────────────
               t=1   (1 + sich. Zins + impl. Risikopr.)^t
```

### Inhaltliche Rekonstruktion
Formel (Klartext): Preis der Aktie = Summe von t=1 bis ∞ über [ Dividende(t) / (1 + sicherer Zins + implizite Risikoprämie)^t ].

Mögliche Modellspezifikationen zur vereinfachten Anwendung (da nur beschränkt Dividenden-Prognosen vorliegen):
- 1. Phase (1-3): Konkrete Dividendenprognose (z. B. IBES-Schätzung)
- 2. Phase (4-10): Übergang zu einer "durchschnittlichen Dividende"
- 3. Phase (>10): Annahmen aus historischen Wachstumsmodellen oder Wiederverkaufsannahme mit historisch durchschnittlicher Book-to-Market-Ratio (ca. 0,66)

### Fachliche Aussage
Die implizite Risikoprämie ergibt sich als interner Diskontierungszins eines mehrphasigen Dividendenbarwertmodells; mangels langfristiger Dividendenprognosen wird die Bewertung in drei Phasen aufgeteilt.

### React-Vorschlag
`FormulaBlock` – Summenformel als KaTeX/MathML gerendert, darunter `ThreePhaseList` mit den drei Modellphasen.

---

## Folie 38 - Risikoprämie: Beispiel zur Berechnung der Risikoprämie (BMW)

### In der MD problematisch/fehlend
(Im Entwurf fälschlich als "Folie 37" geführt.)
Die als Bild eingebettete Beispieltabelle ist völlig zerstört extrahiert (unleserliche Zeichenfolgen). Lesbar bleibt im Wesentlichen das Ergebnis.

### Fehlende visuelle Inhalte
Eine große, als Bild gesetzte Beispiel-Berechnungstabelle für die Aktie "BMW". Spaltenüberschriften: "Buchwert pro Aktie", "Gewinn pro Aktie", "Eigenkapitalrendite", "Ausschüttungsquote", "Dividende pro Aktie", "(DCF)". Zeilen sind die Jahre/Perioden ("Letztes Geschäftsjahr", "Laufendes Geschäftsjahr", danach Folgejahre +1 … +9). Unten links Eingabe-/Ergebniszeilen wie "Aktueller Börsenkurs", "Eigenkapitalrendite", "Sicherer Zins", "Wachstumsrate", "Implizite erwartete Rendite". Rechts oben ein kleines BMW-Logo. Mitte rechts eine Anmerkungs-Box ("Anmerkungen:") mit Hinweisen zur Eigenkapitalrendite/Ausschüttungsquote und dazu, dass aus den Werten der Schätzfehler und die Risikoprämie berechnet werden, darunter "Kalkulation Risikoprämie". Unten rechts ein blauer Ergebnisbalken: "Die eingepreiste Risikoprämie beträgt: 10,65%". Quelle/Hinweis unten rechts: "© Forschungsinstitut für Asset Management (FIFAM) e.V. … www.fifam.de". Die einzelnen Tabellenzahlen sind in der Renderung nicht verlässlich lesbar.

### Visuelle Rekonstruktion
```
BMW         | Buchwert/Aktie | Gewinn/Aktie | EK-Rendite | Ausschütt.-quote | Div./Aktie | (DCF)
Letztes GJ  |     …          |     …        |     …      |       …          |     …      |  …
Laufendes GJ|     …          |     …        |     …      |       …          |     …      |  …
+1 … +9     |     …          |     …        |     …      |       …          |     …      |  …
...
Aktueller Börsenkurs: …   Sicherer Zins: …   Wachstumsrate: …
                                  ┌─────────────────────────────────────────┐
                                  │ Die eingepreiste Risikoprämie: 10,65 %   │
                                  └─────────────────────────────────────────┘
```

### Inhaltliche Rekonstruktion
Die einzelnen Tabellenzahlen sind in der Renderung NICHT verlässlich lesbar. Verlässlich ablesbares Ergebnis: **Die eingepreiste (implizite) Risikoprämie beträgt 10,65 %**. Quelle: Forschungsinstitut für Asset Management (FIFAM) e.V., www.fifam.de.

### Fachliche Aussage
Am konkreten Beispiel BMW wird die implizite Risikoprämie aus Buchwerten, Gewinnen, EK-Rendite, Ausschüttungsquote und Börsenkurs per Dividendenbarwertmodell rückgerechnet; sie beträgt hier 10,65 %.

### React-Vorschlag
`RiskPremiumExample` – Berechnungstabelle (Jahre × Kennzahlen) mit hervorgehobener Ergebniszeile ("10,65 %"); da die Originalzahlen unleserlich sind, nur Struktur und Ergebnis abbilden, restliche Zellen als Platzhalter; Quelle FIFAM als `source-note`.

---

## Folie 39 - Risikoprämie: Risikoprämie als Performance-Treiber

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 38" geführt.)
Vollständig: die drei Bulletpoints (Höhe der Risikoprämie zeigt zukünftige Überrendite an, die sich genau dann einstellt, wenn alle anderen Input-Parameter unverändert bleiben; Veränderungen wirken empfindlich – genau wie Zinsänderungen –, Verringerungen positiv, Erhöhungen negativ; Aktien mit hoher impliziter Risikoprämie, die sich vermutlich wieder einem normalen Niveau nähert, bieten doppelte Rendite-Chancen) und der hervorgehobene Schlusssatz "Sowohl die Höhe der Risikoprämie als auch Prognosen über die Risikoprämie sind für die Anlageentscheidung zentral."

### Fehlende visuelle Inhalte
Reine Textfolie mit Aufzählung. Keine Grafik, kein Diagramm. Der Schlusssatz steht in einem hellblauen Banner zentriert.

### Inhaltliche Rekonstruktion
- Höhe der Risikoprämie = zukünftige Überrendite (bei sonst unveränderten Parametern)
- Veränderungen wirken empfindlich wie Zinsänderungen: Verringerung positiv, Erhöhung negativ
- Hohe implizite Risikoprämie, die sich später normalisiert ⇒ doppelte Rendite-Chance

### Fachliche Aussage
Die implizite Risikoprämie ist ein zentraler Performance-Treiber: Ihr Niveau und ihre erwartete Normalisierung bestimmen maßgeblich die zukünftige Aktienrendite.

### React-Vorschlag
`KeyDriverList` – Stichpunktliste mit abschließendem zentriertem Highlight-Banner.

---

## Folie 40 - Risikoprämie: Eine Anlagestrategie auf der Basis von Risikoprämien

### In der MD problematisch/fehlend
(Im Entwurf fälschlich als "Folie 39" geführt.)
Der Text ist als unsortierte Fragmentliste extrahiert: "Risikoprämie", "(geringes Kontrollgefühl)", "Übergewichtung", "Langfristig angemessene Risikoprämie", "Implizite Risikoprämie", "Untergewichtung", "(Kompetenz- und Kontrollgefühl)", "0", "Zeit", "Schlussfolgerung: 'Antizyklisches Handeln'". Die Diagrammstruktur geht dabei verloren.

### Fehlende visuelle Inhalte
Ein Schwingungs-/Wellendiagramm fehlt. Achsen: y "Risikoprämie", x "Zeit" (Ursprung bei 0). Eine blaue, wellenförmig schwingende Kurve (implizite Risikoprämie) oszilliert um eine horizontale blau-gestrichelte Mittellinie mit Label (rechts) "Langfristig angemessene Risikoprämie". An den Wellenbergen (hohe Risikoprämie) grüne Beschriftung "Übergewichtung" mit dem Zusatz "(geringes Kontrollgefühl)". An den Wellentälern (niedrige Risikoprämie) orange Beschriftung "Untergewichtung" mit Zusatz "(Kompetenz- und Kontrollgefühl)". Rechts Label "Implizite Risikoprämie" für die Kurve. Unten ein grauer Banner: "Schlussfolgerung: 'Antizyklisches Handeln'".

### Visuelle Rekonstruktion
```
Risiko-  ^   Übergewichtung (geringes Kontrollgefühl)
prämie   |     /\        /\        /\   (blaue Wellenkurve = implizite RP)
- - - - -|- - /- \- - - /- \- - - /- \- -  Langfristig angemessene Risikoprämie
         |   /    \    /    \    /    \
         |  Untergewichtung (Kompetenz- und Kontrollgefühl)
       0 +-------------------------------------> Zeit
        [ Schlussfolgerung: "Antizyklisches Handeln" ]
```

### Inhaltliche Rekonstruktion
- Implizite Risikoprämie schwankt im Zeitverlauf um ihren langfristigen Mittelwert
- Hohe Risikoprämie (geringes Kontrollgefühl, Angst) → Übergewichten
- Niedrige Risikoprämie (Kompetenz-/Kontrollgefühl, Euphorie) → Untergewichten
- Schlussfolgerung: antizyklisches Handeln

### Fachliche Aussage
Eine risikoprämienbasierte Strategie handelt antizyklisch: Bei überdurchschnittlich hoher impliziter Risikoprämie wird gekauft (übergewichtet), bei niedriger verkauft (untergewichtet), in Erwartung der Rückkehr zum Mittelwert.

### React-Vorschlag
`RiskPremiumCycleChart` – SVG-Sinuskurve um eine gestrichelte Mittellinie, mit farbcodierten Markern (grün = Übergewichtung an Hochpunkten, orange = Untergewichtung an Tiefpunkten) und abschließendem "Antizyklisches Handeln"-Banner.

---

## Folie 41 - Size Effekt: Unternehmensgröße als Prognosevariable

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 40" geführt.)
Nur die Quelle und das Ergebnis: "Quelle: Fama/French (1992): The cross-section of expected stock returns" und "Rendite des P(1 - 10): 0.63% p.m., 7.56% p.a. : Size effect (oftmals als SMB bezeichnet)".

### Fehlende visuelle Inhalte
Die als Bild eingebettete Renditetabelle aus Fama/French (1992) fehlt. Überschrift: "Panel A: Average Monthly Returns (in Percent)". Spalten: eine Spalte "All" sowie Beta-Klassen ("Low-β", "β-2" … "High-β"). Zeilen sind die Size-Portfolios: "All", "Small-ME", "ME-2", "ME-3", "ME-4", "ME-5", "ME-6", "ME-7", "ME-8", "ME-9", "Large-ME". Unten eine separate Ergebniszeile "Small minus Large" mit Werten je Spalte (links erkennbar ca. 0,63). Die Einzelwerte in der Matrix sind in der Renderung zu klein für verlässliche Ablesung.

### Visuelle Rekonstruktion
```
          | All | Low-β | β-2 | ... | High-β
All       | …   |  …    | …   |     |  …
Small-ME  | …   |  …    | …   | … |  (höchste Renditen oben)
ME-2      | …   |
...       |
Large-ME  | …   |  …    | …   | … |  (niedrigere Renditen unten)
Small-Large| 0.63%|0.70%| … | … |
```
(Einzelwerte – außer der Ergebniszeile – nicht verlässlich ablesbar; im Entwurf genannte Punktwerte wie "1.64" und "0.90" sind NICHT sicher lesbar und wurden entfernt.)

### Inhaltliche Rekonstruktion
Verlässlich ablesbares Ergebnis: Rendite des Portfolios P(1-10) (Small minus Large) = **0,63 % p.m. ≈ 7,56 % p.a.** = Size-Effekt (oft als "SMB" – Small Minus Big – bezeichnet). Übrige Matrixwerte nicht verlässlich lesbar. Quelle: Fama/French (1992).

### Fachliche Aussage
Kleine Unternehmen (Small Caps) erzielen historisch höhere Durchschnittsrenditen als große; die Renditedifferenz "Small minus Large" (Size-Effekt/SMB) beträgt rund 0,63 % pro Monat bzw. 7,56 % p. a.

### React-Vorschlag
`SizeEffectTable` – responsive Matrix (Size-Portfolios × Beta-Klassen) mit hervorgehobener "Small minus Large"-Zeile und dem Kernergebnis (0,63 % p.m. / 7,56 % p.a.) als Callout; Quelle Fama/French (1992) als `source-note`.

---

## Folie 42 - Momentum-Effekt: Momentumstrategien

### In der MD problematisch/fehlend
(Im Entwurf fälschlich als "Folie 41" geführt.)
Strategietext vorhanden. Das Diagramm ist zerbrochen/teils gespiegelt extrahiert ("Jährliche Rendite", "Beta", Dezilportfolios, "Winner-Portfolio", "Loser-Portfolio", "Zunehmende, vergangene 6-Monats-Performance", Quelle und Untersuchungshinweis).

### Fehlende visuelle Inhalte
Ein Diagramm mit zwei y-Achsen fehlt. x-Achse: 10 Quantilportfolios (Labels "0-10%", "10-20%" … "90-100%"), Überschrift "Zunehmende, vergangene 6-Monats-Performance". Linke y-Achse "Jährliche Rendite" (Skala 0,00 % bis 30,00 %): eine ansteigende Linie/Balken-Reihe – ganz links "Loser-Portfolio" (niedrigste Rendite), ganz rechts "Winner-Portfolio" (höchste Rendite). Rechte y-Achse "Beta" (Skala bis ca. 1,2): eine flachere (gestrichelte) Kurve. Die Renditekurve steigt von Loser zu Winner an.

### Visuelle Rekonstruktion
```
Jährl. Rendite                                Winner-Portfolio   Beta
30% |                                              ____●         1.2
    |                                        _____/             
    | Loser-Portfolio   ___________________/                    
    |  ●______________/                                          
 0% +----------------------------------------------------------> 
    0-10% 10-20% ...                              90-100%
         Zunehmende, vergangene 6-Monats-Performance
```

### Inhaltliche Rekonstruktion
Strategie: Kaufe die Aktien mit der besten Performance der letzten 6 Monate und halte sie 6 Monate.
Quelle: Rouwenhorst (1998). Untersuchungszeitraum 1978-1995, Universum: 2190 Aktien aus 12 europäischen Ländern, monatliche Bildung der 10 dargestellten Quantilportfolios, **Renditedifferenz zwischen Extremen: 16,37 %**.

### Fachliche Aussage
Aktien mit guter Vergangenheitsperformance (Winner) erzielen auch künftig höhere Renditen als Loser – der Momentum-Effekt; die Renditedifferenz zwischen Extremportfolios beträgt 16,37 %.

### React-Vorschlag
`MomentumQuantileChart` – Diagramm mit Renditelinie über 10 Quantilportfolios und sekundärer Beta-Achse, Endpunkte als "Loser"/"Winner" markiert; Quelle Rouwenhorst (1998) als `source-note`.

---

## Folie 43 - Momentum-Effekt: Momentumstrategien und Laufzeiten

### In der MD problematisch/fehlend
(Im Entwurf fälschlich als "Folie 42" geführt.)
Strategie- und Empirietext vorhanden, aber Tabelle und Balkendiagramm sind ineinander verschachtelt/teils gespiegelt extrahiert ("Beobachtung in Monaten").

### Fehlende visuelle Inhalte
1. **Matrix-Tabelle (links)**: Spalten = "Haltedauer in Monaten" (3 / 6 / 9 / 12), Zeilen = "Beobachtung in Monaten" (3 / 6 / 9 / 12). Zellwerte sind Renditedifferenzen Winner−Loser.
2. **Balkendiagramm (rechts)**: y-Achse 0,00 %–16,00 %, x-Achse "Haltedauer + Beobachtungsdauer" mit Kategorien "6 Mon., 9 Mon., 12 Mon., 15 Mon., 18 Mon., 21 Mon., 24 Mon."; sieben violette Balken, die zunächst ansteigen (Maximum bei 15 Mon. ≈ 14,5 %, visuell abgelesen) und danach wieder abfallen (24 Mon. ≈ 8 %) – ein "Glocken"-Verlauf mit Peak bei rund einem Jahr.

### Visuelle Rekonstruktion (Tabelle – Werte auf der Folie lesbar)
| Beobachtung ↓ \ Haltedauer → | 3 | 6 | 9 | 12 |
|---|---|---|---|---|
| 3 | 8,73 % | 11,09 % | 10,30 % | 10,30 % |
| 6 | 14,44 % | 14,84 % | 14,30 % | 11,48 % |
| 9 | 15,94 % | 16,63 % | 13,62 % | 10,30 % |
| 12 | 17,46 % | 14,71 % | 11,22 % | 7,96 % |

```
Balkendiagramm (Haltedauer + Beobachtungsdauer):
16% |              ▇
14% |        ▇  ▇  ▇  ▇
12% |     ▇              ▇
10% |  ▇                    ▇
 8% |                          
    +-6--9--12-15-18-21-24 Mon.
```

### Inhaltliche Rekonstruktion
Strategie: Kaufe Aktien mit der besten Performance der letzten 3/6/9/12 Monate und halte sie 3/6/9/12 Monate. Empirie: Renditedifferenzen Winner−Loser je Kombination (siehe Tabelle). Die höchsten Differenzen treten bei mittleren Kombinationen auf (max. 17,46 % bei Beobachtung 12 / Halte 3; bzw. 16,63 % bei Beobachtung 9 / Halte 6). Aussage: "Der stabile Kern eines Trends dauert typischer Weise ein gutes Jahr."

### Fachliche Aussage
Momentum funktioniert über verschiedene Beobachtungs-/Haltedauern, ist aber zeitlich begrenzt: Der stabile Trendkern hält typischerweise etwa ein Jahr, danach lässt der Effekt nach.

### React-Vorschlag
`MomentumHorizonMatrix` – Heatmap-Tabelle (Beobachtung × Haltedauer) mit Farbskala für die Renditedifferenz, daneben ein Balkendiagramm über die Gesamtdauer; abschließender Highlight-Satz.

---

## Folie 44 - Momentum Effekt: Idealtypisches Muster eines Kurstrends – Phase 1: Unterreaktion auf eine Information

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 43" geführt.)
Die rechten Bulletpoints sind vollständig: "Phase 1: Unterreaktion auf eine Information", die vier Stichpunkte (Unternehmen gibt positive Information bekannt; wegen geringer Verankerung ist Reaktion von Analysten und Investoren zu gering (Unterreaktion); Analystenprognosen bzw. Markterwartungen "hinken" noch hinterher; Risikoprämie bleibt im Wesentlichen unverändert) sowie die Legende "Tatsächlicher Kursverlauf" / "Fundamental gerechtfertigter Kursverlauf".

### Fehlende visuelle Inhalte
Das Kursdiagramm (links) fehlt. Achsen: y "Kurs", x "Zeit", mit grauem Karoraster. Zwei Linien: eine **rote** Linie ("Tatsächlicher Kursverlauf") und eine **gelbe/orange** Linie ("Fundamental gerechtfertigter Kursverlauf"). In Phase 1 (ein blau hinterlegtes vertikales Band links im Diagramm markiert den aktuellen Zeitabschnitt) springt der fundamental gerechtfertigte (gelbe) Kurs nach der positiven Information nach oben, während der tatsächliche (rote) Kurs nur langsam/leicht ansteigt und deutlich darunter bleibt. Die Lücke zwischen beiden Linien ist grün gefüllt (= Unterreaktion, noch nicht eingepreister Wert).

### Visuelle Rekonstruktion
```
Kurs ^   |▓▓| (blaues Phasenband)
     |   |▓▓|___________ gelb (fundamental gerechtfertigt, springt hoch)
     |   |▓▓|░░░░░░░     ← grüne Fläche = Unterreaktionslücke
     |  _|▓▓|/  rot (tatsächlich, steigt nur langsam)
     |_/ |▓▓|
     +-------------------------> Zeit
   ─── Tatsächlicher Kursverlauf (rot)
   ─── Fundamental gerechtfertigter Kursverlauf (gelb)
```

### Inhaltliche Rekonstruktion
- Unternehmen gibt positive Information bekannt
- Wegen geringer Verankerung ist die Reaktion von Analysten und Investoren zu gering (Unterreaktion)
- Analystenprognosen bzw. Markterwartungen "hinken" noch hinterher
- Risikoprämie bleibt im Wesentlichen unverändert

### Fachliche Aussage
In Phase 1 des Momentum-Musters unterreagiert der Markt auf neue positive Information: Der tatsächliche Kurs bleibt hinter dem fundamental gerechtfertigten zurück, weil Erwartungen verankert/träge sind.

### React-Vorschlag
`TrendPhaseChart` (Phase 1) – Liniendiagramm mit roter Ist-Linie und gelber Fair-Value-Linie, grün gefüllter Differenzfläche und blau hervorgehobenem Phasenband; Legende unten. Phasen 1-4 als eine parametrisierte Komponente.

---

## Folie 45 - Momentum Effekt: Idealtypisches Muster eines Kurstrends – Phase 2: Positive Überraschungen (Trendbasis)

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 44" geführt.)
Die rechten Bulletpoints sind vollständig: "Phase 2: Positive Überraschungen (Trendbasis)" und die drei Stichpunkte (aufgrund nachhinkender Prognosen/Erwartungen kommt es zu positiven Überraschungen bei den Gewinnveröffentlichungen; Information hat sich inzwischen herumgesprochen und Kurs ist gerechtfertigt; Risikoprämie bleibt noch im Wesentlichen unverändert, jedoch hat die Aktie jetzt ein positives Image). Legende vorhanden.

### Fehlende visuelle Inhalte
Fortsetzung des Kursdiagramms (gleiche Achsen Kurs/Zeit). Das blaue Phasenband liegt nun weiter rechts (mittlerer Zeitabschnitt). Die **rote** Ist-Linie ist inzwischen bis zur **gelben** Fair-Value-Linie angestiegen und holt diese am rechten Rand des Phasenbands ein; die grün gefüllte Lücke aus Phase 1 schließt sich. Die gelbe Linie bleibt weitgehend flach auf dem nach der Information erreichten Niveau.

### Visuelle Rekonstruktion
```
Kurs ^        |▓▓| (blaues Band rückt nach rechts)
     |     ___|▓▓|____ gelb (flach)
     |   ░░░░░|▓▓|/ rot trifft gelb (Lücke schließt sich)
     | _/grün |▓▓|
     |/       |▓▓|
     +----------------------> Zeit
```

### Inhaltliche Rekonstruktion
- Aufgrund nachhinkender Prognosen/Erwartungen kommt es zu positiven Überraschungen bei den Gewinnveröffentlichungen
- Information hat sich inzwischen herumgesprochen, Kurs ist gerechtfertigt
- Risikoprämie bleibt noch im Wesentlichen unverändert, jedoch hat die Aktie jetzt ein positives Image

### Fachliche Aussage
In Phase 2 holt der tatsächliche Kurs den fundamentalen Wert ein: Positive Gewinnüberraschungen (Folge der vorherigen Unterreaktion) rechtfertigen den Anstieg und schaffen die Basis des Trends.

### React-Vorschlag
`TrendPhaseChart` (Phase 2) – gleiche Komponente, Phasenband verschoben, Ist-Linie erreicht Fair-Value-Linie, schließende grüne Fläche.

---

## Folie 46 - Momentum Effekt: Idealtypisches Muster eines Kurstrends – Phase 3: Psychologische Trendverselbständigung

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 45" geführt.)
Die rechten Bulletpoints sind vollständig: "Phase 3: Psychologische Trendverselbständigung" und die drei Stichpunkte (aufgrund des positiven Images und guten Kursverlaufs erhält die Aktie mehr Aufmerksamkeit – Verfügbarkeit, Kontrolle; schematisches Denken (Repräsentativität) und Gruppeneffekte erzeugen zusätzliche Nachfrage, der Kurs steigt weiter; da sich die Gewinnerwartungen nicht ändern, reduziert sich durch den steigenden Kurs die Risikoprämie). Legende vorhanden.

### Fehlende visuelle Inhalte
Fortsetzung des Kursdiagramms. Das blaue Phasenband liegt nun im rechten Drittel/zentral-rechts. Die **rote** Ist-Linie steigt jetzt **über** die flache **gelbe** Fair-Value-Linie hinaus weiter an. Die Fläche zwischen roter (oben) und gelber (unten) Linie ist nun **rot/rötlich** gefüllt (= Überbewertung/Übertreibung beginnt), im Gegensatz zur grünen Unterreaktionsfläche der Phasen 1/2.

### Visuelle Rekonstruktion
```
Kurs ^              |▓▓|  rot steigt über gelb (rote Fläche = Übertreibung)
     |          ░░░░|▓▓|/
     |     ____ ████|▓▓|  ← rote Füllung über der gelben Linie
     |  __/ gelb (flach)
     |_/
     +-------------------------> Zeit
```

### Inhaltliche Rekonstruktion
- Aufgrund des positiven Images und guten Kursverlaufs erhält die Aktie mehr Aufmerksamkeit (Verfügbarkeit, Kontrolle)
- Schematisches Denken (Repräsentativität) und Gruppeneffekte erzeugen zusätzliche Nachfrage, der Kurs steigt weiter
- Da sich die Gewinnerwartungen nicht ändern, reduziert sich durch den steigenden Kurs die Risikoprämie

### Fachliche Aussage
In Phase 3 verselbständigt sich der Trend psychologisch: Verfügbarkeit, Repräsentativität und Herdenverhalten treiben den Kurs über den fundamental gerechtfertigten Wert; die Risikoprämie sinkt.

### React-Vorschlag
`TrendPhaseChart` (Phase 3) – Ist-Linie übersteigt Fair-Value-Linie, Differenzfläche jetzt rot eingefärbt (Übertreibung), Phasenband rechts.

---

## Folie 47 - Momentum Effekt: Idealtypisches Muster eines Kurstrends – Phase 4: Übertreibung wird offenkundig

### In der MD vorhanden
(Im Entwurf fälschlich als "Folie 46" geführt.)
Die rechten Bulletpoints sind vollständig: "Phase 4: Übertreibung wird offenkundig" und die drei Stichpunkte (es mehren sich Meldungen über eine zu hohe Bewertung; Kurssteigerungen lassen nach, Trend bricht ab; Risikoprämie ist inzwischen sehr klein geworden). Legende vorhanden.

### Fehlende visuelle Inhalte
Letzte Stufe des Kursdiagramms. Das blaue Phasenband liegt ganz rechts. Die **rote** Ist-Linie steigt zunächst noch steil über die flache **gelbe** Fair-Value-Linie, **flacht dann oben ab** (Trend bricht ab) und bildet einen Plateau-/Wendebereich. Die gesamte Fläche zwischen roter (oben) und gelber (unten) Linie ist groß und **rot** gefüllt (= deutliche, offenkundige Überbewertung). Dies ist die vollständige Kurve aller vier Phasen.

### Visuelle Rekonstruktion
```
Kurs ^                         _____ rot flacht ab (Trend bricht)
     |                   ████/      |▓▓|
     |              ████ (große rote Übertreibungsfläche) |▓▓|
     |     ____█████                |▓▓|
     |  __/  gelb (flach) ___________|▓▓|
     |_/
     +-----------------------------------> Zeit
```

### Inhaltliche Rekonstruktion
- Es mehren sich Meldungen über eine zu hohe Bewertung
- Kurssteigerungen lassen nach, Trend bricht ab
- Risikoprämie ist inzwischen sehr klein geworden

### Fachliche Aussage
In Phase 4 wird die Übertreibung offenkundig: Warnungen vor zu hoher Bewertung mehren sich, der Kursanstieg flacht ab und der Trend endet; die Risikoprämie ist auf ein sehr niedriges Niveau gefallen.

### React-Vorschlag
`TrendPhaseChart` (Phase 4) – vollständige vierphasige Kurve mit abflachendem Ist-Linien-Plateau und maximaler roter Übertreibungsfläche; ggf. als animierter Endzustand der Phasensequenz (Phasen 1-4 nacheinander einblendbar).

---

# Kompakte Umsetzungspriorität

## Muss rekonstruiert werden

1. Folie 6: Gegenüberstellung Traditional vs. Behavioral Finance (geschweifte Klammern)
2. Folie 7: Ashton-Ergebnistabelle (Werte rekonstruiert)
3. Folie 19: CAR-Kurven Loser/Winner
4. Folien 20, 23, 42: zweiachsige Rendite-/Beta-Combo-Charts über Quantilportfolios (gespiegelten MD-Text NICHT übernehmen)
5. Folie 22: Buchwert/Marktwert-Verzweigung (Klammer + Pfeile)
6. Folie 24: Value->Growth-Balkendiagramm
7. Folie 28: Theorie/Empirie-Doppeldiagramm (Scatterplot + gekreuzte Linien)
8. Folie 32: Mean-Reversion-Pfeilschaubild
9. Folien 35/36: Zeitstrahl-Abzinsungsschaubild (fair vs. implizit)
10. Folie 37: Dividendenbarwert-Summenformel
11. Folie 40: Risikoprämien-Schwingungskurve (antizyklisch)
12. Folie 43: Momentum-Laufzeit-Matrix (Werte lesbar) + Balkendiagramm
13. Folien 44-47: vierphasiges Kurstrend-Muster (Ist-/Fair-Value, grüne→rote Fläche)

## Kann vereinfacht werden

- Folien 9-16: Anomalie-Folien als einheitliche `AnomalyCard`/`AnomalyTable`
- Folien 25, 26, 31, 38, 41: Bildtabellen mit nicht ablesbaren Einzelwerten nur als Struktur + Platzhalter, verlässliche Kernergebnisse (10,65 %; 0,63 % p.m. / 7,56 % p.a.) hervorgehoben
- Folie 25: Affe-Jodie-Funnel als Icon-Reihe mit abnehmender Anzahl
- Folien 1, 8, 15, 16: Fotos/Bildbänder als dekorative Image-Slots
- Folien 29, 30, 33, 39: reine Textfolien als `BulletCallout`/`KeyDriverList`

## Nicht fachlich relevant

- HBW-Logo
- graue Kopfzeile / Folientitel-Layout
- Folien-Footer (`Behavioral Finance / CS / Folie XXX`)
- Copyright-Zeile
- exakte Folienpositionierung
- dekorative Bildästhetik ohne inhaltliche Zusatzinformation

---

# Datenorientierter React-Hinweis

Für die spätere React-Konvertierung sollten folgende Datenobjekte angelegt werden (nur aus tatsächlich im Skript vorhandenen Inhalten):

```js
export const kapitalmarktanomalien = [
  {
    anomalie: 'Kalendereffekte (Januar-Effekt)',
    beschreibung: 'Zu bestimmten Zeiten andere Renditen als in der Regelzeit; in den ersten zwei Januar-Wochen Überrenditen bei kleinen Unternehmen.',
    erklaerung: 'Mentale Kontenführung (steuerliche Verlustrealisierung am Jahresende, Rückkauf im Januar)',
  },
  {
    anomalie: 'Chartanalyse',
    beschreibung: 'Interpretation von Aktienmärkten aufgrund historischer Kursverläufe.',
    erklaerung: 'Repräsentativität (Muster sind nur zufällig entstanden)',
  },
  {
    anomalie: 'Dispositionseffekt',
    beschreibung: 'Gewinner zu früh verkaufen, Verlierer zu lange halten.',
    erklaerung: 'Prospect Theory - Verlustaversion',
  },
  {
    anomalie: 'Home Bias',
    beschreibung: 'Anleger investieren verstärkt in Wertpapiere des eigenen Landes.',
    erklaerung: 'Verfügbarkeitsheuristik',
  },
  {
    anomalie: 'Überoptimismus',
    beschreibung: 'Menschen überschätzen ihre Fähigkeit, an der Börse Gewinn zu machen.',
    erklaerung: null, // auf der Folie keine Erklärung angegeben
  },
  {
    anomalie: 'Investmenttrends',
    beschreibung: 'Investition in gerade modische Produkte.',
    erklaerung: 'Verfügbarkeitsheuristik (mediale Präsenz)',
  },
  {
    anomalie: 'Ranglisten',
    beschreibung: 'Jahrelanger Erfolg von Analysten/Vermögensverwaltern als Indiz überlegener Fähigkeiten.',
    erklaerung: 'Repräsentativitätsheuristik',
  },
  {
    anomalie: 'Einstandspreise/Kursziele',
    beschreibung: 'Funktionieren häufig als Anker.',
    erklaerung: 'Prospect Theory und Confirmation Bias',
  },
  {
    anomalie: 'Über-/Unterreaktionen',
    beschreibung: 'Marktwerte reagieren stärker auf Nachrichten als die Fundamentaldaten rechtfertigen.',
    erklaerung: 'Verfügbarkeitsheuristik, Überoptimismus, Ankereffekte, Confirmation Bias',
  },
  {
    anomalie: 'Equity-Premium-Puzzle',
    beschreibung: 'Risikoaufschlag der Aktien gegenüber Anleihen größer als durch Risiko gerechtfertigt.',
    erklaerung: 'Mentale Kontenführung (Jahreshorizonte)',
  },
]

export const investmentEffekte = [
  { name: 'Winner-Loser Effekt', quelle: 'Chopra, Lakonishok, Ritter (1992)', renditedifferenz: '10,84 %', zeitraum: '1930-1981', quantile: 20 },
  { name: 'Value Effekt', quelle: 'Fama/French (1992)', renditedifferenz: '19,99 %', zeitraum: '1963-1990', quantile: 12 },
  { name: 'Size Effekt (SMB)', quelle: 'Fama/French (1992)', ergebnis: '0,63 % p.m. / 7,56 % p.a.' },
  { name: 'Momentum Effekt', quelle: 'Rouwenhorst (1998)', renditedifferenz: '16,37 %', zeitraum: '1978-1995', quantile: 10 },
]
```

```js
// Momentum-Laufzeit-Matrix (Folie 43) - Renditedifferenzen Winner - Loser
// Zeilen: Beobachtung in Monaten; Spalten: Haltedauer in Monaten (3/6/9/12)
export const momentumHorizonMatrix = {
  haltedauer: [3, 6, 9, 12],
  zeilen: [
    { beobachtung: 3,  werte: [8.73, 11.09, 10.30, 10.30] },
    { beobachtung: 6,  werte: [14.44, 14.84, 14.30, 11.48] },
    { beobachtung: 9,  werte: [15.94, 16.63, 13.62, 10.30] },
    { beobachtung: 12, werte: [17.46, 14.71, 11.22, 7.96] },
  ],
  hinweis: 'Der stabile Kern eines Trends dauert typischer Weise ein gutes Jahr.',
}

// Vierphasiges Kurstrend-Muster (Folien 44-47)
export const kurstrendPhasen = [
  { phase: 1, titel: 'Unterreaktion auf eine Information', fuellung: 'gruen' },
  { phase: 2, titel: 'Positive Überraschungen (Trendbasis)', fuellung: 'gruen-schliessend' },
  { phase: 3, titel: 'Psychologische Trendverselbständigung', fuellung: 'rot' },
  { phase: 4, titel: 'Übertreibung wird offenkundig', fuellung: 'rot-maximal' },
]
```

Diese Daten sollten nicht nur als Text gespeichert werden, sondern Komponenten (`AnomalyTable`, `QuantilePerformanceChart`, `MomentumHorizonMatrix`, `TrendPhaseChart`) steuern, damit spätere Features wie Quiz, Suche, Tooltips und interaktive Übungen möglich bleiben.
