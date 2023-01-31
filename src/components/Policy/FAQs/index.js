import React from "react";
import "./FAQ.css";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

export default function FAQ() {
  return (
    <Container className="faqs-container" fluid="md">
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-capitalize">
          Frequently asked questions
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="faqs-title">
        <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
        <p>Frequently asked questions</p>
      </div>
      <div className="faqs-content">
        <h4 className="heading-title">
          1. Can I come to see the product before buying?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            We're sorry that <b>Pla.socks</b> is currently only offering
            purchases via e-commerce channel is website <b>Pla.socks</b>. We I
            don't have an offline store right now so customers can Come directly
            for easy product selection.
            <br /> However, we will support and advise enthusiastically through
            the Contact channel to help you choose the right books for you Wish
            books and home delivery, completely convenient.
          </p>
        </div>
        <h4 className="heading-title">
          2. What if my order has an out of stock product?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            In this case, Customer Care will contact you to report the status of
            your order and suggest solutions decision, and we will also notify
            you of the product status your out of stock product as soon as it is
            back in stock.
          </p>
        </div>
        <h4 className="heading-title">
          3. I want to add/remove products, change shipping address?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            Once you have successfully placed your order, you can access your
            account Account, Order Management or check email to double check
            Information line.
          </p>
          <p>
            In case you need to edit your order, you can contact us Contact
            customer support by going to the "Contact Us" page and Select
            communication channel, then just provide information Details
            include:
          </p>
          <p>
            _ Order number <br />_ New product name/address and required
            information editing
          </p>
          <ul>
            <li>
              Note: In case of urgent need, please call to Hotline: 083.457.7251
              for the earliest and most timely support. In the remaining cases,
              please limit use Support method via Hotline to avoid total
              congestion radio.
            </li>
          </ul>
        </div>
        <h4 className="heading-title">
          4. Can I cancel an order I have placed?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            You can only cancel your order when the order has not been confirmed
            received from <b>Pla.socks</b> customer care department. If not If
            you want to receive goods, please refer to the policy change &amp;
            our payment.
          </p>
        </div>
        <h4 className="heading-title">
          5. Can I order packages &amp; Can you give a gift?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            Our UITBooks bookstore store offers package and gift services gifts
            and send messages according to gifts. For this service, you must
            must pay the purchase invoice and the gift wrapping fee before they
            I do the service. Gift wrapping service fee ranges from 5,000 -
            10,000 VND and random wrapping paper.
          </p>
        </div>
        <h4 className="heading-title">
          6. Can I request a VAT invoice for my order?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            Our UITBooks bookstore store can write VAT invoices on request
            customer demand.
          </p>
          <ul>
            <li>
              Note: Invoices are only sent after the order has been completed
              public (delivered & collected).
            </li>
          </ul>
        </div>
        <h4 className="heading-title">7. Why hasn't my order arrived yet?</h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            If for some reason your order has not been delivered on time, please
            check the order status in the Admin page order or contact their
            Customer Support me for support:
          </p>
        </div>
        <h4 className="heading-title">
          8. Can I entrust someone else to receive the goods and pay for them?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            You can entrust someone else to receive the goods and pay instead of
            myself. In this case, the trustee should correctly state name and
            phone number of the trustee. The trustee must sign Confirm that the
            order has been received.
          </p>
        </div>
        <h4 className="heading-title">
          9. Can I exchange or return a purchased item?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            Please check the goods carefully before signing the confirmation
            shipper. If the product is damaged, do not use it OK (the company's
            fault), we are willing to exchange another product at the request of
            the customer in the fastest time depending on area since receipt of
            defective goods. To request to exchange for another product, please
            Please send a request to our customer service department.
          </p>
          <p>
            To make an exchange, please send the goods to the address companies
            (Neighborhood 6, Linh Trung Ward, Thu Duc City, Ho Chi Minh City),
            shops Returns must be in the original condition. After receiving the
            goods You send it back, we will send the replacement item for you
            guest. You will not incur any other costs.
          </p>
          <p>
            We will not make an exchange in the case of a product Damaged
            product comes from your side.
          </p>
        </div>
        <h4 className="heading-title">
          10. I want to comment, complain about the service, what should I do?
        </h4>
        <div className="FAQ-answer">
          <QuestionAnswerOutlinedIcon />
          <p>
            We always welcome all your comments and complaints to translate Our
            service is getting better day by day. You can send any your
            suggestions, complaints via <b>pla.socks@gmail.com</b>, we will
            respond as soon as possible.
          </p>
        </div>
      </div>
    </Container>
  );
}
