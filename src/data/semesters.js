export const semesters = [
  {
    id: 'semester-4',
    title: 'Semester 4',
    shortTitle: 'S4',
    status: 'current',
    label: 'Aktuell',
    description: 'Viertes Semester',
    moduleIds: [
      'asset-management',
      'behavioral-finance',
      'human-resources',
      'business-english',
    ],
  },
  {
    id: 'semester-5',
    title: 'Semester 5',
    shortTitle: 'S5',
    status: 'planned',
    label: 'Geplant',
    description: 'Fuenftes Semester',
    moduleIds: [],
  },
];

export function getSemesterById(id) {
  return semesters.find(s => s.id === id) ?? null;
}
