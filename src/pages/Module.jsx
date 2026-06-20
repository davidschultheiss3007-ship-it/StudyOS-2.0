import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getModuleById, getTopicsForModule, getQuestionsForModule, getExamsForModule } from '../data/moduleRegistry.js';
import { getSemesterById } from '../data/semesters.js';
import { TopicCard } from '../components/cards/TopicCard.jsx';
import { ExamArea } from '../components/exams/ExamArea.jsx';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { ProgressBar } from '../components/ui/ProgressBar.jsx';
import { getCompletedTopics } from '../app/storage.js';
import './Module.css';

function getStatusBadge(status) {
  switch (status) {
    case 'done': return { label: 'Fertig', variant: 'success' };
    case 'in-progress': return { label: 'Aktiv', variant: 'primary' };
    case 'planned': return { label: 'Geplant', variant: 'default' };
    default: return { label: status, variant: 'default' };
  }
}

export function Module() {
  const { moduleId } = useParams();
  const [activeArea, setActiveArea] = useState('learn');
  const mod = getModuleById(moduleId);

  if (!mod) {
    return (
      <div className="page-error">
        <p>Modul nicht gefunden.</p>
        <Link to="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  const semester = getSemesterById(mod.semesterId);
  const topicData = getTopicsForModule(moduleId);
  const questions = getQuestionsForModule(moduleId);
  const exams = getExamsForModule(moduleId);
  const completed = getCompletedTopics();

  const allTopics = mod.topics ?? [];
  const totalTopics = allTopics.length;
  const doneCount = allTopics.filter(t => completed.includes(t.id)).length;
  const progress = totalTopics > 0 ? Math.round((doneCount / totalTopics) * 100) : 0;

  const { label, variant } = getStatusBadge(mod.status);
  const firstTopic = allTopics[0];

  return (
    <div className="module-page">
      <Breadcrumbs items={[
        { label: 'Startseite', to: '/' },
        { label: semester?.title ?? mod.semesterId, to: `/semester/${mod.semesterId}` },
        { label: mod.title },
      ]} />

      <div className="module-page__header">
        <div className="module-page__accent-bar" style={{ background: mod.accent }} />
        <div className="module-page__header-body">
          <div className="module-page__header-top">
            <div>
              <div className="module-page__title-row">
                <h1 className="module-page__title">{mod.title}</h1>
                <Badge variant={variant}>{label}</Badge>
              </div>
              {mod.description && (
                <p className="module-page__desc">{mod.description}</p>
              )}
              {mod.examDate && (
                <p className="module-page__exam-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Prüfung: {new Date(mod.examDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              )}
            </div>
            <div className="module-page__actions">
              {firstTopic && (
                <Link to={`/topic/${moduleId}/${firstTopic.id}`}>
                  <Button variant="primary">Lernen starten</Button>
                </Link>
              )}
              <Link to={`/quiz/${moduleId}`}>
                <Button variant="secondary">Quiz starten</Button>
              </Link>
              <Button variant="secondary" onClick={() => setActiveArea('exams')}>Prüfungen</Button>
            </div>
          </div>

          <div className="module-page__progress">
            <div className="module-page__progress-label">
              <span>Fortschritt</span>
              <span>{doneCount} / {totalTopics} Topics · {progress}%</span>
            </div>
            <ProgressBar value={progress} size="md" />
          </div>
        </div>
      </div>

      <div className="module-page__tabs" role="tablist" aria-label="Modulbereiche">
        <button
          className={`module-page__tab ${activeArea === 'learn' ? 'module-page__tab--active' : ''}`}
          onClick={() => setActiveArea('learn')}
          role="tab"
          aria-selected={activeArea === 'learn'}
        >
          Lernbereich
        </button>
        <button
          className={`module-page__tab ${activeArea === 'quiz' ? 'module-page__tab--active' : ''}`}
          onClick={() => setActiveArea('quiz')}
          role="tab"
          aria-selected={activeArea === 'quiz'}
        >
          Quiz
        </button>
        <button
          className={`module-page__tab ${activeArea === 'exams' ? 'module-page__tab--active' : ''}`}
          onClick={() => setActiveArea('exams')}
          role="tab"
          aria-selected={activeArea === 'exams'}
        >
          Prüfungen
        </button>
      </div>

      {activeArea === 'learn' && (
        <div className="module-page__body">
          <div className="module-page__topics">
            <h2 className="module-page__section-title">Topics</h2>
            <div className="module-page__topics-list">
              {allTopics.length === 0 ? (
                <p className="module-page__empty">Keine Topics vorhanden.</p>
              ) : allTopics.map(t => {
                const loaded = topicData.find(td => td.id === t.id);
                return (
                  <TopicCard
                    key={t.id}
                    topic={loaded ?? t}
                    moduleId={moduleId}
                  />
                );
              })}
            </div>
          </div>

          <div className="module-page__aside">
            <div className="module-page__sources">
              <h3 className="module-page__aside-title">Quellen & Skripte</h3>
              <div className="module-page__sources-placeholder">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <p>Keine Quellen hinterlegt.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeArea === 'quiz' && (
        <section className="module-page__panel">
          <h2 className="module-page__section-title">Quiz</h2>
          {questions.length === 0 ? (
            <p className="module-page__empty">Keine Quizfragen vorhanden.</p>
          ) : (
            <div className="module-page__quiz-card">
              <div>
                <h3 className="module-page__quiz-title">Wissenscheck</h3>
                <p className="module-page__quiz-copy">
                  {questions.length} Fragen für dieses Modul. Der bestehende Quizmodus bleibt als eigener Ablauf verfügbar.
                </p>
              </div>
              <Link to={`/quiz/${moduleId}`}>
                <Button variant="primary">Quiz starten</Button>
              </Link>
            </div>
          )}
        </section>
      )}

      {activeArea === 'exams' && (
        <section className="module-page__panel">
          <ExamArea exams={exams} moduleId={moduleId} />
        </section>
      )}
    </div>
  );
}
