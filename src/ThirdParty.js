import React from "react";
import axios from "axios";

class ThirdParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherArr: [],
      movieArr: [],
    };
  }

  getMovie = async (event) => {
    const movieQuery = event.target.anyName.value;
    const url = `http://localhost:3456/getMovie?movieQuery=${movieQuery}`;
    /////////////http://localhost:3456/getMovie?movieQuery=city
    // const serverRes = await axios.get(url).then;
    // console.log(serverRes.data);
    // this.setState({
    //     movieArr : serverRes // is not defined
    // })
    console.log(event);
    console.log(movieQuery);
    console.log(url);
    axios
      .get(url)
      .then((serverRes) => {
        this.setState({
          movieArr: serverRes.data.results,
        });
      })
      .catch((error2) => {
        console.log(error2);
      });
  };

  getWeather = async (event) => {
    const searchQuery = event.target.anyName.value;
    const URL = `http://localhost:3456/getWeather?searchQuery=${searchQuery}`;
    // const servResponce = await axios.get(URL);
    // console.log(servResponce.data);
    // this.setState({
    //     weatherArr : servResponce.data
    // })

    axios
      .get(URL)
      .then((servResponce) => {
        this.setState({
          weatherArr: servResponce.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitHandler = (event)=> {
      event.preventDefault()
      this.getMovie(event);
      this.getWeather(event);
  }

  render() {
    //console.log(this.state.movieArr);
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#e0ffff",
        }}
      >
        <form onSubmit={(event)=>{this.submitHandler(event)}}>
          <input
            type="text"
            name="anyName"
            placeholder="Search Here !"
            style={{
              backgroundColor: "white",
              border: "3px solid black",
              borderRadius: "10px ",
              marginRight: "8px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "white",
              border: "3px solid black",
              borderRadius: "10px ",
            }}
          >
            {" "}
            Search{" "}
          </button>
        </form>

        {this.state.weatherArr.map((val, x) => {
          return (
            <div>
              <h2>Day: {x + 1} </h2>
              <h3>Description: {val.description}</h3>
              <h3>Date: {val.datetime}</h3>
            </div>
          );
        })}

        {this.state.movieArr.map((ele) => {
          console.log(ele);
          if (ele)
            return (
              <div>
                <img src={"https://image.tmdb.org/t/p/w500" + ele.poster_path} alt="img"></img>
                <h3>title: {ele.original_title} </h3>
                <h3>Review:{ele.overview}</h3>
                <h3>Votes: {ele.vote_average}</h3>
                <h3>Release Date: {ele.release_date}</h3>
              </div>
            );
        })}
      </div>
    );
  }
}
export default ThirdParty;
