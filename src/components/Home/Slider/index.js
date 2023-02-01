import React, { useState } from "react";
import "./Slider.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Carousel from "react-bootstrap/Carousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";

export default function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slider-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={<ArrowCircleRightIcon className="arrow-icons" />}
        prevIcon={<ArrowCircleLeftIcon className="arrow-icons" />}
      >
        <Carousel.Item>
          <div className="slider-item" key={`slider-item-1`}>
            <img
              className="slider-img"
              width="100%"
              height="750px"
              src="https://drive.google.com/uc?id=1BAE1KpnNvMACPZ90rV8pHBo_B7lH2N08"
            />
            <div className="content-container">
              <h1>PLA.SOCKS</h1>
              <p>
                Using a pair of Pla.Socks socks, you have successfully rescued
                10 discarded plastic bottles, together with Pla.socks create a
                sustainable green future from green footsteps!
              </p>
              <hr width="200px" height="3px" />
              <div className="button-container">
                <div className="shop-btn">SHOP MEN</div>
                <div className="shop-btn">SHOP CUSTOM</div>
                <div className="shop-btn">SHOP WOMEN</div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-item" key={`slider-item-2`}>
            <img
              className="slider-img"
              width="100%"
              height="750px"
              src="https://i.imgur.com/sI9GfT2.png"
            />
            <div className="content1-container">
              <h1>
                FREE CUSTOM!
                <br /> DESIGN YOUR OWN SOCKS
              </h1>
              <div className="custom-btn">
                <p>SHOP CUSTOM</p>
                <ShoppingBagIcon />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-item" key={`slider-item-3`}>
            <img
              className="slider-img"
              width="100%"
              height="750px"
              src="https://drive.google.com/uc?id=18Z4P4r4Xm9Ee7h61SnrRyTFfTwwpLDV9"
            />
            <div className="content2-container">
              <h2>SUMMER 2023</h2>
              <h1>MADE BY FAMILY SOCK MAKER</h1>
              <div className="shop-transparent-btn">SHOP NOW</div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-item" key={`slider-item-4`}>
            <img
              className="slider-img"
              width="100%"
              height="750px"
              src="https://drive.google.com/uc?id=1Fdkb5rTLp2Gie4YEiLLhi5uX6WsonBKg"
            />
            <div className="content3-container">
              <h1>NEW KIDS' SOCKS ARE HERE!</h1>
              <p>
                Discover our kids socks collection and bring joy to little feet
                all over the world. We’ve got long warm, colorful, crazy socks -
                and baby socks for the smallest ones
              </p>
              <div className="shop-filled-btn">SHOP NOW</div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-item" key={`slider-item-5`}>
            <img
              className="slider-img"
              width="100%"
              height="750px"
              src="https://drive.google.com/uc?id=1XQfiIT3cxflHGxCYIHxO-sf8LNfwDy-9"
            />
            <div className="content4-container">
              <h1>
                GREAT
                <br /> REWARDS
              </h1>
              <h3>Looking for the perfect gift, Pla.socks rewards?</h3>
              <p>
                Here you'll find all kinds of gifts at a reduced price. Check
                out our limited edition gifts, men’s gift boxes, kids’ gifts and
                many more.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
