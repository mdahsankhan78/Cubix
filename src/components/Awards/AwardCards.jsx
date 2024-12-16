import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AwardCards = ({ data }) => {
  const settings = {
    infinite: true,           // Looping effect
    speed: 10000,              // Smooth transition speed (in milliseconds)
    slidesToShow: 4,          // Default: 4 slides
    slidesToScroll: 4,        // Number of slides to scroll at once
    autoplay: true,           // Autoplay enabled
    autoplaySpeed: 0,         // Instant transition, but controlled by `speed`
    arrows: false,            // Arrows hidden
    cssEase: 'linear',        // Linear easing for smooth scroll

    responsive: [
      {
        breakpoint: 1200, // When the screen width is 1200px or less
        settings: {
          slidesToShow: 6, // Show 6 slides at a time
          slidesToScroll: 3, // Scroll 3 slides at a time
        },
      },
      {
        breakpoint: 992,  // When the screen width is 992px or less
        settings: {
          slidesToShow: 5, // Show 5 slides at a time
          slidesToScroll: 2, // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 768,  // When the screen width is 768px or less
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="w-full">
        {data.map((item, index) => (
          <div className="py-10 px-6 rounded-3xl bg-gradient-to-r from-accent-foreground to-accent">
            <div className="flex items-center">
              <img src={`/images/${item.img}`} alt="" />
              <FontAwesomeIcon icon={faStar} className='text-primary ml-auto mr-2' />
              <h1 className='text-white font-bold text-lg'>{item.rate}</h1>
            </div>

            <div className="mt-16 text-gray-500 text-xl ">
              {item.para}
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>
        {`
        .slick-slide {
          margin-right: 20px; /* Set gap between slides */
        }

        .slick-slide:last-child {
          margin-right: 0; /* Remove gap for the last slide */
        }
        `}
      </style>
    </>

  );
};

export default AwardCards;
