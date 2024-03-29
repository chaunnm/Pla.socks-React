import React from "react";
import "./InformationBill.scss";
import PropTypes from "prop-types";

const InformationBill = (props) => {
  return (
    <div>
      <div className="myOrder">
        <div className="myOrder__information">
          <div className="myOrder__information__quantity">
            Amount: 1{/* {props.quantity}  */}
            item
          </div>
          <div className="myOrder__information__row">
            <div className="myOrder__information__row__name">Total: </div>
            <div className="myOrder__information__row__value">
              {/* {props.totalMoney}  */}
              25000 đ
            </div>
          </div>
          <div className="myOrder__information__row">
            <div className="myOrder__information__row__name">Discount: </div>
            <div className="myOrder__information__row__value">
              {/* {props.discount}  */}
              0đ
            </div>
          </div>
        </div>
        <hr className="myOrder__line" />
        <div className="myOrder__bill">
          <div className="myOrder__bill__name">Total:</div>
          <div className="myOrder__bill__value">
            {/* {props.totalMoney} */}
            25000 đ
          </div>
        </div>
      </div>
    </div>
  );
};
InformationBill.propTypes = {
  quantity: PropTypes.number,
  totalMoney: PropTypes.number,
  discount: PropTypes.number,
};

export default InformationBill;
