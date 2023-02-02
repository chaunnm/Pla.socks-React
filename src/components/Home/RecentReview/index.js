import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookItem from "../Books/BookItem";
import { Button, Container } from "react-bootstrap";
import "./RecentReview.css";
import { getMostReviewProducts } from "../../../redux/features/product/mostReviewProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import products from "../../../data/products";

export default function RecentReview() {
  const newProduct = products?.slice(28, 34);
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const { error, products } = useSelector((state) => state.mostReviewProducts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMostReviewProducts());
  // }, [dispatch]);
  return (
    <Container className="recent-review-container">
      <div className="recent-review-title">
        <h3>Review gần đây</h3>
        <img src="https://drive.google.com/uc?id=1QT5V-HkzTgDSSvGRHFk9VZuXeIngbe8V" />
      </div>
      <Slider className="recent-review-books" {...settings}>
        {newProduct &&
          newProduct.map((item, index) => {
            //   console.log(item.images);
            return (
              <BookItem
                key={index}
                id={item._id}
                name={item.name}
                images={item.images}
                price={item.price}
                Sold={item.Sold}
                ratings={item.ratings}
              />
            );
          })}
      </Slider>
      <div className="text-center mt-0">
        <Link to="/books">
          <Button className="see-more" variant="primary">
            See more &rarr;
          </Button>
        </Link>
      </div>
    </Container>
  );
}
