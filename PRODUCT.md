# Product

## Register

product

## Users

University students preparing for exams, working mostly alone at a desk. They open StudyOS to answer one question fast: "what do I work on right now?" Sessions are short and goal-driven — read a topic, run a quiz, check how far along a module is, see how many days until the next exam. They are not browsing; they are in a task.

## Product Purpose

StudyOS 2.0 is a local study hub for a degree program. It organizes semesters, modules, topics, quizzes, learning progress, planning, and exam preparation in one client-side app. No GitHub Pages deployment or offline-first constraint applies. Success is when a student lands on the home screen and, within a few seconds, knows exactly where to resume and how close they are to being exam-ready — without hunting through menus or staring at empty dashboards.

## Brand Personality

Calm, focused, high-quality, productive. Three words: composed, precise,
trustworthy. The interface should feel like a well-made study desk, not a
gamified app or a marketing site. Tone in copy is plain and direct German:
short labels, verbs that say what happens, no hype. It should reassure through
clarity, not motivate through noise.

## Anti-references

- Marketing landing pages: oversized hero headlines, gradient blobs, glossy CTA
  banners. This is a tool, not a pitch.
- Glassmorphism, decorative gradients, glowing cards, neon accents.
- Gamified study apps (Duolingo-style mascots, confetti, streak-shaming).
- Empty-state-dominated dashboards: rows of blank tiles saying "nothing here yet".
- Overstuffed analytics dashboards with a wall of charts nobody reads.

## Design Principles

1. **Answer "what now?" first.** The most valuable pixel is the next concrete
   action: resume a topic, start a quiz, prepare for the nearest exam.
2. **Populated by default.** Real module/topic/progress data fills the surface;
   local seed data stands in where the user hasn't generated history yet. Empty
   states are the exception, never the layout.
3. **Restraint over decoration.** One cobalt accent carries actions, selection,
   and state. Everything else is a calm neutral. No ornament that doesn't inform.
4. **Density with air.** Show real information at a glance, but give it rhythm.
   Group related things; never wall-to-wall cards.
5. **Durable and expressive.** Data shapes leave room to merge local, Google Calendar, and ICS sources later without a rewrite. Web fonts and CDN resources are permitted. Topic content should use the richest visual form available (Recharts, Mermaid, KaTeX) — not fall back to plain prose when a chart or diagram would be clearer.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Body and label text meets ≥4.5:1 against its surface;
large text and UI chrome ≥3:1. Every interactive element has visible focus
(accent ring), plus hover/active/disabled states. Color is never the only signal
(icons, text, and shape back it up). Respect `prefers-reduced-motion`: all motion
degrades to instant or a simple crossfade. Keyboard navigation works across nav,
search, cards, and the task list.
