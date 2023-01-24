import React, { Component } from "react";
import { Carousel } from "./carousel/Carousel";
import "./Intermediary2.css";
import "./Modal/modal.css";
let keyAPI = "c637d92";
let mas = [];

let likePick1 = "/Like.jpg";
let likePick2 = "/Like1.jpg";
export default class Ccomponent1 extends Component {
  constructor(props, handellClick) {
    super(props, handellClick);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      likePick: "/Like.jpg",
    };
    this.handellClick = this.handellClick.bind(this);
  }

  // componentDidMount() {
  //   fetch("http://www.omdbapi.com/?i=" + this.props.id + "&apikey=" + keyAPI)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result,
  //         });
  //         console.log(this.state.items);
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  componentDidUpdate() {
    fetch("http://www.omdbapi.com/?i=" + this.props.id + "&apikey=" + keyAPI)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
          // console.log(this.state.items);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  handellClick = () => {
    if (this.state.likePick == "/Like.jpg") {
      this.setState({ likePick: likePick2 });
      console.log("Like");
      return "true1";
    } else {
      this.setState({ likePick: likePick1 });
      return "true2";
    }
  };
  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading to user tabe</p>;
    } else {
      return (
        <div className="movie">
          <img
            className="imgInter"
            alt={items.Title}
            title={items.Title}
            src={items.Poster}
          />
          <div className="movie__column">
            <img
              className="PictursInter"
              src={this.state.likePick}
              onClick={() => {
                this.handellClick();
              }}
            ></img>
            <h3 className="movie__titel">Title:{" " + items.Title}</h3>
            <h5 className="movie__year">Year:{" " + items.Year}</h5>

            <ul className="movie__genres">Runtime:{items.Runtime}</ul>
            <ul className="movie__genres">Rating:{items.imdbRating}</ul>
            <ul className="movie__genres">Plot:{items.Plot}</ul>
          </div>
        </div>
      );
    }
  }
}

export const Inter = () => {
  return (
    <>
      {/* <h1>Поиск:</h1>

       <Ccomponent id={"tt0805666"} /> */}
    </>
  );
};

export const Lenta2 = () => {
  return (
    <>
      <Inter />
    </>
  );
};
