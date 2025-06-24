import React, { useEffect, useState } from "react";
import "./listaPelis.css"
const ListaPelis = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error al cargar JSON:", error));
  }, []);

  const renderedMovies = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    renderedMovies.push(
      <li key={movie.id} className="TPostMv">
        <article className="TPost C">
          <a href="#">
            <div className="Image">
              <figure className="Objf TpMvPlay AAIco-play_arrow">
                <img
                  className="lazyloaded"
                  src={movie.poster_path}
                  alt={movie.title}
                />
                <figcaption>
                  <span className="ClB">⭐ {movie.vote_average}</span>
                </figcaption>
              </figure>
            </div>
            <h3 className="Title">{movie.title}</h3>
            <span className="Year">
              {movie.release_date
                ? `Año: ${movie.release_date.slice(0, 4)}`
                : ""}
            </span>
          </a>
        </article>
      </li>
    );
  }

  return (
    <section className="container mt-5">
      <h2 className="mb-4"> Películas </h2>
      <ul className="MovieList Rows AX A06 B04 C03 NoLmtxt E20">
        {renderedMovies}
      </ul>
    </section>
  );
};

export default ListaPelis;