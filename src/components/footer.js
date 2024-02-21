import React from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import tictok from "../assets/images/tiktok.svg";
import "../assets/style/footer.scss";

const socialLogo = [
  {
    image: facebook,
    alt: "facebook",
  },
  {
    image: twitter,
    alt: "twitter",
  },
  {
    image: instagram,
    alt: "instagram",
  },
  {
    image: tictok,
    alt: "tictok",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <a href="/page1">Home</a>
            </li>
            <li>
              <a href="/page1">Page 1</a>
            </li>
            <li>
              <a href="/page1">Page 2</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social-container">
        {socialLogo.map((item, index) => (
          <span key={index}>
            <img src={item.image} alt={item.alt} />
          </span>
        ))}
      </div>
      <div className="copyright">© Logo, Inc.</div>
    </footer>
  );
};

export default Footer;
