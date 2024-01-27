import React, { useState, useEffect } from 'react';
// import '../../scss/components/home/_carousel.scss';

const images = [
  'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
  './second.png',
  './second.png',

 ];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, i) => (
          <div key={i} className={`carousel-item ${i === index ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control" onClick={prevSlide}>
          &lt;
        </button>
        <button className="carousel-control" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
