// Theme handling. Light is the default; dark is opt-in and persisted.
// The active theme is reflected as <html data-theme="..."> and read by
// tokens.css. Default theme has no attribute (light = :root baseline).

const THEME_KEY = 'studyos_theme';
export const THEMES = ['light', 'dark'];
export const DEFAULT_THEME = 'light';

export function getTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return THEMES.includes(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
}

export function setTheme(theme) {
  const next = THEMES.includes(theme) ? theme : DEFAULT_THEME;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    // ignore persistence failure
  }
  applyTheme(next);
  return next;
}

// Apply the stored theme as early as possible (called from main.jsx).
export function initTheme() {
  const theme = getTheme();
  applyTheme(theme);
  return theme;
}
