import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
   
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img
              src="src/images/baniere sms.png"
              alt="Slide 1"
              className="taille"
            />
          </div>
          <div>
            <img
              src="src/images/baniere sms1.png"
              alt="Slide 2"
            />
          </div>
          {/* <div>
            <img
              src=""
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 5"
            />
          </div> */}
        </Slider>
      </div>
   
  );
};

export default Carousel;
