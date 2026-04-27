import type { StackCategory } from '@vierra/api-client';
import { SectionLabel } from '../ui/SectionLabel';

export function Stack({ stack }: { stack: StackCategory[] }) {
  return (
    <section id="stack" className="shell">
      <SectionLabel num="03" title="stack/loadout" style={{ margin: '50px 0px 17px' }} />
      <div className="stack-grid">
        {stack.map((cell) => (
          <div key={cell.id} className="stack-cell">
            <div className="cat">{cell.category}</div>
            <div className="items">
              {cell.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
