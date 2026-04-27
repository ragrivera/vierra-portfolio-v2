import { useEffect, useState } from 'react';

const ITEMS = [
  { id: 'hero', label: '00 / index' },
  { id: 'about', label: '01 / about' },
  { id: 'projects', label: '02 / projects' },
  { id: 'stack', label: '03 / stack' },
  { id: 'log', label: '04 / log' },
  { id: 'contact', label: '05 / signal' },
] as const;

export function SideNav() {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const sections = ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let next = 'hero';
      for (const s of sections) {
        if (s.offsetTop <= mid) next = s.id;
      }
      setActiveId(next);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      {ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => onClick(e, item.id)}
          className={activeId === item.id ? 'active' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
