export const APP_NAME = 'StudyOS';
export const APP_VERSION = '2.0.0';

export const ROUTES = {
  HOME: '/',
  SEMESTER: '/semester/:semesterId',
  MODULE: '/module/:moduleId',
  TOPIC: '/topic/:moduleId/:topicId',
  QUIZ: '/quiz/:moduleId',
  SETTINGS: '/settings',
};

export const TOPIC_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
};

export const MODULE_STATUS = {
  PLANNED: 'planned',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
};

export const SEMESTER_STATUS = {
  CURRENT: 'current',
  PLANNED: 'planned',
  DONE: 'done',
};
