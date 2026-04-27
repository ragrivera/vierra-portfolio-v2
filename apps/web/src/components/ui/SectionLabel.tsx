import type { CSSProperties } from 'react';

export function SectionLabel({
  num,
  title,
  style,
}: {
  num: string;
  title: string;
  style?: CSSProperties;
}) {
  return (
    <div className="sec-label" style={style}>
      <span className="bracket">[</span>
      <span className="num">{num}</span>
      <span className="bracket">]</span> {title}
      <span className="bar" />
    </div>
  );
}
