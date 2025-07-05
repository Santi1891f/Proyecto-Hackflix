import React, { useState } from 'react';
import movies from './movies.json'; 

function MovieList() {
  const [peliculas, setPeliculas] = useState(movies);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Lista de Películas</h1>
      <div className="grid ">
        {peliculas.map((peli) => (
          <div key={peli.id} className="border">
            <img
              src={peli.poster_path}
              alt={peli.title}
              className=""
            />
            <div className="p-3">
              <h2 className="">{peli.title}</h2>
              <p className="">{peli.release_date}</p>
              <p className="">{peli.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;