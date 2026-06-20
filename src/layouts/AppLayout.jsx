import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/navigation/Sidebar.jsx';
import './AppLayout.css';

export function AppLayout() {
  const location = useLocation();
  const isTopicRoute = location.pathname.startsWith('/topic/');
  const [sidebarOpenPath, setSidebarOpenPath] = useState(null);
  const sidebarOpen = isTopicRoute && sidebarOpenPath === location.pathname;
  const menuButtonRef = useRef(null);
  const wasSidebarOpen = useRef(false);

  useEffect(() => {
    if (!isTopicRoute || !sidebarOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') setSidebarOpenPath(null);
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isTopicRoute, sidebarOpen]);

  useEffect(() => {
    if (wasSidebarOpen.current && !sidebarOpen) {
      menuButtonRef.current?.focus();
    }
    wasSidebarOpen.current = sidebarOpen;
  }, [sidebarOpen]);

  return (
    <div className={`app-layout ${isTopicRoute ? 'app-layout--topic' : ''}`}>
      {isTopicRoute && (
        <>
          <button
            ref={menuButtonRef}
            type="button"
            className="app-layout__menu-button"
            onClick={() => setSidebarOpenPath(location.pathname)}
            aria-label="Hauptnavigation öffnen"
            aria-expanded={sidebarOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            className={`app-layout__backdrop ${sidebarOpen ? 'app-layout__backdrop--visible' : ''}`}
            onClick={() => setSidebarOpenPath(null)}
            aria-label="Navigation schließen"
            tabIndex={sidebarOpen ? 0 : -1}
          />
        </>
      )}

      <Sidebar
        overlay={isTopicRoute}
        open={!isTopicRoute || sidebarOpen}
        onClose={() => setSidebarOpenPath(null)}
      />
      <main className={`app-layout__main ${isTopicRoute ? 'app-layout__main--topic' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}
