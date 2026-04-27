export function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl mb-2">Dashboard</h1>
      <p className="text-[var(--ink-dim)] mb-8">
        Custom CMS for the vierra portfolio. The frontend renders fixtures from
        <code className="mx-1 px-1.5 py-0.5 rounded bg-[var(--bg-2)] text-xs">
          @vierra/api-client
        </code>
        until the API and DB are wired up.
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        {[
          { label: 'Projects', count: '6 fixtures' },
          { label: 'Timeline', count: '4 fixtures' },
          { label: 'Stack', count: '8 fixtures' },
          { label: 'About', count: '1 fixture' },
        ].map((c) => (
          <div
            key={c.label}
            className="border border-[var(--line)] rounded p-5 bg-[var(--bg-2)]"
          >
            <div className="text-xs uppercase tracking-wider text-[var(--ink-dim)]">
              {c.label}
            </div>
            <div className="text-xl mt-1">{c.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
