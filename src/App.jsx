import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Herosection/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import AboutUs from './Components/AboutUs/AboutUs';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Post from './Components/Pages/postgraduation';
import MasterDegree from './Components/Pages/masterdegree';
import Preloader from './Components/Preloader';
import GraduationDegree from './Components/Pages/Graduationdegree';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // preloader duration in ms
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <BrowserRouter>
      <Routes>
  <Route
    path="/"
    element={
      <>
        <Navbar />
        <VideoPlayer />
        <Hero />
        <div className="container">
          <Programs />
          <AboutUs />
          <Title subtitle="Gallery" title="Campus Photos" />
          <Campus />
          <Title subtitle="Testimonials" title="What Student Says" />
          <Testimonial />
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
      </>
    }
  />
  <Route path="/postgraduation" element={<Post />} />
  <Route path="/masterdegree" element={<MasterDegree />} />
  <Route path="/graduation" element={<GraduationDegree />} /> {/* ✅ ADD THIS */}
</Routes>

    </BrowserRouter>
  );
};

export default App;
