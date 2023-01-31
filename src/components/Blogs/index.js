import React from "react";
import "./Blogs.scss";
import BlogItem from "./BlogItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function Blogs() {
  return (
    <div className="blogs-container container-fluid">
      <div className="blogs-banner">
        <img
          className="img-fluid"
          src="/images/blogs/blog-banner.png"
          alt="Blog UITBooks"
        />
      </div>
      <div className="blogs-intro m-5 text-center">
        <h1 className="m-2 fw-bold" style={{ fontSize: 24 }}>
          All information about socks
        </h1>
        <p>
          What is the history of the socks you are using, what types of designs
          and materials are available? Socks are always your best friend on
          every journey. You can use socks for the purpose of keeping your feet
          warm, protecting your health or simply to absorb sweat during sports
          activities.
        </p>
      </div>
      <div className="blogs-review">
        <img
          className="img-fluid shadow-lg"
          src="/images/blogs/blog-review.png"
          alt="Blog Review"
        />
      </div>
      <div className="blogs container-fluid mt-5">
        <div className="blog-trend">
          <h2
            className="blogs-title mt-2 p-2 bg-primary bg-opacity-10 ms-2"
            style={{ fontSize: 24 }}
          >
            Do you know ?
          </h2>
          <Carousel>
            <Carousel.Item>
              <div className="blog-trend-item">
                <Row>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="1"
                      src="/images/blogs/blog-trend-img1.png"
                      title="History of socks - Let Explore the History of socks with us"
                      description="“The word “sock” comes from the Old English word “socc” meaning a type of house slippers, which in turn is derived from the Latin word Soccus.."
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
                      src="/images/blogs/blog-trend-img1-2.png"
                      title="A pair of socks with improved materials"
                      description="Today, with the development of modern technology, the garment industry of socks has created more materials such as nano socks, activated carbon socks, ..."
                      author="Nguyễn"
                      time="22/04/2022"
                      view="134"
                      share="0"
                      path="/blog"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="3"
                      src="/images/blogs/blog-trend-img1-3.png"
                      title="The style of the socks - Which type of socks do you want"
                      description="Lazy socks are a type of socks designed to hug only half of the foot. Lazy socks in English are called No-show Socks or hidden socks."
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
                      description="There are many different styles of women's short-neck socks, such as: high-end women's socks, Korean-style short-neck socks, cute women's short-neck socks with cute animal motifs and shapes. But wondering are you really a sock master?"
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
                      description="It is said to bring a stylish break instead of monochromatic socks. Gingham pattern socks are suitable for most outfits, whether worn with shorts, jeans, khakis or skirts, these socks still exude elegance and sophistication."
                      author="Nguyễn"
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
                      description="If the winter weather reminds you of warm clothes such as hats, scarves, gloves, tights, etc., one of the indispensable and indispensable accessories is women's long socks."
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
      </div>
      <div className="blogs container-fluid mt-5">
        <div className="blog-trend">
          <h2
            className="blogs-title mt-2 p-2 bg-primary bg-opacity-10 ms-2"
            style={{ fontSize: 24 }}
          >
            Common types of socks and socks
          </h2>
          <Carousel>
            <Carousel.Item>
              <div className="blog-trend-item">
                <Row>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="1"
                      src="/images/blogs/blog-trend-img-b.png"
                      title="Reviews on Low Neck Socks"
                      description="Low-neck socks are the most popular and most used type to wear when going to school or work."
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
                      description="Medieval socks are suitable for both men and women when worn with high-top sneakers or boots."
                      author="Nguyễn"
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
                      description="High socks for girls to use when combined with skirts, dresses and shorts or men when combined with shorts to show a sporty and dynamic style."
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
                      src="/images/blogs/blog-trend-img1.png"
                      title="History of socks - Let Explore the History of socks with us"
                      description="“The word “sock” comes from the Old English word “socc” meaning a type of house slippers, which in turn is derived from the Latin word Soccus.."
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
                      src="/images/blogs/blog-trend-img1-2.png"
                      title="A pair of socks with improved materials"
                      description="Today, with the development of modern technology, the garment industry of socks has created more materials such as nano socks, activated carbon socks, ..."
                      author="Nguyễn"
                      time="22/04/2022"
                      view="134"
                      share="0"
                      path="/blog"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="3"
                      src="/images/blogs/blog-trend-img1-3.png"
                      title="The style of the socks - Which type of socks do you want"
                      description="Lazy socks are a type of socks designed to hug only half of the foot. Lazy socks in English are called No-show Socks or hidden socks."
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
      </div>
      <div className="blogs container-fluid mt-5">
        <div className="blog-trend">
          <h2
            className="blogs-title mt-2 p-2 bg-primary bg-opacity-10 ms-2"
            style={{ fontSize: 24 }}
          >
            Seasonal review
          </h2>
          <Carousel>
            <Carousel.Item>
              <div className="blog-trend-item">
                <Row>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="1"
                      src="/images/blogs/blog-trend-img-c.png"
                      title="Cute short-necked women's socks"
                      description="There are many different styles of women's short-neck socks, such as: high-end women's socks, Korean-style short-neck socks, cute women's short-neck socks with cute animal motifs and shapes. But wondering are you really a sock master?"
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
                      description="It is said to bring a stylish break instead of monochromatic socks. Gingham pattern socks are suitable for most outfits, whether worn with shorts, jeans, khakis or skirts, these socks still exude elegance and sophistication."
                      author="Nguyễn"
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
                      description="High socks for girls to use when combined with skirts, dresses and shorts or men when combined with shorts to show a sporty and dynamic style."
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
                      src="/images/blogs/blog-trend-img1.png"
                      title="History of socks - Let Explore the History of socks with us"
                      description="“The word “sock” comes from the Old English word “socc” meaning a type of house slippers, which in turn is derived from the Latin word Soccus.."
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
                      src="/images/blogs/blog-trend-img1-2.png"
                      title="A pair of socks with improved materials"
                      description="Today, with the development of modern technology, the garment industry of socks has created more materials such as nano socks, activated carbon socks, ..."
                      author="Nguyễn"
                      time="22/04/2022"
                      view="134"
                      share="0"
                      path="/blog"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="3"
                      src="/images/blogs/blog-trend-img1-3.png"
                      title="The style of the socks - Which type of socks do you want"
                      description="Lazy socks are a type of socks designed to hug only half of the foot. Lazy socks in English are called No-show Socks or hidden socks."
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
      </div>
      <div className="blogs container-fluid mt-5">
        <div className="blog-trend">
          <h2
            className="blogs-title mt-2 p-2 bg-primary bg-opacity-10 ms-2"
            style={{ fontSize: 24 }}
          >
            Maybe you are interested
          </h2>
          <Carousel>
            <Carousel.Item>
              <div className="blog-trend-item">
                <Row>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="1"
                      src="/images/blogs/blog-trend-img-d.png"
                      title="Cute short-necked women's socks"
                      description="There are many different styles of women's short-neck socks, such as: high-end women's socks, Korean-style short-neck socks, cute women's short-neck socks with cute animal motifs and shapes. But wondering are you really a sock master?"
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
                      src="/images/blogs/blog-trend-img-d2.png"
                      title="Vintage style with all textures"
                      description="It is said to bring a stylish break instead of monochromatic socks. Gingham pattern socks are suitable for most outfits, whether worn with shorts, jeans, khakis or skirts, these socks still exude elegance and sophistication."
                      author="Nguyễn"
                      time="22/04/2022"
                      view="134"
                      share="0"
                      path="/blog"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="3"
                      src="/images/blogs/blog-trend-img-d1.png"
                      title="Learn how to coordinate with fashion"
                      description="High socks for girls to use when combined with skirts, dresses and shorts or men when combined with shorts to show a sporty and dynamic style."
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
                      src="/images/blogs/blog-trend-img-b.png"
                      title="History of socks - Let Explore the History of socks with us"
                      description="“The word “sock” comes from the Old English word “socc” meaning a type of house slippers, which in turn is derived from the Latin word Soccus.."
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
                      title="A pair of socks with improved materials"
                      description="Today, with the development of modern technology, the garment industry of socks has created more materials such as nano socks, activated carbon socks, ..."
                      author="Nguyễn"
                      time="22/04/2022"
                      view="134"
                      share="0"
                      path="/blog"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <BlogItem
                      key="3"
                      src="/images/blogs/blog-trend-img-d1.png"
                      title="The style of the socks - Which type of socks do you want"
                      description="Lazy socks are a type of socks designed to hug only half of the foot. Lazy socks in English are called No-show Socks or hidden socks."
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
      </div>
    </div>
  );
}
