export const questions = [
  {
    id: 'example-q1',
    topicId: 'example-topic',
    type: 'single', // single | multiple
    question: 'Hier steht die Frage?',
    options: [
      'Antwort A',
      'Antwort B (richtig)',
      'Antwort C',
      'Antwort D',
    ],
    correctAnswer: 1, // 0-basierter Index
    explanation: 'Erklärung warum B richtig ist.',
  },
  {
    id: 'example-q2',
    topicId: 'example-topic',
    type: 'multiple',
    question: 'Welche Aussagen sind richtig? (Mehrere)',
    options: [
      'Aussage A (richtig)',
      'Aussage B (falsch)',
      'Aussage C (richtig)',
      'Aussage D (falsch)',
    ],
    correctAnswers: [0, 2], // Array mit richtigen Indizes
    explanation: 'Erklärung der korrekten Antworten.',
  },
];
