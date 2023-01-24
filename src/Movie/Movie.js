import React, { useState } from "react";
import "./movie.css";

const Movie = ({ film, username }) => {
  const [modalActiveLike, setModalActiveLike] = useState("/Like.jpg");
  let like = "/Like.jpg";
  let like1 = "/Like1.jpg";

  function addBookmark(bookmark) {
    if (username === null)
      return alert("Для добавления фильма в закладки нужно авторизоваться!");
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const avail = bookmarks.find((elem) => elem.film.id === film.id);
    if (avail) {
      setModalActiveLike(like1);
      return alert("Фильм уже в закладках!");
    }
    if (modalActiveLike === like) {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarks, bookmark])
      );
      setModalActiveLike(like1);
      alert("Фильм добавлен в закладки!");
    }
  }

  return (
    <div className="Grid">
      <div className="itemGrid itemGrid-0">
        <img
          onClick={() => addBookmark({ film })}
          className="imageClassLike "
          src={modalActiveLike}
          alt="imageLike"
        ></img>
      </div>
      <div className="itemGrid itemGrid-1">
        <img className="imageClass " src={film.poster} alt="description"></img>
      </div>
      <div className="itemGrid itemGrid-2">Название: {film.title}</div>
      <div className="itemGrid itemGrid-3">Год выпуска: {film.year}</div>
      <div className="itemGrid itemGrid-4">Жанр: {film.genre}</div>
      <div className="itemGrid itemGrid-5">
        Описание:
        <br /> {film.description}
      </div>
    </div>
  );
};

export default Movie;
