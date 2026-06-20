export const taskTypeLabels = {
  definition: 'Definition',
  comparison: 'Vergleich',
  calculation: 'Rechnung',
  'case-study': 'Fallstudie',
  essay: 'Freitext',
  'single-choice': 'Single Choice',
  'multiple-choice': 'Multiple Choice',
  'table-task': 'Tabellenaufgabe',
  transfer: 'Transfer',
  'explain-graphic': 'Grafik erklären',
};

export function renderPoints(points) {
  return `${points ?? 0} ${points === 1 ? 'Punkt' : 'Punkte'}`;
}

export function getTaskTypeLabel(type) {
  return taskTypeLabels[type] ?? type ?? 'Aufgabe';
}

export function getExamTasks(exam) {
  return (exam.sections ?? []).flatMap(section => section.tasks ?? []);
}

export function getExamTaskCount(exam) {
  return getExamTasks(exam).length;
}

export function getExamTotalPoints(exam) {
  return exam.totalPoints
    ?? (exam.sections ?? []).reduce((sum, section) => sum + (section.points ?? 0), 0)
    ?? 0;
}

export function renderTextBlock(value) {
  if (Array.isArray(value)) {
    return value.map((item, index) => <p key={index}>{item}</p>);
  }

  return String(value ?? '')
    .split('\n')
    .filter(Boolean)
    .map((line, index) => <p key={index}>{line}</p>);
}
