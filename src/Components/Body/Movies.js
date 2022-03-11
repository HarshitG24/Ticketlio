import React, { Component } from "react";
import "../Body/CSS/Movies.css";
import ShowTimings from "./ShowTimings";
import MovieTicket from "./MovieTicket";
import NoMovie from "./NoMovie";


const theatres = [
  'PVR',
  'INOX',
  'IBIS'
]
class Movies extends Component {

  constructor(props){
    super(props);
    console.log('The city i get here is', this.props.city);
    this.updateRemainingTickets = this.updateRemainingTickets.bind(this);

    let moviedata = localStorage.getItem("movies-data")
    this.state = {
      city: this.props.city,
      ticketCount: 0,
      theatreName: "",
      movieName: "",
      actualMovieData: JSON.parse(moviedata),
      movieData: JSON.parse(moviedata),
    };
  }

  changeTheatre(evt){
    console.log('my current city', this.props.city)
    let data = this.state.actualMovieData;
    data = data.filter(e => (e.theatre.toLowerCase() === evt.target.value.toLowerCase() && e.city === this.props.city));
        this.setState({
          theatreName: evt.target.value,
          movieData: data,
        });
  }

  enterTickets(evt){
    this.setState({
      ticketCount: evt.target.value,
    });
  }

  updateRemainingTickets(val, index){
    console.log("val is", val);
    if(val !== "" && val !== '0' && val !== 0 ){
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
      console.log("tempData", tempData);


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
            {
              theatres.map(e => {
                return(
                  <option value={e}>{e}</option>
                )
              })
            }
          </select>

        </div>

        <div>
          {this.state.theatreName && this.state.movieData ?
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
            }) : <NoMovie />}
        </div>
      </div>
    );
  }
}

export default Movies;
