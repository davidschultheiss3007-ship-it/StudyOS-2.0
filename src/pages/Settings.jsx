import { useState } from 'react';
import { getTheme, setTheme } from '../app/theme.js';
import './Settings.css';

function ThemeSelect() {
  const [theme, setThemeState] = useState(() => getTheme());
  return (
    <select
      className="settings-select"
      value={theme}
      onChange={e => setThemeState(setTheme(e.target.value))}
    >
      <option value="light">Hell</option>
      <option value="dark">Dunkel</option>
    </select>
  );
}

function SettingsSection({ title, children }) {
  return (
    <section className="settings-section">
      <h2 className="settings-section__title">{title}</h2>
      <div className="settings-section__body">{children}</div>
    </section>
  );
}

function SettingsRow({ label, description, children }) {
  return (
    <div className="settings-row">
      <div className="settings-row__info">
        <span className="settings-row__label">{label}</span>
        {description && <span className="settings-row__desc">{description}</span>}
      </div>
      <div className="settings-row__control">{children}</div>
    </div>
  );
}

function PlaceholderToggle({ defaultOn = false }) {
  return (
    <div className={`settings-toggle ${defaultOn ? 'settings-toggle--on' : ''}`} aria-label="Einstellung umschalten">
      <div className="settings-toggle__thumb" />
    </div>
  );
}

function PlaceholderSelect({ options }) {
  return (
    <select className="settings-select" disabled>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  );
}

export function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-page__header">
        <h1 className="settings-page__title">Einstellungen</h1>
        <p className="settings-page__sub">Passe StudyOS an deine Bedürfnisse an.</p>
      </div>

      <div className="settings-page__body">
        <SettingsSection title="Darstellung">
          <SettingsRow
            label="Theme"
            description="Heller Modus ist Standard. Die Auswahl wird lokal gespeichert."
          >
            <ThemeSelect />
          </SettingsRow>
          <SettingsRow
            label="Kompakter Modus"
            description="Reduziert Abstände für eine dichtere Ansicht."
          >
            <PlaceholderToggle />
          </SettingsRow>
          <SettingsRow
            label="Lesebreite"
            description="Maximale Breite des Leseinhalts."
          >
            <PlaceholderSelect options={['Normal (72ch)', 'Breit (90ch)', 'Volle Breite']} />
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Lernverhalten">
          <SettingsRow
            label="Fortschritt zurücksetzen"
            description="Setzt alle erledigten Topics und Quiz-Ergebnisse zurück."
          >
            <button
              className="settings-danger-btn"
              onClick={() => {
                if (window.confirm('Fortschritt wirklich zurücksetzen?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
            >
              Zurücksetzen
            </button>
          </SettingsRow>
          <SettingsRow
            label="Lernziel pro Tag"
            description="Noch nicht konfiguriert."
          >
            <PlaceholderSelect options={['Nicht festgelegt']} />
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Account & Daten">
          <div className="settings-placeholder-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p>StudyOS ist eine lokale App ohne Account. Alle Daten werden im Browser-Speicher (localStorage) gespeichert. Keine Cloud-Synchronisation.</p>
          </div>
        </SettingsSection>

        <SettingsSection title="Version">
          <div className="settings-version-info">
            <span className="settings-version-label">StudyOS</span>
            <span className="settings-version-num">v2.0.0</span>
          </div>
        </SettingsSection>
      </div>
    </div>
  );
}
