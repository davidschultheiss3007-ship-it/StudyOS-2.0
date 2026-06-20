import { useState } from 'react';
import { Badge } from '../ui/Badge.jsx';
import { Button } from '../ui/Button.jsx';
import { ExamPrintButton } from './ExamPrintButton.jsx';
import { ExamSection } from './ExamSection.jsx';
import { SolutionToggle } from './SolutionToggle.jsx';
import { getExamTaskCount, getExamTotalPoints, renderPoints } from './examUtils.jsx';
import './Exam.css';

export function ExamViewer({ exam, onBack }) {
  const [showSolutions, setShowSolutions] = useState(false);
  const sectionsWithOffsets = (exam.sections ?? []).reduce((items, section) => {
    const previous = items.at(-1);
    const startIndex = previous
      ? previous.startIndex + (previous.section.tasks?.length ?? 0)
      : 0;

    return [...items, { section, startIndex }];
  }, []);

  return (
    <section className="exam-viewer">
      <div className="exam-viewer__topbar">
        <Button variant="ghost" size="sm" onClick={onBack}>Zurück zu Prüfungen</Button>
        <div className="exam-viewer__actions">
          <ExamPrintButton />
          <SolutionToggle showSolutions={showSolutions} onChange={setShowSolutions} />
        </div>
      </div>

      <header className="exam-viewer__header">
        <div>
          <div className="exam-viewer__title-row">
            <h2 className="exam-viewer__title">{exam.title}</h2>
            {exam.isDemo && <Badge variant="warning" size="sm">Demo</Badge>}
            {exam.label && !exam.isDemo && <Badge variant="primary" size="sm">{exam.label}</Badge>}
          </div>
          {exam.description && <p className="exam-viewer__description">{exam.description}</p>}
        </div>

        <div className="exam-viewer__meta" aria-label="Prüfungsdaten">
          <span>{exam.durationMinutes ?? 0} min</span>
          <span>{renderPoints(getExamTotalPoints(exam))}</span>
          <span>{getExamTaskCount(exam)} Aufgaben</span>
        </div>
      </header>

      {exam.instructions?.length > 0 && (
        <section className="exam-instructions" aria-label="Bearbeitungshinweise">
          <h3 className="exam-instructions__title">Hinweise</h3>
          <ul>
            {exam.instructions.map(instruction => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ul>
        </section>
      )}

      {exam.topics?.length > 0 && (
        <div className="exam-card__topics" aria-label="Prüfungsthemen">
          {exam.topics.map(topic => (
            <span key={topic} className="exam-card__topic">{topic}</span>
          ))}
        </div>
      )}

      <div className="exam-viewer__sections">
        {sectionsWithOffsets.map(({ section, startIndex }) => (
          <ExamSection
            key={section.id}
            section={section}
            startIndex={startIndex}
            showSolutions={showSolutions}
          />
        ))}
      </div>
    </section>
  );
}
