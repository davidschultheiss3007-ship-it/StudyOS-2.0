import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTopicById, getModuleById } from '../data/moduleRegistry.js';
import { getSemesterById } from '../data/semesters.js';
import { FullContentView } from '../components/learning/FullContentView.jsx';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs.jsx';
import { TopicEdgeNavigation, TopicNavigation } from '../components/navigation/TopicNavigation.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { markTopicDone, unmarkTopicDone, isTopicDone, setLastTopic } from '../app/storage.js';
import './Topic.css';

export function Topic() {
  const { moduleId, topicId } = useParams();
  const [doneState, setDoneState] = useState(() => ({
    topicId,
    value: isTopicDone(topicId),
  }));

  const mod = getModuleById(moduleId);
  const topicContent = getTopicById(moduleId, topicId);
  const topicMeta = mod?.topics?.find(topic => topic.id === topicId) ?? null;
  const topic = topicContent ?? topicMeta;
  const displayTitle = topic?.title?.replaceAll(' · ', '\u00a0· ') ?? '';
  const done = doneState.topicId === topicId ? doneState.value : isTopicDone(topicId);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [moduleId, topicId]);

  if (!mod || !topic) {
    return (
      <div className="page-error">
        <p>Topic nicht gefunden.</p>
        <Link to="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  const hasContent = topicContent !== null;
  const semester = getSemesterById(mod.semesterId);
  const allTopics = mod.topics ?? [];
  const currentIdx = allTopics.findIndex(item => item.id === topicId);
  const prevTopic = currentIdx > 0 ? allTopics[currentIdx - 1] : null;
  const nextTopic = currentIdx < allTopics.length - 1 ? allTopics[currentIdx + 1] : null;

  function toggleDone() {
    if (!hasContent) return;

    if (done) {
      unmarkTopicDone(topicId);
      setDoneState({ topicId, value: false });
    } else {
      markTopicDone(topicId);
      setLastTopic(moduleId, topicId);
      setDoneState({ topicId, value: true });
    }
  }

  return (
    <div className="topic-page">
      <TopicEdgeNavigation moduleId={moduleId} prevTopic={prevTopic} nextTopic={nextTopic} />

      <div className="topic-page__header">
        <Breadcrumbs items={[
          { label: 'Startseite', to: '/' },
          { label: semester?.title ?? mod.semesterId, to: `/semester/${mod.semesterId}` },
          { label: mod.title, to: `/module/${moduleId}` },
          { label: topic.title },
        ]} />

        <div className="topic-page__title-row">
          <h1 className="topic-page__title">{displayTitle}</h1>
          <div className="topic-page__title-actions">
            <Button
              variant={done && hasContent ? 'success' : 'secondary'}
              onClick={toggleDone}
              disabled={!hasContent}
            >
              {done && hasContent ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Erledigt
                </>
              ) : hasContent ? 'Als erledigt markieren' : 'Noch kein Inhalt verfügbar'}
            </Button>
          </div>
        </div>

        <div className="topic-page__meta">
          {topic.source && (
            <span className="topic-page__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              {topic.source}
            </span>
          )}
          {topic.estimatedMinutes && (
            <span className="topic-page__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ca. {topic.estimatedMinutes} min
            </span>
          )}
          {done && hasContent && <Badge variant="success" size="sm">Abgeschlossen</Badge>}
        </div>
      </div>

      <TopicNavigation moduleId={moduleId} prevTopic={prevTopic} nextTopic={nextTopic} position="top" />

      <div className="topic-page__content">
        {hasContent ? (
          <FullContentView key={`${moduleId}-${topicId}`} topic={topic} moduleId={moduleId} />
        ) : (
          <div className="topic-page__placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <p className="topic-page__placeholder-title">Kein Inhalt vorhanden.</p>
            <p className="topic-page__placeholder-hint">Dieses Topic ist registriert, enthält aber noch keinen Lerninhalt.</p>
          </div>
        )}
      </div>

      <TopicNavigation moduleId={moduleId} prevTopic={prevTopic} nextTopic={nextTopic} />
    </div>
  );
}
