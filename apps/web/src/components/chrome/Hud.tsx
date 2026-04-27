import { useEffect, useState } from 'react';
import { formatUtcClock } from '@vierra/utils';

export function Hud() {
  const [clock, setClock] = useState(() => formatUtcClock());

  useEffect(() => {
    const tick = () => setClock(formatUtcClock());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hud">
      <div>
        <span className="pill">
          <span className="dot" /> SYS//ONLINE
        </span>
        <span>NODE: vierra@mainframe</span>
      </div>
      <div>
        <span>{clock}</span>
        <span className="pill">
          <span className="dot warn" /> COFFEE: LOW
        </span>
        <span>v2.4.0</span>
      </div>
    </div>
  );
}
