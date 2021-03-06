import React, { Component } from "react";
import "./CSS/Hackathon.css"
import HackathonBody from "./HackathonBody";

/**
 * To display all the hackathons on the page
 * @component
 */
class Hackathon extends Component {
  render() {
    return (
      <div className="hackathon">
        <img
          src="https://www.commbox.io/wp-content/uploads/2021/01/663-1.jpg"
          alt="new"
          className="hackathon-poster"
        />
        <div>
          <h1 className="hack-main-title">Hackathons</h1>
          <HackathonBody city={this.props.city}/>
        </div>
      </div>
    );
  }
}
export default Hackathon;