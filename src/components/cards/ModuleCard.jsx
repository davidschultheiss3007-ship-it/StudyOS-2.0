import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge.jsx';
import { ProgressBar } from '../ui/ProgressBar.jsx';
import { getCompletedTopics } from '../../app/storage.js';
import './ModuleCard.css';

function getStatusBadge(status) {
  switch (status) {
    case 'done': return { label: 'Fertig', variant: 'success' };
    case 'in-progress': return { label: 'Aktiv', variant: 'primary' };
    case 'planned': return { label: 'Geplant', variant: 'default' };
    default: return { label: status, variant: 'default' };
  }
}

function computeProgress(module) {
  const completed = getCompletedTopics();
  const total = module.topics?.length ?? 0;
  if (total === 0) return 0;
  const done = module.topics.filter(t => completed.includes(t.id)).length;
  return Math.round((done / total) * 100);
}

export function ModuleCard({ module, compact = false }) {
  const { label, variant } = getStatusBadge(module.status);
  const progress = computeProgress(module);

  return (
    <Link to={`/module/${module.id}`} className={`module-card ${compact ? 'module-card--compact' : ''}`}>
      <div className="module-card__accent" style={{ background: module.accent }} />
      <div className="module-card__body">
        <div className="module-card__header">
          <span className="module-card__title">{module.title}</span>
          <Badge variant={variant} size="sm">{label}</Badge>
        </div>
        {!compact && module.description && (
          <p className="module-card__desc">{module.description}</p>
        )}
        <div className="module-card__footer">
          <div className="module-card__progress-row">
            <ProgressBar value={progress} size="sm" />
            <span className="module-card__pct">{progress}%</span>
          </div>
          <span className="module-card__topics">
            {module.topics?.length ?? 0} Topics
          </span>
        </div>
      </div>
    </Link>
  );
}
