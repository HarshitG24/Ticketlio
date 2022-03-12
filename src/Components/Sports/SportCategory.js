import React, { Component } from 'react';
import SportMatches from './SportMatches';
import "./CSS/SportMatches.css";

export default class SportCategory extends Component {
    render() {
      const {category, matches} = this.props;
      let arr = matches.filter(elem => elem.location === this.props.city);
        return (
          <div className="sport-category-group">
            <p className="sport-name left-space">{category}</p>
            {arr.length > 0 ? (
              <div>
                <div className="group-sports">
                  {arr.map((elem) => {
                    return <SportMatches mData={elem} />;
                  })}
                </div>
              </div>
            ) : (
              <h5 style={{textAlign: "center", marginBottom: "4rem", "marginTop": "2rem"}}>No Matches Found</h5>
            )}
          </div>
        );
    }
}