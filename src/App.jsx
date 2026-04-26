import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CoursePlayer from './pages/CoursePlayer/CoursePlayer';
import Auth from './pages/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/player" element={<CoursePlayer />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
