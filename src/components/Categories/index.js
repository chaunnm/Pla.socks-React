import React, { useState, useEffect } from "react";
import "./Categories.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import BookItem from "../Home/Socks/SockItem";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";

import { priceData } from "../../more/data";

import {
  clearErrors,
  getProduct,
} from "../../redux/features/product/productsSlice";
import { Button } from "react-bootstrap";

import products from "../../data/products";

export default function BookCategories() {
  // const dispatch = useDispatch();
  // let { keyword } = useParams();
  const [productList, setProductList] = useState(products.slice(0, 12));
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 1000000]);
  // const [category, setCategory] = useState();
  // const [ratings, setRatings] = useState(0);
  // const [author, setAuthor] = useState();
  // const [publisher, setPublisher] = useState();

  const setCurrentPageNo = (e) => {
    console.log("Page", e);
    setCurrentPage(e);
  };
  useEffect(() => {
    const newlisst = products.slice(
      12 * (currentPage - 1),
      12 * (currentPage - 1) + 12
    );
    console.log(newlisst);
    setProductList(newlisst);
  }, [currentPage]);

  // useSelector((state) => state.products);

  const priceHandlerSlider = (event, newPrice) => {
    setPrice(newPrice);
  };

  const priceHandlerClick = (e) => {
    setPrice([priceData[4], Number(e.target.value)]);
  };
  // const reserHandler = (e) => {
  //   setPrice([0, 1000000]);
  //   setCategory();
  //   setAuthor();
  //   setPublisher();
  //   setCurrentPage(1);
  // };
  // useEffect(() => {
  //   if (error) {
  //     console.log(error);
  //     dispatch(clearErrors());
  //   }
  //   if (!keyword) keyword = "";

  //   const infoData = {
  //     keyword: keyword,
  //     price: price,
  //     author: author,
  //     publisher: publisher,
  //     category: category,
  //     currentPage: currentPage,
  //     ratings: ratings,
  //   };
  //   console.log("infodata ", infoData);

  //   dispatch(getProduct(infoData));
  // }, [
  //   dispatch,
  //   keyword,
  //   currentPage,
  //   price,
  //   category,
  //   ratings,
  //   alert,
  //   error,
  //   author,
  //   publisher,
  // ]);
  const [index, setIndex] = useState(0);
  const handleActive = (index) => {
    console.log(index);
    setIndex(index);
  };
  const categoryData = [
    "Boxes Of Love",
    "Customized Socks",
    "Socks For Kids",
    "Socks For Men",
    "Socks For Summer",
    "Socks For Women",
    "Khác",
  ];
  return (
    <div className="categories-container container-fluid">
      {/* <div className="categories-breadcrumb ms-5 mt-2 mb-5">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-capitalize" active>
            Categories
          </Breadcrumb.Item>
        </Breadcrumb>
      </div> */}
      <div className="categories-main-container m-5 mt-3">
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey="#van-hoc-trong-nuoc"
        >
          <Row>
            <Col sm={3}>
              <div className="categories-nav-container">
                <div className="categories-nav mb-5">
                  <h6 className="categories-nav-title p-3 mb-0 fw-bold rounded">
                    PRODUCT CATEGORIES
                  </h6>
                  <ListGroup
                    variant="pills"
                    className="categories-nav-main d-flex flex-column text-capitalize"
                  >
                    {categoryData.map((item, i) => (
                      <div
                        onClick={() => handleActive(i)}
                        className={`list-group-item form-check ${
                          index === i ? "active" : ""
                        }`}
                      >
                        <label className={`form-check-label`}>
                          {/* <input
                            className="form-check-input ms-1 me-2"
                            type="radio"
                            name="flexRadioDefault"
                            value={item}
                            onClick={(e) => {
                              // reserHandler();
                              // setCategory(e.target.value);
                            }}
                          /> */}
                          {item}
                        </label>
                      </div>
                    ))}
                  </ListGroup>
                </div>

                <div className="categories-price mb-5">
                  <h6 className="categories-price-title p-3 mb-0 fw-bold rounded">
                    PRICE
                  </h6>
                  <Slider
                    value={price}
                    onChange={priceHandlerSlider}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={1000000}
                  />
                  {priceData.map((item, i) => (
                    <div className="list-group-item form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input ms-1 me-2"
                          type="radio"
                          name="flexRadioDefault"
                          value={item}
                          onClick={(e) => {
                            if (i === 0) priceData[i - 1] = 0;
                            setPrice([
                              priceData[i - 1],
                              Number(e.target.value),
                            ]);
                          }}
                        />
                        {priceData[i - 1]}đ - {priceData[i]}đ
                      </label>
                    </div>
                  ))}
                  <div className="list-group-item form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input ms-1 me-2"
                        type="radio"
                        name="flexRadioDefault"
                        value=""
                        onClick={priceHandlerClick}
                      />
                      Above 500000đ
                    </label>
                  </div>
                </div>

                <Button variant="outline-primary">Reset</Button>
              </div>
            </Col>
            <Col sm={9}>
              {/* {loading ? (
                <Loading />
              ) : ( */}
              <div className="categories-main">
                {products.length === 0 ? (
                  <h3 className="categories-main-title p-2 ps-3 text-light text-capitalize">
                    So sad 😭 There is no product for you!!!
                  </h3>
                ) : (
                  <div>
                    <h3 className="categories-main-title p-2 ps-3 text-light text-capitalize">
                      Product List
                    </h3>
                    <div className="category-books row row-cols-3">
                      {productList &&
                        productList.map((item, index) => {
                          return (
                            <BookItem
                              key={index}
                              id={item._id}
                              name={item.name}
                              //   img={item.images[0].url}
                              images={item.images}
                              price={item.price}
                              Sold={item.Sold}
                              ratings={item.ratings}
                            />
                          );
                        })}
                    </div>
                    <div
                      className="pagination__box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "6vmax",
                      }}
                    >
                      <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={12}
                        totalItemsCount={45}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Previous"
                        firstPageText="First"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* )} */}
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
