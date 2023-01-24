import React, { Component } from "react";
import { Carousel } from "./carousel/Carousel";
import "./Intermediary.css";
import { useState } from "react";
import Modal from "./Modal/Modal";
import "./Modal/modal.css";

let keyAPI = "c637d92";

let likePick = "/Like.jpg";
let likePick1 = "/Like.jpg";
let likePick2 = "/Like1.jpg";
let i = 0;
let mas = [];
export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      likePick: "/Like.jpg",
    };
    this.handellClick = this.handellClick.bind(this);
    this.luke = this.luke.bind(this);
  }

  sumi() {
    i = i + 1;
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=" + this.props.id + "&apikey=" + keyAPI)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            likePick: likePick1,
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

  luke() {
    mas = JSON.parse(localStorage.getItem("mas")) || [];
    if (this.items.Titel == mas.titel) {
      this.setState({ likePick: likePick1 });
    }
  }
  luke;
  handellClick(titel) {
    if (this.state.likePick == "/Like.jpg") {
      mas = JSON.parse(localStorage.getItem("mas")) || [];
      mas.push({ titel, likePick2 });
      localStorage.setItem("mas", JSON.stringify([...mas]));
      this.setState({ likePick: likePick2 });
      console.log(mas);
    } else {
      mas.forEach(function callback(mas1, index) {
        if (mas1.titel === titel) {
          mas.splice(index, 1);
        }
      });
      localStorage.setItem("mas", JSON.stringify([...mas]));
      this.setState({ likePick: likePick1 });
    }
  }
  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading</p>;
    } else {
      return (
        <div className="movie">
          <img
            className="imgInter"
            alt={items.Title}
            title={items.Title}
            src={items.Poster}
            onClick={() => {}}
          />
          <div className="movie__column">
            <img
              className="PictursInter"
              src={this.state.likePick}
              onClick={() => {
                this.handellClick(items.Title);
              }}
            ></img>
            <h3 className="movie__titel">Title:{" " + items.Title}</h3>
            <h5 className="movie__year">Year:{" " + items.Year}</h5>

            <ul className="movie__genres">Runtime:{items.Runtime}</ul>
            <ul className="movie__genres">Rating:{items.imdbRating}</ul>
          </div>
        </div>
      );
    }
  }
}

