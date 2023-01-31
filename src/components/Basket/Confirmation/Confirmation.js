import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import "./confirmation.scss";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../more/FormatNumber";
import products from "../../../data/products";
const Confirmation = (props) => {
  const { user } = useSelector((state) => state.user);
  let cartItems = products?.slice(8, 10);

  // const { order } = useSelector((state) => state.newOrder);

  function getFullAddress(houseAddress, ward, district, city) {
    return houseAddress + ", " + ward + ", " + district + ", " + city;
  }
  let Price = cartItems.reduce((acc, item) => acc + 1 * item.price, 0);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" md="5" lg="6">
            <div className="confirm__notify">
              <img src="/images/basket/success.png" alt="icon" />
              <div className="confirm__notify__title">
                Ye, chúc mừng bạn đã đặt hàng thành công !!
              </div>
              <div className="confirm__notify__notice">
                Vui long kiểm tra lại thông tin đơn hàng của bạn
              </div>
            </div>
          </Col>

          <Col xs="12" md="7" lg="6">
            <div className="confirm__information">
              <div className="confirm__information__block">
                <i className="fa-solid fa-shield-heart"></i>
                <div className="confirm__information__block__content">
                  <div className="confirm__information__block__content__title">
                    Những điều cần lưu ý khi nhận hàng
                  </div>
                  <div className="confirm__information__block__content__description">
                    Nếu có vấn đề khi nhận hàng vui lòng gửi yêu cầu trả
                    hàng/hoàn tiền trong vòng 7 ngày kể từ khi đơn hàng giao
                    thành công
                  </div>
                </div>
              </div>
              <div className="confirm__information__block">
                <i className="fa-solid fa-shield-heart"></i>
                <div className="confirm__information__block__content">
                  <div className="confirm__information__block__content__title">
                    Thông tin sản phẩm
                  </div>
                  {cartItems?.map((item, index) => {
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
                            x 1
                          </div>
                        </div>
                        <div className="info-order__product__money">
                          Thành tiền:
                          <span className="info-order__product__money__value">
                            {numberWithCommas(item.price * 1)}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  <hr />
                  <div className="confirm__information__block__content__methodPayment">
                    Phương thức thanh toán: thanh toán khi nhận hàng
                    {/* {order?.paymentInfo.method === "COD"
                      ? " thanh toán khi nhận hàng"
                      : " Đã thanh toán qua ngân hàng"} */}
                  </div>
                  <hr />
                </div>
              </div>

              <div className="confirm__information__block">
                <i className="fa-solid fa-location-dot"></i>
                <div className="confirm__information__block__content">
                  <div className="confirm__information__block__content__title">
                    Địa chỉ giao hàng
                  </div>
                  <div className="confirm__information__block__content__description">
                    <div className="name">
                      {user.name ? user.name : "Defaut User"}
                    </div>
                    {/* <div className="phone">{order?.shippingInfo.phone}</div> */}
                    <div className="phone">0123456789</div>
                    <div className="address">
                      {" "}
                      {/* {getFullAddress(
                        order?.shippingInfo.address,
                        order?.shippingInfo.ward,
                        order?.shippingInfo.district,
                        order?.shippingInfo.city
                      )} */}
                      {getFullAddress(
                        "Xa lộ Hà Nội",
                        "Phường Linh Trung",
                        "Thủ Đức",
                        "TP Hồ Chí Minh"
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="confirm__information__block">
                <i className="fa-solid fa-shield-heart"></i>
                <div className="confirm__information__block__content">
                  <div className="confirm__information__block__content__title">
                    Địa chỉ giao hàng
                  </div>
                  <div className="confirm__information__block__content__description">
                    <div className="description__row">
                      <div className="description__row__name">Mã đơn hàng:</div>
                      <div className="description__row__value">
                        2333000wwwqqsee
                      </div>
                    </div>
                    <div className="description__row">
                      <div className="description__row__name">
                        Thời gian đặt hàng:
                      </div>
                      <div className="description__row__value">
                        {/* {new Date(order.createdAt).toLocaleDateString("en-GB")} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Confirmation.propTypes = {};

export default Confirmation;
