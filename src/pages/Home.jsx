import { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchCommand } from '../components/ui/SearchCommand.jsx';
import { ProgressBar } from '../components/ui/ProgressBar.jsx';
import { semesters } from '../data/semesters.js';
import { allModules } from '../data/moduleRegistry.js';
import { getCompletedTopics, getStats, getTaskState, toggleTask } from '../app/storage.js';
import {
  formatWeekRange,
  getContinueTarget,
  getFocusStreak,
  getModuleProgress,
  getNextExam,
  getQuizSuggestion,
  getRecentTopics,
  getSeedTasks,
  getStudyEvents,
  getWeekDays,
  getWeekPlan,
  getWeekStart,
  greetingFor,
  isSameISODate,
  startOfDay,
  toISODate,
} from '../data/dashboard.js';
import './Home.css';

/* ----------------------------------------------------------------- icons */
const Icon = {
  arrow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  chevD: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  chevL: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
  chevR: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  play: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>,
  quiz: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>,
  exam: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  book: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  flame: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  check: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
  'August', 'September', 'Oktober', 'November', 'Dezember'];
const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

/* -------------------------------------------------------- circular ring */
function Ring({ value = 0, size = 46, stroke = 4, color = 'var(--color-accent)', children }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, value));
  const offset = circ * (1 - pct / 100);
  return (
    <span className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="ring__label">{children}</span>
    </span>
  );
}

/* --------------------------------------------------------- top bar */
function TopBar() {
  const semester = semesters[0];
  const examModuleId = getNextExam()?.moduleId;
  return (
    <header className="topbar">
      <Link to={semester ? `/semester/${semester.id}` : '/'} className="topbar__crumb">
        {semester?.title ?? 'StudyOS'} {Icon.chevD}
      </Link>
      <div className="topbar__search">
        <SearchCommand />
      </div>
      <div className="topbar__actions">
        <Link to={examModuleId ? `/module/${examModuleId}` : (semester ? `/semester/${semester.id}` : '/')} className="topbar__btn">
          Prüfungen
        </Link>
        <Link to="/settings" className="topbar__icon-btn" aria-label="Benachrichtigungen und Einstellungen">
          {Icon.bell}
        </Link>
        <span className="topbar__avatar" aria-hidden="true">S</span>
      </div>
    </header>
  );
}

/* --------------------------------------------------- Heute lernen cards */
function HeuteCard({ to, ring, icon, accent, kicker, title, meta, status }) {
  return (
    <Link to={to} className="learn-card" style={{ '--card-accent': accent }}>
      {ring != null
        ? <Ring value={ring} size={52} stroke={5} color={accent}><span className="learn-card__ringpct">{ring}%</span></Ring>
        : <span className="learn-card__icon">{icon}</span>}
      <span className="learn-card__body">
        <span className="learn-card__kicker">{kicker}</span>
        <span className="learn-card__title">{title}</span>
        {meta && <span className="learn-card__meta">{meta}</span>}
      </span>
      <span className="learn-card__status">{status} {Icon.arrow}</span>
    </Link>
  );
}

