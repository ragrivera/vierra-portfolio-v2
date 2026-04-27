import { Fragment, useEffect, useState, type CSSProperties } from 'react';
import type { CareerEntry } from '@vierra/api-client';
import { SectionLabel } from '../ui/SectionLabel';

const Y_POSITIONS = [70, 35, 60, 25];
const MAX_YEAR = 2026;

export function Career({ entries }: { entries: CareerEntry[] }) {
  const [idx, setIdx] = useState(Math.max(0, entries.length - 1));
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIdx((i) => Math.min(entries.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIdx((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entries.length]);

  if (entries.length === 0) return null;

  const active = entries[idx]!;

  const minYear = entries[0]!.fromYear;
  const span = MAX_YEAR - minYear;
  const yearToX = (y: number) => 6 + ((y - minYear) / span) * 88;

  const years: number[] = [];
  for (let y = minYear; y <= MAX_YEAR; y += 2) years.push(y);

  const path = entries
    .map((j, i) => {
      const x = yearToX(j.fromYear);
      const y = Y_POSITIONS[i % Y_POSITIONS.length];
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const cardStyle = {
    '--card-color': active.color,
    '--card-glow': `${active.color}26`,
  } as CSSProperties;

  return (
    <section id="log" className="shell">
      <SectionLabel num="04" title="changelog/career" style={{ margin: '50px 0px 15px' }} />
      <div className="career">
        <div className="career-head">
          <div>// career.log — interactive timeline · {entries.length} entries</div>
          <div className="right">
            <span>cursor</span>
            <span className="pos">{String(idx + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span className="total">{String(entries.length).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="career-body">
          <div className="career-card" style={cardStyle} key={active.id}>
            {active.tag || active.fromYear ? (
              <div className="cc-meta">
                {active.tag ? <span className="tag">{active.tag}</span> : null}
                <span className="range">
                  {active.fromYear} — {active.toYear}
                </span>
              </div>
            ) : null}
            <h3 className="cc-title">{active.role}</h3>
            <div className="cc-org">// {active.org}</div>
            {active.description ? <p className="cc-desc">{active.description}</p> : null}
            {active.stats.length > 0 ? (
              <div className="cc-stats">
                {active.stats.map((s) => (
                  <div key={s.k}>
                    <div className="k">{s.k}</div>
                    <div className="v">{s.v}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="career-axis">
            <div className="axis-canvas">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="axisGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d={path}
                  fill="none"
                  stroke="url(#axisGrad)"
                  strokeWidth="0.6"
                  vectorEffect="non-scaling-stroke"
                />
                {entries.map((j, i) => (
                  <line
                    key={`p${i}`}
                    x1={yearToX(j.fromYear)}
                    x2={yearToX(j.fromYear)}
                    y1={Y_POSITIONS[i % Y_POSITIONS.length]}
                    y2={92}
                    stroke={i === idx ? j.color : 'rgba(180,150,255,0.18)'}
                    strokeDasharray="1 2"
                    strokeWidth="0.4"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              {years.map((y) => (
                <div key={y} className="axis-tick" style={{ left: `${yearToX(y)}%` }}>
                  {y === MAX_YEAR ? 'now' : y}
                </div>
              ))}
              {entries.map((j, i) => {
                const isActive = i === idx;
                const yPos = Y_POSITIONS[i % Y_POSITIONS.length]!;
                const nodeStyle = {
                  left: `${yearToX(j.fromYear)}%`,
                  top: `${yPos}%`,
                  '--node-color': j.color,
                } as CSSProperties;
                return (
                  <Fragment key={j.id}>
                    <button
                      className={`axis-node${isActive ? ' is-active' : ''}`}
                      style={nodeStyle}
                      onClick={() => setIdx(i)}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(null)}
                      aria-label={`${j.role} at ${j.org}`}
                    />
                    <div
                      className={`axis-label${isActive || hover === i ? ' is-active' : ''}`}
                      style={{
                        left: `${yearToX(j.fromYear)}%`,
                        top: `calc(${yPos}% - 22px)`,
                      }}
                    >
                      {j.org}
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="axis-controls">
              <button
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                disabled={idx === 0}
                type="button"
              >
                ◂ prev
              </button>
              <button
                onClick={() => setIdx((i) => Math.min(entries.length - 1, i + 1))}
                disabled={idx === entries.length - 1}
                type="button"
              >
                next ▸
              </button>
              <span className="hint">
                <kbd>←</kbd>
                <kbd>→</kbd> to scrub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

