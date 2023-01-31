import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../../../more/FormatNumber";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import "./payment.scss";
import axios from "axios";
import StripeCheckOutForm from "./StripeCheckOutForm";
import { createOrder } from "../../../redux/features/order/newOrderSlice";
import { clearCart } from "../../../redux/features/cart/cartSlice";
import products from "../../../data/products";
const Payment = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [method, setMethod] = useState("COD");
  const [stripeApiKey, setStripeApiKey] = useState("");
  let cartItems = products?.slice(8, 10);
  let Price =
    cartItems.length !== 0
      ? cartItems.reduce((acc, item) => acc + 1 * item.price, 0)
      : 0;
  let Quantity =
    cartItems.length !== 0 ? cartItems.reduce((acc, item) => acc + 1, 0) : 0;

  let shippingCharges = Price > 250000 ? 0 : 30000;

  let totalPrice = Price + shippingCharges;
  let totalQuantity = Quantity;
  useEffect(() => {
    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v2/stripeapikey", {
        withCredentials: true,
      });
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const { shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  // let productPrice = cartItems.reduce(
  //   (acc, item) => acc + item.quantity * item.price,
  //   0
  // );
  // let shippingCharges = productPrice > 250000 ? 0 : 30000;

  // let totalPrice = productPrice + shippingCharges;

  const [order, setOrder] = useState({});
  useEffect(() => {
    const paymentInfo = {
      method: "COD",
      status: "succeeded",
      id: "",
    };
    setOrder({
      orderItems: cartItems,
      user: user,
      shippingInfo: shippingInfo,
      paymentInfo: paymentInfo,
    });
  }, [cartItems, shippingInfo, user]);

  const [clientSecret, setClientSecret] = useState("");
  const handleClick = async () => {
    // if (method === "COD") {
    //   console.log(order);
    //   dispatch(createOrder(order));
    //   dispatch(clearCart());
    //   navigate("/confirm-order");
    // } else {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     withCredentials: true,
    //   };
    //   const { data } = await axios.post(
    //     "/api/v2/payment/process",
    //     { items: cartItems },
    //     config
    //   );
    //   setClientSecret(data.client_secret);
    //   console.log(data);
    //   handleShow();
    // }
    navigate("/confirm-order");
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const handleClose = () => setShow(false);

  return (
    <div className="Payment">
      <Container>
        {/* {cartItems.length === 0 ? (
          <p>no item</p>
        ) : ( */}
        <Row>
          <Col xs="12" md="7" lg="8">
            <div className="methodPayment">
              <div className="methodPayment__title">Payment methods</div>
              <div className="methodPayment__description">
                Please choose a payment method
              </div>
              <hr />
              <div
                className="methodPayment__options"
                onChange={(e) => setMethod(e.target.value)}
              >
                <div className="methodPayment__option__row">
                  <input
                    type="radio"
                    name="payment_method"
                    value="COD"
                    defaultChecked
                  />
                  <div className="methodPayment__option__row__name">
                    Payment on delivery
                  </div>
                </div>
                {/* <hr />
                <div className="methodPayment__option__row">
                  <input type="radio" name="payment_method" />
                  <div className="methodPayment__option__row__name">
                    Thanh toán qua MoMo
                  </div>
                  <div className="methodPayment__option__row__img">
                    <img src="images/basket/momopay.png" alt="" />
                  </div>
                </div> */}
                <hr />
                <div className="methodPayment__option__row">
                  <input type="radio" name="payment_method" value="Card" />
                  <div className="methodPayment__option__row__name">
                    Payment via bank card
                  </div>
                  <div className="methodPayment__option__row__img">
                    <img src="images/basket/Agribank.png" alt="" />
                    <img src="images/basket/Vietcombank.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="methodPayment__button">
                <button
                  className="methodPayment__button__btn"
                  onClick={() => handleClick()}
                >
                  Buy now
                </button>
              </div>
            </div>
          </Col>
          <Col xs="12" md="5" lg="4">
            <div className="info-order">
              <hr />
              <div className="info-order__title">
                <i className="fa-solid fa-gift"></i>
                <div className="info-order__title__name">Đơn hàng</div>
              </div>
              <hr />
              {cartItems.map((item, index) => {
                return (
                  <div className="info-order__product" key={index}>
                    <img src={item.images} alt="" />
                    <div className="info-order__product__information">
                      <div className="info-order__product__information__name">
                        {item.name}
                      </div>
                      <div className="info-order__product__information__author">
                        {item.category}
                      </div>
                      <div className="info-order__product__information__quantity">
                        {/* x {item.quantity} */}x 1
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="info-order__product">
                            <img src={Bookimg} alt="" />
                            <div className="info-order__product__information">
                                <div className="info-order__product__information__name">
                                    Cô gái đến từ hôm qua
                                </div>
                                <div className="info-order__product__information__author">Nguyễn Nhật Ánh</div>
                                <div className="info-order__product__information__quantity">x 1</div>
                            </div>
                        </div> */}
              <hr />
              <div className="info-order__money">
                <div className="info-order__money__row">
                  <div className="info-order__money__row__name">Price</div>
                  <div className="info-order__money__row__value">
                    {numberWithCommas(Price)} đ
                  </div>
                </div>
                <div className="info-order__money__row">
                  <div className="info-order__money__row__name">
                    Shipping Fee
                  </div>
                  <div className="info-order__money__row__value">
                    {numberWithCommas(shippingCharges)} đ
                  </div>
                </div>
              </div>
              <hr />
              <div className="info-order__bill">
                <div className="info-order__bill__name">Total</div>
                <div className="info-order__bill__value">
                  {numberWithCommas(totalPrice)} đ
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* )} */}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanh Toán</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {stripeApiKey !== "" && (
            <Elements options={options} stripe={loadStripe(stripeApiKey)}>
              <StripeCheckOutForm clientSecret={clientSecret} />
            </Elements>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;
