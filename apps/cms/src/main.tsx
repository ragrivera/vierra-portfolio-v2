import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { Login } from './routes/Login';
import { Dashboard } from './routes/Dashboard';
import { SiteEditor } from './routes/SiteEditor';
import { ProjectsList } from './routes/ProjectsList';
import { CareerList } from './routes/CareerList';
import { StackList } from './routes/StackList';
import { AboutEditor } from './routes/AboutEditor';
import './globals.css';

const router = createBrowserRouter([
  { path: '/login', Component: Login },
  {
    path: '/',
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'site', Component: SiteEditor },
      { path: 'projects', Component: ProjectsList },
      { path: 'career', Component: CareerList },
      { path: 'stack', Component: StackList },
      { path: 'about', Component: AboutEditor },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
