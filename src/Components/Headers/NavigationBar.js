import React, { Component } from "react";
import "./NavigationBar.css";
import "./Navbar.css";
import locationIcon from "../../Images/locationIcon.png";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <h3>Ticketlio</h3>
        <ul>
          <li>Movies</li>
          <li>Sports</li>
          <li>Hackathon</li>
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
      </nav>
    );
  }
}

export default NavigationBar;