function HeuteLernen({ completed }) {
  const cont = useMemo(() => getContinueTarget(completed), [completed]);
  const quiz = useMemo(() => getQuizSuggestion(completed), [completed]);
  const exam = useMemo(() => getNextExam(), []);
  const cards = [];

  if (cont) {
    cards.push(
      <HeuteCard key="c" to={`/topic/${cont.module.id}/${cont.topic.id}`} accent={cont.module.accent}
        ring={getModuleProgress(cont.module, completed)} kicker="Weiterlernen"
        title={cont.topic.title} meta={cont.module.title} status="Fortsetzen" />,
    );
  }
  if (quiz) {
    cards.push(
      <HeuteCard key="q" to={`/quiz/${quiz.module.id}`} accent={quiz.module.accent}
        icon={Icon.quiz} kicker="Quiz" title={quiz.module.title}
        meta={`${quiz.questionCount} ${quiz.questionCount === 1 ? 'offene Frage' : 'offene Fragen'}`} status="Starten" />,
    );
  }
  if (exam) {
    cards.push(
      <HeuteCard key="e" to={exam.moduleId ? `/module/${exam.moduleId}` : '/'} accent={exam.module?.accent ?? 'var(--color-error)'}
        icon={Icon.exam} kicker="Prüfungsplan" title={exam.module?.title ?? exam.title}
        meta={exam.days === 0 ? 'Heute' : `in ${exam.days} ${exam.days === 1 ? 'Tag' : 'Tagen'}`} status="Vorbereiten" />,
    );
  }
  if (cards.length === 0) return null;

  return (
    <section aria-label="Heute lernen">
      <div className="section-head"><h2 className="section-title">Heute lernen</h2></div>
      <div className="learn-grid">{cards}</div>
    </section>
  );
}

