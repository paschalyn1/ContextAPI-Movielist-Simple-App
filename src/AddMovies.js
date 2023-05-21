import React, { useContext, useState } from "react";
import { UserContext } from "./MovieContext";
import Movie from "./Movie";
import "./styles.css";
import MovieList from "./MovieList";

export default function AddMovie() {
  const [movies, setMovies] = useContext(UserContext);
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function submitted(e) {
    e.preventDefault();
    setMovies((previousData) => [
      ...previousData,
      { name: name, price: price, id: movies.length + 1 }
    ]);
    setName("");
    setPrice("");
    setState(1);
  }

  return (
    <>
      <form onSubmit={submitted}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          onChange={handleName}
        />
        <input
          type="text"
          name="price"
          placeholder="$"
          value={price}
          onChange={handlePrice}
        />
        {name.length > 0 && price.length > 0 ? (
          <button>Submit</button>
        ) : (
          <button disabled>Submit</button>
        )}
      </form>
      <button onClick={() => setState(0)}>Clear All</button>
      <button onClick={() => setState(1)}>Display All</button>
      {state === 1 ? <MovieList /> : ""}
    </>
  );
}
