import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import "../assets/style/bodySection.scss";

const images = [
  {
    image: image1,
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

const BodySection = () => {
  return (
    <div className="body-section">
      <div class="title">
        <h1>Main Title</h1>
        <p>Sub Title</p>
      </div>
      <div className="container">
        {images.map((item, index) => (
          <div className="img-container" key={index}>
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
