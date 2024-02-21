import React, { useState, useEffect } from "react";
import "../assets/style/carousel.scss";
import Logo from "../assets/images/logo2.svg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import banner from "../assets/images/banner.jpg"

const images = [
  {
    image: banner,
    alt: "image1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: image2,
    alt: "image2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: image3,
    alt: "image3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselScrol = () => {
    if (currentIndex === images.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const scrolInterval = setInterval(() => {
      carouselScrol();
    }, 2000);
    return () => clearInterval(scrolInterval);
  });
  return (
    <div className="carousel-container">
      {images.map((item, index) => (
        <img
          src={item.image}
          alt={item.alt}
          className="carousel-item"
          key={index}
        />
      ))}
      <div className="text-block">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="title">Lorem ipsum dolor sit amet</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div>
            <p>Scroll</p>
            <span className="vector"></span>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
