import "./OrderShipping.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../../../redux/features/order/myOrdersSlice";
import { numberWithCommas } from "../../../../more/FormatNumber";
import products from "../../../../data/products";

function OrderShipping() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMyOrders());
  // }, [dispatch]);

  // const { orders } = useSelector((state) => state.myOrders);
  // const data = orders && orders.filter((order) => order.orderStatus === "Shipping");
  const { cartItems } = useSelector((state) => state.newOrder.order);
  let data = cartItems;
  let Price =
    data.length !== 0 ? data.reduce((acc, item) => acc + 1 * item.price, 0) : 0;
  let Quantity = data.length !== 0 ? data.reduce((acc, item) => acc + 1, 0) : 0;

  let shippingCharges = Price > 250000 ? 0 : 30000;

  let totalPrice = Price + shippingCharges;
  let totalQuantity = Quantity;
  return (
    <div className="order-infor">
      {!data ? (
        <div className="container-canceled-empty">
          <div>
            <img
              className="img-cancled-empty"
              src="https://drive.google.com/uc?id=1Ky_4cmR8ijDH0L_HRQJklFwd_GSVm7uR"
              alt="no item"
            />
          </div>
          <p>
            😱 <b>Hey guys, no orders are being delivered yet</b> 😱
          </p>
        </div>
      ) : (
        <>
          {/* {data.map((order, index) => ( */}
          <div className="row">
            <div className="my-order-content-booked">
              {data.map((item, i) => (
                <div className="book-infor row" key={i}>
                  <img
                    className="col-3 book-infor-img"
                    src={item.images}
                    alt=""
                  />
                  <div className="book-infor-detail col">
                    <h6>{item.name}</h6>
                    <p className="book-infor-detail-author">{item.category}</p>
                    <p className="book-infor-detail-price">
                      <span className="book-infor-detail-price-old">
                        80.000đ
                      </span>{" "}
                      <span className="book-infor-detail-price-new">
                        {numberWithCommas(item.price)} đ
                      </span>
                    </p>
                    <p className="book-infor-detail-quantity">Quantity: 1</p>
                  </div>
                </div>
              ))}

              <div className="row book-delivery-bill">
                <div className="book-total-bill col">
                  <div>
                    <span className="book-total-bill-title">Shipping Fee:</span>
                    <span className="book-total-bill-price">
                      {numberWithCommas(shippingCharges)} đ
                    </span>
                  </div>
                  <div>
                    <span className="book-total-bill-title">Total:</span>
                    <span className="book-total-bill-price">
                      {numberWithCommas(totalPrice)} đ
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="book-delivery-confirm btn col disabled"
                >
                  Received
                </button>
              </div>

              <p className="book-date-delivery">
                Receive products and pay before February 8, 2023
              </p>
            </div>

            {/* <div className="col-3 todo-timeline mb-5">
            <div className="">
              <h4 className="todo-title">
                Mã đơn hàng: <span>HN0101111</span>
              </h4>
            </div>
            <div className="row">
              <ul className="v-timeline">
                <li className="col">
                  <i className="v-timeline-icon v-not"></i>
                  <div className="timeline-text">
                    <div className="timeline-valutation">
                      <span className="pl-30 top-bold-label">
                        3 Th03 <br /> 06:36
                      </span>
                    </div>
                    <div className="timeline-number">
                      <span className="pl-30 bottom-link">
                        Người gửi đang chuẩn bị hàng
                      </span>
                    </div>
                  </div>
                </li>

                <li className="col">
                  <i className="v-timeline-icon v-not"></i>
                  <div className="timeline-text">
                    <div className="timeline-valutation">
                      <span className="pl-30 top-bold-label">
                        4 Th03 <br /> 13:36
                      </span>
                    </div>
                    <div className="timeline-number">
                      <span className="pl-30 bottom-link">
                        Lấy hàng thành công
                      </span>
                    </div>
                  </div>
                </li>

                <li className="col">
                  <span className="v-timeline-icon v-not v-line-color"></span>
                  <div className="timeline-text">
                    <div className="timeline-valutation">
                      <span className="pl-30 top-bold-label">
                        4 Th03 <br /> 23:43
                      </span>
                    </div>
                    <div className="timeline-number">
                      <span className="pl-30 bottom-link">
                        Đơn hàng đã đến kho HN
                      </span>
                    </div>
                  </div>
                </li>

                <li className="col">
                  <span className="v-timeline-icon v-last"></span>
                  <span className="pl-30 top-bold-label">Complete!</span>
                </li>
              </ul>
            </div>
          </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default OrderShipping;
