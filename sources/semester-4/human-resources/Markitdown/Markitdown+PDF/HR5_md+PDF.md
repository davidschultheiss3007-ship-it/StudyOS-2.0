# HR5_md+PDF - Personalbeschaffung: fehlende visuelle Inhalte für React

**Zweck:** Diese Datei ergänzt die vorhandene `skript-05-personalbeschaffung.md` um Inhalte, die bei der Markdown-Extraktion aus `skript-05-personalbeschaffung.pdf` verloren gegangen, nur als leere Folientitel übertragen oder fachlich nicht ausreichend beschrieben wurden. Sie ist als **React-Umsetzungsbriefing** gedacht, damit bei der Konvertierung von Markdown zu React keine Diagramme, Tabellenlogiken, Beispielanzeigen, Kampagnenaufgaben oder Bildaussagen verloren gehen.

**Quelle:** `skript-05-personalbeschaffung.pdf` mit 21 Folien und die dazugehörige Markitdown-Datei `skript-05-personalbeschaffung.md`.

**Wichtig:** Wiederkehrende Gestaltungselemente wie HBW-Logo, grauer Kopfbereich, Folientitel-Layout und Copyright-Footer sind keine fachlichen Inhalte. Diese können als globales Slide-/Topic-Template umgesetzt werden. Fachlich relevant sind vor allem die Wege-Grafik, das reziproke Austauschmodell, Tabellen zu interner/externer Beschaffung, Beispiele für Recruiting-Kampagnen, Vor-/Nachteilsvergleiche und das Arbeitgeberranking.

---

## Globale Umsetzungsregeln für React

1. **Leere Folientitel nicht übernehmen:** In der MD sind mehrere Folien nur als Titel vorhanden, obwohl die PDF dort Tabellen, Bildbeispiele oder Diagramme enthält. Diese Inhalte müssen rekonstruiert werden.
2. **Tabellen semantisch nachbauen:** Interne/externe Beschaffungswege und Vor-/Nachteile sollten nicht als Bild abgelegt werden, sondern als echte Tabellen oder Vergleichs-Cards.
3. **Bildbeispiele fachlich auswerten:** Die Recruiting-Beispiele von Qunit, Deutsche Bahn/BND, Stadtmarketing, klassischer Anzeige und Online-Bannern zeigen unterschiedliche Kanäle, Tonalitäten und Zielgruppenansprache. Sie sollten als kommentierte Galerie umgesetzt werden.
4. **Übungsfolien als Exercise-Cards markieren:** Gruppenarbeiten und Einzelarbeit sind Arbeitsaufträge, nicht normaler Lernstoff. Sie sollten als `ExerciseCard` oder `WorkshopTask` umgesetzt werden.
5. **Kanal- und Zielgruppenlogik sichtbar machen:** Sourcing, Guerilla-Recruiting, interne/externe Beschaffung und Recruiting-Kampagnen hängen fachlich zusammen. React sollte diese Zusammenhänge interaktiv darstellen.
6. **Quellen und Jahresangaben erhalten:** Quellenhinweis auf BWL-Lexikon bei Folie 1 sowie Ranking-Jahr 2025 bei Folie 21 beibehalten.
7. **Keine bloßen Screenshots ersetzen die Analyse:** Wo Bilder Beispiele zeigen, sollten zusätzlich kurze Analysefelder ergänzt werden: Kanal, Zielgruppe, Tonalität, Stärke, Risiko.

---

## Empfohlene React-Komponenten

| Komponente | Einsatzfolien | Zweck |
|---|---:|---|
| `RecruitmentPathTree` | 1 | Interne und externe Beschaffungswege als Baumdiagramm zeigen |
| `ExerciseCard` | 2, 16, 17, 25/Einzelarbeit | Arbeitsaufträge strukturiert darstellen |
| `ReciprocalRecruitingModel` | 3 | Austauschlogik zwischen Organisation und Individuum visualisieren |
| `InternalRecruitmentTable` | 4 | Interne Beschaffungswege mit Instrumenten abbilden |
| `ExternalRecruitmentTable` | 5 | Externe Beschaffungswege mit Medien/Kanälen abbilden |
| `SourcingSourceCards` | 6 | Sourcing und Arbeitnehmerüberlassung als Beschaffungsquellen darstellen |
| `RecruitingExampleGallery` | 7-15 | Recruiting-Beispiele als kommentierte Galerie mit Analysefeldern darstellen |
| `CampaignWorkshop` | 16-17 | Photoluma-Recruiting-Kampagne und Bewertungsbogen-Workshop abbilden |
| `InternalExternalComparison` | 18-20 | Vor-/Nachteile interner und externer Personalbeschaffung vergleichen |
| `EmployerRankingChart` | 21 | Top-10-Wunscharbeitgeber 2025 als Tabelle/Balkendiagramm rekonstruieren |

---

# Folienweise Ergänzungen

## Folie 1 - Personalbeschaffung: Wege

### In der MD vorhanden
Nur Titel, Quelle und Copyright sind vorhanden. Die eigentliche Wege-Grafik fehlt vollständig.

### Fehlende visuelle Inhalte
Die Folie zeigt ein blaues Baumdiagramm zur **Personalbeschaffung**. Oben steht ein breiter Hauptbalken `Personalbeschaffung - Beschaffungswege`. Darunter folgt ein zweiter Balken `Personalbeschaffung`, der sich in zwei Hauptäste aufteilt:

- **Interne Beschaffungswege**
- **Externe Beschaffungswege**

Unter den beiden Hauptästen stehen einzelne Beschaffungsformen als gestapelte blaue Boxen.

### Inhaltliche Rekonstruktion

#### Interne Beschaffungswege
- Innerbetriebliche Ausschreibung
- Personalentwicklung
- Versetzung
- Mehrarbeit

#### Externe Beschaffungswege
- Arbeitsverwaltung
- Stellenanzeigen
- Personalleasing
- Personalberater
- Sonstige Beschaffungswege

### Fachliche Aussage
Personalbeschaffung kann grundsätzlich über interne und externe Wege erfolgen. Interne Wege greifen auf bereits vorhandene Mitarbeiterpotenziale zurück; externe Wege erschließen den Arbeitsmarkt außerhalb des Unternehmens.

