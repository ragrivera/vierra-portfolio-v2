export function Login() {
  return (
    <div className="min-h-screen grid place-items-center p-8">
      <div className="w-full max-w-sm border border-[var(--line)] rounded-lg p-8 bg-[var(--bg-2)]">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim)] mb-2">
          vierra // admin
        </div>
        <h1 className="text-2xl mb-6">Sign in</h1>
        <p className="text-sm text-[var(--ink-dim)] mb-6">
          Auth flow not yet implemented. Coming next: Supabase magic-link or a Postgres-backed
          session — TBD when the API is wired up.
        </p>
        <a
          href="/"
          className="block text-center px-4 py-2 rounded border border-[var(--line)] hover:border-[var(--accent)] transition"
        >
          Continue (skip auth)
        </a>
      </div>
    </div>
  );
}
