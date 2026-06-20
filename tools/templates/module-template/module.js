export const module = {
  id: 'example-module',
  semesterId: 'semester-4',
  title: 'Example Module',
  shortTitle: 'Example',
  description: 'Kurze Beschreibung des Moduls in 1–2 Sätzen.',
  status: 'planned', // planned | in-progress | done
  examDate: '2026-02-01',
  accent: 'var(--color-module-blue)', // blue | purple | teal | orange | pink | green
  topics: [
    {
      id: 'example-topic',
      title: 'Example Topic',
      status: 'not-started', // not-started | in-progress | done
      hasContent: true,
      source: 'Skript Kapitel 1',
      estimatedMinutes: 45,
    },
    {
      id: 'planned-topic',
      title: 'Planned Topic',
      status: 'planned',
      hasContent: false,
      source: 'Skript Kapitel 2',
      estimatedMinutes: 45,
    },
  ],
};
