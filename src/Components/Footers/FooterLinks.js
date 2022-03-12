import React, { Component } from "react";
import "./CSS/FooterLinks.css";

export default class FooterLinks extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="footerLinks">
        <div className="linkOptions">
          <h4>{data.title}</h4>
          {data.options.map((elem, index) => {
            return <p key={index} className="footer-options">{elem}</p>;
          })}
        </div>
      </div>
    );
  }
}
