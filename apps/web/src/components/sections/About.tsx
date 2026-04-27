import type { AboutSection } from '@vierra/api-client';
import { SectionLabel } from '../ui/SectionLabel';

// The body uses tiny inline tags — <em>, <cy>, <pu> — to mark accent words
// without taking on a full markdown renderer. We translate the custom tags
// to spans + classes here.
function renderBody(bodyMd: string): string {
  return bodyMd
    .replace(/\n\n/g, '<br><br>')
    .replace(/<cy>/g, '<span class="cy">')
    .replace(/<pu>/g, '<span class="pu">')
    .replace(/<\/cy>/g, '</span>')
    .replace(/<\/pu>/g, '</span>');
}

export function About({ about }: { about: AboutSection }) {
  return (
    <section id="about" className="shell">
      <SectionLabel num="01" title="about" style={{ margin: '0px 0px 15px' }} />
      <div className="about-wrap">
        <p className="about-text" dangerouslySetInnerHTML={{ __html: renderBody(about.bodyMd) }} />
        <div className="about-card">
          {about.idCardRows.map((row, i) => (
            <div key={`${row.label}-${i}`}>
              <div className="row">
                <span className="k">{row.label}</span>
                <span className={['v', row.accent].filter(Boolean).join(' ')}>{row.value}</span>
              </div>
              {i === 3 && i !== about.idCardRows.length - 1 ? <div className="divider" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