### React-Vorschlag
Komponente: `RecruitmentPathTree`.

Umsetzungsidee:

```text
Personalbeschaffung
├─ Interne Beschaffungswege
│  ├─ Innerbetriebliche Ausschreibung
│  ├─ Personalentwicklung
│  ├─ Versetzung
│  └─ Mehrarbeit
└─ Externe Beschaffungswege
   ├─ Arbeitsverwaltung
   ├─ Stellenanzeigen
   ├─ Personalleasing
   ├─ Personalberater
   └─ Sonstige Beschaffungswege
```

Interaktiv sinnvoll: Umschalter `intern` / `extern`, Hover-Erklärungen und späterer Link zu den Detailfolien 4 und 5.

---

## Folie 2 - Gruppenarbeit: Guerilla-Recruiting Zukunftsbank AG

### In der MD vorhanden
Der Arbeitsauftrag ist textlich vorhanden.

### Fehlende visuelle Inhalte
Die Folie enthält links ein Gruppenfoto: mehrere Business-Personen stehen im Kreis und blicken nach oben in die Kamera. Das Bild dient als Symbol für Gruppenarbeit, Teamdiskussion und Perspektivenvielfalt. Es trägt keinen zusätzlichen Fachinhalt, sollte aber als Übungsmarker oder Illustration erhalten bleiben.

### Inhaltliche Rekonstruktion

**Szenario:** Nora Müller, Personalleiterin der `Zukunftsbank AG`, möchte bei der Personalsuche neue Wege gehen. Mit geringem Budget will sie über **Guerilla-Recruiting** junge, dynamische Personen erreichen, die noch gar nicht an eine Bewerbung bei einer Bank gedacht haben.

**Arbeitsfrage:** Mit welchen Argumenten kann man ihr zu- oder abraten?

### Fachliche Aussage
Die Übung fordert eine Abwägung zwischen Kreativität, Reichweite, Kosten, Arbeitgeberimage und Zielgruppenpassung. Guerilla-Recruiting kann Aufmerksamkeit erzeugen, ist aber riskant, wenn es nicht zur Branche, Marke oder Zielgruppe passt.

### React-Vorschlag
Komponente: `ExerciseCard` mit zwei Spalten:

- **Pro Guerilla-Recruiting:** geringe Kosten, hohe Aufmerksamkeit, virales Potenzial, junge Zielgruppen, Differenzierung von klassischen Banken.
- **Contra Guerilla-Recruiting:** Seriositätsrisiko, Reputationsgefahr, mögliche Unpassung zur Bankbranche, schwer messbarer Erfolg, Gefahr von Missverständnissen.

Optional: Mini-Abstimmung `zu- oder abraten?` mit Begründungsfeld.

---

## Folie 3 - Personalbeschaffung: Reziproker Prozess

### In der MD vorhanden
Der erklärende Satz ist vorhanden. Die zentrale Austauschgrafik fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt ein Modell mit zwei Akteurszeilen und zwei Austauschspalten.

Links steht eine vertikale blaue Box mit den Akteuren:

- `Organisation`
- `Individuum`

Daneben stehen zwei große Spalten:

- `Angebot`
- `Nachfrage`

Zwischen Angebot und Nachfrage befinden sich zwei diagonale Pfeile. Sie zeigen, dass Organisation und Individuum gegenseitig etwas anbieten und nachfragen. Rot markiert sind die jeweils besonders relevanten Gegenleistungen.

### Inhaltliche Rekonstruktion

#### Organisation - Angebot
Die Organisation bietet dem Individuum:

- Arbeitsplatz
- Einkommen
- Aus- und Weiterbildung

#### Individuum - Angebot
Das Individuum bietet der Organisation:

- Zeit
- Kompetenzen
- Leistungsbereitschaft

#### Organisation - Nachfrage
Die Organisation fragt beim Individuum nach:

- Zeit
- Kompetenzen
- Leistung

#### Individuum - Nachfrage
Das Individuum fragt bei der Organisation nach:

- Arbeitsmöglichkeit
- Einkommenserzielung
- Selbstverwirklichung

### Fachliche Aussage
Personalbeschaffung ist kein einseitiger Suchprozess des Unternehmens. Sie ist ein **reziproker Aushandlungsprozess**: Unternehmen und Bewerber besitzen eigene Angebote und Erwartungen. Eine Vertragsbeziehung entsteht nur, wenn die Interessen weitgehend komplementär sind.

### React-Vorschlag
Komponente: `ReciprocalRecruitingModel`.

Umsetzung:

- Zwei Akteurskarten: `Organisation` und `Individuum`
- Zwei Spalten: `Angebot` und `Nachfrage`
- Pfeile zwischen den Spalten
- Rot hervorgehobene Erwartungspunkte: Arbeitsplatz, Einkommen, Weiterbildung sowie Arbeitsmöglichkeit, Einkommenserzielung, Selbstverwirklichung
- Lernfrage darunter: `Warum ist Recruiting heute stärker beidseitig als früher?`

---

## Folie 4 - Personalbeschaffung: Intern

### In der MD vorhanden
Nur der Titel ist vorhanden. Die gesamte Tabelle fehlt.

### Fehlende visuelle Inhalte
Die Folie enthält eine zweispaltige Tabelle mit der Überschrift **Interne Personalbeschaffungswege**. Links stehen die Beschaffungswege, rechts die konkreten Instrumente beziehungsweise Ausprägungen.

### Inhaltliche Rekonstruktion

| Interner Beschaffungsweg | Instrumente / Umsetzung |
|---|---|
| Versetzung | Stellenclearing: Tätigkeitsart, Tätigkeitsort und Tätigkeitsumfang; Änderungsvertrag; Änderungskündigung |
| Personalentwicklung | Personalbildung, Personalförderung, Arbeitsstrukturierung, Beförderung |
| Innerbetriebliche Stellenausschreibung und Bewerbung | Rundschreiben, Mitarbeiterzeitschrift, schwarzes Brett, Intranet, interne Initiativbewerbung |

