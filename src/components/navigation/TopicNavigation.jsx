import { Link } from 'react-router-dom';
import './TopicNavigation.css';

function ArrowIcon({ direction }) {
  return direction === 'prev' ? (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M19 12H5" /><path d="m12 5-7 7 7 7" />
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function TopicLink({ direction, moduleId, topic }) {
  if (!topic) return <span className="topic-navigation__spacer" aria-hidden="true" />;

  return (
    <Link
      to={`/topic/${moduleId}/${topic.id}`}
      className={`topic-navigation__link topic-navigation__link--${direction}`}
    >
      {direction === 'prev' && <ArrowIcon direction="prev" />}
      <span className="topic-navigation__text">
        <span className="topic-navigation__label">{direction === 'prev' ? 'Vorheriges Topic' : 'Nächstes Topic'}</span>
        <span className="topic-navigation__title">{topic.title}</span>
      </span>
      {direction === 'next' && <ArrowIcon direction="next" />}
    </Link>
  );
}

export function TopicNavigation({ moduleId, prevTopic, nextTopic, position = 'bottom' }) {
  return (
    <nav className={`topic-navigation topic-navigation--${position}`} aria-label={`Topic-Navigation ${position === 'top' ? 'oben' : 'unten'}`}>
      <TopicLink direction="prev" moduleId={moduleId} topic={prevTopic} />
      {nextTopic ? (
        <TopicLink direction="next" moduleId={moduleId} topic={nextTopic} />
      ) : (
        <Link to={`/quiz/${moduleId}`} className="topic-navigation__link topic-navigation__link--quiz">
          <span className="topic-navigation__text">
            <span className="topic-navigation__label">Modul abgeschlossen</span>
            <span className="topic-navigation__title">Quiz starten</span>
          </span>
          <ArrowIcon direction="next" />
        </Link>
      )}
    </nav>
  );
}

export function TopicEdgeNavigation({ moduleId, prevTopic, nextTopic }) {
  return (
    <nav className="topic-edge-navigation" aria-label="Schnelle Topic-Navigation">
      {prevTopic && (
        <Link
          to={`/topic/${moduleId}/${prevTopic.id}`}
          className="topic-edge-navigation__button topic-edge-navigation__button--prev"
          aria-label={`Vorheriges Topic: ${prevTopic.title}`}
          title={`Vorheriges Topic: ${prevTopic.title}`}
        >
          <ArrowIcon direction="prev" />
        </Link>
      )}
      {nextTopic && (
        <Link
          to={`/topic/${moduleId}/${nextTopic.id}`}
          className="topic-edge-navigation__button topic-edge-navigation__button--next"
          aria-label={`Nächstes Topic: ${nextTopic.title}`}
          title={`Nächstes Topic: ${nextTopic.title}`}
        >
          <ArrowIcon direction="next" />
        </Link>
      )}
    </nav>
  );
}