export const MassiveTop = () => {
  return (
    <>
      <h1>Top</h1>
      <br />
      <Carousel>
        <Ccomponent id="tt3560686" />
        <Ccomponent id="tt1745960" />
        <Ccomponent id="tt2802154" />
        <Ccomponent id="tt7286456" />
        <Ccomponent id="tt6751668" />
        <Ccomponent id="tt4154756" />
        <Ccomponent id="tt0993846" />
        <Ccomponent id="tt8041270" />
        <Ccomponent id="tt9419884" />
        <Ccomponent id="tt5113044" />
        <Ccomponent id="tt1877830" />
        <Ccomponent id="tt10648342" />
        <Ccomponent id="tt9114286" />
        <Ccomponent id="tt14557302" />
        <Ccomponent id="tt10872600" />
        <Ccomponent id="tt0117571" />
        <Ccomponent id="tt11466222" />
        <Ccomponent id="tt7657566" />
        <Ccomponent id="tt1464335" />
        <Ccomponent id="tt5108870" />
        <Ccomponent id="tt8115900" />
        <Ccomponent id="tt3704428" />
        <Ccomponent id="tt10954984" />
        <Ccomponent id="tt12593682" />
        <Ccomponent id="tt2400463" />
        <Ccomponent id="tt15791034" />
        <Ccomponent id="tt6443346" />
        <Ccomponent id="tt10665342" />
        <Ccomponent id="tt15474916" />
        <Ccomponent id="tt10731256" />
      </Carousel>
    </>
  );
};
export const MassiveHorror = () => {
  return (
    <>
      <h1>Ужасы</h1>
      <br />
      <Carousel>
        <Ccomponent id="tt1396484" />
        <Ccomponent id="tt1457767" />
        <Ccomponent id="tt0090605" />
        <Ccomponent id="tt5052448" />
        <Ccomponent id="tt3065204" />
        <Ccomponent id="tt5140878" />
        <Ccomponent id="tt2321549" />
        <Ccomponent id="tt0167404" />
        <Ccomponent id="tt0391198" />
        <Ccomponent id="tt0360486" />
        <Ccomponent id="tt1132626" />
        <Ccomponent id="tt1179904" />
        <Ccomponent id="tt1220634" />
        <Ccomponent id="tt1778304" />
        <Ccomponent id="tt1446714" />
        <Ccomponent id="tt0391198" />
        <Ccomponent id="tt3322940" />
        <Ccomponent id="tt1051904" />
        <Ccomponent id="tt5814060" />
        <Ccomponent id="tt7349950" />
        <Ccomponent id="tt8332922" />
        <Ccomponent id="tt0073195" />
        <Ccomponent id="tt0070047" />
        <Ccomponent id="tt0212985" />
        <Ccomponent id="tt0114508" />
        <Ccomponent id="tt0110148" />
        <Ccomponent id="tt0263696" />
        <Ccomponent id="tt0093773" />
        <Ccomponent id="tt0090605" />
        <Ccomponent id="tt0075005" />
      </Carousel>
    </>
  );
};
export const MassiveAction = () => {
  return (
    <>
      <h1>Экшен</h1>
      <br />
      <Carousel>
        <Ccomponent id="tt2911666" />
        <Ccomponent id="tt0468569" />
        <Ccomponent id="tt1375666" />
        <Ccomponent id="tt1436045" />
        <Ccomponent id="tt0840361" />
        <Ccomponent id="tt0499549" />
        <Ccomponent id="tt1596343" />
        <Ccomponent id="tt0076759" />
        <Ccomponent id="tt0772251" />
        <Ccomponent id="tt0097576" />
        <Ccomponent id="tt0055630" />
        <Ccomponent id="tt0095016" />
        <Ccomponent id="tt0083658" />
        <Ccomponent id="tt0133093" />
        <Ccomponent id="tt0103064" />
        <Ccomponent id="tt0110413" />
        <Ccomponent id="tt0107290" />
        <Ccomponent id="tt0172495" />
        <Ccomponent id="tt0848228" />
        <Ccomponent id="tt0093773" />
        <Ccomponent id="tt0113277" />
        <Ccomponent id="tt0371746" />
        <Ccomponent id="tt0378194" />
        <Ccomponent id="tt0206634" />
        <Ccomponent id="tt0070034" />
        <Ccomponent id="tt0796366" />
        <Ccomponent id="tt1074638" />
        <Ccomponent id="tt0381061" />
        <Ccomponent id="tt0119654" />
        <Ccomponent id="tt0440963" />
      </Carousel>
    </>
  );
};

let masId = ["tt9764362", "tt0499549"];
export const MassiveComedy = () => {
  return (
    <>
      <h1>Комедия</h1>
      <br />
      <Carousel>
        <Ccomponent id="tt9764362" />
        <Ccomponent id="tt12003946" />
        <Ccomponent id="tt6966692" />
        <Ccomponent id="tt1119646" />
        <Ccomponent id="tt2584384" />
        <Ccomponent id="tt10288566" />
        <Ccomponent id="tt6865690" />
        <Ccomponent id="tt0110413" />
        <Ccomponent id="tt0107290" />
        <Ccomponent id="tt7657566" />
        <Ccomponent id="tt1464335" />
        <Ccomponent id="tt5108870" />
        <Ccomponent id="tt8115900" />
        <Ccomponent id="tt3704428" />
        <Ccomponent id="tt10954984" />
        <Ccomponent id="tt12593682" />
        <Ccomponent id="tt2400463" />
        <Ccomponent id="tt15791034" />
        <Ccomponent id="tt0172495" />
        <Ccomponent id="tt0796366" />
        <Ccomponent id="tt1074638" />
        <Ccomponent id="tt0381061" />
        <Ccomponent id="tt0119654" />
      </Carousel>
    </>
  );
};

export const Lenta = () => {
  return (
    <>
      <MassiveTop />
      <MassiveComedy />
      <MassiveAction />
      <MassiveHorror />
      <MassiveComedy />
    </>
  );
};
