import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookItem from "../Books/BookItem";
import { Button, Container } from "react-bootstrap";
import "./Interest.css";
import { useDispatch, useSelector } from "react-redux";
import { getRatedProducts } from "../../../redux/features/product/ratedProductsSlice";
import { Link } from "react-router-dom";
import products from "../../../data/products";

export default function Interest() {
  // const { error, products } = useSelector((state) => state.ratedProducts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRatedProducts());
  // }, [dispatch]);
  const newProduct = products?.slice(18, 24);

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
  return (
    <Container className="interest-container">
      <div className="interest-title">
        <h3>Recent Products</h3>
        <img src="https://drive.google.com/uc?id=1pvmTXhO04IWkhIDuhiZtoQ240Nr4esGR" />
      </div>
      <Slider className="interest-books" {...settings}>
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
            See more &rarr;
          </Button>
        </Link>
      </div>
    </Container>
  );
}
