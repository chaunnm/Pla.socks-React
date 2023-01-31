import React from "react";
import "./Terms.css";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <Container className="terms-container" fluid="md">
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-capitalize">
          Terms of use
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="terms-title">
        <img src="https://i.imgur.com/mnt90vV.png" alt="UITBooks-logo" />
        <p>Terms of use</p>
      </div>
      <div className="terms-content">
        <p>
          Welcome customers to visit website <b>Pla.socks</b> <br />
          We are Bookstore Company Limited <b>Pla.socks</b> - specializing in
          distribution distribute book products on the market with the motto
          "Access to knowledge" the cheapest way." <br />
          <b>Pla.socks</b> always brings convenience to customers when buying
          shop on e-commerce platforms. Accordingly, the bookstore we need Your
          acceptance of the terms that Pla.socks show. Specifically:
        </p>
        <h4 className="heading-title">1. Client's Account</h4>
        <p>
          When registering for an account on <b>Pla.socks</b>, you need to
          provide the website with the most accurate and complete personal
          information. When choosing a password for the access account, choose
          the password according to in a way that no one can easily guess.
        </p>
        <p>
          After registration, you are responsible for maintaining your password
          and Do not disclose your password to anyone or authorize or allow any
          used by anyone for any purpose. <b>Pla.socks</b> will always treat the
          access and use of the services on the website with someone's username
          and password as access and use the services by the same customer,
          regardless of username and the password can be used by others without
          the owner know or not allow.
        </p>
        <p>
          If anyone finds out that anyone knows the password or uses it to
          access and use the services on the website, you You need to
          immediately notify us and change your password or ask the website to
          support setting up a new password.
        </p>
        <h4 className="heading-title">
          2. Right of storage and use of information
        </h4>
        <p>
          When accessing and using the website, <b>Pla.socks</b> may reserve
          information such as access statistics, information Personal
          information provided to phuongnam.com when registering… Personal
          information include full name, phone number, email address,
          residential address, etc. We may use this information for planning,
          research, design, and promote services or provide information
          information to legal authorities as required by Law or by Court.
        </p>
        <h4 className="heading-title">
          3. Customer's information security benefits
        </h4>
        <p>
          We always attach great importance to information security and use
          security measures The best way to protect customer information and
          payment goods when using the services of our website. You are
          guaranteed guarantee that the personal information you provide will
          not be transferred to any other third party for commercial purposes.
          All Personal information is kept confidential except in the case of
          French Agency required law.
        </p>
        <h4 className="heading-title">4. Customer Responsibilities</h4>
        <p>
          You may not infringe, infringe, access, use or attempt to infringe,
          enter, access or use any part in our servers, and/or any data area if
          not allowed by us.
        </p>
        <p>
          You are not authorized to post or transmit any information illegal,
          deceptive, libelous, insulting, obscene, pornographic, offensive
          offending, threatening, insulting, hateful, inciting… or contrary to
          the norm the general morality of society in any way, including
          propagate or encourage conduct that may constitute a crime or violate
          any provision of local or national law or international. We respect
          freedom of speech, but also reserves the right, in its sole
          discretion, to omit, or remove, in whole or in part whatever set of
          content you post, regardless of whether the violation is obvious Or
          just an implication.
        </p>
        <p>
          You are not authorized to send or transmit any messages advertising,
          solicitation, chain letters, investment opportunities or any other
          What kind of commercial communication is not intended by the user?
          would like.
        </p>
        <p>
          We reserve the right, at all times, to ban or deny your access you go
          to <b>Pla.socks</b> or any part of the website immediately immediately
          without notice if we believe you have violated any any provision of
          these Terms, or the prohibition of access comes from our judgment,
          when we consider denying that is appropriate and necessary in our
          jurisdiction.
        </p>
        <h4 className="heading-title">5. Orders and prices</h4>
        <p>
          We are committed to providing the most accurate pricing information
          for you buyer. However, sometimes mistakes still happen, for example
          in case the product price is not displayed correctly on the website or
          the product the product does not have a promotional offer, as the case
          may be I will actively contact for instructions or notice to cancel
          that order customers if you have no need to continue buying that
          product.
        </p>
        <h4 className="heading-title">
          6. Law and jurisdiction in the territory of Vietnam
        </h4>
        <p>
          You agree that the Terms of Use and any disagreement arising from your
          use of this website or its products and services our case will be
          dealt with in accordance with the applicable laws of the Country
          Socialist Republic of Vietnam. Through registration or use Using our
          website and services, you are deemed to have agree and comply with all
          provisions of the Laws of Vietnam.
        </p>
        <p>
          By accessing and using the services of our website means that you have
          agreed to the terms of use above. The website reserves the right to
          change or modify any part of the these terms of sale and changes are
          effective immediately posted on the website without prior notice. And
          when precious visitors continue to use the website after the changes
          to the terms This is posted, which means that you accept the changes
          change that.
        </p>
      </div>
    </Container>
  );
}
