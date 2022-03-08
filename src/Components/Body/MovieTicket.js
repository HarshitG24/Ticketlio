import React, { Component } from 'react';

export default class MovieTicket extends Component {
    constructor(props){
        super(props);
        this.state={
            ticketValue: '0'
        }
    }

    enterTickets(e){
        this.setState({
            ticketValue: e.target.value
        })
        this.props.updateRemainingTickets(e.target.value, this.props.rowNumber);
    }
    render() {
        return (
          <div>
            <input
              type="text"
              pattern="[0-9]*"
              value={this.state.ticketValue}
              onChange={(e) => this.enterTickets(e) }
            />
          </div>
        );
    }
}