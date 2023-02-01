// import React from 'react';
// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// import { Container } from 'react-bootstrap';
// import './Slider.css';

// export default function Slider(props) {
//     return (
//         <Container className='slider-container' fluid >
//             <div className='arrow left-arrow' direction='left' onClick={()=>handleClick("left")}>
//                 <ArrowLeftOutlined />
//             </div>
//             <div className='wrapper'>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=1IJgAVDm40y3_QKvkPTMKIjT8YNv9fo2b' alt='slider-1' />
//                     </div>
//                 </div>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=1wdhQNEtBpUVlNHgmc78Dq8IhLtD15Zhb' alt='slider-2' />
//                     </div>
//                 </div>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=142xyw2m_lbE2lTgklPDVzK8PK20Js63e' alt='slider-3' />
//                     </div>
//                 </div>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=1HirEr5J7h2cVj7HHkMOdIoaSF62AqcZP' alt='slider-4' />
//                     </div>
//                 </div>
//             </div>
//             <div className='arrow right-arrow' onClick={()=>handleClick("right")}>
//                 <ArrowRightOutlined />
//             </div>
//         </Container>
//     );
// }

// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   height: 60vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 60vh;
//   width: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 60vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImgContainer = styled.div`
//   width: 100%;
//   flex: 1;
// `;

// const Image = styled.img`
//   height: 100%;
// `;

// const Slider = () => {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const handleClick = (direction) => {
//         if (direction === "left") {
//             setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
//         } else {
//             setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
//         }
//     };

//     return (
//         <Container>
//             <Arrow direction="left" onClick={() => handleClick("left")}>
//                 <ArrowLeftOutlined />
//             </Arrow>
//             <Wrapper slideIndex={slideIndex}>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=1IJgAVDm40y3_QKvkPTMKIjT8YNv9fo2b' alt='slider-1' />
//                     </ImgContainer>
//                 </Slide>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=1wdhQNEtBpUVlNHgmc78Dq8IhLtD15Zhb' alt='slider-2' />
//                     </ImgContainer>
//                 </Slide>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=1pFe1axRH7WYacmtT7xTs4D86iChOYzqI' alt='slider-3' />
//                     </ImgContainer>
//                 </Slide>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=13dv2mac7HV5HUHX1YyzXpaBDfhHwDXDw' alt='slider-4' />
//                     </ImgContainer>
//                 </Slide>

//             </Wrapper>
//             <Arrow direction="right" onClick={() => handleClick("right")}>
//                 <ArrowRightOutlined />
//             </Arrow>
//         </Container>
//     );
// };

// export default Slider;

import React, { useState } from "react";
import "./Slider.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Carousel from "react-bootstrap/Carousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

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
              <h1 data-aos="fade-right">PLA.SOCKS</h1>
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
