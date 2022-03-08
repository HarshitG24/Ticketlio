import React, { Component } from "react";
import "../Body/CSS/Movies.css";
import ShowTimings from "./ShowTimings";
import MovieTicket from "./MovieTicket";


class Movies extends Component {

  constructor(props){
    super(props);
    this.updateRemainingTickets = this.updateRemainingTickets.bind(this);
    this.state = {
      ticketCount: 0,
      theatreName: "",
      movieName: "",
      actualMovieData: [
        {
          posterUrl:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/interstellar2_480x.progressive.jpg?v=1585846823",
          title: "Interstellar",
          description: "asd",
          showTimings: [
            "10:30 AM",
            "10:45 AM",
            "11:30 AM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:00 PM",
            "02:20 PM",
            "03:30 PM",
            "07:45 PM",
          ],
          theatre: "PVR",
          remainingTickets: "10",
        },
        {
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
          title: "Frozen",
          description: "okl",
          showTimings: [
            "11:30 AM",
            "11:45 AM",
            "12:30 PM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:10 PM",
            "05:35 PM",
            "08:30 PM",
            "10:00 PM",
          ],
          theatre: "PVR",
          remainingTickets: "12",
        },
        {
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
          title: "Pursuit of the happines",
          description: "okl",
          showTimings: [
            "11:30 AM",
            "11:45 AM",
            "12:30 PM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:10 PM",
            "05:35 PM",
            "08:30 PM",
            "10:00 PM",
          ],
          theatre: "IBIS",
          remainingTickets: "12",
        },
        {
          posterUrl:
            "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
          title: "Walle",
          description: "okl",
          showTimings: [
            "11:30 AM",
            "11:45 AM",
            "12:30 PM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:10 PM",
            "05:35 PM",
            "08:30 PM",
            "10:00 PM",
          ],
          theatre: "INOX",
          remainingTickets: "12",
        },
      ],
      movieData: [
        {
          posterUrl:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/interstellar2_480x.progressive.jpg?v=1585846823",
          title: "Interstellar",
          description: "asd",
          showTimings: [
            "10:30 AM",
            "10:45 AM",
            "11:30 AM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:00 PM",
            "02:20 PM",
            "03:30 PM",
            "07:45 PM",
          ],
          theatre: "PVR",
          remainingTickets: "10",
        },
        {
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
          title: "Frozen",
          description: "okl",
          showTimings: [
            "11:30 AM",
            "11:45 AM",
            "12:30 PM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:10 PM",
            "05:35 PM",
            "08:30 PM",
            "10:00 PM",
          ],
          theatre: "PVR",
          remainingTickets: "12",
        },
        {
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
          title: "Pursuit of the happines",
          description: "okl",
          showTimings: [
            "11:30 AM",
            "11:45 AM",
            "12:30 PM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:10 PM",
            "05:35 PM",
            "08:30 PM",
            "10:00 PM",
          ],
          theatre: "IBIS",
          remainingTickets: "12",
        },
        {
          posterUrl:
            "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
          title: "Walle",
          description: "okl",
          showTimings: [
            "11:30 AM",
            "11:45 AM",
            "12:30 PM",
            "12:45 PM",
            "01:30 PM",
            "01:45 PM",
            "02:10 PM",
            "05:35 PM",
            "08:30 PM",
            "10:00 PM",
          ],
          theatre: "INOX",
          remainingTickets: "12",
        },
      ],
    };
  }

  changeTheatre(evt){
    let data = this.state.actualMovieData;
    data = data.filter(e => e.theatre.toLowerCase() === evt.target.value.toLowerCase());
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
      // tempData.remainingTickets = `${
      //   parseInt(tempData.remainingTickets)
      // }`;
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
        <h1>Movies</h1>

        <div className="movie-filters">
          <select
            name="movieList"
            id="movieList"
            onChange={(e) => this.changeTheatre(e)}
          >
            <option value="">Please select a theatre</option> 
            <option value="PVR">PVR</option>
            <option value="INOX">INOX</option>
            <option value="IBIS">IBIS</option>
            <option value="ABC">ABC</option>
          </select>

          {/* {this.state.theatreName !== "" ? (
            <select
              name="movieList"
              id="movieList"
              onChange={(e) => this.changeMovie(e)}
            >
              <option value="">Please select a movie</option> 
              <option value="Interstellar">Interstellar</option>
              <option value="Pursuit of Happiness">Pursuit of Happiness</option>
              <option value="Walle">Walle</option>
              <option value="Frozen">Frozen</option>
            </select>
          ) : null} */}
        </div>

        <div>
          {(this.state.theatreName) &&
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
                    <p className="movie-title">{elem.title}</p>
                    <p>{elem.description}</p>
                    <p>Show Timings:</p>
                    <ShowTimings timings={elem.showTimings} />

                    <p>Theatre: {elem.theatre}</p>
                    <p>Date: Today</p>
                    <p>Number of tickets:</p>
                    <div className="book-tickets">
                      <div>
                        <MovieTicket rowNumber={index} updateRemainingTickets={this.updateRemainingTickets}/>
                        {/* <p>Tickets available: {elem.remainingTickets}</p> */}
                      </div>
                      <button className="book-btn">Book Tickets</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Movies;
