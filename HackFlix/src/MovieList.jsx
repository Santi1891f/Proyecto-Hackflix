import React, { useState } from 'react';
import movies from './movies.json'; 

function MovieList() {
  const [peliculas, setPeliculas] = useState(movies);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Películas</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {peliculas.map((peli) => (
          <div key={peli.id} className="border rounded-lg shadow-md overflow-hidden">
            <img
              src={peli.poster_path}
              alt={peli.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold text-lg">{peli.title}</h2>
              <p className="text-sm text-gray-600">{peli.release_date}</p>
              <p className="text-sm mt-2">{peli.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;