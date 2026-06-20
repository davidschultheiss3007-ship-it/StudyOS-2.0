import { Badge } from '../ui/Badge.jsx';
import { Button } from '../ui/Button.jsx';
import { getExamTaskCount, getExamTotalPoints, renderPoints } from './examUtils.jsx';
import './Exam.css';

export function ExamCard({ exam, onOpen }) {
  const taskCount = getExamTaskCount(exam);
  const totalPoints = getExamTotalPoints(exam);

  return (
    <article className="exam-card">
      <div className="exam-card__top">
        <div>
          <div className="exam-card__title-row">
            <h3 className="exam-card__title">{exam.title}</h3>
            {exam.isDemo && <Badge variant="warning" size="sm">Demo</Badge>}
            {exam.label && !exam.isDemo && <Badge variant="primary" size="sm">{exam.label}</Badge>}
          </div>
          {exam.description && <p className="exam-card__description">{exam.description}</p>}
        </div>
        <Button variant="primary" onClick={() => onOpen(exam)}>
          Prüfung öffnen
        </Button>
      </div>

      <div className="exam-card__meta">
        <span className="exam-card__meta-item">{exam.durationMinutes ?? 0} min</span>
        <span className="exam-card__meta-item">{renderPoints(totalPoints)}</span>
        <span className="exam-card__meta-item">{taskCount} Aufgaben</span>
      </div>

      {exam.topics?.length > 0 && (
        <div className="exam-card__topics" aria-label="Prüfungsthemen">
          {exam.topics.map(topic => (
            <span key={topic} className="exam-card__topic">{topic}</span>
          ))}
        </div>
      )}
    </article>
  );
}
