import './TopicProgress.css';

export function TopicProgress({ topics = [], completedIds = [] }) {
  const total = topics.length;
  const done = topics.filter(t => completedIds.includes(t.id)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="topic-progress">
      <div className="topic-progress__label">
        <span>{done} / {total} erledigt</span>
        <span>{pct}%</span>
      </div>
      <div className="topic-progress__bar">
        <div className="topic-progress__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
