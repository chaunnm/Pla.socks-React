import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InformationAddress.scss";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Modal,
  FormGroup,
} from "react-bootstrap";

const InformationAddress = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <div className="order-information">
      <div className="order-information__address">
        <div className="order-information__address__title">
          Shipment Details
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="order-information__address__row__name">
            {props.address}
          </div>
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <div className="order-information__address__row__name">
            {props.numberPhone}
          </div>
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="order-information__address__row__name">
            {props.gmail}
          </div>
        </div>
        <div className="order-information__address__row">
          <div className="order-information__address__row__icon">
            <i className="fa-solid fa-file-pen"></i>
          </div>
          <div className="order-information__address__row__name">
            <div href="#" onClick={handleShow} className="edit">
              Edit
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Số nhà, số đường, quận, thành phố"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="012345678" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

InformationAddress.propTypes = {
  address: PropTypes.string,
  numberPhone: PropTypes.string,
  gmail: PropTypes.string,
  showEdit: PropTypes.func,
};

export default InformationAddress;
