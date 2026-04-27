import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, homeLoader } from './routes/Home';
import './globals.css';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    loader: homeLoader,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
