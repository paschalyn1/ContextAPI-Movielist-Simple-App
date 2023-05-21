import React, { createContext, useState } from "react";

export const UserContext = createContext();
export function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: "Harry porter",
      price: 12,
      id: 1
    },
    {
      name: "One nation",
      price: 23,
      id: 2
    },
    {
      name: "George Muller",
      price: 14,
      id: 3
    }
  ]);

  return (
    <UserContext.Provider value={[movies, setMovies]}>
      {props.children}
    </UserContext.Provider>
  );
}
