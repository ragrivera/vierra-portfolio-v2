import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listProjects, type Project } from '@vierra/api-client';
import { Placeholder } from '../components/Placeholder';

export function ProjectsList() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    listProjects().then(setProjects);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl">Projects</h1>
        <Link
          to="#"
          aria-disabled
          className="px-3 py-1.5 rounded border border-[var(--line)] text-sm opacity-50"
        >
          + New (TBD)
        </Link>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[var(--ink-dim)] text-xs uppercase tracking-wider">
            <th className="py-2">#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Stack</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((p) => (
            <tr key={p.id} className="border-t border-[var(--line)]">
              <td className="py-3 text-[var(--ink-dim)]">{p.num}</td>
              <td>{p.title}</td>
              <td className="text-[var(--ink-dim)]">{p.status}</td>
              <td className="text-[var(--ink-dim)]">{p.stack.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8">
        <Placeholder
          title=""
          note="Read-only list right now. Edit/create/reorder will land when apps/api implements POST/PATCH/DELETE/reorder."
        />
      </div>
    </div>
  );
}
