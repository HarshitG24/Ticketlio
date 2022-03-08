import React, { Component } from 'react';
import "./CSS/HackathonBody.css"

export default class HackathonBody extends Component {
    render() {
        return (
          <div className="hack-body">
            <div className="hackathon-image-block">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f35ee593213265.5e5f0394bc88b.jpg"
                alt="new"
                className="hack-poster"
              />
            </div>

            <div className="hackathon-description"></div>
          </div>
        );
    }
}