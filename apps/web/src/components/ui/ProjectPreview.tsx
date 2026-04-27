import type { PreviewKind } from '@vierra/api-client';

const STROKE: Record<PreviewKind, string> = {
  lines: '#a855f7',
  wave: '#ec4899',
  bars: '#22d3ee',
  grid: '#a855f7',
  spiral: '#ec4899',
  pulse: '#22d3ee',
};

export function ProjectPreview({ kind }: { kind: PreviewKind }) {
  const stroke = STROKE[kind];

  if (kind === 'lines') {
    return (
      <svg viewBox="0 0 100 64" fill="none" stroke={stroke} strokeWidth="0.6">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="4" x2="96" y1={6 + i * 7} y2={6 + i * 7} opacity={0.3 + i * 0.08} />
        ))}
        <line x1="40" x2="40" y1="2" y2="62" stroke="#ec4899" strokeWidth="0.4" />
      </svg>
    );
  }
  if (kind === 'wave') {
    return (
      <svg viewBox="0 0 100 64" fill="none" stroke={stroke} strokeWidth="0.8">
        <path d="M2 32 Q 14 8 26 32 T 50 32 T 74 32 T 98 32" />
        <path d="M2 40 Q 14 16 26 40 T 50 40 T 74 40 T 98 40" stroke="#22d3ee" opacity="0.6" />
      </svg>
    );
  }
  if (kind === 'bars') {
    return (
      <svg viewBox="0 0 100 64" fill={stroke}>
        {[20, 38, 14, 50, 28, 44, 22, 36, 18, 30].map((h, i) => (
          <rect
            key={i}
            x={4 + i * 9.6}
            y={62 - h}
            width="6"
            height={h}
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
      </svg>
    );
  }
  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 100 64" fill="none" stroke={stroke} strokeWidth="0.4">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={4 + i * 9.2} x2={4 + i * 9.2} y1="4" y2="60" opacity="0.4" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="4" x2="96" y1={4 + i * 9.2} y2={4 + i * 9.2} opacity="0.4" />
        ))}
        <circle cx="50" cy="32" r="4" fill="#ec4899" stroke="none" />
      </svg>
    );
  }
  if (kind === 'spiral') {
    return (
      <svg viewBox="0 0 100 64" fill="none" stroke={stroke} strokeWidth="0.6">
        <path d="M50 32 m 0 -20 a 20 20 0 1 1 -0.01 0 m 0.01 4 a 16 16 0 1 0 0.01 0 m -0.01 4 a 12 12 0 1 1 -0.01 0 m 0.01 4 a 8 8 0 1 0 0.01 0" />
      </svg>
    );
  }
  if (kind === 'pulse') {
    return (
      <svg viewBox="0 0 100 64" fill="none" stroke={stroke} strokeWidth="0.8">
        <path d="M2 32 L 22 32 L 28 18 L 36 46 L 44 8 L 52 56 L 60 32 L 98 32" />
      </svg>
    );
  }
  return null;
}
