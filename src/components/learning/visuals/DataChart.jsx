import { lazy } from 'react';
import { VisualFrame } from './VisualFrame.jsx';

const DataChartImpl = lazy(() => import('./DataChartImpl.jsx'));

// Public palette component. Keeps recharts out of the initial bundle.
export function DataChart({ title, source, height = 320, ...props }) {
  return (
    <VisualFrame title={title} source={source} height={height}>
      <DataChartImpl height={height} {...props} />
    </VisualFrame>
  );
}

export default DataChart;
