import React, { Component } from "react";
import "./CSS/Movies.css";
import ShowTimings from "./ShowTimings";
import MovieTicket from "./MovieTicket";
import NoMovie from "./NoMovie";
import { theatres } from "../../Data/Data";

/**
 * To display all the movies 
 * @component
 */
class Movies extends Component {
  /**
   * @constructor
   * @param {props} props Takes in all the props
   */
  constructor(props) {
    super(props);
    this.updateRemainingTickets = this.updateRemainingTickets.bind(this);
    let moviedata = localStorage.getItem("movies-data");

    /**
     * @state
     * @property {string} city Value stored from props here
     * @property {string} theatreName The theatre selected by the user
     * @property {object} actualMovieData The data for all movies
     * @property {object} movieData The data for all movies
     * @property {array} theatres The list of all theatres
     */
    this.state = {
      city: this.props.city,
      theatreName: "",
      actualMovieData: JSON.parse(moviedata),
      movieData: JSON.parse(moviedata),
      theatres,
    };
  }

  /**
   * Changes the Theatre selected by the user
   * @param {object} evt Takes an Event object
   * @returns {void}
   */
  changeTheatre(evt) {
    let data = JSON.parse(localStorage.getItem("movies-data")); //JSON.parse(JSON.stringify(this.state.actualMovieData));
    data = data.filter(
      (e) =>
        e.theatre.toLowerCase() === evt.target.value.toLowerCase() &&
        e.city === this.props.city
    );

    console.log("data is", data);
    this.setState({
      theatreName: evt.target.value,
      movieData: data,
    });
  }

  /**
   *
   * @param {string} val Takes the value entered by the user
   * @param {number} index Takes the index of the row at which the change was made
   * @returns {void}
   */

  updateRemainingTickets(val, index) {
    if (val !== "" && val !== "0" && val !== 0) {
      let movieData = [...this.state.actualMovieData];
      let tempData = movieData[index];
      tempData.remainingTickets = `${
        parseInt(tempData.remainingTickets) - parseInt(val || "0")
      }`;
      movieData[index] = tempData;

      this.setState({
        movieData: movieData,
      });
    } else {
      let movieData = [...this.state.actualMovieData];
      let tempData = movieData[index];
      movieData[index] = tempData;

      this.setState({
        movieData: movieData,
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className="movie-title">Movies</h1>

        <div className="movie-filters">
          <p className="select-cinema">Select Cinema</p>
          <select
            name="movieList"
            id="movieList"
            onChange={(e) => this.changeTheatre(e)}
          >
            <option value="">Please select a theatre</option> 
            {this.state.theatres.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
        </div>

        <div>
          {this.props.city !== "Please select a city" &&
          this.state.theatreName &&
          this.state.movieData.length > 0 ? (
            this.state.movieData.map((elem, index) => {
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
                    <p className="movies-name">{elem.title}</p>
                    <p className="movie-desc">{elem.description}</p>
                    <p className="timings">Show Timings:</p>
                    <ShowTimings timings={elem.showTimings} />

                    <div className="theatre-name">
                      <p className="theatre">Theatre:</p>
                      <p>{elem.theatre}</p>
                    </div>

                    <div className="theatre-name">
                      <p className="theatre">Date:</p>
                      <p>March 9, 2022</p>
                    </div>

                    <div className="theatre-name">
                      <p className="theatre">City:</p>
                      <p>{this.props.city}</p>
                    </div>

                    <p className="theatre">Number of tickets:</p>
                    <div className="book-tickets">
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <MovieTicket
                          rowNumber={index}
                          updateRemainingTickets={this.updateRemainingTickets}
                        />
                        {/* <p>Tickets available: {elem.remainingTickets}</p> */}
                        <button className="book-movie-btn">Book Tickets</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NoMovie />
          )}
        </div>
      </div>
    );
  }
}

export default Movies;
