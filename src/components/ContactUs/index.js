import React from "react";
import "./ContactUs.scss";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
export default function ContactUs() {
  return (
    <>
      <div className="img-contact-header">
        <img
          src="https://drive.google.com/uc?id=1KnRNhdl_pYDvZ59Fzsemln21A6fM0ef0"
          alt="contact"
        />
      </div>
      <div className="get-in-touch-container">
        <div className="get-in-touch-item">
          <div className="icon">
            {/* <i class="fa-solid fa-phone-volume"></i> */}
            <PhoneInTalkIcon sx={{ fontSize: 40 }} />
          </div>
          <div className="get-in-touch-item-right">
            <h4>Phone</h4>
            <span>+1-101-763-0175</span>
          </div>
        </div>
        <div className="get-in-touch-item">
          <div className="icon">
            <i class="fa fa-envelope"></i>
          </div>
          <div className="get-in-touch-item-right">
            <h4>Mail</h4>
            <span>plasocks@gmail.com</span>
          </div>
        </div>
        <div className="get-in-touch-item">
          <div className="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="get-in-touch-item-right">
            <h4>Location</h4>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
      <div className="contact-row">
        {/* <div className="contact-left">
         
        </div> */}
        <div class="contact-right">
          {/* <h2 class="text-center">Contact Form</h2> */}
          {/* col-lg-6 */}
          <div class="row justify-content-center">
            <div class="col-12 col-md-8  pb-5">
              <form method="post">
                <div class="card border-primary rounded-0">
                  <div class="card-header p-0">
                    <div class="background-color text-white text-center py-2">
                      <h3>
                        <i class="fa fa-envelope"></i> Contact us
                      </h3>
                      <p class="m-0">What would you like to send?</p>
                    </div>
                  </div>
                  <div class="card-body p-3">
                    <div class="form-group">
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-icon-container input-group-text">
                            <i class="fa fa-user color-icon"></i>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="nombre"
                          name="nombre"
                          placeholder="Username"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-icon-container input-group-text">
                            <i class="fa fa-envelope color-icon"></i>
                          </div>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          id="nombre"
                          name="email"
                          placeholder="plasock@gmail.com"
                          required
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-icon-container input-group-text">
                            <i class="fa fa-comment color-icon"></i>
                          </div>
                        </div>
                        <textarea
                          class="form-control"
                          placeholder="I want to..."
                          rows="5"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="container-btn-contact">
                      <div class="background-color btn-contact-form">
                        Submit
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