/* ------------------------------------------------------------ Wochenplan */
function Wochenplan({ events }) {
  const now = useMemo(() => new Date(), []);
  const [view, setView] = useState('woche');
  const [weekOffset, setWeekOffset] = useState(0);
  const [viewMonth, setViewMonth] = useState(() => {
    const d = startOfDay(new Date());
    d.setDate(1);
    return d;
  });

  const weekStart = useMemo(() => getWeekStart(now, weekOffset), [now, weekOffset]);
  const days = useMemo(() => getWeekDays(weekStart, now), [weekStart, now]);
  const plan = useMemo(() => getWeekPlan(weekStart, events), [weekStart, events]);

  return (
    <section aria-label="Wochenplan">
      <div className="section-head">
        <h2 className="section-title">Wochenplan</h2>
        <div className="plan-controls">
          <div className="segmented" role="tablist" aria-label="Ansicht">
            <button type="button" role="tab" aria-selected={view === 'woche'} className={view === 'woche' ? 'is-active' : ''} onClick={() => setView('woche')}>Woche</button>
            <button type="button" role="tab" aria-selected={view === 'monat'} className={view === 'monat' ? 'is-active' : ''} onClick={() => setView('monat')}>Monat</button>
          </div>
          {view === 'woche' ? (
            <div className="plan-nav">
              <button type="button" onClick={() => setWeekOffset(o => o - 1)} aria-label="Vorherige Woche">{Icon.chevL}</button>
              <span className="plan-range">{formatWeekRange(weekStart)}</span>
              <button type="button" onClick={() => setWeekOffset(o => o + 1)} aria-label="Nächste Woche">{Icon.chevR}</button>
            </div>
          ) : (
            <div className="plan-nav">
              <button type="button" onClick={() => setViewMonth(m => new Date(m.getFullYear(), m.getMonth() - 1, 1))} aria-label="Vorheriger Monat">{Icon.chevL}</button>
              <span className="plan-range">{MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}</span>
              <button type="button" onClick={() => setViewMonth(m => new Date(m.getFullYear(), m.getMonth() + 1, 1))} aria-label="Nächster Monat">{Icon.chevR}</button>
            </div>
          )}
        </div>
      </div>

      <div className="panel plan">
        {view === 'woche' ? (
          <div className="week" role="table">
            <div className="week__corner" />
            {days.map(d => (
              <div key={d.iso} className={`week__dayhead${d.isToday ? ' week__dayhead--today' : ''}`}>
                <span className="week__dayname">{d.label}</span>
                <span className="week__daynum">{d.dayNum}</span>
              </div>
            ))}
            {plan.map(({ module, cells }) => (
              <Fragment key={module.id}>
                <div className="week__rowlabel">
                  <span className="week__rowdot" style={{ background: module.accent }} aria-hidden="true" />
                  <span className="week__rowname">{module.shortTitle ?? module.title}</span>
                </div>
                {cells.map((dayEvents, i) => (
                  <div key={i} className={`week__cell${days[i].isToday ? ' week__cell--today' : ''}`}>
                    {dayEvents.map(evt => (
                      <Link key={evt.id} to={evt.moduleId ? `/module/${evt.moduleId}` : '/'} className="week__chip" style={{ '--chip': module.accent }}>
                        {evt.time && <span className="week__chip-time">{evt.time}</span>}
                        <span className="week__chip-title">{evt.title}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        ) : (
          <MonthGrid viewMonth={viewMonth} events={events} now={now} />
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------- month grid (Monat) */
function MonthGrid({ viewMonth, events, now }) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const todayISO = toISODate(now);
  const firstOfMonth = new Date(year, month, 1);
  const lead = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const byDay = {};
  events.forEach(e => {
    const d = new Date(`${e.date}T00:00:00`);
    if (d.getFullYear() === year && d.getMonth() === month) {
      const n = d.getDate();
      (byDay[n] = byDay[n] || []).push(e);
    }
  });

  const cells = [];
  for (let i = 0; i < lead; i += 1) cells.push(<div key={`b${i}`} className="month__cell month__cell--blank" />);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = toISODate(new Date(year, month, day));
    const dayEvents = byDay[day] ?? [];
    cells.push(
      <div key={day} className={`month__cell${iso === todayISO ? ' month__cell--today' : ''}`}>
        <span className="month__num">{day}</span>
        <span className="month__chips">
          {dayEvents.slice(0, 2).map(evt => (
            <span key={evt.id} className="month__chip" style={{ '--chip': evt.module?.accent ?? 'var(--color-accent)' }}>{evt.title}</span>
          ))}
          {dayEvents.length > 2 && <span className="month__more">+{dayEvents.length - 2}</span>}
        </span>
      </div>,
    );
  }
  return (
    <div className="month">
      <div className="month__head">
        {WEEKDAY_LABELS.map(d => <span key={d} className="month__weekday">{d}</span>)}
      </div>
      <div className="month__grid">{cells}</div>
    </div>
  );
}

/* ----------------------------------------------------- Lernfortschritt */
function Lernfortschritt({ stats, completed }) {
  const modules = allModules.map(m => ({ module: m, pct: getModuleProgress(m, completed) }));
  const semester = semesters[0];
  return (
    <div className="panel progress-panel">
      <h3 className="panel__title">Lernfortschritt</h3>
      <div className="progress-panel__body">
        <div className="progress-panel__ring">
          <Ring value={stats.progress} size={132} stroke={11} color="var(--color-success)">
            <span className="progress-panel__big">{stats.progress}%</span>
            <span className="progress-panel__sub">gesamt</span>
          </Ring>
        </div>
        <ul className="legend">
          {modules.map(({ module, pct }) => (
            <li key={module.id} className="legend__row">
              <span className="legend__dot" style={{ background: module.accent }} aria-hidden="true" />
              <span className="legend__name">{module.shortTitle ?? module.title}</span>
              <ProgressBar value={pct} size="sm" color={module.accent} />
              <span className="legend__pct">{pct}%</span>
            </li>
          ))}
        </ul>
      </div>
      {semester && (
        <Link to={`/semester/${semester.id}`} className="panel__link">
          Detaillierte Statistik ansehen {Icon.arrow}
        </Link>
      )}
    </div>
  );
}

/* ------------------------------------------------------- Zuletzt gelernt */
function ZuletztGelernt({ recent, completed }) {
  const semester = semesters[0];
  return (
    <div className="panel">
      <div className="panel__head">
        <h3 className="panel__title">Zuletzt gelernt</h3>
        {semester && <Link to={`/semester/${semester.id}`} className="panel__link panel__link--sm">Alle anzeigen</Link>}
      </div>
      <ul className="recent">
        {recent.map(({ topic, module }) => {
          const pct = getModuleProgress(module, completed);
          return (
            <li key={`${module.id}-${topic.id}`}>
              <Link to={`/topic/${module.id}/${topic.id}`} className="recent__row" style={{ '--card-accent': module.accent }}>
                <span className="recent__thumb" aria-hidden="true">{Icon.book}</span>
                <span className="recent__body">
                  <span className="recent__title">{topic.title}</span>
                  <span className="recent__module">{module.title}</span>
                  <ProgressBar value={pct} size="sm" color={module.accent} />
                </span>
                <span className="recent__pct">{pct}%</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------- mini calendar */
function MiniCalendar({ viewMonth, selectedDate, events, onSelect, onPrev, onNext }) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const today = startOfDay(new Date());
  const firstOfMonth = new Date(year, month, 1);
  const lead = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const eventDays = new Set(
    events.filter(e => {
      const d = new Date(`${e.date}T00:00:00`);
      return d.getFullYear() === year && d.getMonth() === month;
    }).map(e => Number(e.date.split('-')[2])),
  );

  const cells = [];
  for (let i = 0; i < lead; i += 1) cells.push(<span key={`b${i}`} className="cal__cell cal__cell--blank" />);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const isToday = isSameISODate(toISODate(today), date);
    const isSelected = isSameISODate(toISODate(selectedDate), date);
    cells.push(
      <button key={day} type="button" onClick={() => onSelect(date)}
        className={`cal__cell cal__day${isToday ? ' cal__day--today' : ''}${isSelected ? ' cal__day--selected' : ''}`}
        aria-pressed={isSelected} aria-label={`${day}. ${MONTHS[month]}`}>
        {day}
        {eventDays.has(day) && <span className="cal__dot" aria-hidden="true" />}
      </button>,
    );
  }

  return (
    <div className="cal">
      <div className="cal__head">
        <span className="cal__month">{MONTHS[month]} {year}</span>
        <span className="cal__nav">
          <button type="button" onClick={onPrev} aria-label="Vorheriger Monat">{Icon.chevL}</button>
          <button type="button" onClick={onNext} aria-label="Nächster Monat">{Icon.chevR}</button>
        </span>
      </div>
      <div className="cal__grid cal__weekdays">
        {WEEKDAY_LABELS.map(d => <span key={d} className="cal__weekday">{d}</span>)}
      </div>
      <div className="cal__grid">{cells}</div>
    </div>
  );
}

/* ---------------------------------------------------------- tasks panel */
function TasksPanel() {
  const seed = useMemo(() => getSeedTasks(), []);
  const [state, setState] = useState(() => getTaskState());
  const moduleById = useMemo(() => Object.fromEntries(allModules.map(m => [m.id, m])), []);
  const doneCount = seed.filter(t => state[t.id]).length;

  return (
    <div className="panel">
      <div className="panel__head">
        <h3 className="panel__title">Notizen &amp; Aufgaben</h3>
        <span className="panel__count">{doneCount}/{seed.length}</span>
      </div>
      <ul className="tasks">
        {seed.map(task => {
          const done = !!state[task.id];
          const mod = task.moduleId ? moduleById[task.moduleId] : null;
          return (
            <li key={task.id}>
              <button type="button" className={`task${done ? ' task--done' : ''}`} onClick={() => setState(toggleTask(task.id))} aria-pressed={done}>
                <span className="task__box" aria-hidden="true">{done && Icon.check}</span>
                <span className="task__body">
                  <span className="task__label">{task.label}</span>
                  {mod && <span className="task__module" style={{ color: mod.accent }}>{mod.title}</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------- focus streak */
function FokusStreak() {
  const { days, week, todayIndex } = useMemo(() => getFocusStreak(new Date()), []);
  return (
    <div className="panel streak">
      <div className="streak__head">
        <span className="streak__icon" aria-hidden="true">{Icon.flame}</span>
        <span className="streak__count">
          <span className="streak__num">{days}</span>
          <span className="streak__unit">Tage Fokus-Streak</span>
        </span>
      </div>
      <div className="streak__week">
        {WEEKDAY_LABELS.map((label, i) => (
          <span key={label} className={`streak__day${week[i] ? ' streak__day--done' : ''}${i === todayIndex ? ' streak__day--today' : ''}`}>
            <span className="streak__dot" aria-hidden="true">{week[i] && Icon.check}</span>
            <span className="streak__label">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== page */
export function Home() {
  const completed = useMemo(() => getCompletedTopics(), []);
  const stats = useMemo(() => getStats(allModules), []);
  const events = useMemo(() => getStudyEvents(new Date()), []);
  const nextExam = useMemo(() => getNextExam(new Date(), events), [events]);
  const recent = useMemo(() => getRecentTopics(4), []);
  const now = useMemo(() => new Date(), []);

  const todayCount = events.filter(e => isSameISODate(e.date, now)).length;

  const [selectedDate, setSelectedDate] = useState(() => startOfDay(new Date()));
  const [calMonth, setCalMonth] = useState(() => {
    const d = startOfDay(new Date());
    d.setDate(1);
    return d;
  });
  const shiftCal = delta => setCalMonth(m => new Date(m.getFullYear(), m.getMonth() + delta, 1));

  return (
    <div className="home">
      <div className="home__main">
        <TopBar />

        <div className="home__hero">
          <h1 className="home__greeting">Bereit für deine Prüfungsvorbereitung 👋</h1>
          <p className="home__subtitle">
            {greetingFor(now)}. {todayCount > 0
              ? `Du hast heute ${todayCount} ${todayCount === 1 ? 'Lerneinheit' : 'Lerneinheiten'} geplant.`
              : 'Für heute ist nichts geplant. Ein guter Moment zum Wiederholen.'}
          </p>
        </div>

        <HeuteLernen completed={completed} />

        <Wochenplan events={events} />

        <div className="home__split">
          <Lernfortschritt stats={stats} completed={completed} />
          <ZuletztGelernt recent={recent} completed={completed} />
        </div>
      </div>

      <aside className="home__rail" aria-label="Übersicht">
        <div className="panel next-exam-panel">
          <h3 className="panel__title">Nächste Prüfung</h3>
          {nextExam ? (
            <Link to={nextExam.moduleId ? `/module/${nextExam.moduleId}` : '/'} className="next-exam">
              <span className="next-exam__days">
                <span className="next-exam__num">{nextExam.days}</span>
                <span className="next-exam__unit">{nextExam.days === 1 ? 'Tag' : 'Tage'}</span>
              </span>
              <span className="next-exam__info">
                <span className="next-exam__name">{nextExam.module?.title ?? nextExam.title}</span>
                <span className="next-exam__date">
                  {selectedExamDateLabel(nextExam)}
                </span>
              </span>
            </Link>
          ) : (
            <p className="panel__note">Keine Prüfung hinterlegt.</p>
          )}
        </div>

        <div className="panel">
          <h3 className="panel__title">Prüfungsplan</h3>
          <MiniCalendar viewMonth={calMonth} selectedDate={selectedDate} events={events}
            onSelect={setSelectedDate} onPrev={() => shiftCal(-1)} onNext={() => shiftCal(1)} />
          <div className="cal-legend">
            <span><span className="cal-legend__dot cal-legend__dot--today" /> Heute</span>
            <span><span className="cal-legend__dot cal-legend__dot--event" /> Termin</span>
          </div>
        </div>

        <TasksPanel />

        <FokusStreak />
      </aside>
    </div>
  );
}

function selectedExamDateLabel(exam) {
  const months = ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const d = new Date(`${exam.date}T00:00:00`);
  const date = `${d.getDate()}. ${months[d.getMonth()]}`;
  const label = exam.module ? exam.title : 'Prüfung';
  return `${label} · ${date}${exam.time ? ` · ${exam.time}` : ''}`;
}
