import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getSemesterById } from '../data/semesters.js';
import { getModulesBySemester } from '../data/moduleRegistry.js';
import { ModuleCard } from '../components/cards/ModuleCard.jsx';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import './Semester.css';

const FILTER_OPTIONS = [
  { value: 'all', label: 'Alle' },
  { value: 'in-progress', label: 'Aktiv' },
  { value: 'planned', label: 'Geplant' },
  { value: 'done', label: 'Fertig' },
];

export function Semester() {
  const { semesterId } = useParams();
  const [filter, setFilter] = useState('all');

  const semester = getSemesterById(semesterId);
  if (!semester) {
    return (
      <div className="page-error">
        <p>Semester nicht gefunden.</p>
        <Link to="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  const modules = getModulesBySemester(semesterId);
  const filtered = filter === 'all' ? modules : modules.filter(m => m.status === filter);
  const emptyMessage = modules.length === 0
    ? 'Keine Module vorhanden.'
    : 'Keine Module fuer diesen Filter.';

  return (
    <div className="semester-page">
      <div className="semester-page__header">
        <Breadcrumbs items={[{ label: 'Startseite', to: '/' }, { label: semester.title }]} />
        <div className="semester-page__title-row">
          <div className="semester-page__title-group">
            <div className="semester-page__num">{semesterId.replace('semester-', '')}</div>
            <div>
              <h1 className="semester-page__title">{semester.title}</h1>
              <p className="semester-page__desc">{semester.description}</p>
            </div>
          </div>
          <Badge variant={semester.status === 'current' ? 'success' : 'default'}>
            {semester.label}
          </Badge>
        </div>
      </div>

      <div className="semester-page__filter">
        {FILTER_OPTIONS.map(opt => (
          <button
            key={opt.value}
            className={`semester-filter-btn ${filter === opt.value ? 'semester-filter-btn--active' : ''}`}
            onClick={() => setFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="semester-page__modules">
        {filtered.length === 0 ? (
          <p className="semester-page__empty">{emptyMessage}</p>
        ) : (
          filtered.map(mod => (
            <ModuleCard key={mod.id} module={mod} />
          ))
        )}
      </div>
    </div>
  );
}
