import "./App.css";
import Modal from "./Modal/Modal";
import Movie from "./Movie/Movie";
import Bookmarks from "./Bookmarks/Bookmarks";
import React, { useState } from "react";
// import { Ccomponent } from "./Intermediary";
import { Random } from "./Intermediary";
import { randomFilm } from "./Intermediary";
import { Search } from "./inter/Search";
import Auth0ProviderWithHistory from "./auth0Provider";

let indexFilm;
export function App(item, ClickLike) {
  const [modalBookmarks, setModalBookmarks] = useState(false);
  const [modalFilm, setModalFilm] = useState(false);

  const [username] = useState("username");

  const [Randomtext, setRandom] = useState(0);
  const foundFilm = {
    id: item.item.imdbID,
    title: item.item.Title,
    year: item.item.Year,
    genre: item.item.Genre,
    description: item.item.Plot,
    poster: item.item.Poster,
  };

  return (
      <Auth0ProviderWithHistory>
      <div className="Gig">
        <main>
          <button className="open-btn" onClick={() => setModalBookmarks(true)}>
            Закладки
          </button>
          <Modal active={modalBookmarks} setActive={setModalBookmarks}>
            <Bookmarks username={username} />
          </Modal>

          <button className="open-btn" onClick={() => setModalFilm(true)}>
            Фильм
          </button>
          <Modal active={modalFilm} setActive={setModalFilm}>
            <Movie film={foundFilm} username={username} />
          </Modal>
        </main>
      </div>
      </Auth0ProviderWithHistory>
  );
}

export default App;
