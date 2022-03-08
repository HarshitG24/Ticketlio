import React, { Component } from "react";
import "../Body/CSS/Movies.css";
import ShowTimings from "./ShowTimings";
import MovieTicket from "./MovieTicket";
import NoMovie from "./NoMovie";


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
          description:
            "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
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
          description:
            "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
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
          description:
            "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son.",
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
          description:
            "WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE (Elissa Knight), a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy.",
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
        <h1 className="movie-title">Movies</h1>

        <div className="movie-filters">
          <p className="select-cinema">Select Cinema</p>
          <select
            name="movieList"
            id="movieList"
            onChange={(e) => this.changeTheatre(e)}
          >
            <option value="">Please select a theatre</option> 
            <option value="PVR">PVR</option>
            <option value="INOX">INOX</option>
            <option value="IBIS">IBIS</option>
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
