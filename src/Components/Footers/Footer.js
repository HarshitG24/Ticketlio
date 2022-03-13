import React, { Component } from "react";
import "./CSS/Footer.css";
import FooterOptions from "./FooterOptions";
import FooterLinks from "./FooterLinks";
import {options, linkData} from '../../Data/Data'

export default class Footer extends Component {
  render() {
    this.state = {
      options,
      linkData,
    };
    return (
      <div className="background">
        <div className="options">
          {this.state.options.map((elem, index) => {
            return <FooterOptions key={index} details={elem} />;
          })}
        </div>
        <div className="footerLinks">
          {this.state.linkData.map((elem, index) => {
            return <FooterLinks key={index} data={elem} />;
          })}
        </div>
      </div>
    );
  }
}
