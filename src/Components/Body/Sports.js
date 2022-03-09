import React, { Component } from "react";
import "./CSS/Sports.css"
// import SportMatches from "./SportMatches.js";
import SportCatgeory from "./SportCategory.js"

const sportsData = [
  {
    sportCategory: "Football",
    sportMatchesData: [
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
    ],
  },
  {
    sportCategory: "Rugby",
    sportMatchesData: [
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
    ],
  },
  {
    sportCategory: "Cricket",
    sportMatchesData: [
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
    ],
  },
  {
    sportCategory: "Table Tennis",
    sportMatchesData: [
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
      },
      {
        imageUrl:
          "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg",
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
        {/* 
        <p className="sport-name left-space">Soccer</p>
        <div className="group-sports">
          <SportMatches />
          <SportMatches />
          <SportMatches />
          <SportMatches />
        </div> */}
        {sportsData.map((e) => {
          return (
            <SportCatgeory
              category={e.sportCategory}
              matches={e.sportMatchesData}
            />
          );
        })}

        {/* <p className="sport-name left-space">Table Tennis</p>
        <p className="sport-name left-space">Cricket</p> */}
      </div>
    );
  }
}
