import { meta as meta01 } from './01-einfuehrung.js';
import Content01 from './01-einfuehrung.mdx';
import { meta as meta02 } from './02-unternehmensstrategie-und-personalpolitik.js';
import Content02 from './02-unternehmensstrategie-und-personalpolitik.mdx';
import { meta as meta03 } from './03-fuehrung-und-unternehmensethik.js';
import Content03 from './03-fuehrung-und-unternehmensethik.mdx';
import { meta as meta04 } from './04-operative-personalplanung.js';
import Content04 from './04-operative-personalplanung.mdx';
import { meta as meta05 } from './05-personalbeschaffung.js';
import Content05 from './05-personalbeschaffung.mdx';
import { meta as meta06 } from './06-personalauswahl-und-arbeitszeugnisse.js';
import Content06 from './06-personalauswahl-und-arbeitszeugnisse.mdx';
import { meta as meta07 } from './07-personalauswahl-verfahren.js';
import Content07 from './07-personalauswahl-verfahren.mdx';
import { meta as meta08 } from './08-personaladministration-sozialversicherung-dsgvo.js';
import Content08 from './08-personaladministration-sozialversicherung-dsgvo.mdx';
import { meta as meta09 } from './09-personalcontrolling-onboarding-laufbahnplanung.js';
import Content09 from './09-personalcontrolling-onboarding-laufbahnplanung.mdx';
import { meta as meta10 } from './10-arbeitsorganisation-und-personalbeurteilung.js';
import Content10 from './10-arbeitsorganisation-und-personalbeurteilung.mdx';

export const topics = [
  { ...meta01, Content: Content01 },
  { ...meta02, Content: Content02 },
  { ...meta03, Content: Content03 },
  { ...meta04, Content: Content04 },
  { ...meta05, Content: Content05 },
  { ...meta06, Content: Content06 },
  { ...meta07, Content: Content07 },
  { ...meta08, Content: Content08 },
  { ...meta09, Content: Content09 },
  { ...meta10, Content: Content10 },
];

export default topics;
