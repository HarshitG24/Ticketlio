import React, { Component } from 'react';
import "./CSS/HackathonBody.css"
import HackData from './HackData';

/**
 * To display all the hackathons, based on the location entered by the user.
 * @component
 */
export default class HackathonBody extends Component {
  /**
   *
   * @param {number} index To determine the index of the row selected by the user.
   * @returns {void}
   */
  onRegister(index) {
    let arr = JSON.parse(localStorage.getItem("hackathon-data"));
    console.log("arr", arr, index);
    arr =  arr.filter(e => e.location === this.props.city);
    let data = arr[index];
    alert("Thank you for registering for: " + data.title);
  }

  /**
   * @constructor
   * @param {Props} props Gets the props object as a parameter
   */
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);

    let hackathonData = JSON.parse(localStorage.getItem("hackathon-data"));

    /**
     * @state
     * @property {array} hackathonData Contains all the static hackathon data
     */
    this.state = {
      hackathonData,
    };
  }
  render() {
    let arr = this.state.hackathonData.filter(
      (elem) => elem.location === this.props.city
    );
    return (
      <div>
        {arr.length > 0 ? (
          arr.map((e, index) => {
            const {
              title,
              description,
              duration,
              posterUrl,
              date,
              location,
            } = e;
            // let ind = index;
            return (
              <div className="hack-body">
                <div className="hackathon-image-block">
                  <img src={posterUrl} alt="new" className="hack-poster" />
                </div>

                <div className="hackathon-description">
                  <div>
                    <p className="hackathon-title">{title}</p>
                    <p className="hackathon-description-text">{description}</p>

                    <HackData data={{ label: "Duration:", value: duration }} />

                    <HackData data={{ label: "Location:", value: location }} />

                    <HackData
                      data={{
                        label: "Date:",
                        value: date,
                      }}
                    />

                    <button
                      className="register-btn"
                      onClick={() => this.onRegister(index)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h4 style={{ textAlign: "center", marginTop: "3rem" }}>
            No Hackathons Found
          </h4>
        )}
      </div>
    );
  }
}