import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { allModules } from '../../data/moduleRegistry.js';
import { semesters } from '../../data/semesters.js';
import { getTheme, setTheme } from '../../app/theme.js';
import './Sidebar.css';

function ThemeToggle() {
  const [theme, setThemeState] = useState(() => getTheme());
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="sidebar__theme"
      onClick={() => setThemeState(setTheme(isDark ? 'light' : 'dark'))}
      aria-pressed={isDark}
      aria-label={isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
    >
      <span className="sidebar__link-icon" aria-hidden="true">
        {isDark ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </span>
      <span className="sidebar__link-label">{isDark ? 'Heller Modus' : 'Dunkler Modus'}</span>
    </button>
  );
}

const firstSemester = semesters[0] ?? null;
const firstModule = allModules[0] ?? null;

const navItems = [
  {
    label: 'Übersicht',
    to: '/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: 'Semester',
    to: firstSemester ? `/semester/${firstSemester.id}` : null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    label: 'Module',
    to: firstSemester ? `/semester/${firstSemester.id}` : null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    label: 'Lernbereich',
    to: firstModule ? `/module/${firstModule.id}` : null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    label: 'Quiz',
    to: firstModule ? `/quiz/${firstModule.id}` : null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/>
      </svg>
    ),
  },
  {
    label: 'Planer',
    to: '/settings',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: 'Notizen',
    to: '/settings',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
];

function SidebarItem({ item, onNavigate }) {
  const content = (
    <>
      <span className="sidebar__link-icon" aria-hidden="true">{item.icon}</span>
      <span className="sidebar__link-label">{item.label}</span>
    </>
  );

  if (!item.to) {
    return (
      <span className="sidebar__link sidebar__link--disabled" aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <NavLink
      to={item.to}
      end={item.to === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
      }
    >
      {content}
    </NavLink>
  );
}

export function Sidebar({ overlay = false, open = true, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (overlay && open) closeButtonRef.current?.focus();
  }, [overlay, open]);

  return (
    <aside
      className={`sidebar ${overlay ? 'sidebar--overlay' : ''} ${overlay && open ? 'sidebar--open' : ''}`}
      aria-label="Hauptnavigation"
      aria-hidden={overlay && !open}
      inert={overlay && !open}
    >
      <div className="sidebar__brand">
        <div className="sidebar__logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <span className="sidebar__brand-text">
          <span className="sidebar__brand-name">StudyOS</span>
          <span className="sidebar__brand-sub">Lernzentrale</span>
        </span>
        {overlay && (
          <button
            type="button"
            ref={closeButtonRef}
            className="sidebar__close"
            onClick={onClose}
            aria-label="Navigation schließen"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <nav className="sidebar__nav" aria-label="Hauptnavigation">
        <ul className="sidebar__list">
          {navItems.map(item => (
            <li key={item.label}>
              <SidebarItem item={item} onNavigate={overlay ? onClose : undefined} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__offline" title="Alle Daten liegen lokal im Browser">
          <span className="sidebar__offline-dot" aria-hidden="true" />
          <span className="sidebar__offline-label">Offline-Modus</span>
        </div>
        <ThemeToggle />
        <NavLink
          to="/settings"
          onClick={overlay ? onClose : undefined}
          className={({ isActive }) =>
            `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
          }
        >
          <span className="sidebar__link-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </span>
          <span className="sidebar__link-label">Einstellungen</span>
        </NavLink>
      </div>
    </aside>
  );
}
