import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Search_input.css";
import Ccomponent1 from "../Intermediary2";
import { handellClick } from "../Intermediary2";
import "../Intermediary2.css";
import { App } from "../App.js";

let keyAPI = "c637d92";
let likePick1 = "/Like.jpg";
// let xvalue="tt1396484";
// import { Ccomponent1 } from "../Intermediary2";
export const Search_input = () => {
  const [value1, setValue1] = useState("");
  const [value, setValue] = useState("");
  const [valueApp, setValueApp] = useState("");
  const [valueLike, setValueLike] = useState("");
  const [valueButton, setvalueButton] = useState("");
  const [valueButtonRandom, setvalueButtonRandom] = useState("");

  function handlePost(e) {
    setValue(e.target.value.trim().replace(/^ +/g, " "));
    //console.log(e.target.value.trim().replace(/ +/g, ' '));
  }
  function handleEnter(e) {
    if (e.keyCode == "13" && value.length >= 2) {
      inerText();
      async function inerText() {
        let abc = await fetch(
          "http://www.omdbapi.com/?t=" + value + "&apikey=" + keyAPI
        );

        const items = await abc.json();
        console.log(valueApp);
        console.log(items.Error);
        if (items.Error != "Movie not found!") {
          setValue1(items.imdbID);
          setValueApp(items);
        } else {
          alert("Нет такого фильма");
        }
      }

      //console.log(e.target.value.trim().replace(/[^A-zа-яё0-9]/gi, ''));
      //slet tmpFilmData=requestSearch();
      console.log(e.target.value.trim().replace(/[^A-zа-яё0-9]/gi, " "));
    } else if (e.keyCode == "13" && value.length < 2) {
      alert("Наберите хотя бы 2 буквы для фильма");
    }
  }
  const handellClick = (e1) => {
    setValueLike(e1);
  };

  function handleButtonClick() {
    // const [valuebutton, setvaluebutton] = useState("");
    randomFilm();
    function randomFilm() {
      const indexFilm = Math.floor(
        Math.random() * (massFilms.length - 0 + 1) + 0
      );
      setvalueButton(massFilms[indexFilm]);
      setvalueButtonRandom(massFilms[indexFilm]);
      console.log(valueButtonRandom);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Название твоего фильма"
        onChange={handlePost}
        onKeyDown={handleEnter}
        className="search_input"
      />
      <br />
      <div className="Grid12">
        <div className="Open1">
          <h1>Поиск:</h1>
          <Ccomponent1 id={value1} handellClick={handellClick} />
          <App item={valueApp} ClickLike={valueLike} />
        </div>
        <div className="Open2">
          <h1>Random film:</h1>
          <Ccomponent1 id={valueButton} />
          <button className="open-btn" onClick={handleButtonClick}>
            Random film
          </button>
        </div>
        {/* <Ccomponent1 id={value1} handellClick={handellClick} /> */}
      </div>
    </div>
  );
};

const massFilms = [
  "tt3560686",
  "tt1745960",
  "tt2802154",
  "tt7286456",
  "tt6751668",
  "tt4154756",
  "tt0993846",
  "tt8041270",
  "tt9419884",
  "tt5113044",
  "tt1877830",
  "tt10648342",
  "tt9114286",
  "tt14557302",
  "tt10872600",
  "tt0117571",
  "tt11466222",
  "tt7657566",
  "tt1464335",
  "tt5108870",
  "tt8115900",
  "tt3704428",
  "tt10954984",
  "tt12593682",
  "tt2400463",
  "tt15791034",
  "tt6443346",
  "tt10665342",
  "tt15474916",
  "tt10731256",
  "tt1396484",
  "tt1457767",
  "tt0090605",
  "tt5052448",
  "tt3065204",
  "tt5140878",
  "tt2321549",
  "tt0167404",
  "tt0391198",
  "tt0360486",
  "tt1132626",
  "tt1179904",
  "tt1220634",
  "tt1778304",
  "tt1446714",
  "tt0391198",
  "tt3322940",
  "tt1051904",
  "tt5814060",
  "tt7349950",
  "tt8332922",
  "tt0073195",
  "tt0070047",
  "tt0212985",
  "tt0114508",
  "tt0110148",
  "tt0263696",
  "tt0093773",
  "tt0090605",
  "tt0075005",
  "tt2911666",
  "tt0468569",
  "tt1375666",
  "tt1436045",
  "tt0840361",
  "tt0499549",
  "tt1596343",
  "tt0076759",
  "tt0772251",
  "tt0097576",
  "tt0055630",
  "tt0095016",
  "tt0083658",
  "tt0133093",
  "tt0103064",
  "tt0110413",
  "tt0107290",
  "tt0172495",
  "tt0848228",
  "tt0093773",
  "tt0113277",
  "tt0371746",
  "tt0378194",
  "tt0206634",
  "tt0070034",
  "tt0796366",
  "tt1074638",
  "tt0381061",
  "tt0119654",
  "tt0440963",
  "tt9764362",
  "tt12003946",
  "tt6966692",
  "tt1119646",
  "tt2584384",
  "tt10288566",
  "tt6865690",
];
