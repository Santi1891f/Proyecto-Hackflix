import { useEffect, useState } from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './App.css';
import Inicio from './components/Front/Inicio';
import Carrusel from './components/Front/Carrusel';

function App() {
  const [peliculasPorGenero, setPeliculasPorGenero] = useState([]);

  useEffect(() => {
    fetch('/data/movies.json')
      .then((res) => res.json())
      .then((data) => {
        // Agrupar películas de a 4 por slide
        const agrupadas = data.map((categoria) => ({
          ...categoria,
          peliculas: agruparPorSlide(categoria.peliculas, 4),
        }));
        setPeliculasPorGenero(agrupadas);
      });
  }, []);

  const agruparPorSlide = (pelis, cantidadPorSlide) => {
    const resultado = [];
    for (let i = 0; i < pelis.length; i += cantidadPorSlide) {
      resultado.push(pelis.slice(i, i + cantidadPorSlide));
    }
    return resultado;
  };

  return (
    <div>
      <Inicio />
      <main className="container py-5">
        {peliculasPorGenero.map((categoria) => (
          <Carrusel
            key={categoria.id}
            id={categoria.id}
            titulo={categoria.titulo}
            peliculas={categoria.peliculas}
          />
        ))}
      </main>
    </div>
  );
}

export default App;