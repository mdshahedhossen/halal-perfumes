import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner-01.jpg'
import banner2 from '../../../Images/banner-02.jpg'
import banner3 from '../../../Images/banner-03.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          height={600}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          height={600}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
          height={600}
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;