### Fachliche Aussage
Interne Personalbeschaffung nutzt vorhandene Personalressourcen. Sie kann durch Versetzung, Entwicklung oder interne Ausschreibung erfolgen. Dadurch bleiben Wissen und Unternehmenskultur erhalten, allerdings ist die Auswahl begrenzt.

### React-Vorschlag
Komponente: `InternalRecruitmentTable`.

Darstellung als Tabelle oder Akkordeon:

- Karte `Versetzung` mit Unterpunkten Stellenclearing, Änderungsvertrag, Änderungskündigung
- Karte `Personalentwicklung` mit Personalbildung, Personalförderung, Arbeitsstrukturierung, Beförderung
- Karte `Interne Ausschreibung` mit Kommunikationskanälen

---

## Folie 5 - Personalbeschaffung: Extern

### In der MD vorhanden
Nur der Titel ist vorhanden. Die gesamte Tabelle fehlt.

### Fehlende visuelle Inhalte
Die Folie enthält eine zweispaltige Tabelle mit der Überschrift **Externe Personalbeschaffungswege**. Links stehen die Beschaffungskanäle, rechts konkrete Medien, Dienstleister oder Maßnahmen.

### Inhaltliche Rekonstruktion

| Externer Beschaffungsweg | Instrumente / Beispiele |
|---|---|
| Internet | Website, Suchmaschinen, Jobbörsen, Portal, Banner, RSS Feed, Podcast, Mobile Tag, Newsgroup, Wiki, Second Life |
| Publikationen | Tages-, Wochen-, Fachzeitschriften, Bücher |
| Werbung / Branding | Plakat, Rundfunk-, TV- und Kinowerbung, Videotext, Fax, Employer Branding |
| Arbeitsvermittlung | Agentur für Arbeit, ARGE, Jobcenter, Fach- und Auslandsvermittlung |
| Personalberatung | Planung, Schaltung von Anzeigen, Auswahl, Entscheidung, Vertragsmodalitäten, Headhunting |
| Guerilla-Recruiting | Ambient, Viral, Trojan und Conspiracy Recruiting |

### Fachliche Aussage
Externe Personalbeschaffung öffnet den Suchraum über das Unternehmen hinaus. Sie nutzt Medien, Arbeitsmarktinstitutionen, Beratungen und kreative Kampagnenformen, um neue Bewerberpotenziale zu erschließen.

### React-Vorschlag
Komponente: `ExternalRecruitmentTable`.

Interaktiv sinnvoll: Filter nach `digital`, `klassisch`, `Dienstleister`, `kreativ`. Jeder Kanal kann mit Beispielen und Vor-/Nachteilen erweitert werden.

---

## Folie 6 - Personalbeschaffung: Quellen

### In der MD problematisch
Die Inhalte wurden als zerbrochene Tabelle extrahiert. Die eigentliche Struktur besteht aus zwei Themenblöcken: **Sourcing** und **Arbeitnehmerüberlassung**.

### Inhaltliche Rekonstruktion

#### Sourcing
Beispiele und Instrumente:

- Empfehlungen
- Talent Scouts
- Competitive Intelligence
- Kontaktaufnahme
- Auswertung von Stellengesuchen und Datenbanken
- Hochschulmarketing
- Messen
- Partys
- Recrutainment
- Job Speed Dating
- Internet-Sourcing

#### Arbeitnehmerüberlassung
Formen:

- extern und intern
- Inhouse-Service
- Master-Service

### Fachliche Aussage
Personalbeschaffung kann durch aktives Sourcing erfolgen, also durch gezielte Identifikation und Ansprache potenzieller Kandidaten. Arbeitnehmerüberlassung ist eine weitere Quelle, bei der Arbeitskräfte über externe oder interne Überlassungsmodelle bereitgestellt werden.

### React-Vorschlag
Komponente: `SourcingSourceCards`.

Zwei Hauptkarten:

1. `Sourcing`: aktive Kandidatenidentifikation und direkte Kontaktaufnahme
2. `Arbeitnehmerüberlassung`: flexible Personalbereitstellung über Überlassungsmodelle

Optional: Tags für `aktiv`, `digital`, `Event`, `Datenbank`, `temporär`.

---

## Folie 7 - Personalbeschaffung: Beispiel Qunit

### In der MD vorhanden
Nur Titel und Copyright. Die Bildaussage fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt zwei Fotos zum Unternehmen **Qunit Human Resources**:

- links ein schmaler, vertikaler Aushang oder Aufsteller an einem öffentlichen Ort mit Qunit-Branding und Recruiting-/Kontaktinformationen
- rechts ein Foto eines Qunit-Schriftzugs an einer Gebäudefassade oder Glasfläche

### Fachliche Aussage
Das Beispiel zeigt **Recruiting über physische Sichtbarkeit im öffentlichen Raum**. Es geht nicht um eine klassische Online-Anzeige, sondern um Präsenz, Kontaktpunkt und Markenwahrnehmung direkt im Alltag potenzieller Kandidaten.

### React-Vorschlag
Komponente: `RecruitingExampleCard`.

Analysefelder:

- **Kanal:** physischer Aushang / Standortwerbung
- **Ziel:** Aufmerksamkeit und Kontaktaufnahme
- **Stärke:** lokale Sichtbarkeit, niedrige Hürde, Unternehmensmarke sichtbar
- **Risiko:** begrenzte Reichweite, schwer messbare Conversion

---

## Folie 8 - Personalbeschaffung: Beispiel Deutsche Bahn AG I

### In der MD vorhanden
Nur Titel und Copyright. Das Bildbeispiel fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt ein Foto aus einem Bahnhof oder Einkaufsbereich. Von der Decke hängen Recruiting-Plakate/Banner der Deutschen Bahn. Auf den Bannern sind Personenporträts und karrierebezogene Texte zu erkennen. Der Standort ist stark frequentiert.

### Fachliche Aussage
Das Beispiel zeigt **Out-of-Home-Recruiting an einem thematisch passenden Ort**: Die Deutsche Bahn wirbt dort, wo Mobilität, Pendler und Bahnbezug unmittelbar präsent sind. Die Platzierung passt zur Arbeitgebermarke und erreicht Personen im Alltag.

