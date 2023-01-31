import React from "react";
import "./AboutUs.css";
import { Container } from "react-bootstrap";
// import Logo from "../../../public/images/aboutus/uitbook-logo.png";
// import Hotline from '../../../public/images/aboutus/uitbook-logo.png';
// import Email from '../../../public/images/aboutus/uitbook-logo.png';
// import Location from '../../../public/images/aboutus/uitbook-logo.png';
// import Website from '../../../public/images/aboutus/we.png';

export default function About() {
  return (
    <Container className="about-us-container" fluid="md">
      <div className="about-us-title">
        <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
        <p>ABOUT PLA.SOCKS </p>
      </div>
      <div className="about-us-content">
        <h2 className="title-h2">
          <i>We love recycled items</i>
        </h2>
        {/* <h3>OUR VALUE</h3> */}
        <i>
          We love it when a brand’s vision comes to life. When a brand can use
          an accessory piece like socks to make a statement. We want to empower
          your message with a powerful product. For us, every detail matters –
          we take your concept and experiment with different thread counts, yarn
          compositions and special features to get to the ideal result.
        </i>
        <br></br>
        <i className="content-br">
          <strong>“Fast fashion isn’t free. Someone else is paying”</strong>
        </i>

        <p>
          Here at PLA.SOCKS, we care about what you put on your feet! We create
          socks that make a difference and, to us, socks are never just socks.
          They are the unsung hero of the wardrobe, they can help you look good,
          feel good, have fun and keep you warm, cool, comfortable, dry, healthy
          and energised.
        </p>
        <p>
          We like to “shake things up” and get people excited about their
          footwear, working with compassion, creativity and purpose to achieve
          that goal!
        </p>
        <p>
          We're here for all your sock needs, from shopping for essentials to
          gifting. Choose from a huge range of sock drawer staples, fashion
          styles and specialised socks, with styles for men, ladies and kids, as
          well as a range of tights, underwear and accessories.
        </p>
        <p>
          With more than 80 brands including PLA.SOCKS, Pringle, ELLE, Heat
          Holders, JEEP, Wild Feet, Happy Socks, Jeff Banks and more ready to
          ship the same day (order before 5pm Mon-Thurs, before 4pm Fri), you'll
          be spoilt for choice.
        </p>
      </div>
      <address className="about-us-contact">
        <div className="hotline icon-contact">
          <img src="/images/aboutus/hotline.png" alt="Hotline" />
          Hotline: <a href="tel:0834577251">083.457.7251</a>
        </div>
        <div className="email icon-contact">
          <img src="/images/aboutus/email.png" alt="Email" />
          Email: <a href="mailto:UITBooks@gmail.com"> Pla.socks@gmail.com</a>
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
    </Container>
  );
}
