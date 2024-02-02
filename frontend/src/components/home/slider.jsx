import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import image1 from '../../carousel-image/1652293005744image5.jpeg';
import image2 from '../../carousel-image/1700368675681Ds8Lgq-WxxhqasOFQehWADEQu9B68WZSTw212LKjsNs=_plaintext_638304518411410336.jpg';
import image3 from '../../carousel-image/1703312158547Sahi Bhukari (3).png';

function slider() {
  return (
    <BootstrapCarousel fade={true} pause={false}>
    <BootstrapCarousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      <BootstrapCarousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </BootstrapCarousel.Caption>
    </BootstrapCarousel.Item>
    <BootstrapCarousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image2}
        alt="Third slide"
      />
      <BootstrapCarousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </BootstrapCarousel.Caption>
    </BootstrapCarousel.Item>
    <BootstrapCarousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
      <BootstrapCarousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </BootstrapCarousel.Caption>
    </BootstrapCarousel.Item>
  </BootstrapCarousel>
  )
}

export default slider