### React-Vorschlag
Als Teil der `RecruitingExampleGallery` mit Analyse:

- **Kanal:** Bahnhofswerbung / Hängeplakate
- **Zielgruppe:** Pendler, Reisende, potenzielle Quereinsteiger
- **Tonalität:** persönlich, alltagsnah, sichtbar im Bahnkontext
- **Lerneffekt:** Kanal und Arbeitgeberkontext passen direkt zusammen

---

## Folie 9 - Personalbeschaffung: Beispiel Deutsche Bahn AG II

### In der MD vorhanden
Nur Titel und Copyright. Das Bildbeispiel fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt zwei weitere Bahnhofsfotos mit DB-Recruiting-Bannern. Die Plakate sind an Bahnsteig-/Bahnhofsbereichen angebracht. Auch hier wird die räumliche Nähe zum Arbeitgeberkontext genutzt.

### Fachliche Aussage
Die Wiederholung an mehreren Standorten erhöht Kontaktfrequenz und Wiedererkennung. Die Kampagne nutzt den Bahnhof als **Recruiting-Medium**, nicht nur als Werbefläche.

### React-Vorschlag
In der Galerie als zweite DB-Kachel darstellen:

- **Kanal:** wiederholte Standortpräsenz
- **Mechanik:** mehrere Kontaktpunkte im gleichen Umfeld
- **Lerneffekt:** Wiederholung kann Arbeitgeberbekanntheit stärken

---

## Folie 10 - Personalbeschaffung: Beispiel Deutsche Bahn AG III

### In der MD vorhanden
Nur Titel und Copyright. Die Anzeige fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt eine große Bodenwerbung der Deutschen Bahn. Zentrale Botschaft:

> Du willst auch beruflich auf sicherem Boden stehen.

Darunter steht sinngemäß:

- `Willkommen, Du passt zu uns.`
- `Als Fachkraft (w/m) - gerne auch als Quereinsteiger.`
- `Jetzt bewerben und umsteigen: deutschebahn.com/karriere`

### Fachliche Aussage
Die Anzeige verbindet den physischen Untergrund im Bahnhof mit der metaphorischen Aussage `sicherer Boden`. Dadurch entsteht ein Standortbezug und ein Wortspiel. Die Kampagne adressiert Fachkräfte und Quereinsteiger.

### React-Vorschlag
Als `CampaignAnalysisCard`:

- **Format:** Bodenaufkleber / Ambient Media
- **Claim:** berufliche Sicherheit
- **Zielgruppe:** Fachkräfte, Quereinsteiger
- **Wirkprinzip:** Ort + Botschaft passen semantisch zusammen

---

## Folie 11 - Personalbeschaffung: Beispiel Deutsche Bahn AG IV

### In der MD vorhanden
Nur Titel und Copyright. Die Anzeige fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt eine weitere DB-Bodenwerbung. Zentrale Botschaft:

> Du willst Dich täglich Schritt für Schritt weiterentwickeln.

Darunter wieder:

- `Willkommen, Du passt zu uns.`
- `Als Fachkraft (w/m) - gerne auch als Quereinsteiger.`
- `Jetzt bewerben und umsteigen: deutschebahn.com/karriere`

### Fachliche Aussage
Die Anzeige nutzt die Situation des Laufens im Bahnhof. `Schritt für Schritt` funktioniert gleichzeitig wörtlich und metaphorisch als Karriereentwicklung. Sie bewirbt Entwicklungsmöglichkeiten und Quereinstieg.

### React-Vorschlag
In der DB-Beispielgruppe mit Folie 10 kombinieren:

| Motiv | Botschaft | Angesprochener Nutzen |
|---|---|---|
| sicherer Boden | berufliche Sicherheit | Stabilität, Arbeitsplatzsicherheit |
| Schritt für Schritt | Weiterentwicklung | Karriere-/Lernmöglichkeiten |

---

## Folie 12 - Personalbeschaffung: Beispiel Deutsche Bahn AG / BND-Plakat

### In der MD vorhanden
Nur Titel und Copyright. Das Bildbeispiel fehlt.

### Fehlende visuelle Inhalte
Obwohl der Folientitel weiterhin `Beispiel - Deutsche Bahn AG` lautet, zeigt das Bild ein **BND-Recruiting-Plakat**. Zentrale Botschaft:

> Wir suchen Terroristen (m/w/d).  
> Finde sie mit uns.

Unten steht sinngemäß:

- `Komm dahinter.`
- `karrierebnd.de`
- BND-Logo

### Fachliche Aussage
Dieses Beispiel zeigt provokative, aufmerksamkeitsstarke Recruiting-Kommunikation. Der Claim arbeitet mit Irritation: Zunächst klingt die Aussage missverständlich, wird dann durch `Finde sie mit uns` aufgelöst. Es ist ein Beispiel für kreative, risikoreiche Arbeitgeberkommunikation.

### React-Vorschlag
Als `ProvocativeRecruitingExample` markieren.

Analysefelder:

- **Kanal:** Plakat / Out-of-Home
- **Wirkprinzip:** Irritation, Aufmerksamkeitsbruch, schnelle Auflösung
- **Stärke:** sehr hohe Aufmerksamkeit, klare Differenzierung
- **Risiko:** Missverständnisse, Kritik, Imagegefährdung bei falschem Kontext
- **Didaktischer Hinweis:** gutes Beispiel für Grenzbereich zwischen kreativem Recruiting und Reputationsrisiko

---

## Folie 13 - Personalbeschaffung: Beispiel Stadtmarketing

### In der MD vorhanden
Nur Titel und Copyright. Das Bildbeispiel fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt ein großes Außenwerbeplakat an einer Straße. Auf dem Plakat sind zwei Handwerker/Techniker mit Schutzhelmen und Werkzeugen zu sehen. Zentrale Botschaft:

> RAN AN DEN JOB!

Weitere sichtbare Elemente:

- Verweis auf eine Recruiting-/Karriereseite
- Kununu-Hinweis beziehungsweise Arbeitgeberbewertungselement
- stark visuelle, direkte Ansprache

