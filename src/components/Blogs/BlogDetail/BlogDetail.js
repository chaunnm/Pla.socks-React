import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./BlogDetail.scss";
import BlogItem from "../BlogItem";
import { BsCircle, BsFillStarFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  return (
    <div className="blog-container container-fluid">
      {/* <div className="blog-breadcrumb ms-5 mt-2">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="/blogs" className="text-capitalize">
            Chia sẻ
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-capitalize">
            How to style crew socks for your authentic outfits
          </Breadcrumb.Item>
        </Breadcrumb>
      </div> */}
      <div className="blog-main-container pt-2">
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8}>
              <div className="blog-detail">
                <div className="blog-detail-main">
                  <div className="blog-main bg-light bg-gradient rounded p-2">
                    <div className="blog-main-author border-bottom pb-2 mb-2">
                      <span>Tác giả:</span>
                      <span className="blog-author-name ms-1 me-2">
                        Nguyễn Văn A
                      </span>
                      <i className="blog-time-icon me-1">
                        <BsCircle />
                      </i>
                      <span className="blog-time">01/04/2022</span>
                    </div>
                    <div className="blog-main-content text-dark-80">
                      <div className="blog-cover-img">
                        <img
                          className="img-fluid mb-2"
                          src="/images/blogs/blog-trend-detail.png"
                          alt="blog-cover-img"
                        />
                      </div>
                      <div className="blog-content">
                        <h1
                          className="blog-tilte mt-2"
                          style={{ fontSize: 28 }}
                        >
                          How to style crew socks for your authentic outfits
                        </h1>
                        <p>
                          What are the most frequent questions about crew socks?
                          Everybody heard something like “are crew socks long?
                          how high are crew socks?” and again “are crew socks in
                          style?” at least once. Clearly there is some confusion
                          about crew socks length and their fashion potential.
                          This is why we’re going to explain in detail all you
                          need to know about crew socks and at the end you
                          cannot help but have them!
                        </p>
                        {/* <p>
                          Cuốn sách Sống Lành Để Trẻ của Norman W. Walker sẽ
                          cung cấp cho bạn những kiến thức để xây dựng và duy
                          trì một lối sống trẻ trung, lành mạnh; không chỉ dừng
                          lại ở cách chúng ta ăn uống mà còn vô số những tri
                          thức thú vị và bổ ích khác.
                        </p> */}
                        <h2 style={{ fontSize: 24 }}>
                          What are crew socks? Height, size and all you need to
                          know about crew socks
                        </h2>
                        <p>
                          Let’s start from the very beginning: for example, do
                          you know the crew socks meaning? The etymology of this
                          word goes back to 1948 and it’s probably connected to
                          the naval field, where the crew of the ship wear them
                          as part of their uniform. From it the name “crew
                          socks” as we well know.{" "}
                        </p>
                        <img
                          className="blog-content-img img-fluid mb-2"
                          src="/images/blogs/blog-trend-img3.png"
                          alt="blog-img"
                        />

                        <p>
                          Another question could be what length are crew socks?
                          or what size are crew socks? Crew socks height is
                          usually around 15-20 cm, so they cover the lower part
                          of your leg.
                        </p>
                        <h4>Crew socks style tips for him and for her</h4>
                        <p>
                          Crew socks with leggings: for women that want to dare,
                          you can wear them over leggings actually. The more
                          socks are colored the better!
                        </p>
                        <p>
                          Crew socks with sneakers: it’s the best choice for
                          smart casual outfits, like evenings with friends, but
                          also business meetings. As soon as you sit down, your
                          personalized crew socks are going to be well visible!
                        </p>
                        <img
                          className="blog-content-img img-fluid mb-2"
                          src="/images/blogs/blog-trend-img2.png"
                          alt="blog-img"
                        />
                        <p>
                          Crew socks with sneakers: it’s the best choice for
                          smart casual outfits, like evenings with friends, but
                          also business meetings. As soon as you sit down, your
                          personalized crew socks are going to be well visible!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-other bg-light bg-gradient rounded p-2 mt-5">
                  <h4 className="blog-other-title p-2 ps-0 border-bottom border-1 border-black-70 text-black-70">
                    Bài viết liên quan
                  </h4>
                  <Carousel>
                    <Carousel.Item>
                      <div className="blog-trend-item">
                        <Row>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="1"
                              src="/images/blogs/blog-trend-img-b.png"
                              title="Reviews on Low Neck Socks"
                              description="Low-neck socks are the most popular"
                              author="Ánh"
                              time="22/04/2022"
                              view="134"
                              share="0"
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="2"
                              src="/images/blogs/blog-trend-img-b2.png"
                              title="Reviews on Medieval Socks"
                              description="Medieval socks are suitable for both men."
                              author="Nga"
                              time="22/04/2022"
                              view="134"
                              share="0"
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="3"
                              src="/images/blogs/blog-trend-img-b3.png"
                              title="Review on High Socks"
                              description="High socks for girls to use when combined with skirts."
                              author="Nhân"
                              time="22/04/2022"
                              view="134"
                              share="0"
                              path="/blog"
                            />
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="blog-trend-item">
                        <Row>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="1"
                              src="/images/blogs/blog-trend-img-c.png"
                              title="Cute short-necked women's socks"
                              description="There are many different styles of women's."
                              author="Ánh"
                              time="22/04/2022"
                              view="134"
                              share="0"
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="2"
                              src="/images/blogs/blog-trend-img-c2.png"
                              title="Vintage style with all textures"
                              description="It is said to bring a stylish break instead."
                              author="Han"
                              time="22/04/2022"
                              view="134"
                              share="0"
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="3"
                              src="/images/blogs/blog-trend-img-c3.png"
                              title="Learn how to coordinate with fashion"
                              description="High socks for girls to use."
                              author="Nhân"
                              time="22/04/2022"
                              view="134"
                              share="0"
                              path="/blog"
                            />
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="blog-comment bg-light bg-gradient rounded p-2 mt-5 mb-5">
                  <h4 className="blog-other-title mt-2 p-2 ps-0 border-bottom border-1 border-black-70 text-black-70">
                    Reviews
                  </h4>
                  <div className="blog-comment-rating">
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <p className="d-inline ms-2 align-middle">
                      5.0 <i>(4 reviews)</i>
                    </p>
                  </div>
                  <p className="blog-comment-number mt-2">2 comments</p>
                  <form>
                    <div className="blog-comment-write d-flex">
                      <div className="blog-comment-avatar flex-shrink-0 fs-1">
                        <IoPersonCircleSharp />
                      </div>
                      <div className="blog-comment-field flex-grow-1 ms-3 d-flex align-items-end flex-column">
                        <textarea
                          id="blog-cmt-field"
                          className="w-100 ps-2"
                          name="comment"
                          placeholder="Write your feelings for this blog"
                          rows={3}
                        ></textarea>
                        <div className="blog-comment-button mt-2 mb-4">
                          <button
                            type="submit"
                            className="blog-cmt-btn border rounded text-center fs-6"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="blog-comment-others">
                    <div className="blog-comment-user d-flex border-top">
                      <div className="blog-comment-avatar flex-shrink-0 fs-1">
                        <IoPersonCircleSharp />
                      </div>
                      <div className="blog-comment-container flex-grow-1 ms-3 mt-4">
                        <div className="blog-comment-userinfo d-flex">
                          <div className="blog-comment-name w-100 fw-bold">
                            <p>Henry</p>
                          </div>
                          <div className="blog-comment-date flex-shrink-1 text-secondary fs-6">
                            <p>04/02/2023</p>
                          </div>
                        </div>
                        <div className="blog-comment-content">
                          <p>Bài viết rất hay!</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-user d-flex border-top">
                      <div className="blog-comment-avatar flex-shrink-0 fs-1">
                        <IoPersonCircleSharp />
                      </div>
                      <div className="blog-comment-container flex-grow-1 ms-3 mt-4">
                        <div className="blog-comment-userinfo d-flex">
                          <div className="blog-comment-name w-100 fw-bold">
                            <p>Doe</p>
                          </div>
                          <div className="blog-comment-date flex-shrink-1 text-secondary fs-6">
                            <p>03/02/2023</p>
                          </div>
                        </div>
                        <div className="blog-comment-content">
                          <p>Excellent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="blog-sidebar position-sticky">
                <div className="blog-categories bg-light bg-gradient rounded p-2 mb-5">
                  <h6 className="blog-categories-title p-2 pb-1 d-inline-flex bd-highlight text-white mb-0 text-capitalize">
                    Blog Categories
                  </h6>
                  <div className="blog-categories-list border-top border-1 border-dark">
                    <ListGroup variant="flush text-capitalize">
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Trend</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Famous</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Normal</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Styles</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Fashion</ListGroup.Item>
                      </Link>
                    </ListGroup>
                  </div>
                </div>
                <div className="book-categories bg-light bg-gradient rounded p-2 mb-5">
                  <h6 className="book-categories-title p-2 pb-1 d-inline-flex bd-highlight text-white mb-0 text-capitalize">
                    Recommends
                  </h6>
                  <div className="book-categories-list border-top border-1 border-dark">
                    <ListGroup variant="flush text-capitalize">
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Do you know ?</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Common types of socks and socks
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Seasonal review</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Maybe you are interested
                        </ListGroup.Item>
                      </Link>
                      {/* <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Sách thiếu nhi</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Sách tuổi teen</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Sách chuyên ngành
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Sách thường thức đời sống
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Công ty phát hành
                        </ListGroup.Item>
                      </Link> */}
                    </ListGroup>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
