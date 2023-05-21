import React, { createContext } from "react";

export const UserContext = createContext();

export default function MovieProvider() {
  const user = "John";
  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}</h1>
    </UserContext.Provider>
  );
}