### Fachliche Aussage
Das Beispiel zeigt Standort-/Stadtmarketing beziehungsweise regionale Außenwerbung für Jobs. Die Ansprache ist direkt, aktivierend und bildstark. Der Kanal eignet sich besonders für lokale Zielgruppen und handwerklich-technische Berufe.

### React-Vorschlag
Als `RecruitingExampleCard`:

- **Kanal:** Außenwerbung / Billboard
- **Zielgruppe:** lokal erreichbare Fachkräfte, Handwerk/Technik
- **Tonalität:** direkt, aktivierend, praxisnah
- **Lerneffekt:** Regionales Recruiting kann über Sichtbarkeit im lokalen Alltag funktionieren

---

## Folie 14 - Beschaffung: Beispiel klassische Stellenanzeige

### In der MD vorhanden
Nur Titel und Copyright. Die Anzeige fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt eine klassische schwarz-weiße Stellenanzeige. Arbeitgeber ist der Landesbetrieb für Küstenschutz, Nationalpark und Meeresschutz Schleswig-Holstein. Überschrift:

> Wir suchen mit sofortiger Wirkung  
> Steinesammler (m/w)

Die Anzeige erklärt, dass für die durch das Unternehmen verursachte Situation beim Deichneubau auf Nordstrand Personen gesucht werden, die Steine von Kleiböden unterscheiden können. Darunter folgen Qualifikationen/Voraussetzungen, u.a. gesunde und gebrauchsfähige Hände, Füße, Sprachfertigkeit in deutscher Sprache und PKW/Führerschein. Unten stehen Ansprechpartner und Kontaktdaten.

### Fachliche Aussage
Das Beispiel zeigt eine **klassische Print-Stellenanzeige**: formell, textlastig, schwarz-weiß, mit klarer Position, Anforderungen und Ansprechpartner. Gleichzeitig ist der Jobtitel ungewöhnlich und dadurch aufmerksamkeitsstark.

### React-Vorschlag
Komponente: `ClassicJobAdExample`.

Analysefelder:

- **Kanal:** Print / Aushang
- **Struktur:** Arbeitgeber, Suchabsicht, Jobtitel, Aufgaben-/Kontextbeschreibung, Voraussetzungen, Kontakt
- **Stärke:** klare Informationen, geringe Gestaltungskomplexität, seriöse Form
- **Schwäche:** wenig emotional, begrenzte Reichweite, kaum Employer Branding

---

## Folie 15 - Personalbeschaffung: Beispiel Online Banner

### In der MD vorhanden
Nur Titel und Copyright. Die drei Banner-Beispiele fehlen.

### Fehlende visuelle Inhalte
Die Folie zeigt drei sehr unterschiedliche Online-/Banneranzeigen:

1. **Großer gelb-blauer `WE ARE HIRING NOW!`-Banner**
   - große Headline
   - Person im Vordergrund
   - Checkliste mit offenen Positionen, u.a. Web Developer, Finance Manager, HR Manager
   - `Apply Now`-Call-to-Action

2. **Schmaler Banner `#durchstarter:in`**
   - Raster aus Personenporträts
   - moderne Hashtag-Kommunikation
   - Zielgruppe wirkt jünger und digitaler

3. **DWE-Banner `Wir suchen dich`**
   - Position: Sachbearbeiter (m/w/d) Verwaltung
   - Standort Berlin
   - Person im handwerklichen Outfit
   - Arbeitgeberlogo und Claim in Orange

### Fachliche Aussage
Online-Banner können sehr unterschiedlich gestaltet sein: generisch und aufmerksamkeitsstark, modern mit Personenbezug/Hashtag oder spezifisch mit konkreter Stelle und Arbeitgebermarke. Entscheidend sind Zielgruppe, Call-to-Action, visuelle Klarheit und Glaubwürdigkeit.

### React-Vorschlag
Komponente: `OnlineRecruitingBannerGallery` mit drei Karten:

| Banner-Typ | Gestaltung | Ziel |
|---|---|---|
| generischer Hiring-Banner | knallige Farben, große Headline, viele Jobtitel | schnelle Aufmerksamkeit und Klicks |
| Hashtag-/People-Banner | Porträts, Community-Gefühl, moderne Sprache | Identifikation und Employer Branding |
| konkrete Stellenanzeige | Jobtitel, Standort, Arbeitgeberlogo | direkte Bewerbung auf konkrete Position |

---

## Folie 16 - Gruppenarbeit: Recruiting-Kampagne entwickeln

### In der MD vorhanden
Der Text ist vorhanden, aber durch die Extraktion teilweise unübersichtlich vermischt.

### Fehlende visuelle Inhalte
Die Folie ist als Workshop-Aufgabe gestaltet. Links beziehungsweise unten steht ein Unternehmenssteckbrief zur **Photoluma GmbH - Lichttechnik**. Der Arbeitsauftrag steht rechts/zentral.

### Inhaltliche Rekonstruktion

#### Unternehmen: Photoluma GmbH - Lichttechnik

| Merkmal | Inhalt |
|---|---|
| Branche | Photonik / Umwelttechnologie |
| Standort | Augsburg |
| Größe | 85 Mitarbeitende |
| Produkte/Dienstleistungen | Entwicklung und Produktion nachhaltiger LED-Leuchtlösungen |
| Fokus | Energieeffizienz, Langlebigkeit und regionale Produktion |
| Zielgruppen | Industrieunternehmen, Kommunen und Smart-Home-Anbieter |

#### Aufgabe
Entwickelt eine Recruiting-Kampagne für eine konkrete Zielgruppe:

- Gruppe 1: Azubis
- Gruppe 2: Studierende
- Gruppe 3: Berufserfahrene

Zu klären:

- Welche Kanäle sollen genutzt werden? Beispiele: Messen, Social Media, Hochschulmarketing, Empfehlungsprogramme.
- Welche Tonalität und Bildsprache passt zur Zielgruppe?
- Welche konkreten Maßnahmen werden geplant?
- Wie wird der Erfolg gemessen?

