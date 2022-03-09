import React, { Component } from "react";
import "./CSS/Sports.css"
// import SportMatches from "./SportMatches.js";
import SportCatgeory from "./SportCategory.js"

const sportsData = [
  {
    sportCategory: "Football",
    sportMatchesData: [
      {
        matchName: "Man City vs Sporting",
        matchTime: "12:00 PM onwards",
        seatsLeft: "176",
        matchDay: "March 9, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-night-video-match-template-design-d3776b1ef4a2b7abb011d1d8e7f56d38_screen.jpg?ts=1599553534",
      },
      {
        matchName: "Real Madrid vs PSG",
        matchTime: "11:45 AM onwards",
        seatsLeft: "300",
        matchDay: "March 21, 2022",
        location: "Boston",
        imageUrl:
          "https://img.pikbest.com/01/43/22/61tpIkbEsTVEI.jpg-1.jpg!bw700",
      },
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-game-poster-template-48162aedb0b6cfcd112d3bd44ad3453b_screen.jpg?ts=1636972116",
      },
    ],
  },
  {
    sportCategory: "Rugby",
    sportMatchesData: [
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rugby-game-match-tournament-poster-template-b997c16547fd1c00524a36a724b0917f_screen.jpg?ts=1636974292",
      },
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rugby-game-poster-template-9d12fe171aae4fc9451912439ce7c6d2_screen.jpg?ts=1636979489",
      },
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://st.depositphotos.com/1000195/2770/v/950/depositphotos_27707405-stock-illustration-american-football-and-rugby-game.jpg",
      },
    ],
  },
  {
    sportCategory: "Ping Pong",
    sportMatchesData: [
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://atholreccentre.files.wordpress.com/2013/03/ping-pong-poster.png",
      },
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/table-tennis-tournament-flyer-design-template-2d6f868076d69749fc9bde486f30073c_screen.jpg?ts=1636992596",
      },
      {
        matchName: "Barcelona vs Galatasaray",
        matchTime: "18:00 PM onwards",
        seatsLeft: "786",
        matchDay: "April 12, 2022",
        location: "San Francisco",
        imageUrl:
          "https://fitpong.ca/sites/default/files/April_23_TABLETENNIS.jpg",
      },
    ],
  },
];
export default class Sports extends Component {
  render() {
    return (
      <div className="sports">
        <div className="sport-img">
          <img
            src="https://www.teahub.io/photos/full/283-2832555_sports-wallpapers-hd-sports-background.jpg"
            alt="new"
            className="sports-banner"
          />
        </div>
        <h1 className="left-space sport-main-title">Sports</h1>
        {sportsData.map((e) => {
          return (
            <SportCatgeory
              category={e.sportCategory}
              matches={e.sportMatchesData}
            />
          );
        })}
      </div>
    );
  }
}
