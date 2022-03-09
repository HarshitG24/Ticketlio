import React, { Component } from 'react';
import "./CSS/SportMatches.css"

// "https://ca-times.brightspotcdn.com/dims4/default/03f4294/2147483647/strip/true/crop/1800x1174+0+0/resize/840x548!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2Fd0%2F10e71e0349c8beb0088a2d202266%2Fsports-clip-art.jpg"
export default class SportMatches extends Component {
    render() {
      const {url} = this.props;
        return (
          <div className="sports-match">
            <img
              src={url.imageUrl}
              alt="new"
              className="sports-poster"
            />
            <div>
              <p>Liverpool vs Salzburg</p>
              <div>
                <p>Time:</p>
                <p>7:00PM - 8:30PM</p>
              </div>
            </div>
            <button className="book-btn">Book Tickets</button>
          </div>
        );
    }
}