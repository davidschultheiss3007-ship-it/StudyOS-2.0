import { useEffect, useId, useRef, useState } from 'react';
import './SectionNav.css';

/**
 * Collapsible sub-topic navigation for a learning topic.
 *
 * Renders a fixed "Inhalt" trigger (sitting next to the global hamburger) that
 * opens a left slide-in panel listing the topic's sections — same interaction
 * model as the main Sidebar overlay (backdrop, Escape, focus return, inert when
 * closed). Collapsed by default so the content uses the full page width.
 *
 * An IntersectionObserver highlights the section currently in view, so the panel
 * always opens on the right entry.
 */
export function SectionNav({ sections = [] }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? null);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const wasOpen = useRef(false);
  const panelId = useId();

  // Scroll-spy: mark the section occupying the upper band of the viewport as
  // active. We only ever *set* on intersection (never clear), so the last
  // active section persists while scrolling across the gap between two boards.
  useEffect(() => {
    if (sections.length < 2) return undefined;

    const els = sections
      .map(section => document.getElementById(section.id))
      .filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Move focus into the panel on open; return it to the trigger on close.
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    } else if (wasOpen.current) {
      triggerRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  if (sections.length < 2) return null;

  function goToSection(id) {
    setActiveSection(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className="section-nav__trigger"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="section-nav__trigger-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
            <circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" />
          </svg>
        </span>
        <span className="section-nav__trigger-label">Inhalt</span>
      </button>

      <button
        type="button"
        className={`section-nav__backdrop ${open ? 'section-nav__backdrop--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-label="Inhaltsnavigation schließen"
        tabIndex={open ? 0 : -1}
      />

      <aside
        id={panelId}
        className={`section-nav__panel ${open ? 'section-nav__panel--open' : ''}`}
        aria-label="Inhaltsnavigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="section-nav__header">
          <p className="section-nav__title">Inhalt</p>
          <button
            type="button"
            ref={closeButtonRef}
            className="section-nav__close"
            onClick={() => setOpen(false)}
            aria-label="Inhaltsnavigation schließen"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="section-nav__nav" aria-label="Abschnitte">
          <ol className="section-nav__list">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  type="button"
                  className={`section-nav__item ${activeSection === section.id ? 'section-nav__item--active' : ''}`}
                  onClick={() => goToSection(section.id)}
                  aria-current={activeSection === section.id ? 'location' : undefined}
                >
                  <span className="section-nav__item-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="section-nav__item-label">{section.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </>
  );
}
