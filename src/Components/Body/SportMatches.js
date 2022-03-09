import React, { Component } from 'react';
import "./CSS/SportMatches.css"

// "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg"
export default class SportMatches extends Component {
    render() {
      const {
        imageUrl,
        matchName,
        matchTime,
        matchDay,
        seatsLeft,
        location,
      } = this.props.mData;
        return (
          <div className="sports-match">
            <img src={imageUrl} alt="new" className="sports-poster" />
            <div>
              <p className="match-name">{matchName}</p>

              <div className="match-time">
                <p className="match-time-label">Time:</p>
                <p>{matchTime}</p>
              </div>

              <div className="match-time">
                <p className="match-time-label">Location:</p>
                <p>{location}</p>
              </div>

              <div className="match-time">
                <p className="match-time-label">Seats Left:</p>
                <p>{seatsLeft}</p>
              </div>

              <div className="match-time">
                <p className="match-time-label">Date:</p>
                <p>{matchDay}</p>
              </div>
            </div>

            <button className="book-btn">Book Tickets</button>
          </div>
        );
    }
}