import React, { useState, useContext } from "react";
import "./styles.css";
import { UserContext } from "./MovieContext";
export default function Search() {
  const [search, setSearch] = useState("");
  const [searches, setSearches] = useState("");
  const [movies, setMovies] = useContext(UserContext);

  function check(e) {
    setSearch(e.target.value);
  }

  function keycode(e) {
    if (keycode === 13) {
      submitted();
    }
  }

  function submitted(e) {
    setSearches("");
    e.preventDefault();
    movies.filter((movie) => {
      if (
        movie.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        movie.price
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        movie.id
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      ) {
        setSearches(
          `Name: ${movie.name} Price: ${movie.price}, Id: ${movie.id}`
        );
      }
    });
  }

  return (
    <div>
      <form onSubmit={submitted}>
        <input
          placeholder="search"
          type="text"
          name="search"
          value={search}
          onChange={check}
          onKeyDown={keycode}
          className="search"
        />
        <button>Search</button>
      </form>
      {search.length > 0 && (
        <div className="searchbox">
          {searches.length ? searches : setSearches("Not found")}
        </div>
      )}
    </div>
  );
}
