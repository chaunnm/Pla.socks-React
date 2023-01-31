import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./InformationProduct.scss"
const InformationProduct = props => {
  // const [quantity, setQuantity] = useState(props.quantity)
  // const updateQuantity = (opt) =>{
  //   if(opt === "+"){
  //     setQuantity(quantity+1)
  //   }
  //   if(opt ==="-"){
  //     setQuantity(quantity-1 ===0 ? 1: quantity-1)
  //   }
  // }
  return (
    <div>
      <div className="basket-list">
        <div className="basket-list__item">
          <div className="basket-list__item__image">
            <img
              // src={props.image}
              src='https://drive.google.com/uc?id=1Xq1md2JnOVHTYBQS4O3N5lxkHqRJB-Di'
              alt="basket"
            />
          </div>
          <div className="basket-list__item__information">
            <h6 className="basket-list__item__information__title">
              {/* {props.nameBook} */}
              Great Horns Think Alike Junior Socks
            </h6>
            {/* <div className="basket-list__item__information__author">
              {props.author}
            </div> */}
            <div className="basket-list__item__information__price">
              {/* {props.price}  */}
              25000
              <span className="currency"> đ</span>
            </div>
            <div className="basket-list__item__information__icon">
              <i className="bx bxs-trash "></i>
            </div>
          </div>
          <div className="basket-list__item__quantity">
            {/* <div className="basket-list__item__quantity__btn" onClick={()=>{updateQuantity("-")}}>
                      <i className="bx bx-minus"></i>
                    </div> */}
            <div className="basket-list__item__quantity__input">{props.quantity}</div>
            {/* <div className="basket-list__item__quantity__btn" onClick={()=>{updateQuantity("+")}}>
                      <i className="bx bx-plus"></i>
                    </div> */}
          </div>
          <div className="basket-list__item__price">
            {/* {props.price * props.quantity} */}
            25000
            <span> đ</span>
          </div>
        </div>

      </div>
    </div>
  )
}

InformationProduct.propTypes = {
  nameBook: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
}

export default InformationProduct