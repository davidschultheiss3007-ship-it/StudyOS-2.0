import { Link } from 'react-router-dom';
import { Button } from '../ui/Button.jsx';
import './QuizResult.css';

export function QuizResult({ score, total, moduleId, onRetry }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : pct >= 40 ? 'ok' : 'retry';
  const gradeLabel = {
    excellent: 'Ausgezeichnet!',
    good: 'Gut gemacht!',
    ok: 'Noch Verbesserungspotenzial.',
    retry: 'Nochmal üben empfohlen.',
  }[grade];

  return (
    <div className="quiz-result">
      <div className={`quiz-result__score quiz-result__score--${grade}`}>
        <span className="quiz-result__pct">{pct}%</span>
        <span className="quiz-result__fraction">{score} / {total} richtig</span>
      </div>
      <p className="quiz-result__label">{gradeLabel}</p>
      <div className="quiz-result__actions">
        <Button variant="secondary" onClick={onRetry}>Nochmal versuchen</Button>
        <Link to={`/module/${moduleId}`}>
          <Button variant="primary">Zurück zum Modul</Button>
        </Link>
      </div>
    </div>
  );
}
