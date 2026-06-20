import { useParams, Link } from 'react-router-dom';
import { getModuleById, getQuestionsForModule } from '../data/moduleRegistry.js';
import { getSemesterById } from '../data/semesters.js';
import { QuizRunner } from '../components/quiz/QuizRunner.jsx';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs.jsx';
import { Button } from '../components/ui/Button.jsx';
import './Quiz.css';

export function Quiz() {
  const { moduleId } = useParams();
  const mod = getModuleById(moduleId);
  const questions = getQuestionsForModule(moduleId);

  if (!mod) {
    return (
      <div className="page-error">
        <p>Modul nicht gefunden.</p>
        <Link to="/">Zurück</Link>
      </div>
    );
  }

  const semester = getSemesterById(mod.semesterId);

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <Breadcrumbs items={[
          { label: 'Startseite', to: '/' },
          { label: mod.title, to: `/module/${moduleId}` },
          { label: 'Quiz' },
        ]} />
        <div className="quiz-page__empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}>
            <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <p>Noch keine Fragen für dieses Modul vorhanden.</p>
          <Link to={`/module/${moduleId}`}>
            <Button variant="secondary">Zurück zum Modul</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <Breadcrumbs items={[
        { label: 'Startseite', to: '/' },
        { label: semester?.title ?? mod.semesterId, to: `/semester/${mod.semesterId}` },
        { label: mod.title, to: `/module/${moduleId}` },
        { label: 'Quiz' },
      ]} />

      <div className="quiz-page__header">
        <h1 className="quiz-page__title">Quiz: {mod.title}</h1>
        <p className="quiz-page__sub">{questions.length} Fragen · Beantworte alle Fragen und sieh dein Ergebnis.</p>
      </div>

      <QuizRunner questions={questions} moduleId={moduleId} />
    </div>
  );
}
