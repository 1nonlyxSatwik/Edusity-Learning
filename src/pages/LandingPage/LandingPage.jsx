import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import SaaSHero from '../../Components/Herosection/SaaSHero';
import BentoFeatures from '../../Components/Features/BentoFeatures';
import SkillTreeRoadmap from '../../Components/Roadmap/SkillTreeRoadmap';
import Pricing from '../../Components/Pricing/Pricing';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <SaaSHero />
        <BentoFeatures />
        <SkillTreeRoadmap />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
