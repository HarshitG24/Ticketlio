import React, { Component } from "react";
import "./CSS/Footer.css";
import FooterOptions from "./FooterOptions";
import FooterLinks from "./FooterLinks";
import {options, linkData} from '../../Data/Data'

/**
 * To display the footer of the website
 * @component
 */
export default class Footer extends Component {

  /**
   * @constructor
   * @param {Props} props Gets the props object as a parameter 
   */
  constructor(props){
    super(props);

    /**
     * @state
     * @property {array} options Takes an array of strings, which has various options such as customer care, cancellation policy and so on.
     * @property {array} options Takes an array of strings, which has various data about other stuff such as partnerships, careers and much more.
     */
    this.state = {
      options,
      linkData,
    };
  }
  render() {
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
