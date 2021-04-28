import React from "react";
import logo from "../images/logo432.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../images/IMG_7507.jpg";
import img2 from "../images/IMG_7679.JPG";
import img3 from "../images/IMG_7680.JPG";
import img4 from "../images/IMG_7681.JPG";
import img5 from "../images/IMG_7682.JPG";
import img6 from "../images/IMG_7683.JPG";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <img src={logo} alt="cf432" id="main_logo" />

          {/* CAROUSEL */}
          <div className="carousel">
            <Carousel
              autoPlay
              interval="5000"
              showThumbs={false}
              infiniteLoop
              width="30%"
            >
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <img src={img4} alt="" />
              </div>
              <div>
                <img src={img5} alt="" />
              </div>
              <div>
                <img src={img6} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
