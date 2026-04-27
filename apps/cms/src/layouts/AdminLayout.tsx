import { NavLink, Outlet } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/site', label: 'Site' },
  { to: '/projects', label: 'Projects' },
  { to: '/career', label: 'Career' },
  { to: '/stack', label: 'Stack' },
  { to: '/about', label: 'About' },
] as const;

export function AdminLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[220px_1fr]">
      <aside className="border-r border-[var(--line)] p-6 sticky top-0 h-screen">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim)] mb-6">
          vierra // admin
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={'end' in item ? item.end : undefined}
              className={({ isActive }) =>
                `px-3 py-2 rounded transition ${
                  isActive
                    ? 'bg-[rgba(168,85,247,0.12)] text-[var(--ink)]'
                    : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
}
