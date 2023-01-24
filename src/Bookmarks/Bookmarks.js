import React, { useState } from "react";
import "./bookmarks.css";

const Bookmarks = ({ username }) => {
  const [valueBookmarks, setvalueBookmarks] = useState("");
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  let result = bookmarks.map(function (bookmark) {
    console.log(bookmark);
    // setvalueBookmarks(bookmark);
    return (
      <div className="car-item" key={bookmark.film.id}>
        <div className="car-item-image">
          <img src={bookmark.film.poster} alt="description" />
        </div>
        <div className="car-item-title">{bookmark.film.title}</div>
        <button onClick={() => removeBookmark(bookmark)}>
          Удалить из закладок
        </button>
      </div>
    );
  });

  function removeBookmark(bookmark) {
    let id = bookmark.film.id;
    bookmarks.forEach(function callback(bookmark, index) {
      if (bookmark.film.id === id) {
        bookmarks.splice(index, 1);
      }
    });
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks]));
    bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    result = bookmarks.map(function (bookmark) {
      return (
        <div className="car-item">
          <div className="car-item-image">
            <img
              key={bookmark.film.id}
              src={bookmark.film.poster}
              alt="description"
            />
          </div>
          <div className="car-item-title">{bookmark.film.title}</div>
          <button
            key={bookmark.film.id}
            onClick={() => removeBookmark(bookmark)}
          >
            Удалить из закладок
          </button>
        </div>
      );
    });
    setDisplayedBookmarks(result);
    alert("Фильм удален из закладок!");
  }

  const [displayedBookmarks, setDisplayedBookmarks] = useState(result);

  return (
    <section className="car" id="cars">
      <h2>{username}</h2>
      <div className="container">
        <div className="car-items">{displayedBookmarks}</div>
      </div>
    </section>
  );
};

export default Bookmarks;
