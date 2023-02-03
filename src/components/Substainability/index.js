import React from "react";
import "./Substainability.scss";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import Logo from "../../../public/images/aboutus/uitbook-logo.png";
// import Hotline from '../../../public/images/aboutus/uitbook-logo.png';
// import Email from '../../../public/images/aboutus/uitbook-logo.png';
// import Location from '../../../public/images/aboutus/uitbook-logo.png';
// import Website from '../../../public/images/aboutus/we.png';
export default function Substainability() {
  return (
    <>
      <div className="subs-container">
        <video
          id="myVideo"
          src={"https://repreve.com/static/videos/homepage-bottle-sequence.mp4"}
          loop
          autoPlay={true}
          muted
        />
        <div className="header">
          <div className="header-content">
            <h2>We are earth optimists.</h2>
            <p>
              We see opportunity in mistakes, possibility in failure, and hope
              in dark places (like the bottom of your recycling bin).
            </p>
          </div>
        </div>
      </div>
      <div
        className="subs-container-2"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="sub-content">
          <h2>OUR SUSTAINABILITY IMPACT</h2>
          <p>
            We’ve been at the forefront of sustainable innovation for decades,
            hoping to make a small impact. That’s because our goal is to be
            light with our footprint and frugal with resources.
          </p>
        </div>
      </div>
      <div className="subs-container-3">
        <div
          className="sub-content"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="title">A CIRCULAR ECONOMY</h3>
          <h4>Regenerative by design.</h4>
          <p>
            Keeping materials and products in circulation for as long as
            possible helps eliminate both waste and resource-intensive virgin
            production. A circular economy is a new framework for earth and
            we’re collaborating with leading organizations to get the cogs
            turning.
          </p>
        </div>
        <div
          className="sub-content-img"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            src="	https://repreve.com/uploads/images/Photos/circular-economy.jpg"
            alt="circel k"
          />
        </div>
      </div>
      <div className="subs-container-4">
        <div
          className="sub-content-img"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img
            src="https://repreve.com/uploads/images/Photos/hand-crushing-bottle-rotated-colorblock-hero.jpg"
            alt="circel k"
          />
        </div>
        <div className="sub-content-right">
          <div className="sub-content-right-content">
            <h3>CHAMPIONS OF SUSTAINABILITY</h3>
            <p>
              Our partners are extraordinary leaders who inspire other
              businesses to be good stewards of our planet and future.
            </p>
            <Link to="/contact-us" className="button">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div
        className="subs-container-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="sub-content">
          <h3>Behind the scenes at PLA.SOCKS</h3>
          <p>
            We look at every decision through the lens of our three core goals:
            reducing our own environmental impact, mainstreaming sustainable
            fiber, and being useful to the planet. If we’re happy we checked
            those boxes, then we greenlight a plan.
          </p>
        </div>
      </div>
      <div className="subs-container-3">
        <div
          className="sub-content"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="title">REDUCING OUR ENVIRONMENTAL IMPACT</h3>
          <h4>
            We are a leading innovator in sustainable technology development.
          </h4>
          <p>
            Our collaboration with Oerlikon Barmag on the eAFK EvoCooler
            technology has reduced the energy required to texture our yarn.
            Pla.Socks SmartDye™ and WaterWise™, both proprietary innovations,
            have reduced the amount of water and energy used in the dye process.
            Our flagship manufacturing site in Yadkinville, North Carolina,
            features our solar farm.
          </p>
        </div>
        <div
          className="sub-content-img"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            src="	https://repreve.com/uploads/images/Photos/evo-cooler.jpg"
            alt="circel k"
          />
        </div>
      </div>
      <div className="subs-container-6">
        <div
          className="sub-content-img"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          <img
            src="https://repreve.com/uploads/images/Photos/plastic-bottles-in-a-row.jpg"
            alt="circel k"
          />
        </div>
        <div
          className="sub-content"
          data-aos="fade-down-left"
          data-aos-duration="2000"
        >
          <h3 className="title">MAINSTREAMING SUSTAINABLE FIBER</h3>
          <h4>
            We don’t just make PLA.SOCKS, we help educate about sustainable
            textiles.
          </h4>
          <p>
            PLA.SOCKS is made with less carbon, using non-toxic products. It
            reduces global warming potential compared to conventional virgin
            polyester. We empower brands and consumers to take a positive step.
            Our US-wide, mobile education tour helps encourage planet-healthy
            behavior.
          </p>
        </div>
      </div>
      <div className="subs-container-3">
        <div
          className="sub-content"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="title">ARE WE BEING USEFUL TO THE PLANET?</h3>
          <h4>
            Our approach is built on transparency and fueled by the desire to be
            helpful.
          </h4>
          <p>
            How we do business, who we hire and how we grow are focused on
            what’s good for tomorrow. When it comes to figuring out the future
            of our planet, we’re optimistic collaborators, honest sharers and
            passionate believers.
          </p>
        </div>
        <div
          className="sub-content-img"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            src="https://repreve.com/uploads/images/Photos/leaf-close-up.jpg"
            alt="circel k"
          />
        </div>
      </div>
    </>
  );
}