**Pitch:** 5 Minuten pro Gruppe, Kurzpräsentation der Kampagne.

### Fachliche Aussage
Die Aufgabe trainiert zielgruppenspezifisches Recruiting: Kanalwahl, Tonalität, Maßnahmen und Erfolgsmessung müssen zur jeweiligen Bewerbergruppe passen.

### React-Vorschlag
Komponente: `CampaignWorkshop`.

Interaktive Struktur:

- Unternehmenssteckbrief als `CompanyBriefCard`
- Zielgruppen-Tabs: `Azubis`, `Studierende`, `Berufserfahrene`
- Formularfelder: Kanäle, Tonalität, Bildsprache, Maßnahmen, KPIs
- Pitch-Output als zusammenfassende Kampagnenkarte

---

## Folie 17 - Gruppenarbeit: Bewertungsbogen für Recruiting-Kampagnen

### In der MD vorhanden
Der Text ist vorhanden, aber ebenfalls unübersichtlich vermischt.

### Fehlende visuelle Inhalte
Die Folie baut auf dem gleichen Photoluma-Unternehmenssteckbrief auf, verschiebt aber die Rolle: Die Lernenden sind nun **Recruiting-Team bei Photoluma** und bewerten Kampagnenvorschläge externer Agenturen.

### Inhaltliche Rekonstruktion

#### Rolle
Recruiting-Team bei Photoluma GmbH: Personalverantwortliche und Fachbereichsleiter*innen beurteilen drei Kampagnenvorschläge externer Agenturen.

#### Ziel
Fundiert entscheiden, welche Kampagne umgesetzt werden soll. Es können auch zwei oder drei Kampagnen umgesetzt werden.

#### Aufgabe
Entwickelt einen Bewertungsbogen für die Beurteilung der einzelnen Pitches.

#### Vorgabe der Geschäftsleitung
Die Kampagne sollte:

- zielgruppengerecht sein
- werteorientiert sein
- kreativ und differenzierend sein
- realistisch umsetzbar sein
- auf geeigneten Kanälen wirksam kommunizierbar sein
- authentisch und überzeugend Bewerber ansprechen

### Fachliche Aussage
Recruiting-Kampagnen müssen nicht nur kreativ sein, sondern anhand klarer Kriterien bewertet werden. Die Folie verbindet Employer Branding mit Entscheidungslogik und Erfolgskriterien.

### React-Vorschlag
Komponente: `CampaignEvaluationRubric`.

Empfohlener Bewertungsbogen:

| Kriterium | Leitfrage | Punkte 1-5 |
|---|---|---:|
| Zielgruppenfit | Passt Kampagne zu Azubis/Studierenden/Berufserfahrenen? | 1-5 |
| Werteorientierung | Spiegelt sie Nachhaltigkeit, Regionalität und Technologiebezug von Photoluma? | 1-5 |
| Kreativität / Differenzierung | Hebt sie sich von Standardanzeigen ab? | 1-5 |
| Realisierbarkeit | Ist sie mit Budget, Zeit und Ressourcen umsetzbar? | 1-5 |
| Kanalwirkung | Sind Kanäle passend und erreichbar? | 1-5 |
| Authentizität | Wirkt die Ansprache glaubwürdig? | 1-5 |
| Messbarkeit | Sind KPIs und Erfolgskontrolle definiert? | 1-5 |

---

## Folie 18 - Personalbeschaffung: Vor- und Nachteile - Allgemeines

### In der MD vorhanden
Nur Titel und Copyright. Die Vergleichstabelle fehlt.

### Fehlende visuelle Inhalte
Die Folie zeigt eine dreispaltige Vergleichstabelle:

- linke Spalte: Kategorie `Allgemeines`
- mittlere Spalte: `Interne Personalbeschaffung`
- rechte Spalte: `Externe Personalbeschaffung`

### Inhaltliche Rekonstruktion

| Kategorie | Interne Personalbeschaffung | Externe Personalbeschaffung |
|---|---|---|
| Allgemeines | geringe Zeitverluste; geringe Informationskosten; geringe Einarbeitungs- und Fluktuationskosten; geringe Entgelterwartung zum Anfang; begrenzte Auswahl | größere Auswahlmöglichkeiten; höhere Leistungsbereitschaft wegen Arbeitsplatzsicherheit; Personalentwicklungsaufwand als externe Vorleistung |

### Fachliche Aussage
Interne Beschaffung ist oft schneller und günstiger, aber in der Auswahl begrenzt. Externe Beschaffung bietet mehr Auswahl und neue Leistungspotenziale, kann aber mehr Aufwand verursachen.

### React-Vorschlag
Komponente: `InternalExternalComparison` mit Kategorie-Tab `Allgemeines`.

---

## Folie 19 - Personalbeschaffung: Vor- und Nachteile - Qualifikation

### In der MD vorhanden
Nur Titel und Copyright. Die Vergleichstabelle fehlt.

### Inhaltliche Rekonstruktion

| Kategorie | Interne Personalbeschaffung | Externe Personalbeschaffung |
|---|---|---|
| Qualifikation | Qualifikation bekannt und betriebsspezifisch leichter nutzbar; Erhaltung betriebsspezifischer Qualifikationen; Unabhängigkeit von extern verfügbaren Qualifikationen; Gefahr der Veralterung fachspezifischer Qualifikationen | Erwerb neuer Qualifikationspotenziale; Verhinderung von Betriebsblindheit; Gewinnung von Informationen über Mitbewerber und eventuell Kooperationspartner; mögliche Abwanderung aufgebauter Qualifikationen |

### Fachliche Aussage
Interne Beschaffung nutzt bekanntes Wissen und bewahrt betriebsspezifische Qualifikationen. Externe Beschaffung bringt neue Perspektiven und kann Betriebsblindheit vermeiden, birgt aber das Risiko, dass intern aufgebaute Qualifikation abwandert oder nicht genutzt wird.

### React-Vorschlag
Im Vergleichstool Kategorie `Qualifikation` ergänzen. Vorteil/Nachteil farblich oder mit Icons markieren, aber nicht als reine Pro-/Contra-Vereinfachung darstellen, weil beide Seiten gemischte Effekte haben.

