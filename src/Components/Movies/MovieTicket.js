import React, { Component } from 'react';
import "./CSS/MovieTicket.css";

/**
 * To display input number field for ticket
 * @component
 */
class MovieTicket extends Component {
  /**
   * @constructor
   * @param {object} props Takes in all the props
   */
  constructor(props) {
    super(props);

    /**
     * @state
     * @property {string} ticketValue Store the value of number of tickets entered by user
     */
    this.state = {
      ticketValue: "0",
    };
    this.onChangeTicket = this.onChangeTicket.bind(this);
  }

  /**
   *
   * @param {Event} e Takes event object returned by onChangeFunction
   * @returns {void}
   */
  enterTickets(e) {
    this.setState({
      ticketValue: e.target.value,
    });
    this.props.updateRemainingTickets(e.target.value, this.props.rowNumber);
  }

  /**
   *
   * @param {string} operation Determines the mathametical operation performed by user
   * @returns {void}
   */
  onChangeTicket(operation) {
    if (operation === "+") {
      this.setState({
        ticketValue: `${parseInt(this.state.ticketValue) + 1}`,
      });
    } else {
      let val = parseInt(this.state.ticketValue) - 1;
      if (val >= 0) {
        this.setState({
          ticketValue: val,
        });
      }
    }
  }
  render() {
    return (
      <div className="tickets">
        <button className="add-ticket" onClick={() => this.onChangeTicket("+")}>
          +
        </button>
        <input
          type="text"
          pattern="[0-9]*"
          value={this.state.ticketValue}
          className="input-ticket"
          onChange={(e) => this.enterTickets(e)}
        />
        <button className="add-ticket" onClick={() => this.onChangeTicket("-")}>
          -
        </button>
      </div>
    );
  }
}

export default MovieTicket;