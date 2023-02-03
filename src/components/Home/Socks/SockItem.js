import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import "./SockItem.css";
import { Rating } from "@material-ui/lab";
import { numberWithCommas } from "../../../more/FormatNumber";

export default function BookItem(props) {
  // const ratingStars = () => {
  //   if (props.rating === 3) {
  //     return (
  //       <div className="rating-container">
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStar className="star-unfilled" />
  //         <BsIcons.BsStar className="star-unfilled" />
  //       </div>
  //     );
  //   } else if (props.rating === 3.5) {
  //     return (
  //       <div className="rating-container">
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarHalf className="star-halffilled" />
  //         <BsIcons.BsStar className="star-unfilled" />
  //       </div>
  //     );
  //   } else if (props.rating === 4) {
  //     return (
  //       <div className="rating-container">
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStar className="star-unfilled" />
  //       </div>
  //     );
  //   } else if (props.rating === 4.5) {
  //     return (
  //       <div className="rating-container">
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarHalf className="star-halffilled" />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="rating-container">
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //         <BsIcons.BsStarFill className="star-filled" />
  //       </div>
  //     );
  //   }
  // };
  const priceDiscount = props.price + 15000;
  return (
    <div className="BookItems">
      <Link to={`/product/${props.id}`}>
        <li className="book-item">
          <div className="book-item-container">
            <figure className="book-item-img-wrap">
              <img
                className="book-item-img"
                alt="sach-hay"
                src={props.images}
              />
            </figure>
            <div className="book-item-info">
              <div className="book-item-name">
                <p href="/" className="book-item-title">
                  {props.name}
                </p>
                {/* <h6 className="book-item-author">{props.author}</h6> */}
              </div>

              <div className="book-item-rate-stock">
                <Rating value={props.ratings} size="small" readOnly />

                <div className="line"></div>
                <span className="sold">Sold {props.Sold}</span>
              </div>

              <div className="book-item-prices">
                <p>{numberWithCommas(priceDiscount)} đ</p>
                <p>{numberWithCommas(props.price)} đ</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}