---

## Folie 20 - Beschaffung: Vor- und Nachteile - Motivation

### In der MD vorhanden
Nur Titel und Copyright. Die Vergleichstabelle fehlt.

### Inhaltliche Rekonstruktion

| Kategorie | Interne Personalbeschaffung | Externe Personalbeschaffung |
|---|---|---|
| Motivation | Signal für Aufstiegschancen; Motivation bei interessierten Mitarbeitern wächst; offener Wettbewerb, orientiert an Unternehmenszielen; Ablehnungsängste von Bewerbern; möglicher Rückgang von Leistungsbereitschaft durch fehlende externe Konkurrenz | Verhinderung von Aufstiegsautomatismus; Dispositionsspielraum in der Altersstruktur; Förderung der Leistungsbereitschaft durch externe Alternativen; mögliche Demotivierung durch fehlende Aufstiegsperspektiven |

### Fachliche Aussage
Interne Beschaffung kann motivieren, weil sie Aufstiegschancen sichtbar macht. Gleichzeitig können Ablehnungen und fehlende externe Konkurrenz negativ wirken. Externe Beschaffung kann Leistungsbereitschaft und Flexibilität erhöhen, aber interne Mitarbeiter demotivieren, wenn Aufstiegsperspektiven blockiert werden.

### React-Vorschlag
Kategorie `Motivation` im Vergleichstool ergänzen. Gute Umsetzung als `ImpactMatrix`:

- interne positive Effekte
- interne Risiken
- externe positive Effekte
- externe Risiken

---

## Folie 21 - Wunscharbeitgeber: Top 10 - 2025

### In der MD vorhanden
Nur Titel und Copyright. Die Rankinggrafik fehlt vollständig.

### Fehlende visuelle Inhalte
Die Folie zeigt ein Ranking `Top 10 der Wunscharbeitgeber von Schülerinnen und Schülern`. Die Grafik enthält Rang 2025, Arbeitgeber, Prozentwert 2025 und Rang 2024. Zusätzlich sind horizontale grüne Balken für die Prozentwerte dargestellt.

### Inhaltliche Rekonstruktion

| Rang 2025 | Top-Arbeitgeber | % 2025 | Rang 2024 |
|---:|---|---:|---:|
| 1 | Porsche | 16,6 | 4 |
| 2 | BMW Group | 14,2 | 3 |
| 3 | Mercedes Benz Group | 12,1 | 6 |
| 4 | Polizei | 12,0 | 1 |
| 5 | Douglas | 9,7 | 8 |
| 6 | Bundeswehr | 7,9 | 5 |
| 7 | AUDI AG | 7,8 | 7 |
| 8 | Amazon | 7,5 | Neu |
| 9 | Adidas | 7,3 | 2 |
| 10 | dm | 6,8 | 14 |

Hinweis unter der Grafik: Befragt wurden 13.800 Schüler:innen der Klassen 8 bis 13 im Rahmen des Trendence-Rankings 2025.

### Fachliche Aussage
Das Ranking zeigt, welche Arbeitgebermarken bei Schülerinnen und Schülern attraktiv sind. Für Personalbeschaffung ist das relevant, weil Arbeitgeberattraktivität und Employer Branding direkte Auswirkungen auf Bewerberinteresse und Zielgruppenansprache haben.

### React-Vorschlag
Komponente: `EmployerRankingChart`.

Umsetzung:

- horizontales Balkendiagramm für `% 2025`
- Ranking-Tabelle daneben oder darunter
- Badge für Rangveränderung: `Neu`, `gestiegen`, `gefallen`, `gleich`
- Lernimpuls: `Welche Muster erkennt man? Automobilmarken dominieren; öffentliche Arbeitgeber und Retail-Marken sind ebenfalls präsent.`

---

# Zusammenfassende Inhaltsstruktur für React

## 1. Grundlagen der Personalbeschaffung

- Personalbeschaffung als interne und externe Beschaffung
- Beschaffungswege und Quellen
- Personalbeschaffung als reziproker Prozess zwischen Organisation und Individuum

## 2. Interne vs. externe Personalbeschaffung

- interne Wege: Versetzung, Personalentwicklung, interne Ausschreibung, Mehrarbeit
- externe Wege: Internet, Publikationen, Werbung/Branding, Arbeitsvermittlung, Personalberatung, Guerilla-Recruiting
- Vor- und Nachteile nach Allgemeinem, Qualifikation und Motivation

## 3. Recruiting-Kanäle und Beispiele

- Qunit: physische Sichtbarkeit / lokaler Kontaktpunkt
- Deutsche Bahn: Bahnhofswerbung, Ambient Media, Quereinsteigeransprache
- BND: provokative Recruiting-Kommunikation
- Stadtmarketing: Außenwerbung mit direkter Jobansprache
- klassische Stellenanzeige: formeller Print-/Aushang-Kanal
- Online-Banner: digitale Kurzformate mit Call-to-Action

## 4. Kampagnenentwicklung und Bewertung

- Photoluma GmbH als Fallstudie
- Kampagnenentwicklung für Azubis, Studierende und Berufserfahrene
- Bewertungsbogen für externe Agentur-Pitches
- Kriterien: Zielgruppenfit, Werteorientierung, Kreativität, Realisierbarkeit, Kanalwirkung, Authentizität, Messbarkeit

## 5. Employer Branding und Arbeitgeberattraktivität

- Ranking der Wunscharbeitgeber 2025
- Zusammenhang zwischen Arbeitgeberattraktivität, Zielgruppe und Beschaffungserfolg

---

# Prüfungs- und Lernhinweise

## Zentrale Begriffe

