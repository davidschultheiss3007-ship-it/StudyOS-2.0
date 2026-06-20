import { Link } from 'react-router-dom';
import { isTopicDone } from '../../app/storage.js';
import './TopicCard.css';

export function TopicCard({ topic, moduleId }) {
  const done = topic.hasContent !== false && isTopicDone(topic.id);

  return (
    <Link to={`/topic/${moduleId}/${topic.id}`} className={`topic-card ${done ? 'topic-card--done' : ''}`}>
      <span className={`topic-card__check ${done ? 'topic-card__check--done' : ''}`} aria-hidden="true">
        {done ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
        )}
      </span>
      <div className="topic-card__body">
        <span className="topic-card__title">{topic.title}</span>
        {topic.source && (
          <span className="topic-card__source">{topic.source}</span>
        )}
      </div>
      {topic.estimatedMinutes && (
        <span className="topic-card__time">{topic.estimatedMinutes} min</span>
      )}
    </Link>
  );
}
