import React from "react";
import "./404.scss";

import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <Container className="not-found-container" fluid="md">
      <div className="row">
        <div className="col-md-6 error-left">
          <div className="error-content">
            <h1 className="error-title">Ooops...</h1>
            <h2>Page Not Found</h2>
            <p className="des">
              Your page you're trying to reach does not exist or there happened
              a problem. <br /> Please try again later
            </p>
            <img
              className="finding-img"
              src="https://drive.google.com/uc?id=1eut3_K0I5WIkWbEiGFOeQoSPUEYjhz0D"
              alt="finding"
            />
            <Link to="/">
              <Button variant="primary">Home</Button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 error-right">
          <div className="error-img">
            <img
              src="https://drive.google.com/uc?id=1cBsbKwZVjun-FezPQGzNOwKxpfEwndZK"
              alt="404"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
