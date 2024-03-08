import React, { useState, useEffect } from 'react';
import './Landing.scss' 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './landingphoto9.jpg',
    './chalecolanding.jpg',
    './landingphoto2.jpg',
    './landingphoto3.jpg',
    './landingphoto5.jpg',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
        
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  );
};

export default Slider;