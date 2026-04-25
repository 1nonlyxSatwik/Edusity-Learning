import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';

const Campus = () => {
  return (
    <section className='campus-section'>
      

      <div className="carousel-container">
        <div className="carousel-track">
          <img src={gallery_1} alt="Gallery 1" className="carousel-img" />
          <img src={gallery_2} alt="Gallery 2" className="carousel-img" />
          <img src={gallery_3} alt="Gallery 3" className="carousel-img" />
          <img src={gallery_4} alt="Gallery 4" className="carousel-img" />

          {/* Repeat for infinite effect */}
          <img src={gallery_1} alt="Gallery 1 duplicate" className="carousel-img" />
          <img src={gallery_2} alt="Gallery 2 duplicate" className="carousel-img" />
          <img src={gallery_3} alt="Gallery 3 duplicate" className="carousel-img" />
          <img src={gallery_4} alt="Gallery 4 duplicate" className="carousel-img" />
        </div>
      </div>
    </section>
  );
};

export default Campus;
