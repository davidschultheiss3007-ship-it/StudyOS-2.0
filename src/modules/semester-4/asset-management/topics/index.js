import { meta as meta01 } from './01-einfuehrung.js';
import Content01 from './01-einfuehrung.mdx';
import { meta as meta02 } from './02-traditionelle-assetklassen.js';
import Content02 from './02-traditionelle-assetklassen.mdx';
import { meta as meta03 } from './03-alternative-assetklassen.js';
import Content03 from './03-alternative-assetklassen.mdx';
import { meta as meta04 } from './04-mathemat-strat-grundlagen.js';
import Content04 from './04-mathemat-strat-grundlagen.mdx';
import { meta as meta05 } from './05-grundlagen-der-portfoliotheorie.js';
import Content05 from './05-grundlagen-der-portfoliotheorie.mdx';
import { meta as meta06 } from './06-portfoliomanagement.js';
import Content06 from './06-portfoliomanagement.mdx';
import { meta as meta07 } from './07-performanceanalyse.js';
import Content07 from './07-performanceanalyse.mdx';
import { meta as meta08 } from './08-aktives-vs-passives-management.js';
import Content08 from './08-aktives-vs-passives-management.mdx';
import { meta as meta09 } from './09-fintechs-im-asset-management.js';
import Content09 from './09-fintechs-im-asset-management.mdx';

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
];

export default topics;
