import React from "react";
import "./footer.scss";
import { Container, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

export default function Footer(props) {
  return (
    <footer>
      <section className="footer-subcription">
        <div className="footer-subcription-heading">
          <MailOutlineIcon className="email-icon" />
          Subcribe for our news
        </div>
        <div className="input-areas">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Group>
            <Button variant="outline-primary">Subcribe</Button>
          </Form>
        </div>
      </section>
      <Container className="footer-container" fluid="md">
        <div className="footer-links">
          {/* Logo and Social Networks */}
          <div className="footer-icons-wrapper">
            <div className="footer-icons-items">
              {/* <img
                src="/images/footer/uitbook-logo.png"
                alt="UITBooks-logo"
                className="uitbooks-logo-large"
              /> */}
              <div className="logo-wrapper">
                <img
                  src="https://i.imgur.com/mnt90vV.png"
                  alt="UIT"
                  className="uitbooks"
                />
              </div>
              <div className="footer-info">
                We to guarantee delivery within 24 hours, promise to return the
                goods if there happens any mistake. <br />
                <Link to="/">PlaSocks.com</Link> accepts online orders. <br />{" "}
                DO NOT support ordering and receving goods directly at the shop
                as well as all Pla.Socks systems nationwide.
              </div>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/UITBookStore"
                  target="_blank"
                  title="Facebook"
                >
                  <img src="https://drive.google.com/uc?id=1hKFmUYEn44aNhc7AUivTnqAJ-cLCiXIg" />
                </a>
                <a
                  href="https://www.instagram.com/hachat_macaron/"
                  target="_blank"
                  title="Instagram"
                >
                  <img src="https://drive.google.com/uc?id=1EyW6CxiAiKq1QeWk1hPgkYyuwx_4FaSl" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_jlqruaC97N8ohRRuUpi0Q"
                  target="_blank"
                  title="Youtube"
                >
                  <img src="https://drive.google.com/uc?id=1g3ktW0qJ0H3Ym-tAzDHFElKoVo3lQmia" />
                </a>
                <a
                  href="https://twitter.com/HachatMacaron"
                  target="_blank"
                  title="Twitter"
                >
                  <img src="https://drive.google.com/uc?id=1Gol-wJK29brj_e6TdWs9X5Tda-am1iac" />
                </a>
              </div>
              <div className="download">
                <a href="" title="IOS">
                  <img src="/images/footer/get-on-appstores.png" />
                </a>
                <a href="" title="Google">
                  <img src="/images/footer/get-on-chplay.png" />
                </a>
              </div>
            </div>
          </div>
          {/* Links and Credit */}
          <div className="footer-link-list">
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>Links</h2>
                <Link to="/"> Home </Link>
                <Link to="/products"> Category </Link>
                <Link to="/blogs"> Blogs </Link>
                <Link to="/about-us"> About Us </Link>
              </div>
              <div className="footer-link-items">
                <h2>Support</h2>
                <Link to="/delivery-policies"> Shipping Policy </Link>
                <Link to="/return-policies"> Return Policy </Link>
                <Link to="/help"> FAQs </Link>
                <Link to="/terms-of-use"> Terms of Use </Link>
              </div>
              <div className="footer-link-items">
                <h2>Team 4</h2>
                <a href=""> Công nghệ Web và Ứng dụng </a>
                <a href=""> Trường Đại học Công Nghệ Thông Tin </a>
                <img src="/images/aboutus/logo-uit.png" alt="UIT-logo" />
              </div>
            </div>
            <div className="footer-link-items">
              <h2 className="contact-us">Contact Us</h2>
              <div className="contact">
                <div>
                  <LocationOnOutlinedIcon />
                  <p> Quarter 6, Linh Trung, Thu Duc, Thu Duc </p>
                </div>
                <div>
                  <MailOutlineIcon />
                  <p> PlaSocks@gmail.com </p>
                </div>
                <div>
                  <PhoneInTalkOutlinedIcon />
                  <p> 083.457.7251 </p>
                </div>
              </div>
            </div>
            <div className="payment">
              <img src="/images/footer/zalopay.png" alt="" />
              <img src="/images/footer/momo.png" alt="" />
              <img src="/images/footer/shopee.png" alt="" />
              <img src="/images/footer/vnpay.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
      {/* Copyrights */}
      <section className="social-media">
        <small className="website-rights">
          © Copyright 2023 - All rights reserved by PlaSocks.com
        </small>
      </section>
    </footer>
  );
}
