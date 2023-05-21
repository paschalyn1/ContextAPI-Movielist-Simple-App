import React, { useContext, useState } from "react";
import Movie from "./Movie";
import { UserContext } from "./MovieContext";

export default function MovieList() {
  const [movies, setMovies] = useContext(UserContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          name={movie.name}
          price={movie.price}
        />
      ))}
    </div>
  );
}
