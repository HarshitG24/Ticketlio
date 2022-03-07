import React, { Component } from "react";
import "../Body/CSS/Movies.css";
import ShowTimings from "./ShowTimings";

const movieData = [
  {
    posterUrl:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    title: "ABC",
    description: "asd",
    ShowTimings: ["10:30 PM", "11:00PM"],
    theatre: "PVR",
    remainingTickets: "10",
  },
  {
    posterUrl:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    title: "DEF",
    description: "okl",
    ShowTimings: ["10:30 PM", "11:00PM"],
    theatre: "OPK",
    remainingTickets: "12",
  },
];

class Movies extends Component {

  constructor(props){
    super(props);
    this.state={
      ticketCount: 0,
    }
  }

  enterTickets(evt){
    this.setState({
      ticketCount: evt.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1>Movies</h1>
        {
          movieData.map(elem => {
             return (
               <div className="movie-box">
                 <div>
                   <img
                     src={elem.posterUrl}
                     alt="new"
                     className="movie-poster"
                   />
                 </div>
                 <div className="movie-details">
                   <p className="movie-title">Dora and the Lost city of Gold</p>
                   <p>
                     Film criticism is the analysis and evaluation of films and
                     the film medium. In general, film criticism can be divided
                     into two categories: journalistic criticism which appears
                     regularly in newspaper
                   </p>
                   <p>Show Timings:</p>
                   <ShowTimings />

                   <p>Theatre: PVR Cinemas</p>
                   <p>Date: Today</p>

                   <p>Number of tickets:</p>
                   <div className="book-tickets">
                     <div>
                       <input
                         type="text"
                         pattern="[0-9]*"
                         value={this.state.ticketCount}
                         onChange={(e) => this.enterTickets(e)}
                       />
                       <p>Tickets available: 19</p>
                     </div>
                     <button className="book-btn">Book Tickets</button>
                   </div>
                 </div>
               </div>
             ); 
          })
        }
      </div>
    );
  }
}

export default Movies;
