import React from "react";
import "./Return.css";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ReturnBack() {
  return (
    <Container className="return-container" fluid="md">
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-capitalize">
          Terms of use
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="return-title">
        <img src="https://i.imgur.com/mnt90vV.png" alt="logo" />
        <p>Return policy</p>
      </div>
      <div className="return-content">
        <p>
          To improve service quality and customer shopping experience Store,
          Bookstore Store <b>Pla.socks</b> we have the main suitable book when
          customers need to exchange/return/refund products.
          <br />
          We always value and protect the interests of consumers with We want to
          bring you the best quality of service
        </p>
        <h4 className="heading-title">1. Refund cases</h4>
        <p>- Wrong product delivered: title, cover form, cover price,...</p>
        <p>
          - The goods are not as described on the website (color, style,
          function) or the goods are damaged during delivery.
        </p>
        <p>
          - The order has been paid in advance but the product of the order is
          out of stock at the UITBooks bookstore store.
        </p>
        <p>
          - The product is defective due to printing and technical problems.
        </p>
        <p>- Detecting counterfeit goods, counterfeit goods</p>
        <h4 className="heading-title">2. Return policy</h4>
        <img
          src="https://cdn.shopify.com/s/files/1/1246/6441/files/Returns_and_Exchanges.jpg?v=1637686293"
          alt="return-policy"
        />
        <h4 className="heading-title">
          3. Instructions for exchange / return steps
        </h4>
        <p>
          - Step 1: Please contact hotline 083.457.7251 or send an email to only
          Pla.socks@gmail.com to notify the request for exchange/return
        </p>
        <p>
          - Step 2: Customer service staff will contact you to confirm take;
          check &amp; Receive goods requested for exchange/return (only applies
          to cases of exchange/return due to errors arising from we)
        </p>
        <p>
          (In case of exchange of goods according to demand (color, size...) you
          are happy Please contact 083.457.7251 for specific instructions)
        </p>
        <p>
          - Step 3: When the return request is resolved, please Send the product
          as it was when you received it to your door address Pla.socks
          bookstore includes products and full accessories and papers
          accompanying documents (if any)
        </p>
        <p className="conclusion">
          <b>Pla.socks</b> will deliver a replacement or issue a refund (in case
          of return) within 5-7 days depending on the region from the date of
          confirmation accept exchange/return.
        </p>
        <img
          src="https://cdn.shopify.com/s/files/1/0311/4578/7524/files/bigstock--d-Isometric-Flat-Vector-Conce-362137033.jpg?v=1589989045"
          alt="return-policy"
        />
      </div>
    </Container>
  );
}
