import React, { Component } from "react";
import home2 from "../../Images/home2.jpeg";
import "./Body.css";

export default class Body extends Component {
  render() {
    return (
      <div className="imageScroll">
        <img
          src={home2}
          className="imageScroll"
          alt="Unable to render image"
        ></img>
        <p className="welcomeTxt">One Place, to find everything</p>
      </div>
    );
  }
}
