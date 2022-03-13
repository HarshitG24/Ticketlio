import React, { Component } from "react";
import "./Navbar.css";
import Movies from "../Movies/Movies";
import Home from "../Home/Home";
import Sports from "../Sports/Sports";
import Hackathon from "../Hackathons/Hackathon";
import Events from "../Events/Events"
import {cities} from "../../Data/Data"

/**
 * To display the navigation bar and all the possible options in the navigation bar
 * @component
 */
class Navbar extends Component {
  /**
   * @constructor
   * @param {object} props Gets the props object as a parameter
   */
  constructor(props) {
    super(props);

    /**
     * @state
     * @property {number} displayScreen A integer number, to keep track of the options clicked by user on navigation bar
     * @property {string} myCity To keep track of the city selected by the user from navigation bar
     * @property {array} cities Array which contains static data of cities
     */
    this.state = {
      displayScreen: 1,
      myCity: "San Francisco",
      cities,
    };
  }

  /**
   * 
   * @param {number} val An integer to determine, which page to render for the user
   * @returns {void}
   */
  changePage(val) {
    this.setState({
      displayScreen: val,
    });
    this.props.changeMyCity(this.state.cities[val]);
  }

  /**
   * 
   * @param {number} val To display the page, as per the selection by the user.
   * @returns {symbol}
   */
  displayPage(val) {
    console.log("displaypage ", val);
    switch (val) {
      case 1:
        return <Home />;

      case 2:
        return <Movies />;

      case 3:
        return <Sports />;

      case 4:
        return <Hackathon />;

      case 5:
        return <Events />;

      default:
        <Home />;
    }
  }

  /**
   * 
   * @param {Event} evt An evenet object, obtained from onChange function to store an integer value based on the city selected by the user
   * @returns {void}
   */
  onChangeCity(evt) {
    this.setState({
      myCity: evt.target.value,
    });

    this.props.changeMyCity(evt.target.value);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-color">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {/* */}
              <img
                src="https://s3.amazonaws.com/logos.brandpa.com/uploads/20f3ba4de705602366939ad0098a1de7/ticketlio2.png"
                alt="new"
                className="logo"
              />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" key="movies">
                  <a
                    className="navbar-option"
                    href="/movies"
                    onClick={() => this.changePage(2)}
                  >
                    Movies
                  </a>
                </li>

                <li className="nav-item" key="Sports">
                  <a
                    className="navbar-option"
                    href="/sports"
                    onClick={() => this.changePage(3)}
                  >
                    Sports
                  </a>
                </li>

                <li className="nav-item" key="Hackathons">
                  <a
                    className="navbar-option"
                    href="/hackathons"
                    onClick={() => this.changePage(4)}
                  >
                    Hackathons
                  </a>
                </li>

                <li className="nav-item" key="register-events">
                  <a
                    className="navbar-option"
                    href="/register"
                    onClick={() => this.changePage(5)}
                  >
                    Register Events
                  </a>
                </li>
              </ul>
              <div>
                <select
                  name="cityList"
                  id="cityList"
                  value={this.state.myCity}
                  onChange={(e) => this.onChangeCity(e)}
                >
                  {this.state.cities.map((e) => {
                    return <option value={e}>{e}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;