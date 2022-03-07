import React, { Component } from "react";
import home2 from "../../Images/home2.jpeg";
import cinema from "../../Images/cinema.jpeg";
import hackathon from "../../Images/hackathon.jpeg";
import sports from "../../Images/sports.jpeg";
import "./Home.css";

export default class Body extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="imageScroll">
          <img
            src={home2}
            className="imageScroll"
            alt="Unable to render image"
          ></img>
          <p className="welcomeTxt">One Place, to find everything</p>
        </div>

        <div className="cinema">
          <img
            src={cinema}
            className="imageScroll"
            alt="Unable to render image"
          ></img>
          <div className="cinemaBlock">
            <p className="cinemaTxt">
              Book the cinema tickets at cheapest price
            </p>
          </div>
        </div>

        <div className="cinema">
          <img
            src={hackathon}
            className="imageScroll"
            alt="Unable to render image"
          ></img>
          <div className="hackthonBlock">
            <p className="cinemaTxt">
              Register for hackathon and be a part of the change
            </p>
          </div>
        </div>

        <div className="cinema">
          <img
            src={sports}
            className="imageScroll"
            alt="Unable to render image"
          ></img>
          <div className="cinemaBlock">
            <p className="cinemaTxt">
              Book tickets for your favourite sports in one click.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
