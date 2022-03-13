import React, { Component } from "react";
import "./CSS/FooterLinks.css";
import PropTypes from "prop-types";

/**
 * To display the option in footers such as terms & conditions, careers, partnrships and much more.
 * @component
 */
class FooterLinks extends Component {
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

// FooterLinks.prototype = {
//   data: PropTypes.object,
// }

// export default FooterLinks;

export default FooterLinks;