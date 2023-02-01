import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import BlogItem from "../../Blogs/BlogItem";
import { Container } from "react-bootstrap";
import "./RecentBlogs.scss";

export default function RecentBlogs() {
  return (
    <Container className="recent-blogs-container">
      <div className="recent-blogs-title">
        <h3>Recent Blogs</h3>
        <img src="https://drive.google.com/uc?id=1YUwcuwr0koaOljrwnnM55_CkRQLxptpt" />
      </div>
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
    </Container>
  );
}
