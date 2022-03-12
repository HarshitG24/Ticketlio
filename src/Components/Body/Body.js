import React, { Component } from "react";
// import home2 from "../../Images/home2.jpeg";
// import cinema from "../../Images/cinema.jpeg";
// import hackathon from "../../Images/hackathon.jpeg";
// import sports from "../../Images/sports.jpeg";
// import "./Body.css";
import Home from "./Home";
import Movies from "./Movies";
import Sports from "./Sports";
import Hackathon from "./Hackathon";
import Events from "../Register Events/Events";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }
  pageSelector(val) {
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
  render() {
    return <Home />;
  }
}
