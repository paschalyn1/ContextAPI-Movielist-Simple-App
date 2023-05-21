import React, { useContext } from "react";
import { UserContext } from "./MovieContext";

export default function Nav() {
  const [movies, setMovies] = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "blue",
        padding: "10px 20px",
        color: "white",
        marginBottom: "20px"
      }}
    >
      <h1>Movies</h1>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
}
