import AddMovie from "./AddMovies";
import { useState } from "react";
import { MovieProvider } from "./MovieContext";
import Nav from "./Nav";
import "./styles.css";
import Search from "./search";

export default function App() {
  return (
    <div className="App">
      <MovieProvider>
        <div>
          <Search />
          <Nav />
          <AddMovie />
        </div>
      </MovieProvider>
    </div>
  );
}
