export const topic = {
  id: 'example-topic',
  title: 'Example Topic',
  source: 'Skript Kapitel 1',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'section-1',
      title: 'Abschnitt 1',
      content: `Hier kommt der Lerninhalt.

**Wichtiger Begriff:** Erklärung in einfachen Worten.

Weitere Absätze durch Leerzeilen trennen.`,
    },
    {
      id: 'section-2',
      title: 'Abschnitt 2',
      content: `Weiterer Lerninhalt.

**Formel:** X = Y / Z`,
    },
  ],
  keyTakeaways: [
    'Wichtigste Aussage 1.',
    'Wichtigste Aussage 2.',
    'Wichtigste Aussage 3.',
  ],
  examFocus: [
    'Was definitiv in der Prüfung kommt.',
    'Zweiter prüfungsrelevanter Punkt.',
  ],
  pitfalls: [
    'Häufiger Fehler oder Verwechslung.',
    'Zweiter typischer Fehler.',
  ],
};
