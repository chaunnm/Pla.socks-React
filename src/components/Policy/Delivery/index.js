import React from "react";
import "./Delivery.css";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Deli() {
  return (
    <Container className="delivery-container" fluid="md">
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-capitalize">
          Delivery Policy
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="delivery-title">
        <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
        <p>Delivery Policy</p>
      </div>
      <div className="delivery-content">
        <h5>DELIVERY</h5>
        <p>
          Disruption to Royal Mail services Please note, because of strike
          action due to be taken by Royal Mail staff, any orders placed on
          Thursday 13th October will not be dispatched until the next working
          day (Friday 14th October 2022). We apologise for any inconvenience.
        </p>
        <h5>UK POSTAGE </h5>
        <p>
          Our Standard Tracked (48 hour) UK Delivery option is £2.95, and aims
          to have your parcel within 2 working days. Please note, orders placed
          after 5pm on Fridays will not be despatched until the following
          Monday.
        </p>
        <p>
          Our Priority Tracked (24 hour) UK Delivery option is £3.95, and aims
          to have your parcel with you the next working day (next day delivery
          is not guaranteed). Please note, orders placed after 5pm on Fridays
          will not be despatched until the following Monday.
        </p>
        <p>
          Please note, if you add a discount code which subsequently brings your
          order total below the £40 free delivery threshold, a standard delivery
          option (£2.95) will then be applied to your order.{" "}
        </p>
        <h5>HOW DO I TRACK MY ORDER?</h5>
        <p>
          Tracking is provided for UK orders. Once we have despatched your
          order, you will receive an email containing your tracking number, and
          a link to track your parcel using Royal Mail's tracking service. Royal
          Mail will send you tracking updates via email and SMS text message.
        </p>
        <h5>INTERNATIONAL POSTAGE</h5>
        <p>
          Delivery to Europe is £3.99. EU customers please note the following
          costs, all payable on delivery:
        </p>
        <p>
          Local VAT may be applicable to your order <br></br> Duty becomes
          payable if your order value is more than €135 <br></br> Local postal
          services and carriers are also charging a handling fee.
        </p>
        <p>
          This is based on Pla.Socks understanding of current rules (and
          customer feedback).
        </p>
        <p>DELIVERY TIME AND COST IN EACH AREA IN VIETNAM TERRITORY:</p>
        <h5 className="heading-title">1. Inner city of HCM city and Hanoi</h5>
        <p>Time: 1-2 days</p>
        <p>Cost: 15,000 VND / order (unlimited value)</p>
        <h5 className="heading-title">2. Other provinces</h5>
        <p>Time: 2-3 days</p>
        <p>Cost: 30,000 VND/order (unlimited value)</p>
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
