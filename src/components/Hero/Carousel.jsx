import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderHero = ({content}) => {
    const settings = {
        infinite: true, // Looping effect
        speed: 3000,    // Smooth transition speed (in milliseconds)
        slidesToShow: 6, // Number of slides to show at a time
        slidesToScroll: 4, // Number of slides to scroll at once
        autoplay: true,  // Autoplay enabled
        autoplaySpeed: 0, // Instant transition, but controlled by `speed`
        arrows: false,    // Arrows hidden
        cssEase: 'linear', // Linear easing for smooth scroll
      };

  return (
    <Slider {...settings} className="w-full py-6 border-b border-gray-300">
      <img src="/images/carousel-imgs (1).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (2).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (3).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (4).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (5).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (6).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (7).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (8).svg" className='h-20' alt="" />
      <img src="/images/carousel-imgs (9).svg" className='h-20' alt="" />
    </Slider>
  );
};

export default SliderHero;
