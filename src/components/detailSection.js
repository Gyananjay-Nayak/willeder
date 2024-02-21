import React from "react";
import details from "../assets/images/details.jpg";
import "../assets/style/detailSection.scss";

const DetailSection = () => {
  return (
    <div className="detailSection">
      <h2 className="details-title ">Lorem ipsum</h2>
      <div className="img-container">
        <img src={details} alt="details" />
      </div>
      <div className="details-card">
        <h2 className="card-title">Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
        <div className="read-more">
          <span>Lorem ipsum</span>
          <svg
            width="32"
            height="33"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1301_258)">
              <path
                d="M51.25 26.5C51.25 40.4452 39.9452 51.75 26 51.75C12.0548 51.75 0.75 40.4452 0.75 26.5C0.75 12.5548 12.0548 1.25 26 1.25C39.9452 1.25 51.25 12.5548 51.25 26.5Z"
                stroke="#6A45FF"
                stroke-width="1.5"
              />
              <path
                d="M16 26.5L36 26.5M36 26.5L28.5 34.5M36 26.5L28.5 18.5"
                stroke="#6A45FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1301_258">
                <rect
                  width="52"
                  height="52"
                  fill="white"
                  transform="translate(52 0.5) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
