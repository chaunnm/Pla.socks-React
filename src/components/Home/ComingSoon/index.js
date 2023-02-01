import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookItem from "../Books/BookItem";
import { Button, Container } from "react-bootstrap";
import "./ComingSoon.css";
import { useDispatch, useSelector } from "react-redux";
import { getNewsProducts } from "../../../redux/features/product/newsProductsSlice";
import { Link } from "react-router-dom";
import products from "../../../data/products";

export default function ComingSoon() {
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
          slidesToShow: 4,
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
  const newProduct = products?.slice(11, 17);
  // const { error, products } = useSelector((state) => state.newsProducts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNewsProducts());
  // }, [dispatch]);
  return (
    <Container className="coming-soon-container">
      <div className="coming-soon-title">
        <h3>Comming Soon</h3>
        <img src="https://drive.google.com/uc?id=19KnqBhGINLa8yoIvJZAIRZ3GvP7rpjIp" />
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <Slider className="best-seller-books" {...settings}>
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
      </div>

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