| Begriff | Kurzdefinition |
|---|---|
| Interne Personalbeschaffung | Besetzung offener Stellen aus vorhandenen Mitarbeitern im Unternehmen |
| Externe Personalbeschaffung | Besetzung offener Stellen durch Kandidaten vom externen Arbeitsmarkt |
| Sourcing | Aktive Suche, Identifikation und Ansprache potenzieller Kandidaten |
| Guerilla-Recruiting | Kreative, oft unkonventionelle Recruiting-Maßnahmen mit hoher Aufmerksamkeit und geringem Budget |
| Reziproker Prozess | Gegenseitiger Austauschprozess zwischen Unternehmen und Bewerber mit Angeboten und Erwartungen beider Seiten |
| Employer Branding | Aufbau und Kommunikation einer attraktiven Arbeitgebermarke |
| Arbeitnehmerüberlassung | Bereitstellung von Arbeitskräften über Überlassungsmodelle, z.B. extern/intern oder Inhouse-/Master-Service |

## Besonders prüfungsrelevant

1. Unterschied interne vs. externe Personalbeschaffung
2. Beispiele und Instrumente interner/externer Beschaffungswege
3. Personalbeschaffung als reziproker Prozess
4. Vor- und Nachteile interner und externer Beschaffung
5. Zielgruppenorientierung bei Recruiting-Kampagnen
6. Bedeutung von Employer Branding und Arbeitgeberattraktivität

## Mögliche Transferfragen

- Warum reicht eine klassische Stellenanzeige bei knappen Zielgruppen oft nicht mehr aus?
- Wann ist interne Personalbeschaffung sinnvoller als externe Personalbeschaffung?
- Welche Risiken entstehen durch Guerilla-Recruiting in konservativen Branchen?
- Wie unterscheiden sich Recruiting-Kanäle für Azubis, Studierende und Berufserfahrene?
- Warum kann externe Personalbeschaffung interne Mitarbeiter demotivieren?
- Wie lässt sich der Erfolg einer Recruiting-Kampagne messen?

---

# Konkreter React-Aufbauvorschlag

```text
Topic: Personalbeschaffung

Section 1: Überblick Beschaffungswege
- RecruitmentPathTree
- Kurzdefinition intern/extern

Section 2: Personalbeschaffung als Austauschprozess
- ReciprocalRecruitingModel
- Lernfrage zur Bewerberperspektive

Section 3: Interne und externe Wege
- InternalRecruitmentTable
- ExternalRecruitmentTable
- SourcingSourceCards

Section 4: Recruiting-Beispiele
- RecruitingExampleGallery
  - Qunit
  - Deutsche Bahn Bahnhofsbanner
  - Deutsche Bahn Bodenwerbung sicherer Boden
  - Deutsche Bahn Bodenwerbung Schritt für Schritt
  - BND Provokationsplakat
  - Stadtmarketing Billboard
  - Klassische Stellenanzeige
  - Online-Banner

Section 5: Workshop Photoluma
- CompanyBriefCard
- CampaignWorkshop
- CampaignEvaluationRubric

Section 6: Interne vs. externe Beschaffung bewerten
- InternalExternalComparison
- ImpactMatrix Allgemeines / Qualifikation / Motivation

Section 7: Arbeitgeberattraktivität
- EmployerRankingChart
- Reflexionsfrage zu Employer Branding
```

---

# Datenobjekte für React

## Beschaffungswege

```js
const recruitmentPaths = {
  internal: [
    'Innerbetriebliche Ausschreibung',
    'Personalentwicklung',
    'Versetzung',
    'Mehrarbeit'
  ],
  external: [
    'Arbeitsverwaltung',
    'Stellenanzeigen',
    'Personalleasing',
    'Personalberater',
    'Sonstige Beschaffungswege'
  ]
};
```

## Reziproker Prozess

```js
const reciprocalRecruiting = {
  organisation: {
    offer: ['Arbeitsplatz', 'Einkommen', 'Aus- und Weiterbildung'],
    demand: ['Zeit', 'Kompetenzen', 'Leistung']
  },
  individual: {
    offer: ['Zeit', 'Kompetenzen', 'Leistungsbereitschaft'],
    demand: ['Arbeitsmöglichkeit', 'Einkommenserzielung', 'Selbstverwirklichung']
  }
};
```

## Arbeitgeberranking 2025

```js
const employerRanking2025 = [
  { rank2025: 1, employer: 'Porsche', percent2025: 16.6, rank2024: 4 },
  { rank2025: 2, employer: 'BMW Group', percent2025: 14.2, rank2024: 3 },
  { rank2025: 3, employer: 'Mercedes Benz Group', percent2025: 12.1, rank2024: 6 },
  { rank2025: 4, employer: 'Polizei', percent2025: 12.0, rank2024: 1 },
  { rank2025: 5, employer: 'Douglas', percent2025: 9.7, rank2024: 8 },
  { rank2025: 6, employer: 'Bundeswehr', percent2025: 7.9, rank2024: 5 },
  { rank2025: 7, employer: 'AUDI AG', percent2025: 7.8, rank2024: 7 },
  { rank2025: 8, employer: 'Amazon', percent2025: 7.5, rank2024: 'Neu' },
  { rank2025: 9, employer: 'Adidas', percent2025: 7.3, rank2024: 2 },
  { rank2025: 10, employer: 'dm', percent2025: 6.8, rank2024: 14 }
];
```

---

# Qualitätscheck vor React-Konvertierung

- [ ] Folie 1 als Baumdiagramm umgesetzt, nicht nur als Liste.
- [ ] Folie 3 als Austauschmodell mit Organisation/Individuum, Angebot/Nachfrage und Pfeilen umgesetzt.
- [ ] Folien 4 und 5 als vollständige Tabellen rekonstruiert.
- [ ] Folie 6 als zwei Beschaffungsquellenblöcke `Sourcing` und `Arbeitnehmerüberlassung` umgesetzt.
- [ ] Folien 7-15 als kommentierte Recruiting-Beispielgalerie mit Kanal-, Zielgruppen- und Wirkprinzipanalyse umgesetzt.
- [ ] Folien 16-17 als Workshop-/Exercise-Komponenten umgesetzt.
- [ ] Folien 18-20 als vollständiger Vergleich intern/extern nach Allgemeines, Qualifikation und Motivation rekonstruiert.
- [ ] Folie 21 als Ranking-Tabelle oder Balkendiagramm mit allen Top-10-Werten umgesetzt.
- [ ] Quellenhinweise und Jahresangaben erhalten.
