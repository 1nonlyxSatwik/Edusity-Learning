/**
 * What: The entry point for the React application.
 * Role: Mounts the root React component (App) to the DOM.
 * Notes: StrictMode is enabled for highlighting potential problems.
 */

// ─── Imports ───────────────────────────────────────
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// ─── Initialization ──────────────────────────────
const rootElement = document.getElementById('root');

// ─── Main Logic ──────────────────────────────────
// Mount the React application into the root element
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
