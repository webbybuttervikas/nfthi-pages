import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../src/Slider1.css";
import data from '../src/sliderdata'

const Slider1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slidercss">
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {data.map((item) => (
              <div className="col-4">
                <img src={item.linkimage} alt="slider"></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
