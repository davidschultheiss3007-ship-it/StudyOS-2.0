import { meta as meta01 } from './01-einfuehrung.js';
import Content01 from './01-einfuehrung.mdx';
import { meta as meta02 } from './02-modell-der-zwei-systeme.js';
import Content02 from './02-modell-der-zwei-systeme.mdx';
import { meta as meta03 } from './03-heuristiken-und-kognitive-verzerrungen.js';
import Content03 from './03-heuristiken-und-kognitive-verzerrungen.mdx';
import { meta as meta04 } from './04-entscheidungen-unter-unsicherheit.js';
import Content04 from './04-entscheidungen-unter-unsicherheit.mdx';
import { meta as meta05 } from './05-zeit-in-der-oekonomie.js';
import Content05 from './05-zeit-in-der-oekonomie.mdx';
import { meta as meta06 } from './06-prospect-theory-und-ihre-konsequenzen.js';
import Content06 from './06-prospect-theory-und-ihre-konsequenzen.mdx';
import { meta as meta07 } from './07-altersvorsorge-und-private-finanzplanung.js';
import Content07 from './07-altersvorsorge-und-private-finanzplanung.mdx';
import { meta as meta08 } from './08-spekulationsblasen-an-finanzmaerkten.js';
import Content08 from './08-spekulationsblasen-an-finanzmaerkten.mdx';
import { meta as meta09 } from './09-kapitalanlage-und-kapitalmarktanomalien.js';
import Content09 from './09-kapitalanlage-und-kapitalmarktanomalien.mdx';

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
