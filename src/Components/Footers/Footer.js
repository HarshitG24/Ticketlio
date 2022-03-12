import React, { Component } from "react";
import "./CSS/Footer.css";
import FooterOptions from "./FooterOptions";
import FooterLinks from "./FooterLinks";

export default class Footer extends Component {
  render() {
    this.state = {
      options: [
        {
          value: "1",
          imageText: "Customer Support",
        },
        {
          value: "2",
          imageText: "Subscribe Us",
        },
        {
          value: "3",
          imageText: "Cancellation Policy",
        },
      ],

      linkData: [
        {
          title: "Partnerships",
          options: ["Websites", "Social Media", "Branding"],
        },
        {
          title: "About Us",
          options: ["Our Projects", "Careers"],
        },
        {
          title: "Legal",
          options: ["Terms & Conditions", "Privacy Policy", "Terms of Use"],
        },
        {
          title: "Careers",
          options: ["Developer", "Marketing"],
        },
      ],
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
          {/* <FooterLinks />
          <FooterLinks />
          <FooterLinks />
          <FooterLinks /> */}
        </div>
      </div>
    );
  }
}
