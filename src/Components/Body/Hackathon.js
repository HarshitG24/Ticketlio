import React, { Component } from "react";
import "./CSS/Hackathon.css"
import HackathonBody from "./HackathonBody";

export default class Hackathon extends Component {
  render() {
    return (
      <div className="hackathon">
        <img
          src="https://www.commbox.io/wp-content/uploads/2021/01/663-1.jpg"
          alt="new"
          className="hackathon-poster"
        />
        <div>
          <h1>Hackathon</h1>
          <HackathonBody />
        </div>
      </div>
    );
  }
}
