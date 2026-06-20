export const exams = [
  {
    id: 'bf-klausur-1',
    title: 'Behavioral Finance · Probeklausur',
    label: 'Probeklausur',
    description:
      'Modulübergreifende Übungsklausur über alle neun Kapitel (Einführung bis Kapitalmarktanomalien). Mischung aus Wissens-, Multiple-Choice-, Rechen-, Transfer- und Fallaufgaben im Klausurformat (90 Minuten).',
    durationMinutes: 90,
    topics: [
      'Einführung & Homo Oeconomicus',
      'Zwei Systeme',
      'Heuristiken & Biases',
      'Entscheidungen unter Unsicherheit',
      'Zeit in der Ökonomie',
      'Prospect Theory',
      'Altersvorsorge',
      'Spekulationsblasen',
      'Kapitalmarktanomalien',
    ],
    instructions: [
      'Bearbeitungszeit: 90 Minuten. Alle Hilfsmittel laut Modulvorgabe sind ein nicht programmierbarer Taschenrechner und ein Stift.',
      'Bei Multiple-Choice-Aufgaben können mehrere Antworten richtig sein; bei Single-Choice ist genau eine Antwort korrekt.',
      'Rechenaufgaben: Rechenweg vollständig angeben, Ergebnisse runden wie in der Aufgabe vorgegeben.',
      'Offene Aufgaben stichwortartig, aber vollständig beantworten; Definitionen mit Schlüsselbegriffen belegen.',
    ],
    sections: [
      // ---------------------------------------------------------------
      {
        id: 'bf-exam1-s1',
        title: 'Teil A · Grundlagen, Menschenbild und zwei Systeme',
        description: 'Kapitel 1 und 2 — Verortung, Homo Oeconomicus, Denksysteme.',
        points: 22,
        tasks: [
          {
            id: 'bf-exam1-s1-t1',
            type: 'definition',
            title: 'Definition Behavioral Finance und ihre Ziele',
            points: 6,
            task: [
              'a) Definieren Sie Behavioral Finance nach Daxhammer/Facsar und nennen Sie den Begriff für das zugrunde liegende Menschenbild.',
              'b) Nennen Sie die drei Ziele der Behavioral Finance.',
            ],
            sourceRef: 'Kapitel 1 · Folien 15–16',
            solution: [
              'a) Behavioral Finance ist eine verhaltenswissenschaftlich fundierte Finanzmarkttheorie. Sie basiert auf der Erkenntnis, dass Marktteilnehmer nur zu begrenzt rationalem Verhalten in der Lage sind. Das Menschenbild ist der "Homo Oeconomicus Humanus", der häufig durch kognitive und emotionale Aspekte beeinflusst wird.',
              'b) Ziele: (1) klären, warum Anleger auf Finanzmärkten immer wieder begrenzt rationale Entscheidungen treffen; (2) beobachtbares Anlegerverhalten und andere Phänomene an Finanzmärkten erklären; (3) bestehende Modelle an deren Schwachstellen ergänzen.',
            ],
            gradingHints: [
              '2 Punkte für "verhaltenswissenschaftlich fundierte Finanzmarkttheorie" + begrenzte Rationalität',
              '1 Punkt für "Homo Oeconomicus Humanus"',
              'Je 1 Punkt pro korrekt genanntem Ziel (max. 3)',
            ],
          },
          {
            id: 'bf-exam1-s1-t2',
            type: 'single-choice',
            title: 'Ökonomisches Prinzip',
            points: 2,
            task: 'Welche Aussage zum Maximal- und Minimalprinzip ist korrekt?',
            sourceRef: 'Kapitel 1 · Folie 19',
            solution:
              'Richtig: "Das Maximalprinzip fixiert den Input und maximiert den Output; das Minimalprinzip fixiert den Output und minimiert den Input." Maximalprinzip = Input fix, Output max; Minimalprinzip = Input min, Output fix.',
            gradingHints: ['Volle Punktzahl nur bei korrekter Zuordnung beider Prinzipien'],
          },
          {
            id: 'bf-exam1-s1-t3',
            type: 'comparison',
            title: 'Traditionelle Ökonomik vs. Behavioral Economics',
            points: 6,
            task: [
              'Stellen Sie die drei Modellprinzipien (nach H. Beck 2014) der traditionellen Ökonomik der Behavioral Economics gegenüber: Kalkül, Zeitpräferenz und Nutzenkonzept.',
            ],
            sourceRef: 'Kapitel 1 · Folie 31',
            solution: [
              'Kalkül: traditionell Erwartungsnutzentheorie (Nutzenmaximierung gemäß erwartetem Nutzen) — Behavioral: Prospect Theory (Angst vor Verlusten, abweichende Bewertung von Eintrittswahrscheinlichkeiten, Orientierung an Referenzwerten).',
              'Zeitpräferenz: traditionell exponentielles Diskontieren — Behavioral: hyperbolisches Diskontieren.',
              'Nutzenkonzept: traditionell Menschen sind eigennützig — Behavioral: Menschen achten auf das Wohlergehen anderer, legen Wert auf Fairness.',
            ],
            gradingHints: ['Je 2 Punkte pro vollständig und korrekt gegenübergestelltem Prinzip'],
          },
          {
            id: 'bf-exam1-s1-t4',
            type: 'multiple-choice',
            title: 'System 1 und System 2',
            points: 4,
            task: 'Welche Aussagen über die zwei Denksysteme nach Kahneman sind richtig? (Mehrfachauswahl)',
            sourceRef: 'Kapitel 2 · Folien 33–48',
            solution:
              'Richtig sind: (1) System 1 arbeitet automatisch, schnell und unbewusst ("schnelles Denken"). (2) System 2 ist bewusst, konzentriert, aber faul ("langsames Denken"). (3) Der Homo Oeconomicus wäre ein reiner System-2-Akteur. Falsch: System 1 lässt sich nicht abstellen — gerade deshalb sind intuitive Denkfehler schwer zu verhindern.',
            gradingHints: ['Je 1 Punkt pro korrekt erkannter Aussage; Abzug bei falsch markierten Aussagen'],
          },
          {
            id: 'bf-exam1-s1-t5',
            type: 'essay',
            title: 'Disfluency-Befund im Cognitive Reflection Test',
            points: 4,
            task: 'Erläutern Sie das Disfluency-Ergebnis von Frederick (2005): Welche Fehlerquoten ergaben sich bei gut lesbarer vs. kaum lesbarer Schrift, und wie wird der Unterschied über das Zwei-Systeme-Modell erklärt?',
            sourceRef: 'Kapitel 2 · Folie 44',
            solution:
              'Bei gut lesbarer Schrift lag die Fehlerquote bei ca. 90 %, bei kaum lesbarer (disfluenter) Schrift nur bei ca. 35 %. Erklärung: Eine starke kognitive Beanspruchung mobilisiert — unabhängig von ihrer Ursache — System 2. Dieses verwirft die von System 1 vorgeschlagene schnelle, intuitive (häufig falsche) Antwort. Die erschwerte Lesbarkeit zwingt also zum langsamen Denken und senkt die Fehlerquote.',
            gradingHints: [
              '2 Punkte für die Zahlen 90 % und 35 %',
              '2 Punkte für die Begründung über die Aktivierung von System 2 / Verwerfen der System-1-Antwort',
            ],
          },
        ],
      },
      // ---------------------------------------------------------------
      {
        id: 'bf-exam1-s2',
        title: 'Teil B · Heuristiken, kognitive Verzerrungen und Anker',
        description: 'Kapitel 3 — Verfügbarkeit, Repräsentativität, Bayes, Mental Accounting, Anker.',
        points: 24,
        tasks: [
          {
            id: 'bf-exam1-s2-t1',
            type: 'single-choice',
            title: 'Verfügbarkeitsheuristik',
            points: 2,
            task: 'Was beschreibt die Verfügbarkeitsheuristik am treffendsten?',
            sourceRef: 'Kapitel 3 · Folie 24',
            solution:
              'Richtig: "Wahrscheinlichkeiten werden nach der Leichtigkeit der Erinnerung geschätzt." Leicht abrufbare (mediengetriebene, dramatische) Ereignisse werden überschätzt, stille Risiken (Krankheiten) unterschätzt. Verfügbarkeit ist nicht gleich Häufigkeit.',
            gradingHints: ['Voller Punkt nur, wenn der Bezug zur Abruf-Leichtigkeit klar wird'],
          },
          {
            id: 'bf-exam1-s2-t2',
            type: 'calculation',
            title: 'Bayes-Theorem im Brustkrebs-Beispiel',
            points: 6,
            task: [
              'In einem Beispiel von Dawes (1988) stammten 93 % aller Brustkrebsfälle aus einer Hochrisikogruppe. Gegeben: p(Hr|Bk) = 0,93; p(Bk) = 0,075; p(Hr) = 0,57.',
              'Berechnen Sie mit dem Satz von Bayes das tatsächliche Erkrankungsrisiko p(Bk|Hr) der Hochrisikogruppe und erläutern Sie, worin der typische Trugschluss besteht.',
            ],
            sourceRef: 'Kapitel 3 · Folien 35–36',
            solution: [
              'p(Bk|Hr) = [p(Bk)·p(Hr|Bk)] / p(Hr) = (0,075 · 0,93) / 0,57 = 0,06975 / 0,57 = 0,122 = 12,2 %.',
              'Das tatsächliche Erkrankungsrisiko innerhalb der Hochrisikogruppe beträgt also nur 12,2 %, nicht 93 %.',
              'Trugschluss: Die 93 % sind p(Hochrisikogruppe | Brustkrebs), nicht p(Brustkrebs | Hochrisikogruppe). Es werden p(A|B) und p(B|A) verwechselt.',
            ],
            gradingHints: [
              '3 Punkte für korrekten Rechenweg und Ergebnis 12,2 %',
              '3 Punkte für die Erklärung der Verwechslung von p(A|B) und p(B|A)',
            ],
          },
          {
            id: 'bf-exam1-s2-t3',
            type: 'essay',
            title: 'Conjunction Bias und Base-rate-Fallacy',
            points: 6,
            task: [
              'a) Erklären Sie am Linda-Experiment den Conjunction Bias.',
              'b) Erklären Sie am Jack-Beispiel (70 Juristen / 30 Ingenieure) die Vernachlässigung der Basisrate.',
            ],
            sourceRef: 'Kapitel 3 · Folien 30–34',
            solution: [
              'a) Conjunction Bias: Linda (31, intelligent, Philosophiestudium, Anti-Kernkraft-Demos) wird häufiger als "Bankangestellte UND in feministischer Bewegung aktiv" eingestuft denn als bloße "Bankangestellte". Die Konjunktion zweier Merkmale kann aber nie wahrscheinlicher sein als das umfassendere Einzelmerkmal — ein Verstoß gegen die Wahrscheinlichkeitslogik, ausgelöst durch das passende Schema.',
              'b) Base-rate-Fallacy: Jack stammt aus einer Gruppe von 70 Juristen und 30 Ingenieuren. Wird er als konservativ und mathematikaffin beschrieben, ordnen ihn die Probanden über das Stereotyp dem Ingenieursberuf zu und ignorieren die Basisrate (70 % Juristen).',
            ],
            gradingHints: [
              '3 Punkte für Conjunction Bias inkl. Logik "Konjunktion nie wahrscheinlicher als Einzelmerkmal"',
              '3 Punkte für Base-rate-Fallacy inkl. Ignorieren der 70-%-Basisrate',
            ],
          },
          {
            id: 'bf-exam1-s2-t4',
            type: 'calculation',
            title: 'Ankerungsindex',
            points: 4,
            task: [
              'Im Mammutbaum-Beispiel ergaben sich bei den Ankern 55 und 366 die Schätzungen 86 bzw. 257.',
              'Berechnen Sie den Ankerungsindex und interpretieren Sie das Ergebnis (Bedeutung von 0 % und 100 %).',
            ],
            sourceRef: 'Kapitel 3 · Folie 76',
            solution: [
              'Ankerungsindex = Differenz der Schätzungen / Differenz der Anker = (257 − 86) / (366 − 55) = 171 / 311 = 0,55 = 55 %.',
              'Interpretation: 100 % bedeutet, dass Menschen sklavisch dem Anker folgen; 0 % bedeutet, dass der Anker keine Rolle spielt. Bei 55 % folgten die Schätzungen dem Anker zu gut der Hälfte.',
            ],
            gradingHints: [
              '2 Punkte für korrekte Rechnung (55 %)',
              '2 Punkte für Interpretation der Skalenenden',
            ],
          },
          {
            id: 'bf-exam1-s2-t5',
            type: 'single-choice',
            title: 'Mental Accounting (Kinobeispiel)',
            points: 2,
            task: 'Im Kinobeispiel verzichten 54 % nach einer verlorenen Karte, aber nur 12 % nach einem verlorenen Geldschein auf den Neukauf. Welche Aussage trifft zu?',
            sourceRef: 'Kapitel 3 · Folien 68–69',
            solution:
              'Richtig: "Obwohl der ökonomische Verlust identisch (10 €) ist, ordnen Menschen das Geld getrennten mentalen Konten zu; der verlorene Kartenwert belastet das Konto Kino." Die mentale Kontenzuordnung steuert das Verhalten (Thaler 1999).',
            gradingHints: ['Voller Punkt nur bei Bezug auf identischen Verlust + getrennte mentale Konten'],
          },
          {
            id: 'bf-exam1-s2-t6',
            type: 'comparison',
            title: 'Decoy- vs. Phantom-Lockvogel-Effekt',
            points: 4,
            task: 'Grenzen Sie den Decoy-Effekt vom Phantom-Lockvogel-Effekt ab. Nutzen Sie das Economist-Abo-Beispiel zur Illustration des Decoy-Effekts.',
            sourceRef: 'Kapitel 3 · Folie 81',
            solution: [
              'Decoy-Effekt (asymmetrische Dominanz): Ein minderwertiger Köder wird real angeboten, aber kaum gewählt. Beim Economist-Abo erhöht das (für 0 % gewählte) Print-only-Angebot zu 125 € die Wahl von Print+Online von 32 % auf 84 %.',
              'Phantom-Lockvogel-Effekt: Das attraktive Angebot ist "gerade nicht lieferbar", existiert also gar nicht. Die Nachfrage verschiebt sich zum nächstbesten verfügbaren Produkt.',
              'Unterschied: Beim Decoy existiert der Köder real (wird nur nicht gewählt), beim Phantom-Effekt existiert er nicht.',
            ],
            gradingHints: [
              '2 Punkte für Decoy inkl. Economist-Zahlen (32 % → 84 %)',
              '2 Punkte für Phantom (Angebot nicht verfügbar) und die klare Abgrenzung',
            ],
          },
        ],
      },
      // ---------------------------------------------------------------
      {
        id: 'bf-exam1-s3',
        title: 'Teil C · Entscheidungen unter Unsicherheit und Zeit',
        description: 'Kapitel 4 und 5 — Entscheidungsregeln, Erwartungsnutzen, Diskontierung.',
        points: 24,
        tasks: [
          {
            id: 'bf-exam1-s3-t1',
            type: 'essay',
            title: 'Sicherheit, Ungewissheit und Risiko i.e.S.',
            points: 4,
            task: 'Grenzen Sie die drei Erwartungsstrukturen Sicherheit, Ungewissheit und Risiko i.e.S. anhand des bekannten Informationsstands über den Zustandsraum voneinander ab.',
            sourceRef: 'Kapitel 4 · Folien 131–136',
            solution: [
              'Sicherheit: Der Eintritt eines bestimmten Zustandes ist bekannt (vollkommene Information).',
              'Ungewissheit: Nur die möglichen Umweltzustände sind bekannt, nicht aber deren Eintrittswahrscheinlichkeiten — rationale Entscheidung wird unmöglich, daher Einsatz von Heuristiken/Entscheidungsregeln.',
              'Risiko i.e.S.: Sowohl die möglichen Zustände als auch deren (objektive oder subjektive) Eintrittswahrscheinlichkeiten sind bekannt — stochastische Modelle (Bayes-Regel, μσ-Regel) sind anwendbar.',
            ],
            gradingHints: ['Je 1 Punkt pro Begriff, 1 Zusatzpunkt für die Heuristik-/Stochastik-Folge'],
          },
          {
            id: 'bf-exam1-s3-t2',
            type: 'calculation',
            title: 'Erwartungswert und Bayes-Regel',
            points: 6,
            task: [
              'Gegeben sei die Wahrscheinlichkeitsmatrix mit den Zuständen z₁ (30 %), z₂ (50 %), z₃ (20 %):',
              'a₁: z₁ = 10, z₂ = 12, z₃ = 22; a₂: z₁ = 8, z₂ = 14, z₃ = 18.',
              'Berechnen Sie für beide Alternativen den Erwartungswert μ und geben Sie die nach der Bayes-Regel zu wählende Alternative an. Welche Kritik gilt für diese Regel?',
            ],
            sourceRef: 'Kapitel 4 · Folien 147–150',
            solution: [
              'μ(a₁) = 0,3·10 + 0,5·12 + 0,2·22 = 3 + 6 + 4,4 = 13,4.',
              'μ(a₂) = 0,3·8 + 0,5·14 + 0,2·18 = 2,4 + 7 + 3,6 = 13,0.',
              'Nach der Bayes-Regel (höchstes μ) wird a₁ gewählt (13,4 > 13,0).',
              'Kritik: Die Bayes-Regel berücksichtigt nur den Erwartungswert, nicht die Streuung (das Risiko), und passt daher nur für risikoneutrale Entscheider.',
            ],
            gradingHints: [
              '2 Punkte für μ(a₁) = 13,4',
              '2 Punkte für μ(a₂) = 13,0 und Wahl von a₁',
              '2 Punkte für die Kritik (nur risikoneutral, ignoriert Streuung)',
            ],
          },
          {
            id: 'bf-exam1-s3-t3',
            type: 'calculation',
            title: 'Sicherheitsäquivalent und Risikoprämie',
            points: 4,
            task: [
              'Eine Lotterie zahlt mit 50 % Wahrscheinlichkeit 100 € und mit 50 % 0 €. Der Entscheider ist indifferent zu einem sicheren Betrag von s = 40 €.',
              'Berechnen Sie Erwartungswert und Risikoprämie und bestimmen Sie die Risikoeinstellung.',
            ],
            sourceRef: 'Kapitel 4 · Folie 157',
            solution: [
              'Erwartungswert E(X) = 0,5·100 + 0,5·0 = 50 €.',
              'Risikoprämie π = E(X) − s = 50 − 40 = 10 €.',
              'Da π > 0, verhält sich der Entscheider risikoscheu (risikoavers).',
            ],
            gradingHints: [
              '1 Punkt Erwartungswert 50',
              '2 Punkte Risikoprämie 10',
              '1 Punkt korrekte Einstellung (risikoscheu)',
            ],
          },
          {
            id: 'bf-exam1-s3-t4',
            type: 'multiple-choice',
            title: 'Gründe für die Existenz eines Zinssatzes',
            points: 4,
            task: 'Welche der folgenden zählt Beck (2014) zu den Gründen für die Existenz eines Zinssatzes? (Mehrfachauswahl)',
            sourceRef: 'Kapitel 5 · Folien 167–173',
            solution:
              'Richtig: Unsicherheit, Kompensation für Risiko (Risikoprämie), Opportunitätskosten, Inflation, Ungeduld und "multiple Persönlichkeiten" (heutiges Ich vs. späteres Selbst). Nicht dazu gehört z. B. die "vollkommene Informationseffizienz der Märkte".',
            gradingHints: ['Je 1 Punkt pro korrekt erkannter Antwort, Abzug für falsch markierte'],
          },
          {
            id: 'bf-exam1-s3-t5',
            type: 'essay',
            title: 'Hyperbolisches Diskontieren und Präferenzumkehr',
            points: 6,
            task: [
              'a) Wie unterscheidet sich der Diskontfaktor des hyperbolischen Diskontierens formal vom exponentiellen Diskontieren des DU-Modells?',
              'b) Erläutern Sie, was eine Präferenzumkehr ist, und nennen Sie den empirischen Beleg von Thaler (1981).',
            ],
            sourceRef: 'Kapitel 5 · Folien 174–184',
            solution: [
              'a) Exponentiell (DU-Modell): Nenner (1+i)^n; hyperbolisch: Nenner (1+i·n). Nur das hyperbolische Diskontieren erzeugt eine Präferenzumkehr, weil der Diskontsatz steigt, je näher das Ereignis rückt.',
              'b) Präferenzumkehr: Die Rangfolge zweier Optionen kehrt sich allein durch zeitliche Verschiebung um (Bsp.: in der nahen Situation wird die frühere/kleinere Auszahlung bevorzugt, in der fernen die spätere/größere). Empirischer Beleg: Thaler (1981) — der geforderte implizite Jahreszins sinkt mit zunehmender Wartezeit (ca. 400 % bei 1 Monat, 233 % bei 1 Jahr, 21 % bei 10 Jahren).',
            ],
            gradingHints: [
              '3 Punkte für die korrekte Formelabgrenzung (1+i)^n vs. (1+i·n)',
              '3 Punkte für Präferenzumkehr + Thaler-Zahlen',
            ],
          },
        ],
      },
      // ---------------------------------------------------------------
      {
        id: 'bf-exam1-s4',
        title: 'Teil D · Prospect Theory',
        description: 'Kapitel 6 — Allais-Paradoxon, Wert- und Gewichtungsfunktion, Konsequenzen.',
        points: 22,
        tasks: [
          {
            id: 'bf-exam1-s4-t1',
            type: 'calculation',
            title: 'Allais-Paradoxon',
            points: 6,
            task: [
              'Problem I: Alternative A zahlt 2.500 € (33 %), 2.400 € (66 %), 0 € (1 %). Alternative B zahlt sicher 2.400 €.',
              'a) Berechnen Sie E(A) und E(B) und geben Sie die rational vorzuziehende Alternative an.',
              'b) Erklären Sie, worin die Anomalie besteht, wenn Menschen tatsächlich B (Problem I) und C (Problem II) wählen.',
            ],
            sourceRef: 'Kapitel 6 · Folien 191–198',
            solution: [
              'a) E(A) = 0,33·2.500 + 0,66·2.400 + 0,01·0 = 825 + 1.584 + 0 = 2.409 €. E(B) = 2.400 €. Rational: A (2.409 € > 2.400 €).',
              'b) Tatsächlich präferieren viele Menschen B (Problem I) und C (Problem II). Aus Präferenz B≻A folgt 0,33·u(2.500) < 0,34·u(2.400); aus Präferenz C≻D folgt 0,33·u(2.500) > 0,34·u(2.400). Die beiden Ungleichungen widersprechen sich — diese Anomalie verletzt die Erwartungsnutzentheorie und ist der Ausgangspunkt der Prospect Theory.',
            ],
            gradingHints: [
              '3 Punkte für E(A)=2.409 €, E(B)=2.400 € und rationale Wahl A',
              '3 Punkte für die widersprüchlichen Ungleichungen / Anomalie',
            ],
          },
          {
            id: 'bf-exam1-s4-t2',
            type: 'essay',
            title: 'Eigenschaften der Wertfunktion',
            points: 6,
            task: 'Nennen und erläutern Sie die drei zentralen Eigenschaften der S-förmigen Wertfunktion der Prospect Theory.',
            sourceRef: 'Kapitel 6 · Folien 210–212',
            solution: [
              '(1) Bewertung relativ zu einem (neutralen) Referenzpunkt: Bewertet werden Veränderungen (Gewinne/Verluste) gegenüber dem Bezugspunkt, nicht absolute Vermögensniveaus.',
              '(2) Abnehmende Empfindlichkeit: konkav im Gewinnbereich (risikoscheu) und konvex im Verlustbereich (risikofreudig).',
              '(3) Verlustaversion: Der Verlauf ist im Verlustbereich steiler als im Gewinnbereich; Verluste werden ca. doppelt so stark gewichtet wie gleich hohe Gewinne.',
            ],
            gradingHints: ['Je 2 Punkte pro vollständig erläuterter Eigenschaft'],
          },
          {
            id: 'bf-exam1-s4-t3',
            type: 'single-choice',
            title: 'Reflexionseffekt',
            points: 2,
            task: 'Welche Aussage beschreibt den Reflexionseffekt korrekt?',
            sourceRef: 'Kapitel 6 · Folie 209',
            solution:
              'Richtig: "Bei positiven Prospekten dominiert Risikoaversion, bei negativen Prospekten Risikofreude." Die Spiegelung von Gewinnen zu Verlusten kehrt das Risikoverhalten um (z. B. Fall 1: 80 % wählen B bei positiven, 92 % wählen C bei negativen Prospekten).',
            gradingHints: ['Voller Punkt nur bei korrekter Richtung (positiv → Aversion, negativ → Freude)'],
          },
          {
            id: 'bf-exam1-s4-t4',
            type: 'case-study',
            title: 'Fahrradversicherung und Gewichtungsfunktion',
            points: 4,
            task: [
              'Ein Fahrrad im Wert von 600 € hat eine Diebstahlwahrscheinlichkeit von 5 %. Die Versicherung kostet 40 € pro Jahr.',
              'a) Vergleichen Sie den Erwartungswert "keine Versicherung" mit den Versicherungskosten.',
              'b) Erklären Sie über die Gewichtungsfunktion, warum die Versicherung dennoch subjektiv attraktiv ist.',
            ],
            sourceRef: 'Kapitel 6 · Folie 232',
            solution: [
              'a) Erwartungswert ohne Versicherung: 0,05·(−600) + 0,95·0 = −30 €. Die Versicherung kostet −40 €. Im Erwartungswert ist die Versicherung also teurer (−40 € vs. −30 €).',
              'b) Dennoch ist sie subjektiv attraktiv: Die Gewichtungsfunktion überbewertet die kleine Diebstahlwahrscheinlichkeit, d. h. π(0,05) ist deutlich größer als 0,05 (und π(0,95) deutlich kleiner als 0,95). Subjektiv gilt daher π(0,05)·v(−600) + π(0,95)·v(0) < v(−40); die Versicherung wird vorgezogen.',
            ],
            gradingHints: [
              '2 Punkte für die Erwartungswertrechnung −30 € vs. −40 €',
              '2 Punkte für die Erklärung über die Überbewertung kleiner Wahrscheinlichkeiten',
            ],
          },
          {
            id: 'bf-exam1-s4-t5',
            type: 'multiple-choice',
            title: 'Konsequenzen der Prospect Theory',
            points: 4,
            task: 'Welche der folgenden Phänomene werden im Skript als Konsequenzen der Prospect Theory bzw. der Wertfunktion eingeordnet? (Mehrfachauswahl)',
            sourceRef: 'Kapitel 6 · Folien 213–223',
            solution:
              'Richtig: Status-quo-Bias, Besitztumseffekt (Endowment Effect), Mental Accounting / Hedonic Framing, Sunk-Cost-Effekt und Dispositionseffekt. Nicht dazu gehört z. B. die "vollkommene Informationseffizienz". Beim Dispositionseffekt realisieren Anleger Gewinne zu früh und sitzen Verluste aus.',
            gradingHints: ['Je 1 Punkt pro korrekt erkannter Konsequenz, Abzug für falsche Markierungen'],
          },
        ],
      },
      // ---------------------------------------------------------------
      {
        id: 'bf-exam1-s5',
        title: 'Teil E · Altersvorsorge, Spekulationsblasen und Kapitalmarktanomalien',
        description: 'Kapitel 7, 8 und 9 — Default-Effekte, Blasenphasen, Anomalien.',
        points: 28,
        tasks: [
          {
            id: 'bf-exam1-s5-t1',
            type: 'case-study',
            title: 'Drei Entscheidungen der Altersvorsorge',
            points: 6,
            task: [
              'Die Altersvorsorge bringt drei fehleranfällige Entscheidungen mit sich.',
              'Nennen Sie die drei Leitfragen und ordnen Sie jeder Frage je ein verhaltensbedingtes Hindernis sowie eine im Skript genannte Lösung zu.',
            ],
            sourceRef: 'Kapitel 7 · Folien 236–272',
            solution: [
              'I · Beitritt ("Soll man einem Sparplan beitreten?"): Hindernis Trägheit/Status quo (und Komplexität/Choice Overload) — Lösung automatische Anmeldung (Opt-Out) bzw. einfache Auswahl.',
              'II · Beitragshöhe ("Wie viel soll man einzahlen?"): Hindernis Menüeffekte und gegenwartsgerichtete Präferenzen — Lösung automatische Erhöhung (SMarT-Programm) bzw. das zukünftige Selbst greifbar machen.',
              'III · Anlage ("Wie soll man investieren?"): Hindernis naive Diversifizierung/Menüeffekte (1/N) und Trendfolge — Lösung automatisches Rebalancing über Lebenszyklusfonds.',
            ],
            gradingHints: ['Je 2 Punkte pro Frage mit korrekt zugeordnetem Hindernis und Lösung'],
          },
          {
            id: 'bf-exam1-s5-t2',
            type: 'essay',
            title: 'Default-Effekt empirisch belegen',
            points: 4,
            task: 'Erläutern Sie den Default-Effekt anhand des Organspende-Vergleichs (Johnson et al. 2003) und der automatischen Anmeldung zu Sparplänen (Madrian/Shea 2001).',
            sourceRef: 'Kapitel 7 · Folien 245–250',
            solution: [
              'Organspende: In Opt-In-Ländern (aktive Zustimmung nötig) liegt die Zustimmung nur bei ~4-28 %, in Opt-Out-Ländern (Widerspruch nötig) bei ~86-100 %. Der voreingestellte Default treibt die Quote, nicht die wahre Präferenz.',
              'Sparplan: Bei Madrian/Shea (2001) traten unter Opt-In nur 37 % bei, unter Opt-Out dagegen 86 %. Der Default-Effekt ist eines der robustesten Ergebnisse der angewandten Wirtschaftsliteratur.',
            ],
            gradingHints: [
              '2 Punkte für die Organspende-Zahlen (Opt-In niedrig, Opt-Out ~86-100 %)',
              '2 Punkte für Madrian/Shea (37 % → 86 %)',
            ],
          },
          {
            id: 'bf-exam1-s5-t3',
            type: 'essay',
            title: 'Fünf Phasen des Kindleberger/Minsky-Modells',
            points: 5,
            task: 'Nennen Sie die fünf Phasen des Kindleberger/Minsky-Modells in der richtigen Reihenfolge mit je einem Kerninhalt.',
            sourceRef: 'Kapitel 8 · Folien 280–283',
            solution: [
              '1. Verlagerung: ein exogener Schock verlagert Investitionen/Profitchancen auf einen Vermögenssektor; Beginn des Booms.',
              '2. Positives Feedback: Ausweitung der Investitionen durch Fremdkapital; steigende Preise führen zu weiteren Investitionen (Feedback-Loop).',
              '3. Euphorie: Marktteilnehmer überschätzen die zu erwartenden Renditen; neue Bewertungsmodelle rechtfertigen steigende Kurse.',
              '4. Kritische Phase: finanzielle Not — Insider realisieren Gewinne, Umschichtung in Liquidität.',
              '5. Abscheu: Panik ("entartete Panik"), massiver Rückzug, Zunahme regulatorischer Bemühungen.',
            ],
            gradingHints: ['Je 1 Punkt pro korrekt benannte Phase in richtiger Reihenfolge mit Kerninhalt'],
          },
          {
            id: 'bf-exam1-s5-t4',
            type: 'single-choice',
            title: 'Informationseffizienz nach Fama',
            points: 2,
            task: 'Welche Informationsmenge umfasst die strenge Form der Informationseffizienz?',
            sourceRef: 'Kapitel 9 · Folie 296',
            solution:
              'Richtig: "Öffentlich zugängliche und private (Insider-)Informationen." In der strengen Form ist selbst Insiderwissen bereits im Kurs enthalten. Die schwache Form enthält nur vergangene Kurse, die halb-strenge alle öffentlichen Informationen.',
            gradingHints: ['Voller Punkt nur bei Nennung von öffentlich + privat'],
          },
          {
            id: 'bf-exam1-s5-t5',
            type: 'comparison',
            title: 'Winner-Loser-, Value- und Momentum-Effekt',
            points: 6,
            task: [
              'Ordnen Sie den drei Anomalie-Effekten jeweils die Kernaussage und die im Skript genannte Renditedifferenz zu:',
              'a) Winner-Loser-Effekt, b) Value-Effekt, c) Momentum-Effekt.',
            ],
            sourceRef: 'Kapitel 9 · Folien 310–337',
            solution: [
              'a) Winner-Loser-Effekt (Chopra/Lakonishok/Ritter 1992): Vergangene Verlierer sind zukünftige Gewinner (Mean Reversion infolge Überreaktion); Renditedifferenz 10,84 %.',
              'b) Value-Effekt (Fama/French 1992): Aktien mit hoher B/M-Ratio (Value) sind zukünftige Gewinner, niedrige B/M-Ratio (Growth) zukünftige Verlierer; Renditedifferenz 19,99 %.',
              'c) Momentum-Effekt (Rouwenhorst 1998): kurzfristig bleiben Winner Winner; Renditedifferenz 16,37 %.',
            ],
            gradingHints: ['Je 2 Punkte pro Effekt (Kernaussage + Kennzahl)'],
          },
          {
            id: 'bf-exam1-s5-t6',
            type: 'essay',
            title: 'Value-Effekt: Risiko oder Fehlbewertung?',
            points: 5,
            task: 'Bewerten Sie die drei Erklärungen des Value-Effekts (Zufall, Risiko, Fehlbewertung) und begründen Sie, warum Fehlbewertung die wahrscheinlichste Erklärung ist.',
            sourceRef: 'Kapitel 9 · Folien 322–328',
            solution: [
              'Zufall (Data-Mining): eher nein, da auch andere/internationale Stichproben vergleichbare Ergebnisse zeigen (Fama/French 1998).',
              'Risiko: Die CAPM-Hypothese verlangt hohes Beta bei hohem B/M; empirisch korreliert ein hohes CAPM-Beta aber mit NIEDRIGEM B/M — das Gegenteil. Daher eher nein.',
              'Fehlbewertung (wahrscheinlichste Erklärung): Wachstumsraten sind mean reverting; Anleger (auch Fondsmanager) schreiben vergangene Extreme zu weit in die Zukunft fort (Repräsentativität, Overconfidence). Value-Aktien werden zu billig, Growth-Aktien zu teuer bewertet.',
            ],
            gradingHints: [
              '1 Punkt Zufall (eher nein, internationale Stichproben)',
              '2 Punkte Risiko (Beta korreliert mit niedrigem B/M, widerlegt)',
              '2 Punkte Fehlbewertung (Mean Reversion + Extrapolation)',
            ],
          },
        ],
      },
    ],
  },
];

export default exams;
