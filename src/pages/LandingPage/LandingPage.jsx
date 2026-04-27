import React from 'react';
import CinematicHero from '../../Components/CinematicHero/CinematicHero';
import Capabilities from '../../Components/Capabilities/Capabilities';
import Walkthrough from '../../Components/Walkthrough/Walkthrough';
import Cohorts from '../../Components/Cohorts/Cohorts';
import Pricing from '../../Components/Pricing/Pricing';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <CinematicHero />
        <Capabilities />
        <Walkthrough />
        <Cohorts />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
