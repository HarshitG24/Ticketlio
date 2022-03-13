import React, { Component } from "react";
import "./CSS/Sports.css"
import SportCatgeory from "./SportCategory.js"

/**
 * To display the sports page
 * @component
 */
class Sports extends Component {

  /**
   * @constructor
   * @param {object} props Takes the props object
   */
  constructor(props){
    super(props);

    /**
     * @state
     * @property {array} sportData Contains all the static data of sports
     */
    let sportData = JSON.parse(localStorage.getItem("sports-data"));
    this.state={
      sportData
    }
  }

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
        {this.state.sportData.map((e) => {
            return (
              <SportCatgeory
                category={e.sportCategory}
                matches={e.sportMatchesData}
                city={this.props.city}
              />
            );
          })}
      </div>
    );
  }
}

export default Sports;