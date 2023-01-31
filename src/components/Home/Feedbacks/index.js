import React from "react";
import "./Feedbacks.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Feedbacks() {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    className: "slides",
  };
  return (
    <div className="feedbacks-container">
      <h3 className="feedback-title">Customer Feedbacks</h3>
      <Slider className="interest-books" {...settings}>
        <div className="feedback1-container feedback-container">
          <div className="feedback-background">
            <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"></img>
            <div className="feedback-text-container">
              <h6>Leslie Alexander</h6>
              <p>25 years old - Office Worker</p>
              <p>
                Those beautiful socks coming today really make my day! I would
                like to reccommend my friends and family to buy socks at your
                store
              </p>
            </div>
          </div>
        </div>

        <div className="feedback1-container feedback-container">
          <div className="feedback-background">
            <img src="https://i.pinimg.com/originals/47/e0/01/47e001f1be26293d7f8826c5b262d9df.jpg"></img>
            <div className="feedback-text-container">
              <h6>Robert Fox</h6>
              <p>30 years old - Teacher</p>
              <p>
                This is my very first time buying socks at Pla.Socks and I was
                totally impressed by this store's service and the quality of
                items
              </p>
            </div>
          </div>
        </div>
        <div className="feedback1-container feedback-container">
          <div className="feedback-background">
            <img src="https://vothisaucamau.edu.vn/wp-content/uploads/2022/12/1670628156_538_220-Anh-Avatar-CUTE-Sieu-Cap-Dang-Yeu-Nhin-Ma.jpg"></img>
            <div className="feedback-text-container">
              <h6>Jane Cooper</h6>
              <p>21 years old - Student</p>
              <p>Thanks for your lovely socks!</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Feedbacks;
