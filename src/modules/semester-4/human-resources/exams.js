export const exams = [
  {
    id: 'hr-exam-01',
    title: 'Probeklausur 1 · Human Resources (Kapitel 1–5)',
    label: 'Probeklausur',
    description:
      'Klausurnahe Aufgaben zu Grundlagen des HRM, Personalpolitik, Führung und Ethik, operativer Personalplanung und Personalbeschaffung. Inhaltlich vollständig aus den Vorlesungsunterlagen HR1–HR5.',
    durationMinutes: 90,
    instructions: [
      'Bearbeiten Sie alle Aufgaben. Die Punktzahl pro Aufgabe ist angegeben.',
      'Begründen Sie Ihre Antworten bei offenen Aufgaben stichwortartig, aber vollständig.',
      'Bei Single-Choice ist genau eine, bei Multiple-Choice können mehrere Antworten korrekt sein.',
      'Hilfsmittel: nur ein nicht-programmierbarer Taschenrechner.',
    ],
    topics: [
      'Einführung HRM',
      'Personalpolitik & Strategie',
      'Führung & Ethik',
      'Operative Personalplanung',
      'Personalbeschaffung',
    ],
    sections: [
      {
        id: 'hr-exam-01-sec-1',
        title: 'Teil A · Grundlagen und Abgrenzungen',
        description: 'Begriffe, Ziele und rechtliche Grundlagen des HRM.',
        points: 24,
        tasks: [
          {
            id: 'hr-exam-01-t-1',
            type: 'single-choice',
            title: 'HRM vs. Organisation',
            points: 3,
            task: [
              'Welche Aussage trifft die Abgrenzung von HRM und Organisation korrekt?',
              'A) HRM ist ein strukturelles Regelsystem, Organisation eine funktionale Perspektive.',
              'B) HRM ist die funktionale Perspektive auf den Produktionsfaktor Arbeit; Organisation ist ein auf Dauer angelegtes Regelsystem einer Personengruppe.',
              'C) Beide Begriffe sind synonym.',
              'D) Organisation betrifft nur leitende Angestellte.',
            ],
            solution:
              'Richtig ist B. HRM ist die funktionale Perspektive (Produktionsfaktor Arbeit, Wertschöpfung auf lange Sicht); Organisation ist die strukturelle Perspektive eines planvoll geschaffenen, dauerhaften Regelsystems einer abgegrenzten Personengruppe.',
            gradingHints: ['3 Punkte für B; 0 Punkte sonst.'],
            sourceRef: 'HR1 – Einführung, Grundlagen HRM/Organisation',
          },
          {
            id: 'hr-exam-01-t-2',
            type: 'definition',
            title: 'Drei Zielkategorien des HRM',
            points: 6,
            task: [
              'Nennen Sie die drei Zielkategorien des HRM und ordnen Sie jeder ein typisches Merkmal zu.',
              'Erläutern Sie, in welchem Verhältnis soziale und individuelle Ziele zueinander stehen.',
            ],
            solution: [
              'Wirtschaftliche Ziele: optimaler Einsatz des Faktors menschliche Arbeit, Minimierung der Kostensumme aller Einsatzfaktoren, Steuerung der Arbeitsleistung.',
              'Soziale Ziele: bestmögliche Gestaltung der Arbeitsumstände (z. B. Arbeitsschutz, Arbeitsplatzgestaltung, Ergonomie, Entlohnung).',
              'Individuelle Ziele: Erfüllung individueller Bedürfnisse, gesichertes Einkommen, Persönlichkeitsentfaltung durch befriedigende Berufsarbeit.',
              'Verhältnis: Soziale und individuelle Ziele überschneiden sich nur teilweise, sind aber nicht identisch.',
            ],
            gradingHints: [
              'Je 1,5 Punkte pro korrekt benannter und charakterisierter Zielkategorie (max. 4,5).',
              '1,5 Punkte für das korrekte Verhältnis (teilweise Überschneidung, nicht identisch).',
            ],
            sourceRef: 'HR1 – Ziele, Aufgaben und Einordnung des HRM',
          },
          {
            id: 'hr-exam-01-t-3',
            type: 'comparison',
            title: 'Personalverwaltung vs. Personalmanagement',
            points: 9,
            task: [
              'Stellen Sie Personalverwaltung und Personalmanagement entlang von mindestens fünf Dimensionen gegenüber.',
              'Gehen Sie dabei mindestens auf Menschenbild, Antriebskräfte, Umweltzustand, Leitbilder und Instrumente ein.',
            ],
            solution: [
              'Ziele: Verwaltung = Rechtmäßigkeit/Arbeitsproduktivität; Management = Zufriedenheit/Wirtschaftlichkeit.',
              'Leitbilder: Verwaltung = Bürokratie (Verwaltungsorientierung); Management = Markt- und Wettbewerbsorientierung.',
              'Menschenbild: Verwaltung = homo oeconomicus/Normarbeiter; Management = complex man/Organisationsmitglied.',
              'Umweltzustand: Verwaltung = statisch; Management = dynamisch.',
              'Antriebskräfte: Verwaltung = Gesetzgeber; Management = Wettbewerb.',
              'Instrumente: Verwaltung = Dienstanweisungen, Senioritätsprinzip, Hierarchie; Management = leistungsorientierte Anreizsysteme, Partizipation, Personalcontrolling, Gruppenarbeit.',
            ],
            gradingHints: [
              'Je 1,5 Punkte pro korrekt gegenübergestellter Dimension (max. 9).',
              'Menschenbild und Antriebskräfte müssen korrekt zugeordnet sein, sonst Abzug.',
            ],
            sourceRef: 'HR1 – Personalverwaltung vs. Personalmanagement',
          },
          {
            id: 'hr-exam-01-t-4',
            type: 'single-choice',
            title: 'Ebenen der Mitbestimmung',
            points: 3,
            task: [
              'Welche der vier Ebenen der Mitbestimmung ist die stärkste?',
              'A) Informationsrecht  B) Mitwirkungs-/Beratungsrecht  C) Anhörungs-/Zustimmungsrechte  D) Mitbestimmungsrechte (gemeinsame Entscheidung)',
            ],
            solution:
              'Richtig ist D. Reihenfolge von stark nach schwach: Mitbestimmungsrechte (gemeinsame Entscheidung) > Anhörungs-/Zustimmungsrechte > Mitwirkungs-/Beratungsrecht > Informationsrecht (schwächste Stufe).',
            gradingHints: ['3 Punkte für D; 0 Punkte sonst.'],
            sourceRef: 'HR1 – Kollektives Arbeitsrecht, vier Ebenen der Mitbestimmung',
          },
          {
            id: 'hr-exam-01-t-5',
            type: 'multiple-choice',
            title: 'Gliederung des Arbeitsrechts',
            points: 3,
            task: [
              'Welche Teilgebiete gehören zum individuellen Arbeitsrecht? (Mehrfachauswahl)',
              'A) Arbeitsvertragsrecht  B) Tarifvertragsrecht  C) Arbeitsschutzrecht  D) Mitbestimmungsrecht',
            ],
            solution:
              'Richtig sind A und C. Das individuelle Arbeitsrecht gliedert sich in Arbeitsvertragsrecht und Arbeitsschutzrecht. Tarifvertragsrecht (B) und Mitbestimmungsrecht (D) gehören zum kollektiven Arbeitsrecht.',
            gradingHints: [
              '3 Punkte nur bei genau A und C.',
              'Bei zusätzlicher Falschauswahl oder fehlender richtiger Auswahl: 0 Punkte.',
            ],
            sourceRef: 'HR1 – Gliederung des Arbeitsrechts',
          },
        ],
      },
      {
        id: 'hr-exam-01-sec-2',
        title: 'Teil B · Strategie, Ethik und Führung',
        description: 'Personalstrategie, ethische Bezugsfelder und Führungsebenen.',
        points: 20,
        tasks: [
          {
            id: 'hr-exam-01-t-6',
            type: 'comparison',
            title: 'Drei Führungsebenen',
            points: 9,
            task: [
              'Grenzen Sie normative, strategische und operative Führung ab.',
              'Nennen Sie je Ebene Zeithorizont, Leitsatz und den zugeordneten Bereich (Unternehmenspolitik, Personalpolitik, Maßnahmen).',
            ],
            solution: [
              'Normativ: Zeithorizont > 5 Jahre, Leitsatz "Der Grund, warum", Bereich Unternehmenspolitik.',
              'Strategisch: Zeithorizont 2–5 Jahre, Leitsatz "Die richtigen Dinge tun" (Effektivität), Bereich Personalpolitik.',
              'Operativ: Zeithorizont bis 1 Jahr, Leitsatz "Die Dinge richtig tun" (Effizienz), Bereich Maßnahmen.',
            ],
            gradingHints: [
              'Je 3 Punkte pro vollständig korrekt beschriebener Ebene (Zeithorizont + Leitsatz + Bereich).',
              'Verwechslung von Effektivität (strategisch) und Effizienz (operativ): −1 Punkt.',
            ],
            sourceRef: 'HR3 – Zeithorizonte, Führungsebenen und Unternehmenspolitik',
          },
          {
            id: 'hr-exam-01-t-7',
            type: 'definition',
            title: 'Ethische Bezugsfelder',
            points: 6,
            task: [
              'Ordnen Sie Wirtschaftsethik, Unternehmensethik und Führungsethik den Ebenen Makro-, Meso- und Mikrolevel zu.',
              'In welche übergeordnete Ethik sind diese Bezugsfelder eingebettet?',
            ],
            solution: [
              'Wirtschaftsethik = Makrolevel; Unternehmensethik = Mesolevel; Führungsethik = Mikrolevel.',
              'Alle drei Bezugsfelder sind in die Sozialethik eingebettet.',
            ],
            gradingHints: [
              'Je 1,5 Punkte pro korrekter Zuordnung (max. 4,5).',
              '1,5 Punkte für die Einbettung in die Sozialethik.',
            ],
            sourceRef: 'HR2 – Unternehmensethik und ethische Bezugsfelder',
          },
          {
            id: 'hr-exam-01-t-8',
            type: 'single-choice',
            title: 'Legalität und Moralität',
            points: 2,
            task: [
              'Welche Aussage zum Graubereich der Unternehmensethik ist korrekt?',
              'A) Legalität garantiert moralische Richtigkeit.  B) Legalität ist Mindestanforderung, aber nicht automatisch moralische Richtigkeit.  C) Moralität ist die Mindestanforderung.  D) Beide sind deckungsgleich.',
            ],
            solution:
              'Richtig ist B. Legalität ist Mindestanforderung; Unternehmensethik wird im Graubereich relevant, wo Handlungen legal/möglich, aber moralisch reflexionsbedürftig sind.',
            gradingHints: ['2 Punkte für B; 0 Punkte sonst.'],
            sourceRef: 'HR2 – Graubereich zwischen Gesetz und Praxis',
          },
          {
            id: 'hr-exam-01-t-9',
            type: 'definition',
            title: 'Psychologischer Vertrag',
            points: 3,
            task: [
              'Erläutern Sie den psychologischen Vertrag (Schein 1970) und grenzen Sie ihn vom formalen Arbeitsvertrag ab.',
            ],
            solution: [
              'Der psychologische Vertrag ist ein ungeschriebenes Geben und Nehmen, das auf gegenseitigen Erwartungen über den Erwerbslebenszyklus beruht.',
              'Abgrenzung: Er ist nicht formal/schriftlich fixiert, sondern implizit; er ergänzt den formalen Arbeitsvertrag.',
            ],
            gradingHints: [
              '2 Punkte für die korrekte Beschreibung (ungeschrieben, gegenseitige Erwartungen).',
              '1 Punkt für die Abgrenzung zum formalen Vertrag.',
            ],
            sourceRef: 'HR3 – Generationen, Werte und Arbeitshaltung (psychologischer Vertrag)',
          },
        ],
      },
      {
        id: 'hr-exam-01-sec-3',
        title: 'Teil C · Personalplanung und Personalbeschaffung',
        description: 'Personalbedarf, Anforderungsprofile und Beschaffungswege.',
        points: 26,
        tasks: [
          {
            id: 'hr-exam-01-t-10',
            type: 'calculation',
            title: 'Brutto- und Netto-Personalbedarf',
            points: 8,
            task: [
              'Ein Unternehmen plant: Einsatzbedarf 600, Reservebedarf 50, verfügbare Mitarbeiter 620, geplante Neueinstellungen 40, erwartete Abgänge 30.',
              'a) Berechnen Sie den Brutto-Personalbedarf.',
              'b) Berechnen Sie den Netto-Personalbedarf mit der Klammerformel.',
              'c) Liegt eine Über- oder Unterdeckung vor und welche Maßnahmenrichtung folgt daraus?',
            ],
            solution: [
              'a) Brutto-Personalbedarf = Einsatzbedarf 600 + Reservebedarf 50 = 650.',
              'b) Netto = Brutto − (Verfügbar + Neueinstellungen − Abgänge) = 650 − (620 + 40 − 30) = 650 − 630 = 20.',
              'c) Der Netto-Personalbedarf ist positiv (20) → Unterdeckung → Beschaffungs-/Gewinnungsplanung (intern via Personalentwicklung oder extern via Rekrutierung).',
            ],
            gradingHints: [
              'a) 2 Punkte für 650.',
              'b) 4 Punkte für korrekten Rechenweg und Ergebnis 20 (Klammerformel beachten).',
              'c) 2 Punkte für Unterdeckung + Beschaffungs-/Gewinnungsplanung.',
            ],
            sourceRef: 'HR2 – Personalbedarf, Bestand und Soll-Ist-Abgleich (Rechenbeispiel)',
          },
          {
            id: 'hr-exam-01-t-11',
            type: 'definition',
            title: 'Vier Kompetenzarten',
            points: 6,
            task: [
              'Nennen Sie die vier Kompetenzarten eines Anforderungsprofils und geben Sie je ein typisches Merkmal an.',
              'Warum darf das Anforderungsprofil nicht auf Fachqualifikationen verengt werden?',
            ],
            solution: [
              'Fachkompetenz (fachliches Wissen/Können), Persönlichkeitskompetenz (z. B. Belastbarkeit), Methodenkompetenz (z. B. Arbeitstechniken), Sozialkompetenz (z. B. Teamfähigkeit).',
              'Begründung: Persönlichkeits-, Methoden- und Sozialkompetenz sind gleichwertige Bestandteile; eine Verengung auf Fachqualifikation würde wesentliche Anforderungen ausblenden.',
            ],
            gradingHints: [
              'Je 1 Punkt pro korrekter Kompetenzart mit Merkmal (max. 4).',
              '2 Punkte für die Begründung (Gleichwertigkeit der vier Dimensionen).',
            ],
            sourceRef: 'HR4 – Kompetenzen und Anforderungsprofil',
          },
          {
            id: 'hr-exam-01-t-12',
            type: 'comparison',
            title: 'Interne vs. externe Personalbeschaffung',
            points: 8,
            task: [
              'Grenzen Sie interne und externe Personalbeschaffung ab und nennen Sie je zwei Wege/Instrumente.',
              'Strukturieren Sie Vor- und Nachteile nach den Kategorien Allgemeines, Qualifikation und Motivation.',
            ],
            solution: [
              'Intern (vorhandene Mitarbeiterpotenziale): Versetzung, innerbetriebliche Ausschreibung, Personalentwicklung, Mehrarbeit.',
              'Extern (Arbeitsmarkt): Internet/Stellenportale, Publikationen, Personalberatung, Arbeitsvermittlung, Werbung/Branding.',
              'Vor-/Nachteile gliedern sich nach Allgemeinem, Qualifikation und Motivation; beide Seiten haben gemischte Effekte (z. B. intern: hohe Motivation durch Aufstieg, aber begrenzte Auswahl; extern: frische Qualifikation, aber Einarbeitung und Risiko).',
            ],
            gradingHints: [
              '2 Punkte für die Abgrenzung intern/extern.',
              '2 Punkte für je zwei korrekte Wege pro Seite (max. 2).',
              '4 Punkte für die Gliederung nach Allgemeines/Qualifikation/Motivation mit gemischten Effekten.',
            ],
            sourceRef: 'HR5 – Interne/externe Wege; Vor- und Nachteile intern vs. extern',
          },
          {
            id: 'hr-exam-01-t-13',
            type: 'definition',
            title: 'Reziproker Beschaffungsprozess',
            points: 4,
            task: [
              'Erläutern Sie, warum Personalbeschaffung ein reziproker Prozess ist und wann eine Vertragsbeziehung zustande kommt.',
            ],
            solution: [
              'Organisation und Individuum bieten und fragen jeweils etwas nach (beidseitige Angebote und Erwartungen).',
              'Eine Vertragsbeziehung entsteht nur bei weitgehend komplementären Interessen beider Seiten.',
            ],
            gradingHints: [
              '2 Punkte für die beidseitige Angebot-/Nachfrage-Logik.',
              '2 Punkte für die Bedingung komplementärer Interessen.',
            ],
            sourceRef: 'HR5 – Personalbeschaffung als reziproker Prozess',
          },
        ],
      },
    ],
  },
  {
    id: 'hr-exam-02',
    title: 'Probeklausur 2 · Human Resources (Kapitel 6–10)',
    label: 'Probeklausur',
    description:
      'Klausurnahe Aufgaben zu Personalauswahl und Arbeitszeugnissen, Auswahlverfahren, Personaladministration/Sozialversicherung/DSGVO, Personalcontrolling/Onboarding/Laufbahnplanung sowie Arbeitsorganisation und Personalbeurteilung. Inhaltlich vollständig aus HR6–HR10.',
    durationMinutes: 90,
    instructions: [
      'Bearbeiten Sie alle Aufgaben. Die Punktzahl pro Aufgabe ist angegeben.',
      'Bei Single-Choice ist genau eine, bei Multiple-Choice können mehrere Antworten korrekt sein.',
      'Begründen Sie offene Aufgaben stichwortartig, aber vollständig.',
      'Hilfsmittel: nur ein nicht-programmierbarer Taschenrechner.',
    ],
    topics: [
      'Personalauswahl & Arbeitszeugnisse',
      'Auswahlverfahren',
      'Administration, SV & DSGVO',
      'Controlling, Onboarding & Laufbahn',
      'Arbeitsorganisation & Beurteilung',
    ],
    sections: [
      {
        id: 'hr-exam-02-sec-1',
        title: 'Teil A · Personalauswahl und Arbeitszeugnisse',
        description: 'Auswahlverfahren, Assessment Center und Zeugnisdecodierung.',
        points: 22,
        tasks: [
          {
            id: 'hr-exam-02-t-1',
            type: 'single-choice',
            title: 'Assessment Center',
            points: 3,
            task: [
              'Wie ist das Assessment Center korrekt einzuordnen?',
              'A) Als einzelnes Auswahlverfahren  B) Als Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren  C) Als grafologisches Gutachten  D) Als ärztliche Eignungsuntersuchung',
            ],
            solution:
              'Richtig ist B. Das Assessment Center ist kein einzelnes Instrument, sondern die Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren. Grafologische Gutachten gehören nicht dazu.',
            gradingHints: ['3 Punkte für B; 0 Punkte sonst.'],
            sourceRef: 'HR6/HR7 – Auswahlverfahren im Überblick',
          },
          {
            id: 'hr-exam-02-t-2',
            type: 'definition',
            title: 'Zufriedenheits-Notenskala im Arbeitszeugnis',
            points: 6,
            task: [
              'Ordnen Sie die folgenden Zeugnisformulierungen einer Schulnotenstufe zu und erläutern Sie die Bedeutung der Signalwörter "stets" und "voll(sten)":',
              'a) "stets zu unserer vollsten Zufriedenheit"',
              'b) "zu unserer vollen Zufriedenheit"',
              'c) "hat sich bemüht" / "hat versucht"',
            ],
            solution: [
              'a) "stets zu unserer vollsten Zufriedenheit" = sehr gut (Note 1).',
              'b) "zu unserer vollen Zufriedenheit" (ohne "stets") = befriedigend.',
              'c) "bemüht/versucht" = ungenügende bzw. mangelhafte Leistung (negative Codierung).',
              'Signalwörter: "stets" verstärkt die Dauerhaftigkeit, "vollsten/voll" die Intensität – kleine Unterschiede ändern die Note erheblich.',
            ],
            gradingHints: [
              'Je 1,5 Punkte für a, b und c.',
              '1,5 Punkte für die Erläuterung der Signalwörter.',
            ],
            sourceRef: 'HR6 – Zeugnisformulierungen und ihre Bedeutung',
          },
          {
            id: 'hr-exam-02-t-3',
            type: 'case-study',
            title: 'Codierte Zeugnisformulierungen',
            points: 7,
            task: [
              'Ein Arbeitszeugnis enthält folgende Sätze. Decodieren Sie die tatsächliche Aussage:',
              '1) "Er hatte Gelegenheit, sich das nötige Fachwissen anzueignen."',
              '2) "Wir wünschen ihm vor allem Gesundheit."',
              '3) "Wir wünschen ihm für die Zukunft viel Glück."',
              'Erklären Sie zusätzlich, warum man Schlusssätze nicht als reine Höflichkeit lesen darf.',
            ],
            solution: [
              '1) Die Gelegenheit wurde nicht genutzt – das Fachwissen wurde nicht erworben (negativ).',
              '2) "Vor allem Gesundheit" signalisiert dauernde Krankheit/häufige Fehlzeiten.',
              '3) "Viel Glück" signalisiert Probleme in der Zusammenarbeit.',
              'Schlusssätze und Beendigungsgründe sind bedeutungstragend; scheinbar wohlwollende Formulierungen können negativ codiert sein.',
            ],
            gradingHints: [
              'Je 2 Punkte für 1, 2 und 3 korrekt decodiert.',
              '1 Punkt für die Begründung zur Codierung der Schlusssätze.',
            ],
            sourceRef: 'HR6 – Zeugniscode, Schlusssätze und Beendigungsgründe',
          },
          {
            id: 'hr-exam-02-t-4',
            type: 'multiple-choice',
            title: 'Drei Analysedimensionen der Auswahl',
            points: 3,
            task: [
              'Welche drei Dimensionen betrachtet eine ganzheitliche Personalauswahl? (Mehrfachauswahl)',
              'A) Kompetenzen (Können)  B) Verhalten (Wie)  C) Motive (Wollen)  D) Herkunft (Woher)',
            ],
            solution:
              'Richtig sind A, B und C: Kompetenzen (Können), Verhalten (Wie) und Motive (Wollen). Herkunft (D) ist kein Bestandteil.',
            gradingHints: ['3 Punkte nur bei genau A, B, C; sonst 0 Punkte.'],
            sourceRef: 'HR7 – Drei Analysedimensionen: Kompetenzen, Verhalten, Motive',
          },
          {
            id: 'hr-exam-02-t-5',
            type: 'definition',
            title: 'Insights-MDI Farbtypologie',
            points: 3,
            task: [
              'Ordnen Sie den vier Insights-MDI-Farben die jeweilige Kerneigenschaft zu (Rot, Gelb, Grün, Blau).',
            ],
            solution: [
              'Rot = dominant, Gelb = initiativ, Grün = stetig, Blau = analytisch.',
            ],
            gradingHints: ['Je 0,75 Punkte pro korrekter Zuordnung (max. 3).'],
            sourceRef: 'HR7 – Insights-MDI: Farbtypologie und Persönlichkeitstypen',
          },
        ],
      },
      {
        id: 'hr-exam-02-sec-2',
        title: 'Teil B · Administration, Sozialversicherung und DSGVO',
        description: 'Sozialversicherung, Personalkosten und Datenschutzrecht.',
        points: 24,
        tasks: [
          {
            id: 'hr-exam-02-t-6',
            type: 'definition',
            title: 'Sozialversicherungssystem',
            points: 7,
            task: [
              'Nennen Sie die fünf Zweige des deutschen Sozialversicherungssystems.',
              'Erläutern Sie das zugrunde liegende Prinzip und die drei beteiligten Rollen.',
            ],
            solution: [
              'Fünf Zweige: Arbeitslosen-, Kranken-, Unfall-, Pflege- und Rentenversicherung.',
              'Prinzip: solidarisch finanzierte Pflichtversicherung.',
              'Drei Rollen: Staat (Regeln), Beitragszahler (Arbeitgeber/Arbeitnehmer), Träger (Umsetzung) – bilden gemeinsam das soziale Netz.',
            ],
            gradingHints: [
              'Je 0,8 Punkte pro Zweig (max. 4).',
              '1 Punkt für Solidaritäts-/Pflichtversicherungsprinzip.',
              '2 Punkte für die drei Rollen (Staat, Beitragszahler, Träger).',
            ],
            sourceRef: 'HR8 – Das Sozialversicherungssystem in Deutschland',
          },
          {
            id: 'hr-exam-02-t-7',
            type: 'single-choice',
            title: 'DSGVO-Bußgeldstufen',
            points: 4,
            task: [
              'Welcher Bußgeldrahmen gilt für die schwerwiegenderen Verstöße nach Art. 83 Abs. 5 DSGVO?',
              'A) bis 10 Mio. € / 2 %  B) bis 20 Mio. € / 4 %  C) bis 5 Mio. € / 1 %  D) bis 50 Mio. € / 10 %',
            ],
            solution:
              'Richtig ist B (bis 20 Mio. € / 4 %). Kleinere Verstöße nach Art. 83 Abs. 4 werden mit bis 10 Mio. € / 2 % geahndet. Zusätzlich besteht ein Schadenersatzanspruch nach Art. 82.',
            gradingHints: ['4 Punkte für B; 0 Punkte sonst.'],
            sourceRef: 'HR8 – Datenschutz und DSGVO (Sanktionssystem)',
          },
          {
            id: 'hr-exam-02-t-8',
            type: 'definition',
            title: 'Datenschutzbeauftragter',
            points: 5,
            task: [
              'Ab welcher Beschäftigtenzahl ist ein Datenschutzbeauftragter zu benennen?',
              'Beschreiben Sie seine Aufgaben und seine Schutzrechte.',
            ],
            solution: [
              'Benennungspflicht u. a. ab 20 ständig mit automatisierter Datenverarbeitung Beschäftigten (Art. 37 Abs. 1 DSGVO i. V. m. § 38 BDSG-neu).',
              'Aufgaben: berät und schult; er trifft selbst keine Entscheidungen.',
              'Schutzrechte: besonderer Abberufungs- und Kündigungsschutz.',
            ],
            gradingHints: [
              '2 Punkte für die Schwelle (ab 20 Beschäftigte).',
              '2 Punkte für Aufgaben (beraten/schulen, keine Entscheidungen).',
              '1 Punkt für die Schutzrechte.',
            ],
            sourceRef: 'HR8 – Datenschutzbeauftragter',
          },
          {
            id: 'hr-exam-02-t-9',
            type: 'definition',
            title: 'Personalkostenstruktur',
            points: 5,
            task: [
              'Gliedern Sie die Personalkosten in ihre Hauptbestandteile.',
              'Geben Sie den Merkwert für die Personalzusatzkosten relativ zum Bruttolohn an.',
            ],
            solution: [
              'Hauptbestandteile: Löhne, Gehälter, Personalzusatzkosten und sonstige Personalkosten.',
              'Personalzusatzkosten (gesetzlich, tariflich, freiwillig) betragen ca. 40 % des Bruttolohns.',
            ],
            gradingHints: [
              'Je 0,75 Punkte pro Hauptbestandteil (max. 3).',
              '2 Punkte für den Merkwert ca. 40 % des Bruttolohns.',
            ],
            sourceRef: 'HR8 – Personalkosten, Zusatzkosten und Entgeltabrechnung',
          },
          {
            id: 'hr-exam-02-t-10',
            type: 'single-choice',
            title: 'Strategisches vs. operatives Personalcontrolling',
            points: 3,
            task: [
              'Welche Zuordnung ist korrekt?',
              'A) Strategisch = WIE / Feedback; operativ = WOHIN / Feedforward',
              'B) Strategisch = WOHIN / "die richtigen Dinge tun" / Feedforward; operativ = WIE / "die Dinge richtig tun" / Feedback',
              'C) Beide sind rein vergangenheitsbezogen',
              'D) Strategisch = quantitativ; operativ = qualitativ',
            ],
            solution:
              'Richtig ist B. Strategisches PC = WOHIN / "die richtigen Dinge tun" (langfristig, Feedforward); operatives PC = WIE / "die Dinge richtig tun" (kurzfristig, Feedback).',
            gradingHints: ['3 Punkte für B; 0 Punkte sonst.'],
            sourceRef: 'HR8 – Personalcontrolling (strategisch/operativ)',
          },
        ],
      },
      {
        id: 'hr-exam-02-sec-3',
        title: 'Teil C · Controlling, Laufbahn und Arbeitsorganisation',
        description: 'Kennzahlen, Laufbahnmodelle, Arbeitszeit und Personalbeurteilung.',
        points: 28,
        tasks: [
          {
            id: 'hr-exam-02-t-11',
            type: 'calculation',
            title: 'Soll- und Ist-Arbeitszeit',
            points: 6,
            task: [
              'Ein Mitarbeiter hat eine vertraglich vereinbarte Arbeitszeit von 220 Tagen p. a. Feiertage (Wochentage) und allgemeine Freistellung machen zusammen 12 Tage aus. Ausfallzeiten (Urlaub, Krankheit etc.) betragen 38 Tage, effektive Mehrarbeit 5 Tage.',
              'a) Berechnen Sie die Soll-Arbeitszeit.',
              'b) Berechnen Sie die Ist-Arbeitszeit.',
              'c) Bestimmen Sie die Quote der effektiven Arbeitszeit (auf eine Nachkommastelle).',
            ],
            solution: [
              'a) Soll-Arbeitszeit = vertraglich vereinbart − Feiertage/Freistellung = 220 − 12 = 208 Tage.',
              'b) Ist-Arbeitszeit = Soll − Ausfallzeiten + Mehrarbeit = 208 − 38 + 5 = 175 Tage.',
              'c) Quote der effektiven Arbeitszeit = Ist / Soll = 175 / 208 ≈ 0,841 ≈ 84,1 %.',
            ],
            gradingHints: [
              'a) 2 Punkte für 208 Tage.',
              'b) 2 Punkte für korrekten Rechenweg und 175 Tage.',
              'c) 2 Punkte für die Quote (≈ 84,1 %).',
            ],
            sourceRef: 'HR9 – Kennzahlen der Personalstatistik (Arbeits- und Ausfallzeiten)',
          },
          {
            id: 'hr-exam-02-t-12',
            type: 'definition',
            title: 'Laufbahnpfade und 70/20/10-Modell',
            points: 6,
            task: [
              'Nennen Sie die drei gleichwertigen Karrierepfade moderner Laufbahnmodelle.',
              'Erläutern Sie das 70/20/10-Lernmodell.',
            ],
            solution: [
              'Drei Pfade: fachliche Laufbahn, Führungslaufbahn, projektbezogene/laterale Laufbahn (gleichwertig).',
              '70/20/10: Kompetenz entsteht zu 70 % durch Erfahrung, 20 % durch soziales Lernen und nur 10 % durch formale Bildung.',
            ],
            gradingHints: [
              'Je 1 Punkt pro korrektem Pfad (max. 3).',
              '3 Punkte für die korrekte 70/20/10-Verteilung (Erfahrung/soziales Lernen/formale Bildung).',
            ],
            sourceRef: 'HR9 – Laufbahnplanung und Entwicklung',
          },
          {
            id: 'hr-exam-02-t-13',
            type: 'comparison',
            title: 'Job Enlargement vs. Job Enrichment',
            points: 5,
            task: [
              'Definieren Sie die fünf klassischen Formen der Arbeitsorganisation in je einem Satz.',
              'Grenzen Sie insbesondere Job Enlargement und Job Enrichment voneinander ab.',
            ],
            solution: [
              'Job Rotation: planmäßiger Arbeitsplatzwechsel.',
              'Job Enlargement: Aufgabenerweiterung um gleichartige Tätigkeiten (Aufgabenbreite, Verminderung der Arbeitsteilung).',
              'Job Enrichment: Erweiterung des Entscheidungs- und Kontrollspielraums (Aufgabentiefe, Planungs-/Entscheidungs-/Kontrollanteile).',
              'Teilautonome Arbeitsgruppe: Gruppe mit hohem Spielraum in Tiefe und Breite.',
              'Qualitätszirkel: Gruppe zur Verbesserung von Qualität/Prozessen.',
            ],
            gradingHints: [
              'Je 0,75 Punkte pro korrekt definierter Form (max. 3,75).',
              '1,25 Punkte für die klare Abgrenzung Enlargement (Breite) vs. Enrichment (Tiefe).',
            ],
            sourceRef: 'HR10 – Klassische Formen der Arbeitsorganisation; Aufgabentiefe/-breite',
          },
          {
            id: 'hr-exam-02-t-14',
            type: 'single-choice',
            title: 'Arbeitszeitrechtsgesetz',
            points: 3,
            task: [
              'Welche Kernregel zur werktäglichen Arbeitszeit gilt nach dem ArbZRG?',
              'A) 10 Std., niemals verlängerbar  B) 8 Std., verlängerbar auf 10 Std. bei Durchschnittsausgleich über 6 Kalendermonate bzw. 24 Wochen  C) 6 Std., verlängerbar auf 12 Std.  D) 8 Std. ohne jede Ausnahme',
            ],
            solution:
              'Richtig ist B. 8 Stunden werktäglich, verlängerbar auf 10 Stunden, wenn im Durchschnitt von 6 Kalendermonaten bzw. 24 Wochen 8 Stunden täglich nicht überschritten werden.',
            gradingHints: ['3 Punkte für B; 0 Punkte sonst.'],
            sourceRef: 'HR10 – Arbeitszeit und ihre Flexibilisierung',
          },
          {
            id: 'hr-exam-02-t-15',
            type: 'case-study',
            title: '360°-Feedback richtig einsetzen',
            points: 5,
            task: [
              'Eine Geschäftsführung möchte das neu eingeführte 360°-Feedback direkt als Grundlage für Gehaltserhöhungen und Beförderungen nutzen.',
              'a) Welchem Zweck dient das 360°-Feedback primär?',
              'b) Bewerten Sie das Vorhaben der Geschäftsführung.',
              'c) Nennen Sie zwei Perspektiven, die in ein 360°-Feedback einfließen.',
            ],
            solution: [
              'a) Das 360°-Feedback ist ein Entwicklungsinstrument; es macht durch Selbst- und Fremdbild blinde Flecken sichtbar.',
              'b) Eine Kopplung an Gehalt/Beförderung ist kritisch: Sie zerstört das für ehrliches Feedback nötige Vertrauen; daher sollte es nicht als Vergütungs-/Beurteilungsinstrument genutzt werden.',
              'c) Z. B. Selbstbild des Beurteilten und Fremdbild von Vorgesetzten, Mitarbeitenden, Kolleg:innen oder internen/externen Kunden.',
            ],
            gradingHints: [
              'a) 1,5 Punkte für Entwicklungsinstrument.',
              'b) 2,5 Punkte für die kritische Bewertung (Vertrauensverlust bei Vergütungskopplung).',
              'c) 1 Punkt für zwei korrekte Perspektiven.',
            ],
            sourceRef: 'HR10 – 360°-Feedback',
          },
        ],
      },
    ],
  },
];

export default exams;
