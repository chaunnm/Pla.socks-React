import React, { Fragment, useEffect, useState } from "react";
import "./BookDetail.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import { IoCheckmarkSharp, IoPersonCircleSharp } from "react-icons/io5";
import { FaGreaterThanEqual } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import Toast from "react-bootstrap/Toast";
import { Button } from "react-bootstrap";
import BookItem from "../Home/Books/BookItem";
import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorsDetails,
  getProductDetails,
} from "../../redux/features/product/productDetailsSlice";
import Loading from "../../more/Loader";
import {
  clearErrorsReview,
  newReview,
  resetStateReview,
} from "../../redux/features/product/newReviewSlice";
import { toast, ToastContainer } from "react-toastify";
import { Rating } from "@material-ui/lab";
import { addItemsToCart } from "../../redux/features/cart/cartSlice";
import { addItemsToFavourite } from "../../redux/features/favourite/favouriteSlice";
import { numberWithCommas } from "../../more/FormatNumber";
import moment from "moment";
import { loadUser } from "../../redux/features/user/userSlice";
import BestSeller from "../Home/BestSeller";
import products from "../../data/products";
//

export default function BookDetail() {
  function AddButton() {
    const addToCart = (id, stock) => {
      // if (stock < 1) {
      //   toast.error("Số lượng sản phẩm trong kho không đủ! ☹️");
      //   return;
      // }
      // dispatch(addItemsToCart(id, 1));
      toast.success(` ${product?.name} đã được thêm vào giỏ hàng! 🛒`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    return (
      <div>
        <button
          type="button"
          onClick={() => addToCart(product._id, product.Stock)}
          className="book-add-btn btn border rounded text-center fs-6 text-uppercase p-3 ps-4 pe-4 fw-bold"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    );
  }

  function AddFavorite() {
    const [show, setShow] = useState(false);
    const addToFavourite = (id) => {
      // dispatch(addItemsToFavourite(id));
      toast.success(
        ` ${product?.name} đã được thêm vào danh sách yêu thích thành công!`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    };

    return (
      <div>
        <button
          type="button"
          onClick={() => addToFavourite(product._id)}
          className="book-like-btn border border-2 rounded text-center align-middle p-1 ps-3 pe-3"
        >
          <i className="book-like-icon text-danger fs-6">
            {" "}
            <BsFillHeartFill />{" "}
          </i>
          Thêm vào yêu thích
        </button>
      </div>
    );
  }

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

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

  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const getProductDetails = () => {
      return products.find((item) => {
        return item._id === id;
      });
    };
    let product = getProductDetails();
    console.log("product", product);
    setProduct(product);
    getProductDetails();
  }, [id]);
  const images = [
    {
      original: product?.images,
      thumbnail: product?.images,
    },
  ];
  // console.log("images", images);
  const dispatch = useDispatch();
  // const { loading, error } = useSelector(
  //   (state) => state.productDetails
  // );
  // const { success, error: reviewError } = useSelector(
  //   (state) => state.newReview
  // );

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.user);
  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("bookId", id);
    console.log(comment, rating);
    console.log(myForm);
    dispatch(newReview(myForm));
    setComment("");
  };

  // useEffect(() => {
  //   dispatch(getProductDetails(id));
  // }, [dispatch, id]);

  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     dispatch(clearErrorsDetails());
  //   }
  //   if (!success && reviewError) {
  //     toast.error(`${reviewError}`, {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.log(reviewError);
  //     dispatch(clearErrorsReview());
  //     dispatch(getProductDetails(id));
  //   } else if (success) {
  //     toast.success("Thêm review sách thành công! 🎊", {
  //       position: "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.log(success);
  //     dispatch(resetStateReview());
  //     dispatch(getProductDetails(id));
  //   }
  // }, [dispatch, error, alert, reviewError, success]);

  // const [Images, setImages] = useState([]);

  // useEffect(() => {
  //   if (product.images) {
  //     let images = [];

  //     product.images.forEach((item, i) => {
  //       images.push({
  //         original: item.images,
  //         thumbnail: item.images,
  //       });
  //     });
  //     setImages(images);
  //   }
  // }, [product]);

  // let images = [];
  // product &&
  //   product.forEach((item) => {
  //     images.push({
  //       original: item.url,
  //       thumbnail: item.url,
  //     });
  //   });
  console.log(product);
  return (
    <Fragment>
      {product && (
        <div className="book-container container-fluid">
          <div className="book-breadcrumb ms-5 mt-2">
            <Breadcrumb>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/books" }}
                className="text-capitalize"
              >
                Categories
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="text-capitalize">
                {product.name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="book-main-container pb-5">
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <div className="book-main-img">
                    {/* <ImageGallery
                      items={[
                        {
                          original:
                            "https://drive.google.com/uc?id=13x0hsHIdeqGGVjAx6c5SyvSjZb3IO4oC",
                          thumbnail:
                            "https://drive.google.com/uc?id=13x0hsHIdeqGGVjAx6c5SyvSjZb3IO4oC",
                        },
                      ]}
                    /> */}
                    {/* <ImageGallery
                      items={product.images &&
                        product.images.map((prop) => (
                          {original: prop.url, thumbnail: prop.url}
                        ))}
                    /> */}
                    <ImageGallery items={images} />
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <div className="book-main-intro ms-5">
                    <div className="book-main-title">
                      <h3 className="book-title text-capitalize">
                        {product.name}
                      </h3>
                      <div className="book-author-container d-flex">
                        <div className="book-author me-5 mb-2">
                          {/* <span>Tác giả:</span> */}
                          <span className="book-author-name ms-1 me-2">
                            {/* {product.author} */}
                            Design argyle custom dress socks 80% plastic, 18%
                            nylon and 2% spandex
                          </span>
                        </div>
                        {/* <div className="book-publish">
                          <span>Phát hành:</span>
                          <span className="book-publish-name ms-1 me-2">
                            {product.publisher}
                          </span>
                        </div> */}
                      </div>
                      <div className="book-rating d-flex border-bottom">
                        <Rating value={product.ratings} readOnly />
                        <p className="d-inline ms-2 align-items-start">
                          {product.numOfReviews} đánh giá từ độc giả
                        </p>
                      </div>
                    </div>
                    <div className="book-main-price mt-2 d-flex align-items-center border-bottom pb-2">
                      <div className="book-price-container flex-grow-1">
                        <div className="book-price-current">
                          <span className="book-current fs-1">
                            {numberWithCommas(product.price)}{" "}
                            <sup>
                              <u>đ</u>
                            </sup>
                          </span>
                        </div>
                        <div className="book-price-cover-container d-flex">
                          <div className="book-price-cover">
                            <span>Price:</span>
                            <span className="book-cover ms-2">
                              {/* 80.000{" "} */}
                              {numberWithCommas(product.price + 15000)}{" "}
                              <sup>
                                <u>đ</u>
                              </sup>
                            </span>
                          </div>
                          <div className="book-price-sale">
                            <span className="book-sale-name ms-5">Save:</span>
                            <span className="book-sale ms-2 fw-bold">
                              15.000{" "}
                              <sup>
                                <u>đ</u>
                              </sup>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="book-add-button flex-shrink-0 d-grid gap-2 d-md-flex justify-content-md-end col-4">
                        <AddButton />
                      </div>
                    </div>
                    <div className="book-main-check mt-3">
                      <p className="book-check">
                        <i className="book-check-icon text-success">
                          <IoCheckmarkSharp />{" "}
                        </i>
                        Free UK delivery on orders over
                        <i className="book-compare-icon text-success fs-6">
                          {" "}
                          <FaGreaterThanEqual />{" "}
                        </i>
                        <span className="text-success fw-bold">150.000 đ</span>
                      </p>
                      <p className="book-check">
                        <i className="book-check-icon text-success">
                          <IoCheckmarkSharp />{" "}
                        </i>
                        Free gift on orders over
                        <i className="book-compare-icon text-success fs-6">
                          {" "}
                          <FaGreaterThanEqual />{" "}
                        </i>
                        <span className="text-success fw-bold">150.000 đ</span>
                      </p>
                      <p className="book-check">
                        <i className="book-check-icon text-success">
                          <IoCheckmarkSharp />{" "}
                        </i>
                        Free nationwide shipping with orders
                        <i className="book-compare-icon text-success fs-6">
                          {" "}
                          <FaGreaterThanEqual />{" "}
                        </i>
                        <span className="text-success fw-bold">250.000đ</span>
                      </p>
                      <div className="book-like-button">
                        <AddFavorite />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="book-intro ms-5 me-5">
            <h4 className="book-intro-title text-capitalize pb-2">
              Description
            </h4>
            <h5 className="book-name-title text-capitalize pt-2">
              {product.name}
            </h5>
            <p className="book-intro-content">
              Design argyle custom dress socks 80% plastic, 18% nylon and 2%
              spandex To begin customizing, choose the color and size of your
              socks. Then, choose two other colors to complete the argyle
              design. Finish it off by adding a logo or some text to the front,
              sides, or bottom of the socks! Custom dress socks make the perfect
              gift for your employees, clients, and customers. Ditch the
              T-shirts and try something different. Create custom socks with
              your company’s colors, logo, or slogan.
            </p>
          </div>
          <div className="book-detail ms-5 me-5 pt-3">
            <h4 className="book-detail-title text-capitalize pb-2">
              PRODUCT INFORMATION
            </h4>
            <Table striped bordered hover responsive>
              <tbody>
                <tr>
                  <td>Amount</td>
                  <td>1 Pair Pack</td>
                </tr>
                <tr>
                  <td>Making</td>
                  <td>Hand linked toes for smooth seams</td>
                </tr>
                <tr>
                  <td>Fabric quality</td>
                  <td>Comfort cuffs</td>
                </tr>
                <tr>
                  <td>Methods of preservation</td>
                  <td>
                    Naturally antibacterial, kind to every skin type, moisture
                    handling, heat regulating; Machine washable at 40°
                  </td>
                </tr>
                <tr>
                  <td>Thickness</td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>210 gram</td>
                </tr>
                <tr>
                  <td>Sold</td>
                  <td>{product.Sold}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product.category}</td>
                </tr>
              </tbody>
            </Table>
            <div className="book-add-button text-center">
              <AddButton />
            </div>
          </div>
          <div className="book-comment ms-5 me-5">
            <h4 className="book-comment-title text-capitalize pb-2 mt-5">
              Đánh giá
            </h4>
            <div className="book-comment-rating d-flex mb-2">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                className="book-item-rating"
                name="rating"
              />
            </div>
            <form>
              <div className="book-comment-write d-flex">
                <div className="book-comment-avatar flex-shrink-0 fs-1">
                  <IoPersonCircleSharp />
                </div>
                <div className="book-comment-field flex-grow-1 ms-3 d-flex align-items-end flex-column">
                  <textarea
                    id="book-cmt-field"
                    className="w-100 ps-2"
                    name="comment"
                    placeholder="Viết bình luận của bạn"
                    rows={3}
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                  <div className="book-comment-button mt-2 mb-4">
                    <Button
                      //   type="submit"
                      className="book-cmt-btn border rounded text-center fs-6"
                      onClick={reviewSubmitHandler}
                    >
                      Đăng
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <div className="book-comment-others">
              {product.reviews &&
                product.reviews.map((item, i) => (
                  <div className="book-comment-user d-flex border-top" key={i}>
                    <div className="book-comment-avatar flex-shrink-0 fs-1">
                      <IoPersonCircleSharp />
                    </div>
                    <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                      <div className="book-comment-userinfo d-flex">
                        <div className="book-comment-name w-100 fw-bold">
                          <p>
                            {item.name}{" "}
                            <i className="fw-normal">muốn nhắn nhủ:</i>
                          </p>
                        </div>
                        <Rating
                          value={item.rating}
                          size="large"
                          readOnly
                          className="book-comment-rating me-3"
                        />
                        <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                          <p>{moment(item.time).format("DD/MM/YYYY")}</p>
                        </div>
                      </div>
                      <div className="book-comment-content">
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <BestSeller />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </Fragment>
  );
}
