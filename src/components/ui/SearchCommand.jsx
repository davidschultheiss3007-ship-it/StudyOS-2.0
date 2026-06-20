import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { allModules } from '../../data/moduleRegistry.js';
import './SearchCommand.css';

export function SearchCommand() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const normalizedQuery = query.trim().toLowerCase();

  const results = normalizedQuery.length > 1
    ? allModules.filter(module => {
        const topics = module.topics ?? [];
        return (
          module.title?.toLowerCase().includes(normalizedQuery) ||
          module.description?.toLowerCase().includes(normalizedQuery) ||
          topics.some(topic => topic.title?.toLowerCase().includes(normalizedQuery))
        );
      })
    : [];

  function handleSelect(moduleId) {
    setQuery('');
    navigate(`/module/${moduleId}`);
  }

  return (
    <div className="search-command">
      <div className="search-command__bar">
        <span className="search-command__icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </span>
        <input
          className="search-command__input"
          type="text"
          placeholder="Suche nach Modulen, Topics, Fragen..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Suche"
        />
        <span className="search-command__hint">⌘ K</span>
      </div>

      {results.length > 0 && (
        <div className="search-command__results">
          {results.map(module => (
            <button
              key={module.id}
              className="search-command__result"
              onClick={() => handleSelect(module.id)}
            >
              <span className="search-command__result-dot" style={{ background: module.accent }} />
              <span className="search-command__result-title">{module.title}</span>
              <span className="search-command__result-meta">{module.semesterId?.replace('semester-', 'Sem. ')}</span>
            </button>
          ))}
        </div>
      )}

      {normalizedQuery.length > 1 && results.length === 0 && (
        <div className="search-command__results">
          <p className="search-command__empty">Keine passenden Inhalte vorhanden.</p>
        </div>
      )}
    </div>
  );
}
