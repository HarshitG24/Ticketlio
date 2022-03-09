import React, { Component } from 'react';
import SportMatches from './SportMatches';
import "./CSS/SportMatches.css";

export default class SportCategory extends Component {
    render() {
      const {category, matches} = this.props;
        return (
          <div className="sport-category-group">
            <p className="sport-name left-space">{category}</p>
            <div className="group-sports">
              {matches.map((elem) => {
                return <SportMatches mData={elem} />;
              })}
            </div>
          </div>
        );
    }
}