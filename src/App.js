import "./App.css";
import React, { Component } from "react";
import Footer from "./Components/Footers/Footer";
import Navbar from "./Components/NavigationBar/Navbar";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Sports from "./Components/Sports/Sports";
import Hackathon from "./Components/Hackathons/Hackathon";
import Events from "./Components/Register Events/Events"
import { Routes, Route, BrowserRouter } from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      city: "San Francisco"
    }
    this.changeMyCity = this.changeMyCity.bind(this);
  }

  changeMyCity(city){
    this.setState({
      city
    })

    // alert('called');
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar changeMyCity={this.changeMyCity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies city={this.state.city} />} />
          <Route path="/sports" element={<Sports city={this.state.city} />} />
          <Route
            path="/hackathons"
            element={<Hackathon city={this.state.city} />}
          />
          <Route
            path="/register"
            element={<Events />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
