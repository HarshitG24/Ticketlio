import React, { Component } from 'react';
import "./Events.css"
import {cities} from "../../Data/Data"

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
            fromDate: "",
            toDate: "",
            location: "",
            poster: "",
            duration: "",
         };
        this.onInputFieldChange =  this.onInputFieldChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputFieldChange(evt, key){

      console.log("value is", evt.target.value);
        this.setState({
            [key]: evt.target.value
        })
    }

    onGetDate(evt, key){
      let dateVal =  evt.target.value;
      dateVal =  dateVal.split('-');

      let date = dateVal[2];
      let month = this.generateMonth(dateVal[1]);
      let year = dateVal[0];

      this.setState({
        [key]: `${date} ${month}, ${year}`
      })
      
    }

    generateMonth(key){
      let arr = [
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]

      return arr[parseInt(key)];
    }


    onSubmitForm(){
        console.log('data is submitted');
        const hackData = JSON.parse(localStorage.getItem("hackathon-data"));
        let obj = {
            title: this.state.name,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.fromDate + " to " +  this.state.toDate,
            location:this.state.location,
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

        alert('Thank you for registering the event, we have listed it for the users')
    }

    disableSubmitBtn(){
      const {
            name,
            description,
            fromDate,
            toDate,
            location,
            poster,
            duration,
      } = this.state;

      return (name === "") && (description === "") && (fromDate === "") && (toDate === "") && (location === "") && (poster === "") && (duration === "")
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
                  onChange={(evt) =>
                    this.onInputFieldChange(evt, "description")
                  }
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
                  onChange={(evt) => this.onInputFieldChange(evt, "fromDate")}
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
                  onChange={(evt) => this.onInputFieldChange(evt, "toDate")}
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
                className={
                  dis ? "submit-event-btn-disabled" : "submit-event-btn"
                }
                onClick={() => this.onSubmitForm()}
                disabled={dis}
              >
                Submit
              </button>
            </div>
          </div>
        );
    }
}