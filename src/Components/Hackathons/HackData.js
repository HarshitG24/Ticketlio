import React, { Component } from 'react';
import "./CSS/HackathonBody.css";

/**
 * @component
 * To display details of hackathon such as duration, location, date
 */
class HackData extends Component {
    render() { 
        const {data} = this.props;
        const {label, value} = data;
        return (
          <div className="hackathon-details">
            <p className="hack-duration">{label}</p>
            <p className="hack-data">{value}</p>
          </div>
        );
    }
}
 
export default HackData;