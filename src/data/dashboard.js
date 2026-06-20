// Dashboard data layer.
//
// Combines real module/topic/progress data with a small set of local seed
// events so the home screen is populated by default instead of dominated by
// empty states. Every event carries an explicit `source`, so a future merge
// with Google Calendar or ICS feeds can union event lists without changing
// any consumer — see EVENT_SOURCES / EVENT_TYPES below.

import {
  allModules,
  getModulesBySemester,
  getQuestionsForModule,
} from './moduleRegistry.js';
import { getCompletedTopics, getLastTopic } from '../app/storage.js';

/** Supported event origins. Only 'local' is wired up today. */
export const EVENT_SOURCES = ['local', 'google-calendar', 'ics'];
/** Supported event kinds, used for icons, dots and grouping. */
export const EVENT_TYPES = ['exam', 'session', 'deadline', 'reminder'];

/* ----------------------------------------------------------------------- *
 * Date helpers (local time, no external deps)
 * ----------------------------------------------------------------------- */

export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function addDays(date, days) {
  const d = startOfDay(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function toISODate(date) {
  const d = startOfDay(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseISODate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function daysUntil(iso, now = new Date()) {
  const diff = startOfDay(parseISODate(iso)) - startOfDay(now);
  return Math.round(diff / 86_400_000);
}

export function isSameISODate(iso, date) {
  return iso === toISODate(date);
}

const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

export function formatLongDate(date = new Date()) {
  const d = startOfDay(date);
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
    'August', 'September', 'Oktober', 'November', 'Dezember'];
  return `${WEEKDAYS[d.getDay()]}, ${d.getDate()}. ${months[d.getMonth()]}`;
}

export function greetingFor(date = new Date()) {
  const h = date.getHours();
  if (h < 11) return 'Guten Morgen';
  if (h < 17) return 'Guten Tag';
  return 'Guten Abend';
}

/* ----------------------------------------------------------------------- *
 * Module / progress helpers
 * ----------------------------------------------------------------------- */

export function getModuleProgress(module, completed = getCompletedTopics()) {
  const topics = module?.topics ?? [];
  if (topics.length === 0) return 0;
  const done = topics.filter(t => completed.includes(t.id)).length;
  return Math.round((done / topics.length) * 100);
}

export function getSemesterProgress(semesterId, completed = getCompletedTopics()) {
  const topics = getModulesBySemester(semesterId).flatMap(m => m.topics ?? []);
  if (topics.length === 0) return 0;
  const done = topics.filter(t => completed.includes(t.id)).length;
  return Math.round((done / topics.length) * 100);
}

/* ----------------------------------------------------------------------- *
 * Local seed events
 * ----------------------------------------------------------------------- */

// Dates are anchored to "now" so the dashboard stays meaningful whenever the
// app is opened. A real google-calendar/ics source would instead supply fixed
// ISO dates; the shape is identical, so consumers don't care which it is.
export function getStudyEvents(now = new Date()) {
  const examModule = allModules.find(m => m.id === 'asset-management') ?? allModules[0];
  const events = [
    {
      id: 'evt-exam-asset-management',
      source: 'local',
      type: 'exam',
      moduleId: examModule?.id ?? null,
      title: `Klausur ${examModule?.title ?? 'Modul'}`,
      date: toISODate(addDays(now, 13)),
      time: '09:00',
      location: 'Hörsaal H1',
    },
    {
      id: 'evt-session-today',
      source: 'local',
      type: 'session',
      moduleId: examModule?.id ?? null,
      title: 'Lernblock: Portfolio-Selektion',
      date: toISODate(now),
      time: '16:00',
    },
    {
      id: 'evt-session-quiz',
      source: 'local',
      type: 'session',
      moduleId: 'behavioral-finance',
      title: 'Quiz-Wiederholung Behavioral Finance',
      date: toISODate(now),
      time: '18:30',
    },
    {
      id: 'evt-deadline-hr',
      source: 'local',
      type: 'deadline',
      moduleId: 'human-resources',
      title: 'Abgabe: Human Resources Fallstudie',
      date: toISODate(addDays(now, 4)),
    },
    {
      id: 'evt-session-english',
      source: 'local',
      type: 'session',
      moduleId: 'business-english',
      title: 'Vokabeltraining Business English',
      date: toISODate(addDays(now, 2)),
      time: '11:00',
    },
    {
      id: 'evt-reminder-recap',
      source: 'local',
      type: 'reminder',
      moduleId: examModule?.id ?? null,
      title: 'Zusammenfassung Kapitel 2–3 wiederholen',
      date: toISODate(addDays(now, 7)),
    },
  ];

  const moduleById = Object.fromEntries(allModules.map(m => [m.id, m]));
  return events
    .map(evt => ({ ...evt, module: evt.moduleId ? moduleById[evt.moduleId] ?? null : null }))
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

export function getEventsForDate(date, events = getStudyEvents()) {
  return events.filter(evt => isSameISODate(evt.date, date));
}

export function getNextExam(now = new Date(), events = getStudyEvents(now)) {
  const upcoming = events
    .filter(evt => evt.type === 'exam' && daysUntil(evt.date, now) >= 0)
    .sort((a, b) => daysUntil(a.date, now) - daysUntil(b.date, now));
  if (upcoming.length === 0) return null;
  const exam = upcoming[0];
  return { ...exam, days: daysUntil(exam.date, now) };
}

/* ----------------------------------------------------------------------- *
 * "Heute im Fokus" — three concrete next actions
 * ----------------------------------------------------------------------- */

// Resume target: the last visited topic if still valid, else the first
// not-yet-completed topic across all modules, else the very first topic.
export function getContinueTarget(completed = getCompletedTopics()) {
  const last = getLastTopic();
  if (last) {
    const module = allModules.find(m => m.id === last.moduleId);
    const topic = module?.topics?.find(t => t.id === last.topicId);
    if (module && topic) return { module, topic };
  }
  for (const module of allModules) {
    const topic = (module.topics ?? []).find(t => !completed.includes(t.id));
    if (topic) return { module, topic };
  }
  const firstWithTopics = allModules.find(m => (m.topics ?? []).length > 0);
  if (firstWithTopics) return { module: firstWithTopics, topic: firstWithTopics.topics[0] };
  return null;
}

// A module that actually has quiz questions, preferring the one in progress.
export function getQuizSuggestion(completed = getCompletedTopics()) {
  const withQuestions = allModules
    .map(m => ({ module: m, count: getQuestionsForModule(m.id).length }))
    .filter(x => x.count > 0);
  if (withQuestions.length === 0) return null;
  const inProgress = withQuestions.find(x => {
    const p = getModuleProgress(x.module, completed);
    return p > 0 && p < 100;
  });
  const chosen = inProgress ?? withQuestions[0];
  return { module: chosen.module, questionCount: chosen.count };
}

/* ----------------------------------------------------------------------- *
 * Recently studied topics
 * ----------------------------------------------------------------------- */

export function getRecentTopics(limit = 3) {
  const completed = getCompletedTopics();
  const last = getLastTopic();
  const all = allModules.flatMap(module =>
    (module.topics ?? []).map(topic => ({ topic, module })),
  );

  // Surface the last-opened topic first, then completed, then the rest.
  const rank = ({ topic }) => {
    if (last && topic.id === last.topicId) return 0;
    if (completed.includes(topic.id)) return 1;
    return 2;
  };
  return [...all].sort((a, b) => rank(a) - rank(b)).slice(0, limit);
}

/* ----------------------------------------------------------------------- *
 * Tasks / notes seed (completion state persisted in storage.js)
 * ----------------------------------------------------------------------- */

/* ----------------------------------------------------------------------- *
 * Weekly plan (Wochenplan)
 * ----------------------------------------------------------------------- */

const WEEKDAY_SHORT = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

// Monday of the week containing `date`, shifted by `offset` weeks.
export function getWeekStart(date = new Date(), offset = 0) {
  const d = startOfDay(date);
  const dow = (d.getDay() + 6) % 7; // 0 = Monday
  d.setDate(d.getDate() - dow + offset * 7);
  return d;
}

export function getWeekDays(weekStart, now = new Date()) {
  const todayISO = toISODate(now);
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(weekStart, i);
    return {
      date,
      iso: toISODate(date),
      label: WEEKDAY_SHORT[i],
      dayNum: date.getDate(),
      isToday: toISODate(date) === todayISO,
    };
  });
}

export function formatWeekRange(weekStart) {
  const end = addDays(weekStart, 6);
  const months = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const a = `${weekStart.getDate()}. ${months[weekStart.getMonth()]}`;
  const b = `${end.getDate()}. ${months[end.getMonth()]}`;
  return `${a} – ${b}`;
}

// Rows for the week grid: one per module that has topics, with its events
// for the visible week bucketed by weekday index (0 = Monday).
export function getWeekPlan(weekStart, events = getStudyEvents()) {
  const weekISO = getWeekDays(weekStart).map(d => d.iso);
  const indexByISO = Object.fromEntries(weekISO.map((iso, i) => [iso, i]));

  return allModules.map(module => {
    const cells = Array.from({ length: 7 }, () => []);
    events
      .filter(e => e.moduleId === module.id && indexByISO[e.date] !== undefined)
      .forEach(e => { cells[indexByISO[e.date]].push(e); });
    return { module, cells };
  });
}

/* ----------------------------------------------------------------------- *
 * Focus streak (local seed)
 * ----------------------------------------------------------------------- */

// Deterministic local streak: every weekday up to and including today counts
// as a completed study day for the current week. A real implementation would
// derive this from dated activity in storage.
export function getFocusStreak(now = new Date()) {
  const dow = (now.getDay() + 6) % 7; // 0 = Monday
  const week = Array.from({ length: 7 }, (_, i) => i <= dow);
  return { days: 12, week, todayIndex: dow };
}

export function getSeedTasks() {
  return [
    { id: 'task-recap-ch2', label: 'Kapitel 2 zusammenfassen', moduleId: 'asset-management' },
    { id: 'task-quiz-bf', label: 'Behavioral-Finance-Quiz machen', moduleId: 'behavioral-finance' },
    { id: 'task-formulas', label: 'Formelsammlung durchgehen', moduleId: 'asset-management' },
    { id: 'task-vocab', label: 'Business-English-Vokabeln üben', moduleId: 'business-english' },
  ];
}
