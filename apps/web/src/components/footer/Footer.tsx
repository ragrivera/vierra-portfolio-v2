import { useEffect, useState } from 'react';
import type { SiteSettings } from '@vierra/api-client';

export function Footer({ site }: { site: SiteSettings }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setPct(Math.round((window.scrollY / Math.max(1, max)) * 100));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer>
      <div>{site.footerLine}</div>
      <div className="right">
        <span>© 2026</span>
        {site.buildHash ? <span className="cy">build {site.buildHash}</span> : null}
        <span>{pct}%</span>
      </div>
    </footer>
  );
}
