import React, { Component } from 'react';
import "./CSS/ShowTimings.css";

export default class ShowTimings extends Component {

    showTimingSelected(event, index){
        console.log(event.target.style, index);

        if (event.target.style.borderColor !== "orange"){
                      event.target.style.borderColor = "orange";
                      event.target.style.color = "orange";
                      event.target.classList.add("show-timings");
        } else{
                      event.target.style.borderColor = "black";
                      event.target.style.color = "black";
                      event.target.classList.add("show-timings");
        }

        
    }
    render() {
        // const {timings} = this.props;
        return (
            <div>
                {
                    this.props.timings.map((e, index) => {
                    return <button 
                    className="show-timings" 
                    key={index}
                    onClick={(event, index) => this.showTimingSelected(event, index)}
                    >{e}</button>;
                    })
                }
            </div>
        );
    }
}