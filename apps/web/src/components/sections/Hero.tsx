import type { SiteSettings } from '@vierra/api-client';
import { Typewriter } from '../ui/Typewriter';

const ASCII = `    ▄█    █▄   ▄█    ▄████████    ▄████████    ▄████████    ▄████████
   ███    ███ ███   ███    ███   ███    ███   ███    ███   ███    ███
   ███    ███ ███▌  ███    █▀    ███    ███   ███    ███   ███    ███
   ███    ███ ███▌ ▄███▄▄▄      ▄███▄▄▄▄██▀  ▄███▄▄▄▄██▀   ███    ███
   ███    ███ ███▌▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ▀▀███▀▀▀▀▀   ▀███████████
   ███    ███ ███   ███    █▄  ▀███████████ ▀███████████   ███    ███
   ███    ███ ███   ███    ███   ███    ███   ███    ███   ███    ███
    ▀██████▀  █▀    ██████████   ███    ███   ███    ███   ███    █▀
                                 ███    ███   ███    ███
// ALL SYSTEMS NOMINAL
// LATENCY: 12ms
// LOAD: 0.42`;

export function Hero({ site }: { site: SiteSettings }) {
  return (
    <section id="hero" className="hero shell">
      <div className="hero-ascii" aria-hidden="true">
        {ASCII}
      </div>
      <div className="hero-handle">
        @{site.handle}
        {site.heroSubtitle ? (
          <span style={{ color: 'var(--ink-faint)', marginLeft: 8 }}>{site.heroSubtitle}</span>
        ) : null}
      </div>
      <h1 className="hero-name">
        <span className="glitch" data-text={site.handle}>
          {site.handle}
        </span>
        <span className="dot">_</span>
      </h1>
      <div className="hero-typed">
        <span className="prompt">~$</span>
        <Typewriter />
        <span className="caret" />
      </div>
      <div className="hero-meta">
        <div>
          <div className="k">status</div>
          <div className="v cyan">{site.heroStatus}</div>
        </div>
        <div>
          <div className="k">location</div>
          <div className="v">{site.heroLocation}</div>
        </div>
        <div>
          <div className="k">stack</div>
          <div className="v pink">{site.heroStack}</div>
        </div>
        <div>
          <div className="k">commits/yr</div>
          <div className="v purple">{site.heroCommitsYr?.toLocaleString()}</div>
        </div>
      </div>
    </section>
  );
}
