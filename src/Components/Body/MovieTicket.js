import React, { Component } from 'react';
import "./CSS/MovieTicket.css";

export default class MovieTicket extends Component {
    constructor(props){
        super(props);
        this.state={
            ticketValue: '0'
        }
        this.onChangeTicket = this.onChangeTicket.bind(this);
    }

    enterTickets(e){
        this.setState({
            ticketValue: e.target.value
        })
        this.props.updateRemainingTickets(e.target.value, this.props.rowNumber);
    }

    onChangeTicket(operation){
      if(operation === "+"){
        this.setState({
          ticketValue: `${parseInt(this.state.ticketValue) + 1}`,
        });
      } else {
          let val = parseInt(this.state.ticketValue) - 1;
          if(val>=0){
            this.setState({
              ticketValue: val
            })
          }
      }
    }
    render() {
        return (
          <div className="tickets">
            <button className="add-ticket" onClick={() =>this.onChangeTicket("+")}>+</button>
            <input
              type="text"
              pattern="[0-9]*"
              value={this.state.ticketValue}
              className="input-ticket"
              onChange={(e) => this.enterTickets(e)}
            />
            <button className="add-ticket" onClick={() =>this.onChangeTicket("-")}>-</button>
          </div>
        );
    }
}