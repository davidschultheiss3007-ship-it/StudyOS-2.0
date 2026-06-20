import { bundle as assetManagement } from '../modules/semester-4/asset-management/index.js';
import { bundle as behavioralFinance } from '../modules/semester-4/behavioral-finance/index.js';
import { bundle as humanResources } from '../modules/semester-4/human-resources/index.js';
import { bundle as businessEnglish } from '../modules/semester-4/business-english/index.js';

const bundles = [
  assetManagement,
  behavioralFinance,
  humanResources,
  businessEnglish,
];

export const allModules = bundles.map(b => b.module);

const topicMap = Object.fromEntries(bundles.map(b => [b.module.id, b.topics]));
const questionsMap = Object.fromEntries(bundles.map(b => [b.module.id, b.questions]));
const examsMap = Object.fromEntries(bundles.map(b => [b.module.id, b.exams ?? []]));

export function getModuleById(id) {
  return allModules.find(m => m.id === id) ?? null;
}

export function getModulesBySemester(semesterId) {
  return allModules.filter(m => m.semesterId === semesterId);
}

export function getTopicsForModule(moduleId) {
  return topicMap[moduleId] ?? [];
}

export function getTopicById(moduleId, topicId) {
  const topics = getTopicsForModule(moduleId);
  return topics.find(t => t.id === topicId) ?? null;
}

export function getQuestionsForModule(moduleId) {
  return questionsMap[moduleId] ?? [];
}

export function getExamsForModule(moduleId) {
  return examsMap[moduleId] ?? [];
}
