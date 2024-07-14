import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; 
import { Splide, SplideSlide } from "@splidejs/react-splide"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import Checking from "./Checking";
import { roomsData } from "./RoomsData";

const HeroCarousel = () => {
  const options = {
    type: 'fade',
    loop: true,
    autoplay: true,
    interval: 4000,
    perPage: 1,
    pagination: false,
    arrows: true,
    speed: 1000, 
    easing: 'ease',
  };

  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;

      splide.on('active', (slide) => {
        const captions = slide.slide.querySelectorAll('.hero-carousel-caption *');
        captions.forEach((caption) => {
          caption.classList.remove('fadeUpIn');
          void caption.offsetWidth; // Trigger reflow to restart animation
          caption.classList.add('fadeUpIn');
        });
      });
    }
  }, []);

  return (
    <div className="hero-carousel">
        <Splide ref={splideRef} options={ options }>
            <SplideSlide>
                <div className="hero-slide-one">
                    <div className="hero-carousel-caption">
                        <div className="star-ratings">
                            {[...Array(5)].map((star, index) => (
                                <FontAwesomeIcon key={index} icon={faSolidStar} />
                            ))}
                        </div>
                        <h4>Resort & Spa Hotel</h4>
                        <h1>Stay With Us, Feel At Home</h1>
                        <button>
                            <Link to="/rooms">Explore More</Link>
                        </button>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="hero-slide-two">
                    <div className="hero-carousel-caption">
                        <div className="star-ratings fadeUpIn">
                            {[...Array(5)].map((star, index) => (
                                <FontAwesomeIcon key={index} icon={faSolidStar} />
                            ))}
                        </div>
                        <h4 className="fadeUpIn">Welcome To</h4>
                        <h1 className="fadeUpIn">Patara Luxury Resort Spa Hotel</h1>
                        <button className="fadeUpIn">
                            <Link to="/rooms">Explore More</Link>
                        </button>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="hero-slide-three">
                    <div className="hero-carousel-caption">
                        <div className="star-ratings fadeUpIn">
                            {[...Array(5)].map((star, index) => (
                                <FontAwesomeIcon key={index} icon={faSolidStar} />
                            ))}
                        </div>
                        <h4 className="fadeUpIn">Resort & Spa Hotel</h4>
                        <h1 className="fadeUpIn">The Perfect Base for You</h1>
                        <button className="fadeUpIn">
                            <Link to="/rooms">Explore More</Link>
                        </button>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
        <Checking roomsData={roomsData} />
    </div>
  );
};

export default HeroCarousel;