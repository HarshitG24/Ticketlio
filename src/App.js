import "./App.css";
import React, { Component } from "react";
import Footer from "./Components/Footers/Footer";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Headers/Navbar";
import Home from "./Components/Body/Home";
import Movies from "./Components/Body/Movies";
import Sports from "./Components/Body/Sports";
import Hackathon from "./Components/Body/Hackathon";
// import NavigationBar from "./Components/Headers/NavigationBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        {/* <Body /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/hackathons" element={<Hackathon />} />
        </Routes>

        {/* {this.pageSelector(this.state.displayScreen)} */}
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
