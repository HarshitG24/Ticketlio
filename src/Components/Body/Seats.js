import React, { Component } from 'react';
import chair from "../../Images/chair.png"

class Seats extends Component {
    render() { 
        return (
          <div>
            <h1>Seats</h1>
            <img src={chair} alt="new" className="" />
          </div>
        );
    }
}
 
export default Seats;