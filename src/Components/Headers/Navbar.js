import React, { Component } from "react";
import locationIcon from "../../Images/locationIcon.png";
import "./Navbar.css";
import Movies from "../Body/Movies";


const cities = [
  'Please select a city',
  'San Francisco',
  'Boston',
  'Seattle',
  'New York',
  'Atlanta'
]
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayScreen: 1,
      myCity: "San Francisco",
    };
  }

  changePage(val) {
    this.setState({
      displayScreen: val,
    });
    this.props.changeMyCity(cities[val]);
  }

  displayPage(val) {
    console.log("displaypage ", val);
    switch (val) {
      case 2:
        <Movies />;
    }
  }

  onChangeCity(evt){
    this.setState({
      myCity: evt.target.value
    })

    this.props.changeMyCity(evt.target.value);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-color">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {/* Ticketlio */}
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
                <li className="nav-item">
                  <a
                    className="navbar-option"
                    href="movies"
                    onClick={() => this.changePage(2)}
                  >
                    Movies
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="navbar-option"
                    href="Sports"
                    onClick={() => this.changePage(3)}
                  >
                    Sports
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="navbar-option"
                    href="Hackathons"
                    onClick={() => this.changePage(4)}
                  >
                    Hackathons
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
                  {/* <option value="">Please select your location</option> 
                  <option value="San Francisco">San Francisco</option>
                  <option value="New York">New York</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Boston">Boston</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Atlanta">Atlanta</option>
                  <option value="Indianapolis">Indianapolis</option> */}
                  {
                    cities.map(e => {
                      return (
                      <option value={e}>{e}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          </div>
        </nav>
        {this.displayPage(this.state.displayScreen)}
      </div>
    );
  }
}
