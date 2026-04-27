/**
 * What: The root component of the application.
 * Role: Configures the main routing structure using React Router.
 * Notes: Add new top-level routes here.
 */

// ─── Imports ───────────────────────────────────────
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CoursePlayer from './pages/CoursePlayer/CoursePlayer';
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';

// ─── Main Component ──────────────────────────────
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the main application routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/player" element={<CoursePlayer />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

// ─── Exports ───────────────────────────────────────
export default App;
