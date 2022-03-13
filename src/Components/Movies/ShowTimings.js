import React, { Component } from 'react';
import "./CSS/ShowTimings.css";

/**
 * To display to all the timings of a particular movie and theatre
 * @component
 */
class ShowTimings extends Component {

    /**
     * 
     * @param {object} event Takes an event object, which contains necessary properties 
     * @returns {void}
     */
    showTimingSelected(event){
        // console.log(event.target.style, index);

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

export default ShowTimings;