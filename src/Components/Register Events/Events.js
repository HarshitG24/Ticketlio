import React, { Component } from 'react';
import "./Events.css"

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
        this.setState({
            [key]: evt.target.value
        })

        // localStorage.setItem(
        //   "registration-form",
        //   `{name: ${evt.target.value}}`
        // );
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
    }

    render() { 
        return (
          <div
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "50%", height: "100%" }}>
              <img
                src="https://www.nicepng.com/png/full/335-3355144_seller-registration-icon-class-register-icon-png.png"
                alt="new"
                className="left-img"
              />
            </div>
            <div style={{ width: "50%", height: "100%" }}>
              <h1 className="page-title">Register for event</h1>

              <div style={{ margin: 0 }}>
                <p>Name of the event</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={(evt) => this.onInputFieldChange(evt, "name")}
                />
              </div>

              <p>Description</p>
              <input
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={(evt) => this.onInputFieldChange(evt, "description")}
              />

              <p>From Date</p>
              <input
                type="text"
                id="fromDate"
                name="fromDate"
                value={this.state.fromDate}
                onChange={(evt) => this.onInputFieldChange(evt, "fromDate")}
              />

              <p>To Date</p>
              <input
                type="text"
                id="toDate"
                name="toDate"
                value={this.state.toDate}
                onChange={(evt) => this.onInputFieldChange(evt, "toDate")}
              />

              <p>To Date</p>
              <input
                type="text"
                id="duration"
                name="duration"
                value={this.state.duration}
                onChange={(evt) => this.onInputFieldChange(evt, "duration")}
              />

              <p>Location</p>
              <input
                type="text"
                id="location"
                name="location"
                value={this.state.location}
                onChange={(evt) => this.onInputFieldChange(evt, "location")}
              />

              <p>Poster URL</p>
              <input
                type="text"
                id="poster"
                name="poster"
                value={this.state.poster}
                onChange={(evt) => this.onInputFieldChange(evt, "poster")}
              />

              <button onClick={() => this.onSubmitForm()}>Submit</button>
            </div>
          </div>
        );
    }
}