export const questions = [
  // ───────────────────────────── Kapitel 1 · Einführung ─────────────────────────────
  {
    id: 'hr-q-01-01',
    topicId: 'einfuehrung',
    type: 'single',
    question:
      'Wodurch unterscheidet sich das Human Resource Management (HRM) von der Organisation im Sinne der Vorlesung?',
    options: [
      'HRM ist eine funktionale Perspektive auf den Produktionsfaktor Arbeit, Organisation ist ein strukturelles, auf Dauer angelegtes Regelsystem einer Personengruppe.',
      'HRM ist ein strukturelles Regelsystem, Organisation befasst sich mit dem Produktionsfaktor Arbeit.',
      'Beide Begriffe sind synonym und bezeichnen die Personalverwaltung.',
      'HRM betrifft nur leitende Angestellte, Organisation nur gewerbliche Arbeitnehmer.',
    ],
    correctAnswer: 0,
    explanation:
      'HRM ist die funktionale Perspektive (Bereich der BWL, der sich mit dem Produktionsfaktor Arbeit befasst und auf Wertschöpfung auf lange Sicht zielt). Organisation ist die strukturelle Perspektive: ein auf Dauer angelegtes, planvoll geschaffenes Regelsystem einer abgegrenzten Personengruppe.',
  },
  {
    id: 'hr-q-01-02',
    topicId: 'einfuehrung',
    type: 'multiple',
    question: 'Welche drei Zielkategorien verfolgt das HRM gleichzeitig?',
    options: [
      'Wirtschaftliche Ziele',
      'Soziale Ziele',
      'Steuerliche Ziele',
      'Individuelle Ziele',
    ],
    correctAnswers: [0, 1, 3],
    explanation:
      'Das HRM verfolgt wirtschaftliche, soziale und individuelle Ziele zugleich. Individuelle und soziale Ziele überschneiden sich nur teilweise, sind aber nicht identisch.',
  },
  {
    id: 'hr-q-01-03',
    topicId: 'einfuehrung',
    type: 'single',
    question:
      'Welches Menschenbild ordnet die Vorlesung der klassischen Personalverwaltung zu?',
    options: [
      'complex man',
      'homo oeconomicus / Normarbeiter',
      'Organisationsmitglied',
      'self-actualizing man',
    ],
    correctAnswer: 1,
    explanation:
      'Die Personalverwaltung unterstellt den homo oeconomicus bzw. Normarbeiter, das Personalmanagement dagegen den complex man / das Organisationsmitglied.',
  },
  {
    id: 'hr-q-01-04',
    topicId: 'einfuehrung',
    type: 'single',
    question:
      'Welche der vier Ebenen der Mitbestimmung ist die stärkste (größter Einfluss des Betriebsrats)?',
    options: [
      'Informationsrecht',
      'Mitwirkungs-/Beratungsrecht',
      'Anhörungs- und Zustimmungsrechte',
      'Mitbestimmungsrechte (gemeinsame Entscheidung)',
    ],
    correctAnswer: 3,
    explanation:
      'Das echte Mitbestimmungsrecht (gemeinsame Entscheidung) ist die stärkste Stufe; das reine Informationsrecht ist die schwächste. Reihenfolge von stark nach schwach: Mitbestimmung, Anhörung/Zustimmung, Mitwirkung/Beratung, Information.',
  },
  {
    id: 'hr-q-01-05',
    topicId: 'einfuehrung',
    type: 'multiple',
    question: 'Welche Teilgebiete gehören zum kollektiven Arbeitsrecht?',
    options: [
      'Tarifvertragsrecht',
      'Arbeitsvertragsrecht',
      'Mitbestimmungsrecht',
      'Arbeitsschutzrecht',
    ],
    correctAnswers: [0, 2],
    explanation:
      'Das kollektive Arbeitsrecht gliedert sich in Tarifvertragsrecht und Mitbestimmungsrecht. Arbeitsvertrags- und Arbeitsschutzrecht zählen zum individuellen Arbeitsrecht.',
  },
  {
    id: 'hr-q-01-06',
    topicId: 'einfuehrung',
    type: 'single',
    question:
      'Was beschreibt der Begriff "Ausbeutung der Arbeit" im Zielkonflikt wirtschaftlich ↔ humanitär?',
    options: [
      'Zu hohe humanitäre Ziele senken die Produktivität.',
      'Zu starke Gewinnorientierung geht zu Lasten humaner Arbeitsbedingungen.',
      'Mitarbeiter werden ausschließlich als Subjekte mit eigenen Zielen behandelt.',
      'Der Staat reguliert die Arbeitsbedingungen zu stark.',
    ],
    correctAnswer: 1,
    explanation:
      'Zu starke Gewinnorientierung zu Lasten humaner Arbeitsbedingungen ist die "Ausbeutung der Arbeit". Umgekehrt führen zu hohe humanitäre Ziele zur "Ausbeutung des Kapitals".',
  },
  {
    id: 'hr-q-01-07',
    topicId: 'einfuehrung',
    type: 'multiple',
    question: 'Welche fünf vernetzten Einflussfaktoren prägen das HRM?',
    options: ['Werte', 'Technologie', 'Markt', 'Organisation', 'Globalisierung'],
    correctAnswers: [0, 1, 2, 3, 4],
    explanation:
      'Werte, Technologie, Markt, Organisation und Globalisierung stehen miteinander in Beziehung und beeinflussen sich gegenseitig.',
  },

  // ───────────── Kapitel 2 · Unternehmensstrategie und Personalpolitik ─────────────
  {
    id: 'hr-q-02-01',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'single',
    question:
      'Welche Position vertritt Aristoteles in der Vorlesung zur Ethik?',
    options: [
      'Primat der Ökonomik vor der Ethik',
      'Primat der Ethik (Glücksstreben) vor Politik und Ökonomik',
      'Den kategorischen Imperativ',
      'Eine rein utilitaristische Folgenethik',
    ],
    correctAnswer: 1,
    explanation:
      'Aristoteles begründet das Primat der Ethik: Glück bzw. Glücksstreben ist sachlich vorrangig vor Politik und Ökonomik. Der kategorische Imperativ stammt von Kant.',
  },
  {
    id: 'hr-q-02-02',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'single',
    question:
      'Welcher Ebene ist die Unternehmensethik in den drei ethischen Bezugsfeldern zugeordnet?',
    options: [
      'Makrolevel',
      'Mesolevel',
      'Mikrolevel',
      'Außerhalb der Sozialethik',
    ],
    correctAnswer: 1,
    explanation:
      'Wirtschaftsethik = Makrolevel, Unternehmensethik = Mesolevel, Führungsethik = Mikrolevel — alle eingebettet in die Sozialethik.',
  },
  {
    id: 'hr-q-02-03',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'single',
    question:
      'Wie lautet der Zusammenhang von Legalität und Moralität im "Graubereich" der Unternehmensethik?',
    options: [
      'Legalität garantiert automatisch moralische Richtigkeit.',
      'Legalität ist Mindestanforderung, aber nicht automatisch moralische Richtigkeit.',
      'Moralität ist eine Mindestanforderung, Legalität geht darüber hinaus.',
      'Legalität und Moralität sind deckungsgleich.',
    ],
    correctAnswer: 1,
    explanation:
      'Legalität ist Mindestanforderung, garantiert aber keine moralische Richtigkeit. Unternehmensethik wird im Graubereich relevant, wo Handlungen legal/möglich, aber moralisch reflexionsbedürftig sind.',
  },
  {
    id: 'hr-q-02-04',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'multiple',
    question:
      'Welche vier Dimensionen umfasst die Personalbereitstellung in der Personalplanung?',
    options: [
      'Anzahl (quantitativ)',
      'Art (qualitativ)',
      'Zeitpunkt/Dauer (zeitlich)',
      'Einsatzort (räumlich)',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Die Personalbereitstellung umfasst die vier Dimensionen quantitativ, qualitativ, zeitlich und räumlich.',
  },
  {
    id: 'hr-q-02-05',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'single',
    question:
      'Brutto-Personalbedarf 650, verfügbare Mitarbeiter 620, geplante Neueinstellungen 40, erwartete Abgänge 30. Wie hoch ist der Netto-Personalbedarf?',
    options: ['20', '40', '60', '80'],
    correctAnswer: 0,
    explanation:
      'Netto = Brutto − (Verfügbar + Neueinstellungen − Abgänge) = 650 − (620 + 40 − 30) = 650 − 630 = 20.',
  },
  {
    id: 'hr-q-02-06',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'single',
    question:
      'Welche Maßnahme folgt typischerweise aus einer Personal-Überdeckung?',
    options: [
      'Beschaffungs- und Gewinnungsplanung',
      'Freistellungsplanung',
      'Personalentwicklung zum Ausgleich fehlender Mitarbeiter',
      'Externe Personalrekrutierung',
    ],
    correctAnswer: 1,
    explanation:
      'Bei Überdeckung (zu viele Mitarbeiter) folgt Freistellungsplanung. Bei Unterdeckung (es fehlen Mitarbeiter) folgt Beschaffungs-/Gewinnungsplanung.',
  },
  {
    id: 'hr-q-02-07',
    topicId: 'unternehmensstrategie-und-personalpolitik',
    type: 'multiple',
    question: 'Welche Aussagen zu den acht Parametern der Arbeitgeberqualität treffen zu?',
    options: [
      'Sie bilden eine Achse der Employer Matrix.',
      'Zu ihnen zählen u. a. Aufgabenstellung, Führung, Teamklima und Vergütung.',
      'Sie ersetzen die gesetzlichen Sozialleistungen.',
      'Sie messen die Arbeitszufriedenheit.',
    ],
    correctAnswers: [0, 1, 3],
    explanation:
      'Die acht Parameter messen die Arbeitszufriedenheit (u. a. Aufgabenstellung, Lernen, Arbeitsbedingungen, Führung, Teamklima, Arbeitszeit, grundsätzliche Bewertung, Vergütung) und bilden eine Achse der Employer Matrix. Mit gesetzlichen Sozialleistungen haben sie nichts zu tun.',
  },

  // ───────────── Kapitel 3 · Führung, Generationen und Unternehmensethik ─────────────
  {
    id: 'hr-q-03-01',
    topicId: 'fuehrung-und-unternehmensethik',
    type: 'single',
    question:
      'Welcher Leitsatz und Zeithorizont gehört zur strategischen Führungsebene?',
    options: [
      '"Die Dinge richtig tun" – bis 1 Jahr',
      '"Die richtigen Dinge tun" – 2 bis 5 Jahre',
      '"Der Grund, warum" – über 5 Jahre',
      '"Die Dinge richtig tun" – über 5 Jahre',
    ],
    correctAnswer: 1,
    explanation:
      'Strategische Führung = "Die richtigen Dinge tun" (Effektivität), Zeithorizont 2–5 Jahre. Normativ: > 5 Jahre ("Der Grund, warum"), operativ: bis 1 Jahr ("Die Dinge richtig tun", Effizienz).',
  },
  {
    id: 'hr-q-03-02',
    topicId: 'fuehrung-und-unternehmensethik',
    type: 'single',
    question:
      'Welche Sonderstellung haben leitende Angestellte (§ 5 Abs. 3 BetrVG) im Betriebsverfassungsrecht?',
    options: [
      'Sie sind keine Arbeitnehmer im arbeitsrechtlichen Sinn.',
      'Sie sind arbeitsrechtlich Arbeitnehmer, gelten aber betriebsverfassungsrechtlich nicht als solche – weder wahlberechtigt noch wählbar zum Betriebsrat.',
      'Sie sind automatisch Mitglied des Betriebsrats.',
      'Sie haben dasselbe Wahlrecht wie alle anderen Arbeitnehmer.',
    ],
    correctAnswer: 1,
    explanation:
      'Leitende Angestellte sind arbeitsrechtlich Arbeitnehmer, gelten aber im Betriebsverfassungsrecht nicht als solche: weder wahlberechtigt noch wählbar zum Betriebsrat.',
  },
  {
    id: 'hr-q-03-03',
    topicId: 'fuehrung-und-unternehmensethik',
    type: 'multiple',
    question: 'Welche der folgenden Pflichten sind Arbeitgeberpflichten aus dem Arbeitsvertrag?',
    options: [
      'Entgeltzahlung',
      'Fürsorgepflicht',
      'Treuepflicht',
      'Zeugniserteilung',
    ],
    correctAnswers: [0, 1, 3],
    explanation:
      'Arbeitgeberpflichten sind u. a. Entgeltzahlung, Fürsorge, Zeugniserteilung und Urlaubsgewährung. Die Treuepflicht ist eine Arbeitnehmerpflicht (neben Arbeit, Gehorsam, Haftung).',
  },
  {
    id: 'hr-q-03-04',
    topicId: 'fuehrung-und-unternehmensethik',
    type: 'single',
    question:
      'Warum ist die Mitarbeiterqualifikation laut Achsendiagramm ein nachhaltiger Wettbewerbsvorteil?',
    options: [
      'Weil sie sofort und vollständig kopierbar ist.',
      'Weil sie schwerer und langfristiger imitierbar ist und hohe Bedeutung für die Strategieumsetzung hat.',
      'Weil sie keine strategische Bedeutung hat.',
      'Weil sie ausschließlich von der Produktionsverfahren abhängt.',
    ],
    correctAnswer: 1,
    explanation:
      'Mitarbeiterqualifikation ist schwerer und langfristiger imitierbar als Produkteigenschaften, Produktionsverfahren oder Marketingkonzeption und hat hohe Bedeutung für die Strategieumsetzung – daher nachhaltiger Wettbewerbsvorteil.',
  },
  {
    id: 'hr-q-03-05',
    topicId: 'fuehrung-und-unternehmensethik',
    type: 'single',
    question:
      'Wie ist der psychologische Vertrag (Schein 1970) korrekt charakterisiert?',
    options: [
      'Ein formaler, schriftlich fixierter Arbeitsvertrag.',
      'Ein ungeschriebenes Geben und Nehmen, das auf gegenseitigen Erwartungen über den Erwerbslebenszyklus beruht.',
      'Eine gesetzliche Mindestregelung des Arbeitsrechts.',
      'Eine Tarifvereinbarung zwischen Gewerkschaft und Arbeitgeber.',
    ],
    correctAnswer: 1,
    explanation:
      'Der psychologische Vertrag ist ein ungeschriebenes Geben und Nehmen auf Basis gegenseitiger Erwartungen über den Erwerbslebenszyklus – kein formaler Vertrag.',
  },

  // ─────────────────── Kapitel 4 · Operative Personalplanung ───────────────────
  {
    id: 'hr-q-04-01',
    topicId: 'operative-personalplanung',
    type: 'multiple',
    question: 'Welche vier Kompetenzarten umfasst ein Anforderungs-/Kompetenzprofil?',
    options: [
      'Fachkompetenz',
      'Persönlichkeitskompetenz',
      'Methodenkompetenz',
      'Sozialkompetenz',
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation:
      'Ein Anforderungsprofil umfasst Fach-, Persönlichkeits-, Methoden- und Sozialkompetenz. Es darf nicht auf fachliche Qualifikationen verengt werden.',
  },
  {
    id: 'hr-q-04-02',
    topicId: 'operative-personalplanung',
    type: 'single',
    question: 'Wie ist die Funktionsmatrix aufgebaut?',
    options: [
      'Nur vertikal nach Gehaltsstufen.',
      'Vertikal nach Level A–F und horizontal nach Funktionsfamilien.',
      'Nur horizontal nach Abteilungen.',
      'Nach Lebensalter der Mitarbeiter.',
    ],
    correctAnswer: 1,
    explanation:
      'Die Funktionsmatrix fasst alle Anforderungsprofile zusammen und zeigt vertikale Entwicklungswege (Level A–F) sowie horizontale (Funktionsfamilien).',
  },
  {
    id: 'hr-q-04-03',
    topicId: 'operative-personalplanung',
    type: 'single',
    question:
      'Welche Aussage zur Stellenbeschreibung ist korrekt?',
    options: [
      'Sie wird auf den aktuellen Stelleninhaber zugeschnitten.',
      'Sie wird funktionsbezogen und mitarbeiterunabhängig erstellt und sollte kein fester Bestandteil des Arbeitsvertrags sein.',
      'Sie ist zwingend Bestandteil des Arbeitsvertrags.',
      'Sie ersetzt das Anforderungsprofil vollständig.',
    ],
    correctAnswer: 1,
    explanation:
      'Die Stellenbeschreibung ist Führungs- und Organisationsinstrument; sie wird funktionsbezogen und mitarbeiterunabhängig erstellt und sollte nicht fest in den Arbeitsvertrag integriert werden.',
  },
  {
    id: 'hr-q-04-04',
    topicId: 'operative-personalplanung',
    type: 'single',
    question:
      'Was ist der zentrale Verzweigungspunkt der Personalbesetzung?',
    options: [
      'Die Wahl zwischen Vollzeit und Teilzeit',
      'Die Entscheidung über den Beschaffungsweg: interne oder externe Beschaffung',
      'Die Festlegung des Gehalts',
      'Die Wahl des Karrieremodells',
    ],
    correctAnswer: 1,
    explanation:
      'Der zentrale Verzweigungspunkt ist die Entscheidung über den Beschaffungsweg: interne vs. externe Beschaffung.',
  },
  {
    id: 'hr-q-04-05',
    topicId: 'operative-personalplanung',
    type: 'single',
    question:
      'Worin unterscheiden sich offenes und latentes Beschaffungspotential?',
    options: [
      'Offen = abwerbbar, latent = aktuell suchend',
      'Offen = verfügbar/suchend, latent = abwerbbar oder durch höhere Erwerbstätigkeit gewinnbar',
      'Beide bezeichnen denselben Sachverhalt',
      'Offen = intern, latent = extern',
    ],
    correctAnswer: 1,
    explanation:
      'Offenes Beschaffungspotential = verfügbar/suchend; latentes Beschaffungspotential = abwerbbar oder durch höhere Erwerbstätigkeit gewinnbar.',
  },

  // ─────────────────────── Kapitel 5 · Personalbeschaffung ───────────────────────
  {
    id: 'hr-q-05-01',
    topicId: 'personalbeschaffung',
    type: 'multiple',
    question: 'Welche der folgenden zählen zu den internen Beschaffungswegen?',
    options: [
      'Versetzung',
      'Innerbetriebliche Ausschreibung',
      'Personalberatung',
      'Mehrarbeit',
    ],
    correctAnswers: [0, 1, 3],
    explanation:
      'Interne Wege sind Versetzung, Personalentwicklung, innerbetriebliche Ausschreibung und Mehrarbeit. Personalberatung ist ein externer Beschaffungsweg.',
  },
  {
    id: 'hr-q-05-02',
    topicId: 'personalbeschaffung',
    type: 'single',
    question:
      'Was bedeutet es, dass Personalbeschaffung ein "reziproker Prozess" ist?',
    options: [
      'Nur das Unternehmen sucht und wählt aus.',
      'Organisation und Individuum bieten und fragen jeweils etwas nach; ein Vertrag entsteht nur bei weitgehend komplementären Interessen.',
      'Die Beschaffung läuft immer rein intern ab.',
      'Bewerber haben keine Erwartungen an das Unternehmen.',
    ],
    correctAnswer: 1,
    explanation:
      'Personalbeschaffung ist ein reziproker Aushandlungsprozess: Beide Seiten bieten und fragen nach; eine Vertragsbeziehung entsteht nur bei weitgehend komplementären Interessen.',
  },
  {
    id: 'hr-q-05-03',
    topicId: 'personalbeschaffung',
    type: 'single',
    question: 'Was bezeichnet "Sourcing" in der Personalbeschaffung?',
    options: [
      'Die innerbetriebliche Stellenausschreibung',
      'Die aktive Identifikation und Ansprache potenzieller Kandidaten',
      'Die Auslagerung der Lohnbuchhaltung',
      'Die Berechnung des Netto-Personalbedarfs',
    ],
    correctAnswer: 1,
    explanation:
      'Sourcing bezeichnet die aktive Identifikation und Ansprache potenzieller Kandidaten.',
  },
  {
    id: 'hr-q-05-04',
    topicId: 'personalbeschaffung',
    type: 'single',
    question:
      'Warum ist Guerilla-Recruiting in konservativen Branchen kritisch zu sehen?',
    options: [
      'Es ist gesetzlich verboten.',
      'Es kann Seriositäts- und Reputationsrisiken bergen und zur Zielgruppe unpassend sein.',
      'Es ist immer zu teuer.',
      'Es funktioniert nur intern.',
    ],
    correctAnswer: 1,
    explanation:
      'In konservativen Branchen (z. B. Bank) drohen bei provokativem Guerilla-Recruiting Seriositäts- und Reputationsrisiken sowie Zielgruppen-Unpassung.',
  },
  {
    id: 'hr-q-05-05',
    topicId: 'personalbeschaffung',
    type: 'single',
    question:
      'Nach welchen drei Kategorien lassen sich Vor- und Nachteile interner vs. externer Beschaffung gliedern?',
    options: [
      'Kosten, Zeit, Recht',
      'Allgemeines, Qualifikation, Motivation',
      'Quantität, Qualität, Region',
      'Intern, extern, hybrid',
    ],
    correctAnswer: 1,
    explanation:
      'Vor- und Nachteile lassen sich nach Allgemeinem, Qualifikation und Motivation gliedern; beide Seiten haben gemischte Effekte.',
  },

  // ──────────── Kapitel 6 · Personalauswahl und Arbeitszeugnisse ────────────
  {
    id: 'hr-q-06-01',
    topicId: 'personalauswahl-und-arbeitszeugnisse',
    type: 'single',
    question:
      'Wie ist das Assessment Center in der Personalauswahl korrekt einzuordnen?',
    options: [
      'Als einzelnes, eigenständiges Auswahlverfahren',
      'Als Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren',
      'Als rein ärztliche Eignungsuntersuchung',
      'Als grafologisches Gutachten',
    ],
    correctAnswer: 1,
    explanation:
      'Das Assessment Center ist kein einzelnes Instrument, sondern die Kombination aus Vorstellungsgespräch, Testverfahren und situativen Verfahren.',
  },
  {
    id: 'hr-q-06-02',
    topicId: 'personalauswahl-und-arbeitszeugnisse',
    type: 'single',
    question:
      'Welcher Schulnote entspricht die Zeugnisformulierung "stets zu unserer vollsten Zufriedenheit"?',
    options: ['befriedigend (3)', 'gut (2)', 'sehr gut (1)', 'ausreichend (4)'],
    correctAnswer: 2,
    explanation:
      '"stets zu unserer vollsten Zufriedenheit" entspricht sehr gut (1). "Zu unserer vollen Zufriedenheit" (ohne "stets") signalisiert dagegen nur befriedigend.',
  },
  {
    id: 'hr-q-06-03',
    topicId: 'personalauswahl-und-arbeitszeugnisse',
    type: 'single',
    question:
      'Was bedeutet die Zeugnisformulierung "Er hatte Gelegenheit, sich Wissen anzueignen"?',
    options: [
      'Der Mitarbeiter hat sich überdurchschnittliches Wissen angeeignet.',
      'Die Gelegenheit wurde nicht genutzt (negative Codierung).',
      'Der Mitarbeiter war besonders lernwillig.',
      'Eine rein neutrale Tätigkeitsbeschreibung.',
    ],
    correctAnswer: 1,
    explanation:
      'Positiv klingende Formulierungen können negativ codiert sein: "Hatte Gelegenheit, sich Wissen anzueignen" bedeutet, dass die Gelegenheit nicht genutzt wurde.',
  },
  {
    id: 'hr-q-06-04',
    topicId: 'personalauswahl-und-arbeitszeugnisse',
    type: 'multiple',
    question: 'Welche Bestandteile gehören zum festen Aufbau eines Arbeitszeugnisses?',
    options: [
      'Überschrift und Einleitung',
      'Tätigkeitsbeschreibung sowie Leistungs- und Erfolgsbeurteilung',
      'Beendigungsgrund und Schlusssatz',
      'Gehaltsabrechnung des letzten Monats',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Das Arbeitszeugnis hat eine feste Struktur: Überschrift, Einleitung, Tätigkeitsbeschreibung, Leistungs- und Erfolgsbeurteilung, Sozialverhalten, Beendigungsgrund, Schlusssatz sowie Datum und Unterschrift. Eine Gehaltsabrechnung gehört nicht dazu.',
  },

  // ─────────────── Kapitel 7 · Personalauswahl – Verfahren ───────────────
  {
    id: 'hr-q-07-01',
    topicId: 'personalauswahl-verfahren',
    type: 'multiple',
    question: 'Welche drei Verfahren bilden gemeinsam das Assessment Center?',
    options: [
      'Vorstellungsgespräch',
      'Testverfahren',
      'Situative Verfahren',
      'Grafologische Gutachten',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Vorstellungsgespräch, Testverfahren und situative Verfahren bilden gemeinsam das Assessment Center. Grafologische Gutachten stehen eigenständig daneben.',
  },
  {
    id: 'hr-q-07-02',
    topicId: 'personalauswahl-verfahren',
    type: 'single',
    question:
      'Welche drei Dimensionen betrachtet eine ganzheitliche Personalauswahl?',
    options: [
      'Alter, Geschlecht, Herkunft',
      'Kompetenzen (Können), Verhalten (Wie), Motive (Wollen)',
      'Kosten, Zeit, Qualität',
      'Fach-, Methoden-, Sozialkompetenz',
    ],
    correctAnswer: 1,
    explanation:
      'Die drei Analysedimensionen sind Kompetenzen (Können), Verhalten (Wie) und Motive (Wollen).',
  },
  {
    id: 'hr-q-07-03',
    topicId: 'personalauswahl-verfahren',
    type: 'single',
    question:
      'Welche Farbe ordnet das Insights-MDI-Modell dem dominanten Persönlichkeitstyp zu?',
    options: ['Gelb', 'Grün', 'Rot', 'Blau'],
    correctAnswer: 2,
    explanation:
      'Insights-MDI: Rot = dominant, Gelb = initiativ, Grün = stetig, Blau = analytisch.',
  },
  {
    id: 'hr-q-07-04',
    topicId: 'personalauswahl-verfahren',
    type: 'single',
    question:
      'Wie verhält sich dieselbe Eigenschaft im Insights-Modell zwischen Selbst- und Fremdbild?',
    options: [
      'Sie erscheint in beiden Bildern identisch.',
      'Sie erscheint im Selbstbild positiv und im Fremdbild negativ – jede Stärke kann von außen als Schwäche wirken.',
      'Sie ist im Selbstbild negativ und im Fremdbild positiv.',
      'Sie ist nur im Fremdbild relevant.',
    ],
    correctAnswer: 1,
    explanation:
      'Dieselbe Eigenschaft erscheint im Selbstbild positiv (positives Wording) und im Fremdbild negativ – jede Stärke kann von außen als Schwäche wahrgenommen werden.',
  },
  {
    id: 'hr-q-07-05',
    topicId: 'personalauswahl-verfahren',
    type: 'single',
    question:
      'Aus wie vielen Bausteinen besteht die ProfileXT-Eignungsanalyse?',
    options: [
      'Drei (Anforderungsprofil, Können, Wollen)',
      'Vier (Denkmuster, Verhalten, Interessen, Job-Match)',
      'Fünf (Anforderungsprofil, Denkmuster, Verhaltensmerkmale, Berufsinteressen, Job-Match)',
      'Sechs (inkl. ärztlicher Untersuchung)',
    ],
    correctAnswer: 2,
    explanation:
      'ProfileXT analysiert die Eignung über fünf Bausteine: Anforderungsprofil, Denkmuster, Verhaltensmerkmale, Berufsinteressen und Job-Match.',
  },

  // ──── Kapitel 8 · Personaladministration, Sozialversicherung und DSGVO ────
  {
    id: 'hr-q-08-01',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'multiple',
    question: 'Welche Zweige gehören zum deutschen Sozialversicherungssystem?',
    options: [
      'Arbeitslosenversicherung',
      'Krankenversicherung',
      'Unfallversicherung',
      'Hausratversicherung',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Die fünf Zweige sind Arbeitslosen-, Kranken-, Unfall-, Pflege- und Rentenversicherung. Die Hausratversicherung ist eine private Sachversicherung und gehört nicht dazu.',
  },
  {
    id: 'hr-q-08-02',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'single',
    question:
      'Welcher Merkwert gilt in der Vorlesung für die Personalzusatzkosten?',
    options: [
      'ca. 10 % des Bruttolohns',
      'ca. 25 % des Bruttolohns',
      'ca. 40 % des Bruttolohns',
      'ca. 60 % des Bruttolohns',
    ],
    correctAnswer: 2,
    explanation:
      'Die Personalzusatzkosten (gesetzlich, tariflich, freiwillig) betragen ca. 40 % des Bruttolohns.',
  },
  {
    id: 'hr-q-08-03',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'single',
    question: 'Seit wann gilt die DSGVO als unmittelbar anwendbares EU-Recht?',
    options: ['25.05.2016', '25.05.2018', '01.01.2020', '25.05.2020'],
    correctAnswer: 1,
    explanation:
      'Die DSGVO gilt seit dem 25.05.2018 als unmittelbar anwendbares EU-Recht; das BDSG-neu füllt nur noch Lücken über Öffnungsklauseln.',
  },
  {
    id: 'hr-q-08-04',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'single',
    question:
      'Welcher Bußgeldrahmen gilt für die schwerwiegenderen DSGVO-Verstöße nach Art. 83 Abs. 5?',
    options: [
      'bis 10 Mio. € / 2 % des Jahresumsatzes',
      'bis 20 Mio. € / 4 % des Jahresumsatzes',
      'bis 5 Mio. € / 1 % des Jahresumsatzes',
      'bis 50 Mio. € / 10 % des Jahresumsatzes',
    ],
    correctAnswer: 1,
    explanation:
      'Größere Verstöße (Art. 83 Abs. 5): bis 20 Mio. € / 4 %. Kleinere Verstöße (Art. 83 Abs. 4): bis 10 Mio. € / 2 %. Die beiden Stufen dürfen nicht vertauscht werden.',
  },
  {
    id: 'hr-q-08-05',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'single',
    question:
      'Ab welcher Anzahl ständig mit automatisierter Datenverarbeitung Beschäftigter ist ein Datenschutzbeauftragter zu benennen?',
    options: ['ab 5', 'ab 10', 'ab 20', 'ab 50'],
    correctAnswer: 2,
    explanation:
      'Ein Datenschutzbeauftragter ist u. a. ab 20 ständig mit automatisierter Datenverarbeitung Beschäftigten zu benennen (Art. 37 Abs. 1 DSGVO i. V. m. § 38 BDSG-neu).',
  },
  {
    id: 'hr-q-08-06',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'single',
    question: 'Welche Rolle hat der Datenschutzbeauftragte?',
    options: [
      'Er trifft alle datenschutzrelevanten Entscheidungen allein.',
      'Er berät und schult, trifft aber keine Entscheidungen und genießt besonderen Abberufungs- und Kündigungsschutz.',
      'Er ersetzt die Aufsichtsbehörde.',
      'Er ist ausschließlich für die Lohnabrechnung zuständig.',
    ],
    correctAnswer: 1,
    explanation:
      'Der Datenschutzbeauftragte berät und schult, trifft aber selbst keine Entscheidungen; er genießt besonderen Abberufungs- und Kündigungsschutz.',
  },
  {
    id: 'hr-q-08-07',
    topicId: 'personaladministration-sozialversicherung-dsgvo',
    type: 'single',
    question:
      'Wie unterscheidet die Vorlesung strategisches und operatives Personalcontrolling?',
    options: [
      'Strategisch = WIE / "die Dinge richtig tun"; operativ = WOHIN / "die richtigen Dinge tun"',
      'Strategisch = WOHIN / "die richtigen Dinge tun" (Feedforward); operativ = WIE / "die Dinge richtig tun" (Feedback)',
      'Beide sind rein vergangenheitsbezogen',
      'Strategisch ist quantitativ, operativ ist qualitativ',
    ],
    correctAnswer: 1,
    explanation:
      'Strategisches PC = WOHIN / "die richtigen Dinge tun" (langfristig, Feedforward); operatives PC = WIE / "die Dinge richtig tun" (kurzfristig, Feedback).',
  },

  // ──── Kapitel 9 · Personalcontrolling, Onboarding und Laufbahnplanung ────
  {
    id: 'hr-q-09-01',
    topicId: 'personalcontrolling-onboarding-laufbahnplanung',
    type: 'multiple',
    question:
      'Über welche fünf Bereiche gibt die betriebliche Personalstatistik Auskunft?',
    options: [
      'Personalstruktur',
      'Personalbewegungen',
      'Arbeits- und Ausfallzeiten',
      'Aktienkurs des Unternehmens',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Die fünf Bereiche sind Personalstruktur, Personalbewegungen, Arbeits- und Ausfallzeiten, Personalaufwand und Sozialleistungen. Der Aktienkurs gehört nicht dazu.',
  },
  {
    id: 'hr-q-09-02',
    topicId: 'personalcontrolling-onboarding-laufbahnplanung',
    type: 'single',
    question:
      'Wodurch werden Kennzahlen der Personalstatistik erst aussagefähig?',
    options: [
      'Durch den isolierten Absolutwert',
      'Durch den Vergleich mit Bezugswerten (Vorjahr/Vormonat, Plan-/Soll-Werte, Branchendurchschnitt)',
      'Durch die Anzahl der Nachkommastellen',
      'Durch die Veröffentlichung im Geschäftsbericht',
    ],
    correctAnswer: 1,
    explanation:
      'Kennzahlen werden erst durch den Vergleich mit Bezugswerten (Vorjahr/Vormonat, Plan-/Soll-Werte, Branchendurchschnitt) aussagefähig.',
  },
  {
    id: 'hr-q-09-03',
    topicId: 'personalcontrolling-onboarding-laufbahnplanung',
    type: 'single',
    question:
      'Wie ist die Soll-Arbeitszeit aus der vertraglich vereinbarten Arbeitszeit abzuleiten?',
    options: [
      'Vertraglich vereinbarte Zeit + Ausfallzeiten',
      'Vertraglich vereinbarte Zeit − Feiertage − allgemeine bezahlte/unbezahlte Freistellung',
      'Vertraglich vereinbarte Zeit + Mehrarbeit',
      'Ist-Arbeitszeit − Mehrarbeit',
    ],
    correctAnswer: 1,
    explanation:
      'Soll-Arbeitszeit = vertraglich vereinbarte Zeit − Feiertage − allgemeine bezahlte/unbezahlte Freistellung. Die Ist-Arbeitszeit zieht von der Soll-Zeit zusätzlich Ausfallzeiten ab und addiert Mehrarbeit.',
  },
  {
    id: 'hr-q-09-04',
    topicId: 'personalcontrolling-onboarding-laufbahnplanung',
    type: 'single',
    question:
      'Wie verteilt das 70/20/10-Lernmodell die Quellen des Kompetenzaufbaus?',
    options: [
      '70 % formale Bildung, 20 % soziales Lernen, 10 % Erfahrung',
      '70 % Erfahrung, 20 % soziales Lernen, 10 % formale Bildung',
      '70 % soziales Lernen, 20 % Erfahrung, 10 % formale Bildung',
      'Jeweils ein Drittel pro Quelle',
    ],
    correctAnswer: 1,
    explanation:
      'Nach dem 70/20/10-Modell entsteht Kompetenz zu 70 % durch Erfahrung, zu 20 % durch soziales Lernen und nur zu 10 % durch formale Bildung.',
  },
  {
    id: 'hr-q-09-05',
    topicId: 'personalcontrolling-onboarding-laufbahnplanung',
    type: 'multiple',
    question: 'Welche drei gleichwertigen Karrierepfade nennen moderne Laufbahnmodelle?',
    options: [
      'Fachliche Laufbahn',
      'Führungslaufbahn',
      'Projektbezogene/laterale Laufbahn',
      'Senioritätslaufbahn nach Lebensalter',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Moderne Modelle bieten drei gleichwertige Pfade: fachlich, führend und projektbezogen/lateral. Karriere ist also nicht nur über die Führungslaufbahn möglich.',
  },
  {
    id: 'hr-q-09-06',
    topicId: 'personalcontrolling-onboarding-laufbahnplanung',
    type: 'single',
    question:
      'Was zeigt die Bedeutung strukturierter Laufbahnplanung laut Vorlesung?',
    options: [
      'Fehlende Perspektiven sind nur ein nachrangiger Kündigungsgrund.',
      'Fehlende Perspektiven sind Hauptkündigungsgrund (70 %); strukturierte Modelle verdoppeln die Bindung.',
      'Laufbahnplanung hat keinen Einfluss auf die Produktivität.',
      'Strukturierte Modelle senken die Bindung.',
    ],
    correctAnswer: 1,
    explanation:
      'Fehlende Perspektiven sind Hauptkündigungsgrund (70 %), strukturierte Modelle verdoppeln die Bindung und gezielte Entwicklung steigert die Produktivität (40 %).',
  },

  // ──── Kapitel 10 · Arbeitsorganisation und Personalbeurteilung ────
  {
    id: 'hr-q-10-01',
    topicId: 'arbeitsorganisation-und-personalbeurteilung',
    type: 'single',
    question:
      'Worin unterscheiden sich Job Enlargement und Job Enrichment?',
    options: [
      'Enlargement erweitert um Entscheidungsanteile, Enrichment um gleichartige Tätigkeiten.',
      'Enlargement erweitert um gleichartige Tätigkeiten (Verminderung der Arbeitsteilung), Enrichment erweitert um Planungs-, Entscheidungs- und Kontrollanteile.',
      'Beide bezeichnen denselben Vorgang.',
      'Enlargement ist der planmäßige Arbeitsplatzwechsel.',
    ],
    correctAnswer: 1,
    explanation:
      'Job Enlargement erweitert die Aufgabe um gleichartige Tätigkeiten (Aufgabenbreite, Verminderung der Arbeitsteilung). Job Enrichment erweitert um Planungs-, Entscheidungs- und Kontrollanteile (Aufgabentiefe).',
  },
  {
    id: 'hr-q-10-02',
    topicId: 'arbeitsorganisation-und-personalbeurteilung',
    type: 'multiple',
    question: 'Welche der folgenden zählen zu den fünf klassischen Formen der Arbeitsorganisation?',
    options: [
      'Job Rotation',
      'Teilautonome Arbeitsgruppen',
      'Qualitätszirkel',
      'Outsourcing der Lohnbuchhaltung',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Die fünf klassischen Formen sind Job Rotation, Job Enlargement, Job Enrichment, teilautonome Arbeitsgruppen und Qualitätszirkel. Outsourcing der Lohnbuchhaltung gehört nicht dazu.',
  },
  {
    id: 'hr-q-10-03',
    topicId: 'arbeitsorganisation-und-personalbeurteilung',
    type: 'single',
    question:
      'Wie lautet die Kernregel des Arbeitszeitrechtsgesetzes (ArbZRG) zur werktäglichen Arbeitszeit?',
    options: [
      '10 Stunden, niemals verlängerbar',
      '8 Stunden, verlängerbar auf 10 Stunden, wenn im Durchschnitt von 6 Kalendermonaten bzw. 24 Wochen 8 Stunden täglich nicht überschritten werden',
      '6 Stunden, verlängerbar auf 12 Stunden',
      '8 Stunden ohne jede Ausnahme',
    ],
    correctAnswer: 1,
    explanation:
      'Das ArbZRG legt 8 Stunden werktäglich fest, verlängerbar auf 10 Stunden, wenn im Durchschnitt von 6 Kalendermonaten oder 24 Wochen 8 Stunden täglich nicht überschritten werden.',
  },
  {
    id: 'hr-q-10-04',
    topicId: 'arbeitsorganisation-und-personalbeurteilung',
    type: 'single',
    question: 'Welche Aussage zum Überstundenzuschlag ist korrekt?',
    options: [
      'Ein Zuschlag (z. B. 25 %) ist gesetzlich zwingend vorgeschrieben.',
      'Ein Zuschlag ist nicht gesetzlich, sondern nur tariflich vorgesehen und entsteht erst bei Überschreiten der tariflichen Wochenarbeitszeit.',
      'Überstunden dürfen nie vergütet werden.',
      'Der Zuschlag beträgt gesetzlich immer 50 %.',
    ],
    correctAnswer: 1,
    explanation:
      'Ein Überstundenzuschlag ist nicht gesetzlich vorgeschrieben, sondern nur tariflich vorgesehen und entsteht erst beim Überschreiten der tariflichen Wochenarbeitszeit.',
  },
  {
    id: 'hr-q-10-05',
    topicId: 'arbeitsorganisation-und-personalbeurteilung',
    type: 'single',
    question:
      'Welchem Zweck dient das 360°-Feedback primär – und welche Nutzung gefährdet es?',
    options: [
      'Es ist ein Vergütungsinstrument; eine Entwicklungsnutzung gefährdet es.',
      'Es ist ein Entwicklungsinstrument; eine Kopplung an Gehalt/Beförderung zerstört das nötige Vertrauen.',
      'Es ist ein reines Kündigungsinstrument.',
      'Es dient ausschließlich der Selbsteinschätzung.',
    ],
    correctAnswer: 1,
    explanation:
      'Das 360°-Feedback ist ein Entwicklungsinstrument. Eine Kopplung an Gehalt oder Beförderung zerstört das für ehrliches Feedback nötige Vertrauen.',
  },
  {
    id: 'hr-q-10-06',
    topicId: 'arbeitsorganisation-und-personalbeurteilung',
    type: 'multiple',
    question: 'Welche Perspektiven fließen typischerweise in ein 360°-Feedback ein?',
    options: [
      'Selbstbild des Beurteilten',
      'Vorgesetzte und Mitarbeitende',
      'Kolleg:innen sowie interne und externe Kunden',
      'Anonyme Personen ohne Bezug zum Beurteilten',
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      'Das 360°-Feedback kombiniert das Selbstbild mit dem Fremdbild von Vorgesetzten, Mitarbeitenden, Kolleg:innen sowie internen und externen Kunden, um blinde Flecken sichtbar zu machen.',
  },
];

export default questions;
