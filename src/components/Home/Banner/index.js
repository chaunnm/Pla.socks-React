import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="banner-container">
      <a href="">
        <img className="banner-img" src={props.url} alt="banner" />
      </a>
    </div>
  );
}
