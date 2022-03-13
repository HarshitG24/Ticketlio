import React, { Component } from 'react';
import "./Events.css"
import {cities} from "../../Data/Data"

/**
 * To display a form to register for events
 * @component
 */
class Events extends Component {
  /**
   * @constructor
   * @param {object} props Gets the props object as a parameter
   */
  constructor(props) {
    super(props);

    /**
     * @state
     * @property {string} name To store name of the event
     * @property {string} description To store description of the event
     * @property {string} fromDate To store fromDate of the event
     * @property {string} toDate To store toDate of the event
     * @property {string} poster To store poster's url of the event
     * @property {string} duration To store duration of the event
     */
    this.state = {
      name: "",
      description: "",
      fromDate: "",
      toDate: "",
      location: "",
      poster: "",
      duration: "",
      formattedToDate: "",
      formmattedFromDate: "",
    };
    this.onInputFieldChange = this.onInputFieldChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  /**
   *
   * @param {object} evt Event object returned from onChange function, which contains value entered by the user
   * @param {string} key To determine the key in state object, for storing the value
   * @returns {void}
   */

  onInputFieldChange(evt, key) {
    console.log("value is", evt.target.value);
    this.setState({
      [key]: evt.target.value,
    });
  }

  /**
   *
   * @param {object} evt Event object returned from onChange function, which contains value entered by the user
   * @param {string} key To determine the key in state object, for storing the value
   * @returns {void}
   */
  onGetDate(evt, key) {
    let dateVal = evt.target.value;
    dateVal = dateVal.split("-");

    let date = dateVal[2];
    let month = this.generateMonth(dateVal[1]);
    let year = dateVal[0];

    this.setState({
      [key]: `${date} ${month}, ${year}`,
    });
  }

  /**
   *
   * @param {number} key To determine the month from number
   * @returns {string}
   */
  generateMonth(key) {
    let arr = [
      "January",
      "Febraury",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return arr[parseInt(key)];
  }

  /**
   * @param {void}
   * @returns {void}
   * To submit the data in the form filled by the user.
   */
  onSubmitForm() {
    console.log("data is submitted");
    const hackData = JSON.parse(localStorage.getItem("hackathon-data"));
    let obj = {
      title: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.formmattedFromDate + " to " + this.state.formattedToDate,
      location: this.state.location,
      posterUrl: this.state.poster,
    };
    hackData.push(obj);

    localStorage.setItem("hackathon-data", JSON.stringify(hackData));

    this.setState({
      title: "",
      description: "",
      duration: "",
      date: "",
      location: "",
      posterUrl: "",
    });

    alert(
      "Thank you for registering the event, we have listed it for the users"
    );
  }

  /**
   * @param {void}
   * @returns {boolean}
   * To determine if the button has to be disabled or not.
   */
  disableSubmitBtn() {
    const {
      name,
      description,
      formmattedFromDate,
      formattedToDate,
      location,
      poster,
      duration,
    } = this.state;

    return (
      name !== "" ||
      description !== "" ||
      formmattedFromDate !== "" ||
      formattedToDate !== "" ||
      location !== "" ||
      poster !== "" ||
      duration !== ""
    );
  }

  render() {
    let dis = this.disableSubmitBtn();
    return (
      <div className="events">
        <div className="title-div">
          <div>
            <h1 className="page-title">Register for event</h1>
          </div>

          <div className="option-div">
            <p className="option-p">Name of the event</p>
            <input
              type="text"
              id="name"
              name="name"
              className="event-input"
              value={this.state.name}
              onChange={(evt) => this.onInputFieldChange(evt, "name")}
            />
          </div>

          <div className="option-div">
            <p className="option-p">Description</p>
            <input
              type="text"
              id="description"
              name="description"
              className="event-input"
              value={this.state.description}
              onChange={(evt) => this.onInputFieldChange(evt, "description")}
            />
          </div>

          <div className="option-div">
            <p className="option-p">From Date</p>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              className="event-input"
              value={this.state.fromDate}
              onChange={(evt) => {
                this.onInputFieldChange(evt, "fromDate");
                this.onGetDate(evt, "formattedFromDate");
              }}
            />
          </div>

          <div className="option-div">
            <p className="option-p">To Date</p>
            <input
              type="date"
              id="toDate"
              name="toDate"
              className="event-input"
              value={this.state.toDate}
              onChange={(evt) => {
                this.onInputFieldChange(evt, "toDate");
                this.onGetDate(evt, "formattedToDate");
              }}
            />
          </div>

          <div className="option-div">
            <p className="option-p">Number of Days</p>
            <input
              type="text"
              id="duration"
              name="duration"
              className="event-input"
              value={this.state.duration}
              onChange={(evt) => this.onInputFieldChange(evt, "duration")}
            />
          </div>

          <div className="option-div">
            <p className="option-p">Location</p>
            <select
              name="cityList"
              id="cityList"
              value={this.state.location}
              className="city-select"
              onChange={(evt) => this.onInputFieldChange(evt, "location")}
            >
              {cities.map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
          </div>

          <div className="option-div">
            <p className="option-p">Poster URL</p>
            <input
              type="text"
              id="poster"
              name="poster"
              className="event-input"
              value={this.state.poster}
              onChange={(evt) => this.onInputFieldChange(evt, "poster")}
            />
          </div>

          <button
            className="submit-event-btn"
            onClick={() => this.onSubmitForm()}
            disabled={false}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Events;