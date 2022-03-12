import React, { Component } from "react";
import hours from "../../Images/hours.png";
import subscription from "../../Images/subscription.png";
import cancellation from "../../Images/cancellation.png";
import "./CSS/FooterOptions.css";

export default class FooterOptions extends Component {
  imageSelector(value) {
    switch (value) {
      case "1":
        return hours;
      case "2":
        return subscription;
      case "3":
        return cancellation;
    }
  }
  render() {
    const { details } = this.props;
    return (
      <div className="optionBody">
        <img
          src={this.imageSelector(details.value)}
          className="option"
          alt="..."
        ></img>
        <p className="optionTxt">{details.imageText}</p>
      </div>
    );
  }
}
