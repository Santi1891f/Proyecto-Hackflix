import { useState } from "react";
import React, { useState } from "react";
import "./App.css";
import React from "react";
import MovieList from "./MovieList";
import movies from "./movies.json";
import oscuro from "./Componentes/NavBar";
function Main() {
  const [count, setCount] = useState(0);
  return <MovieList />;
}
export default Main;
