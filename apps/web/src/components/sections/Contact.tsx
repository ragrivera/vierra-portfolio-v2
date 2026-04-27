import type { SiteSettings } from '@vierra/api-client';

export function Contact({ site }: { site: SiteSettings }) {
  return (
    <section id="contact" className="contact shell">
      <div className="contact-prompt">[ 05 ] // open a socket</div>
      <h2 className="contact-cta">
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </h2>
      <div className="contact-sub">
        currently accepting: interesting problems, weird CLIs, takeout recommendations
      </div>
      <div className="contact-socials">
        {site.contactSocials.map((s) => (
          <a key={s.label} href={s.href}>
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
