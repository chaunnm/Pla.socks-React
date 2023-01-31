import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from "bootstrap";
import BookItem from "../Books/BookItem";
import { Button, Container } from "react-bootstrap";
import "./BestSeller.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularProducts } from "../../../redux/features/product/popularProductsSlice";
import { Link } from "react-router-dom";
import products from "../../../data/products";
export default function BestSeller() {
  // const { error, products } = useSelector((state) => state.popularProducts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPopularProducts());
  // }, [dispatch]);
  const newProduct = products?.slice(4, 10);
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
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
  return (
    <Container className="best-seller-container">
      <div className="best-seller-title">
        <h3>RELATED PRODUCTS</h3>
      </div>
      <Slider className="best-seller-books" {...settings}>
        {newProduct &&
          newProduct.map((item, index) => {
            // console.log(item.images[0].url);
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
            Xem thêm &rarr;
          </Button>
        </Link>
      </div>
    </Container>
  );
}