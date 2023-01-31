import "./OrderCanceled.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../../../redux/features/order/myOrdersSlice";
import { numberWithCommas } from "../../../../more/FormatNumber";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import products from "../../../../data/products";
function OrderCanceled() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMyOrders());
  // }, [dispatch]);

  // const { orders } = useSelector((state) => state.myOrders);
  // const data = orders.filter((order) => order.orderStatus === "Canceled");
  let cartItems = products.slice(15, 16);
  let Price =
    cartItems.length !== 0
      ? cartItems.reduce((acc, item) => acc + 1 * item.price, 0)
      : 0;
  let Quantity =
    cartItems.length !== 0 ? cartItems.reduce((acc, item) => acc + 1, 0) : 0;

  let shippingCharges = Price > 250000 ? 0 : 30000;

  let totalPrice = Price + shippingCharges;
  let totalQuantity = Quantity;
  return (
    <div className="order-infor">
      <div className="row">
        <div className="my-order-content-booked">
          {cartItems.map((item, i) => (
            <div className="book-infor row">
              <img className="col-3 book-infor-img" src={item.images} alt="" />
              <div className="book-infor-detail col">
                <h6>{item.name}</h6>
                <p className="book-infor-detail-author">{item.category}</p>
                <p className="book-infor-detail-price">
                  <span className="book-infor-detail-price-old">80.000đ</span>{" "}
                  <span className="book-infor-detail-price-new">
                    {numberWithCommas(item.price)} đ
                  </span>
                </p>
                <p className="book-infor-detail-quantity">
                  <div>Amount: 1</div>
                </p>
                <div className="book-infor-total-2">
                  <span>Canceled by you</span>
                  <button type="button" className="btn btn-danger">
                    Re-purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderCanceled;
