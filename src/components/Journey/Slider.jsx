import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const SliderJourney = () => {
    const settings = {
        infinite: true,           // Looping effect
        speed: 6000,              // Smooth transition speed (in milliseconds)
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

    // Array of headings for the carousel
    const headings = [
        'Android',
        'iOS',
        'UX Design',
        'SaaS',
        'Web Design',
        'IoT',
        'Blockchain'
    ];

    return (
        <Slider {...settings} className="w-full">
            {headings.map((heading, index) => (
                <div key={index} className="flex justify-center items-center">
                    
                    <h3 className="text-5xl"><FontAwesomeIcon icon={faDotCircle} className='h-6'/>  {heading}</h3>
                </div>
            ))}
        </Slider>
    );
};

export default SliderJourney;
