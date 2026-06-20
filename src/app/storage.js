const KEYS = {
  COMPLETED_TOPICS: 'studyos_completed_topics',
  LAST_TOPIC: 'studyos_last_topic',
  QUIZ_RESULTS: 'studyos_quiz_results',
  TOPIC_PROGRESS: 'studyos_topic_progress',
  TASK_STATE: 'studyos_task_state',
};

function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable or full — fail silently
  }
}

// Completed topics
export function getCompletedTopics() {
  return safeGet(KEYS.COMPLETED_TOPICS, []);
}

export function markTopicDone(topicId) {
  const completed = getCompletedTopics();
  if (!completed.includes(topicId)) {
    safeSet(KEYS.COMPLETED_TOPICS, [...completed, topicId]);
  }
}

export function unmarkTopicDone(topicId) {
  const completed = getCompletedTopics();
  safeSet(KEYS.COMPLETED_TOPICS, completed.filter(id => id !== topicId));
}

export function isTopicDone(topicId) {
  return getCompletedTopics().includes(topicId);
}

// Last visited topic
export function setLastTopic(moduleId, topicId) {
  safeSet(KEYS.LAST_TOPIC, { moduleId, topicId, timestamp: Date.now() });
}

export function getLastTopic() {
  return safeGet(KEYS.LAST_TOPIC, null);
}

// Quiz results
export function saveQuizResult(moduleId, result) {
  const results = safeGet(KEYS.QUIZ_RESULTS, {});
  results[moduleId] = {
    ...result,
    timestamp: Date.now(),
  };
  safeSet(KEYS.QUIZ_RESULTS, results);
}

export function getQuizResult(moduleId) {
  const results = safeGet(KEYS.QUIZ_RESULTS, {});
  return results[moduleId] ?? null;
}

export function getAllQuizResults() {
  return safeGet(KEYS.QUIZ_RESULTS, {});
}

// Task / note completion state.
// Seed tasks live in data/dashboard.js; only the done-state is persisted here,
// keyed by task id, so seed content can change without orphaning storage.
export function getTaskState() {
  return safeGet(KEYS.TASK_STATE, {});
}

export function toggleTask(taskId) {
  const state = getTaskState();
  const next = { ...state, [taskId]: !state[taskId] };
  safeSet(KEYS.TASK_STATE, next);
  return next;
}

// Derived stats
export function getStats(allModules) {
  const completed = getCompletedTopics();
  const quizResults = getAllQuizResults();

  const topicIds = new Set(allModules.flatMap(module => (module.topics ?? []).map(topic => topic.id)));
  const totalTopics = topicIds.size;
  const completedCount = completed.filter(topicId => topicIds.has(topicId)).length;
  const progress = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const totalQuizPoints = Object.values(quizResults).reduce((sum, r) => sum + (r.score ?? 0), 0);

  return {
    progress,
    completedTopics: completedCount,
    totalTopics,
    quizPoints: totalQuizPoints,
    studyHours: Math.round(completedCount * 0.75),
  };
}
