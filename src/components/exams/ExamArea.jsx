import { useState } from 'react';
import { ExamCard } from './ExamCard.jsx';
import { ExamViewer } from './ExamViewer.jsx';
import './Exam.css';

export function ExamArea({ exams }) {
  const [activeExam, setActiveExam] = useState(null);

  if (activeExam) {
    return (
      <ExamViewer
        exam={activeExam}
        onBack={() => setActiveExam(null)}
      />
    );
  }

  return (
    <section className="exam-area">
      <div className="exam-area__header">
        <div>
          <h2 className="exam-area__title">Prüfungen</h2>
          <p className="exam-area__subtitle">Aufgabenblätter zur schriftlichen Bearbeitung auf Papier.</p>
        </div>
      </div>

      {exams.length === 0 ? (
        <p className="exam-area__empty">Für dieses Modul sind noch keine Prüfungen hinterlegt.</p>
      ) : (
        <div className="exam-area__grid">
          {exams.map(exam => (
            <ExamCard
              key={exam.id}
              exam={exam}
              onOpen={setActiveExam}
            />
          ))}
        </div>
      )}
    </section>
  );
}
