import React from "react";
import "./AboutUs.css";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
// import Logo from "../../../public/images/aboutus/uitbook-logo.png";
// import Hotline from '../../../public/images/aboutus/uitbook-logo.png';
// import Email from '../../../public/images/aboutus/uitbook-logo.png';
// import Location from '../../../public/images/aboutus/uitbook-logo.png';
// import Website from '../../../public/images/aboutus/we.png';

export default function About() {
  let settings = {
    infinite: true,
    speed: 2000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="about-us-container" fluid="md">
        <div className="about-us-title">
          <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
          <p>ABOUT PLA.SOCKS </p>
        </div>
        <div className="about-us-content">
          <div className="about-us-content-item">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="about-us-content-block"
            >
              <div>
                <h2 className="title-h2">
                  <i>We love recycled items</i>
                </h2>
                {/* <h3>OUR VALUE</h3> */}
                <i>
                  We love it when a brand’s vision comes to life. When a brand
                  can use an accessory piece like socks to make a statement. We
                  want to empower your message with a powerful product. For us,
                  every detail matters – we take your concept and experiment
                  with different thread counts, yarn compositions and special
                  features to get to the ideal result.
                </i>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="about-us-content-img"
            >
              <img src="https://drive.google.com/uc?id=1GCv3_1euRSBkES6SoCDoexCM4-SD6WcT" />
            </div>
          </div>

          <br></br>
        </div>
      </Container>
      <div className="aboutUs-intro">
        <div className="aboutUs-intro-content">
          <i data-aos="zoom-in" data-aos-duration="2000" className="content-br">
            <strong>“Fast fashion isn’t free. Someone else is paying”</strong>
          </i>

          <p>
            Here at PLA.SOCKS, we care about what you put on your feet! We
            create socks that make a difference and, to us, socks are never just
            socks. They are the unsung hero of the wardrobe, they can help you
            look good, feel good, have fun and keep you warm, cool, comfortable,
            dry, healthy and energised.
          </p>
          <p>
            We like to “shake things up” and get people excited about their
            footwear, working with compassion, creativity and purpose to achieve
            that goal!
          </p>
          <p>
            We're here for all your sock needs, from shopping for essentials to
            gifting. Choose from a huge range of sock drawer staples, fashion
            styles and specialised socks, with styles for men, ladies and kids,
            as well as a range of tights, underwear and accessories.
          </p>
          <p>
            With more than 80 brands including PLA.SOCKS, Pringle, ELLE, Heat
            Holders, JEEP, Wild Feet, Happy Socks, Jeff Banks and more ready to
            ship the same day (order before 5pm Mon-Thurs, before 4pm Fri),
            you'll be spoilt for choice.
          </p>
        </div>
      </div>
      <Container>
        <div className="aboutUs-member">
          <h6>Members</h6>
          <div className="aboutUs-member-seperate">
            <hr></hr>
            <i class="fa-solid fa-fan"></i>
            <hr />
          </div>
        </div>

        <div className="aboutUs-member-list">
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="aboutUs-member-item"
          >
            <img src="https://th.bing.com/th/id/R.4bbb312f4ee23be8dddc5af856e968aa?rik=Ol0pR4wLYs6kcg&pid=ImgRaw&r=0" />
            <h6 className="aboutUs-member-item-name">Nguyễn Ngọc Minh Châu</h6>
            <span>19520023@gm.uit.edu.vn</span>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="aboutUs-member-item"
          >
            <img src="https://th.bing.com/th/id/OIP.LMPVqtzjqGoRmaNSxbFo5wAAAA?pid=ImgDet&w=240&h=240&rs=1" />
            <h6 className="aboutUs-member-item-name">Nguyễn Văn An</h6>
            <span>19521185@gm.uit.edu.vn</span>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="aboutUs-member-item"
          >
            <img src="https://media1.tenor.com/images/03abd6dba1b0230ec5d7ac036a035449/tenor.gif?itemid=13661765" />
            <h6 className="aboutUs-member-item-name">Bùi Thị Diễn Châu</h6>
            <span>19521275@gm.uit.edu.vn</span>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="aboutUs-member-item"
          >
            <img src="https://2.bp.blogspot.com/-EEHa84kpk-0/XgAOzQxjAXI/AAAAAAAWeSQ/A4p2JPsFCDI_gfhTmeFjtVN4SjHtmGNgwCLcBGAsYHQ/s1600/AW4133458_11.gif" />
            <h6 className="aboutUs-member-item-name">Lê Thị Yến Nhi</h6>
            <span>19520203@gm.uit.edu.vn</span>
          </div>
        </div>
        <div className="aboutUs-member">
          <h6>Contact Us</h6>
          <div className="aboutUs-member-seperate">
            <hr></hr>
            <i class="fa-solid fa-fan"></i>
            <hr />
          </div>
        </div>
        <div className="about-contact">
          <iframe
            data-aos="fade-left"
            data-aos-duration="2000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231171196192!2d106.80086541425702!3d10.870014160432904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1675344185777!5m2!1svi!2s"
            // width="600"
            // height="450"
            // style="border:0;"

            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <address
            // data-aos="fade-left"
            data-aos="fade-right"
            data-aos-duration="2000"
            className="about-us-contact"
          >
            <div className="hotline icon-contact">
              <img src="/images/aboutus/hotline.png" alt="Hotline" />
              Hotline: <a href="tel:0834577251">083.457.7251</a>
            </div>
            <div className="email icon-contact">
              <img src="/images/aboutus/email.png" alt="Email" />
              Email:{" "}
              <a href="mailto:UITBooks@gmail.com"> Pla.socks@gmail.com</a>
            </div>
            <div className="location icon-contact">
              <img src="/images/aboutus/location.png" alt="Location" />
              Address: Quarter 6, Linh Trung, Thu Duc
            </div>
            <div className="website icon-contact">
              <img src="/images/aboutus/website.png" alt="Website" />
              Website: <a href="UITBooks.com"> Plasocks.com</a>
            </div>
          </address>
        </div>
      </Container>
    </>
  );
}
