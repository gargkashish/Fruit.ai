import React from "react";
import Slider from "react-slick";
import avatar01 from "../../assets/images/ava-1.jpg";
import avatar02 from "../../assets/images/ava-2.jpg";
import avatar03 from "../../assets/images/ava-3.jpg";

import "../../Styles/TestimonialSlider.css";
const TestimonialSlider = () => {
  // ------Slider settings-----------
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="mt-5">
        <p className="review__text text-muted">
          "If you aren't sure, always go for food delivery app. I don't always
          clop, but when I do, it's because of food delivery app. If you want
          real marketing that works and effective implementation - food delivery
          app's got you covered."
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img className="rounded-circle" src={avatar01} alt="avatar" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text text-muted">
          "Food delivery app impressed me on multiple levels. I have gotten at
          least 50 times the value from food delivery app."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img className="rounded-circle" src={avatar02} alt="avatar" />
          <h6>Michel Merse</h6>
        </div>
      </div>
      
      <div>
        <p className="review__text text-muted">
          "You guys rock! It's the perfect solution for our business. I don't
          always clop, but when I do, it's because of food delivery app. I just
          can't get enough of food delivery app. I want to get a T-Shirt with
          food delivery app on it so I can show it off to everyone."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img className="rounded-circle" src={avatar03} alt="avatar" />
          <h6>Piter Vicky</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
