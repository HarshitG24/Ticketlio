import React, { Component } from "react";
import locationIcon from "../../Images/locationIcon.png";
import "./Navbar.css";
import Movies from "./Movies";
let ReactRouter = require("react-router");
let Link = ReactRouter.Link;

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Ticketlio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sports
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hackathons
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Covid-19
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Places to explore
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="locationGrp">
                <img
                  src={locationIcon}
                  className="location"
                  alt="Unable to render image"
                ></img>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      San Francisco
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
