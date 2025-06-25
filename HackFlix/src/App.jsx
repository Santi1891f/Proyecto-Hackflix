import './App.css'
import React, { useState } from 'react';
import Estrellas from './Estrellas';

// Simulación datos de películas
const peliculas = [
  { id: 1, titulo: "Inception", vote_average: 8.8 },
  { id: 2, titulo: "Titanic", vote_average: 7.5 },
  { id: 3, titulo: "Morbius", vote_average: 4.2 },
  { id: 4, titulo: "Barbie", vote_average: 6.7 },
  { id: 5, titulo: "The Room", vote_average: 3.2 },
];

function App() {
  const [ratingFiltro, setRatingFiltro] = useState(0);

  // Calculamos el mínimo rating en base a las estrellas
  const minRating = ratingFiltro * 2;

  const peliculasFiltradas = peliculas.filter(
    (pelicula) => pelicula.vote_average >= minRating
  );

  return (
    <div style={{ padding: "20px" }}>
      <Estrellas onChange={setRatingFiltro} />

      <h2>Películas con rating mayor o igual a {minRating}</h2>

      {peliculasFiltradas.length > 0 ? (
        <ul>
          {peliculasFiltradas.map((pelicula) => (
            <li key={pelicula.id}>
              🎬 {pelicula.titulo} - ⭐ {pelicula.vote_average}
            </li>
          ))}
        </ul>
      ) : (
        <p>Lo sentimos, no se encontraron películas con el rating solicitado.</p>
      )}
    </div>
  );
}

export default App;