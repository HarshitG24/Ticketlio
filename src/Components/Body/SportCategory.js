import React, { Component } from 'react';
import SportMatches from './SportMatches';

export default class SportCategory extends Component {
    render() {
      const {category, matches} = this.props;
        return (
          <div>
            <p className="sport-name left-space">{category}</p>
            <div className="group-sports">
              {/* <SportMatches />
              <SportMatches />
              <SportMatches />
              <SportMatches /> */}
              {matches.map((elem) => {
                return <SportMatches url={elem} />;
              })}
            </div>
          </div>
        );
    }
}