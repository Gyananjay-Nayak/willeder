import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import "../assets/style/bodySection.scss";

const images = [
  {
    id: "01",
    image: image1,
    alt: "image1",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "02",
    image: image2,
    alt: "image2",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "03",
    image: image3,
    alt: "image3",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const BodySection = () => {
  return (
    <div className="body-section">
      <div class="title">
        <h1>Lorem</h1>
        <p>subtitle</p>
      </div>
      <div className="container">
        {images.map((item, index) => (
          <div className="img-container" key={index}>
            <img src={item.image} alt={item.alt} />
            <div className="text-container">
                <div>{item.id}</div>
                <h2>{item.title}</h2>
                <div className="description">
                  {item.description}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
