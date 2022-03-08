import React, { Component } from 'react';
import "./CSS/ShowTimings.css";

export default class ShowTimings extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         timings: ['10:30 AM', "10:45 AM", '11:30 AM', "12:45 PM", '01:30 PM', "01:45 PM", '02:00 PM', "02:20 PM", '03:30 PM', "07:45 PM"]
    //     }
    // }

    showTimingSelected(event, index){
        console.log(event.target.style, index);
        event.target.style.borderColor = "orange";
        event.target.style.color = "orange";
        event.target.classList.add("show-timings");
        
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