export function Placeholder({ title, note }: { title: string; note: string }) {
  return (
    <div>
      {title ? <h1 className="text-3xl mb-3">{title}</h1> : null}
      <div className="border border-dashed border-[var(--line)] rounded p-6 bg-[var(--bg-2)] max-w-2xl">
        <div className="text-xs uppercase tracking-wider text-[var(--ink-dim)] mb-2">
          // not yet implemented
        </div>
        <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{note}</p>
      </div>
    </div>
  );
}
