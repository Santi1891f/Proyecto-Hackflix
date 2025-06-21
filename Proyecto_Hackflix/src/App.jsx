import { useEffect, useState } from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './App.css';
import Inicio from './components/Front/Inicio';
import Carrusel from './components/Front/Carrusel';

function App() {
  const [carruseles, setCarruseles] = useState([]);

  useEffect(() => {
    fetch('/data/movies.json')
      .then((res) => res.json())
      .then((data) => {
        const tamañoCarrusel = 12;
        const cantidadPorSlide = 4;
       const gruposDeCarrusel = [];
        for (let i = 0; i < data.length; i += tamañoCarrusel) {
          const chunk = data.slice(i, i + tamañoCarrusel);
          gruposDeCarrusel.push(chunk);
        }

   const carruselesFormateados = gruposDeCarrusel.map((peliculas, index) => ({
          id: `carrusel${index + 1}`,
          titulo: `Películas ${index + 1}`,
          peliculas: agruparPorSlide(peliculas, cantidadPorSlide),
        }));setCarruseles(carruselesFormateados);
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
        {carruseles.map((categoria) => (
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