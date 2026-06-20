import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line, Text, Html } from '@react-three/drei';
import { useMemo } from 'react';

// A small, purpose-built 3D scene for the risk/return space: a cloud of
// portfolio points over (risk σ, return μ) with the efficient frontier
// highlighted. Driven by data so it is not decorative-only.
// points = [{ x, y, z?, efficient?, label? }] in normalized 0..1 ranges.

function Axes({ size = 4 }) {
  const axis = (a, b, color) => <Line points={[a, b]} color={color} lineWidth={1.5} />;
  return (
    <group>
      {axis([0, 0, 0], [size, 0, 0], '#9aa7bd')}
      {axis([0, 0, 0], [0, size, 0], '#9aa7bd')}
      {axis([0, 0, 0], [0, 0, size], '#9aa7bd')}
      <Text position={[size + 0.3, 0, 0]} fontSize={0.32} color="#5b6880">σ (Risiko)</Text>
      <Text position={[0, size + 0.3, 0]} fontSize={0.32} color="#5b6880">μ (Rendite)</Text>
    </group>
  );
}

export default function Scene3DImpl({ points = [], frontier = [], height = 360 }) {
  const S = 4;
  const scaled = useMemo(() => points.map(p => ({ ...p, pos: [p.x * S, p.y * S, (p.z ?? 0.5) * S] })), [points]);
  const frontierPts = useMemo(() => frontier.map(p => [p.x * S, p.y * S, (p.z ?? 0.5) * S]), [frontier]);

  return (
    <div style={{ height }}>
      <Canvas camera={{ position: [6.5, 5, 7], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={0.6} />
        <Axes size={S} />
        {frontierPts.length > 1 && <Line points={frontierPts} color="#3b76f6" lineWidth={3} />}
        {scaled.map((p, i) => (
          <mesh key={i} position={p.pos}>
            <sphereGeometry args={[p.efficient ? 0.16 : 0.1, 16, 16]} />
            <meshStandardMaterial color={p.efficient ? '#16a34a' : '#7c5cf0'} emissive={p.efficient ? '#16a34a' : '#000000'} emissiveIntensity={p.efficient ? 0.3 : 0} />
            {p.label && <Html distanceFactor={10} position={[0, 0.25, 0]}><span className="whitespace-nowrap rounded bg-card/90 px-1 text-[10px] text-foreground">{p.label}</span></Html>}
          </mesh>
        ))}
        <OrbitControls enablePan={false} enableZoom makeDefault />
      </Canvas>
    </div>
  );
}
