import { useEffect, useRef } from 'react';
import type { Project } from '@vierra/api-client';
import { SectionLabel } from '../ui/SectionLabel';
import { ProjectPreview } from '../ui/ProjectPreview';

export function Projects({ projects }: { projects: Project[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.project'));

    const onMove = (e: MouseEvent) => {
      for (const card of cards) {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty('--mx', `${x}%`);
        card.style.setProperty('--my', `${y}%`);
      }
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, [projects.length]);

  return (
    <section id="projects" className="shell">
      <SectionLabel num="02" title="selected_projects.dat" style={{ margin: '50px 0px 15px' }} />
      <div ref={gridRef} className="projects">
        {projects.map((p) => (
          <article key={p.id} className="project" data-accent={p.accent}>
            <div className="proj-head">
              <span className="proj-num">{p.num} //</span>
              <span className={`proj-status ${p.status}`}>
                <span className="d" /> {p.status}
              </span>
            </div>
            <h3 className="proj-title">{p.title}</h3>
            {p.tag ? <div className="proj-tag">{p.tag}</div> : null}
            {p.description ? <p className="proj-desc">{p.description}</p> : null}
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a
              href={p.caseStudyUrl ?? '#'}
              className="proj-link"
              onClick={(e) => {
                if (!p.caseStudyUrl) e.preventDefault();
              }}
            >
              view case study
            </a>
            <div className="proj-preview">
              <ProjectPreview kind={p.previewKind} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
