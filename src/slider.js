import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import "./App.css"



// import styles bundle
import 'swiper/css/bundle';
// import 'swiper/css/swiper.min.css';

const Slider = () => {
  const swiperContainer = useRef(null);

  useEffect(() => {
    const mySwiper = new Swiper(swiperContainer.current, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container" ref={swiperContainer}>
      <div className="swiper-wrapper">
        {/* Replace the following divs with your actual slides */}
        <div className="swiper-slide" >
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/pp1.jpeg" height="900"  alt="error"   />
          </a>
          </div>
        <div className="swiper-slide"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/pp2.jpeg" height="900"  alt="error"   />
          </a></div>
        <div className="swiper-slide "><a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/pp3.jpeg" height="900"  alt="error"   />
          </a></div>
        <div className="swiper-slide"><a href="https://www.yahoo.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/pp4.jpeg" height="900"  alt="error"   />
          </a></div>
      </div>

      {/* Add navigation buttons and pagination */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Slider;
