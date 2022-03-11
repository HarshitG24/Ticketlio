import React, { Component } from "react";
import "./Home.css";
import {moviesData, sportsData, hackathonData} from "../../Data/Data.js"

export default class Body extends Component {

  componentDidMount(){
    localStorage.setItem("movies-data",JSON.stringify(moviesData));
    localStorage.setItem("sports-data", JSON.stringify(sportsData));
    localStorage.setItem("hackathon-data", JSON.stringify(hackathonData));
  }
  render() {
    return (
      <div className="main-body">
        <div className="imageScroll">
          <img
            src="https://wallpapercave.com/wp/wp9252814.jpg"
            className="imageScroll"
            alt="Unable to render image"
          ></img>
          <p className="welcomeTxt">One Place, to find everything</p>
        </div>

        <div className="cinema">
          <img
            src="https://www.blsi.com/images/Lyric-Starry-Sky_LG.jpg"
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
            src="https://www.delphix.com/sites/default/files/2017-10/istock-492045720.jpg"
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
            src="https://wallpaper.dog/large/10839708.jpg"
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
