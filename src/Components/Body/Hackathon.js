import React, { Component } from "react";
import "./CSS/Hackathon.css"
import HackathonBody from "./HackathonBody";

export default class Hackathon extends Component {
  render() {
    return (
      <div className="hackathon">
        <img
          src="https://t3.ftcdn.net/jpg/03/01/13/20/360_F_301132090_LKoSp3l3cXlCo78zaAe2M9LI2z5yznvB.jpg"
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
