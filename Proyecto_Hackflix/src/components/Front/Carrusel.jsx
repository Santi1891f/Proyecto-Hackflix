import React, { useState } from 'react';
import Card from './Card';

const Carrusel = ({ titulo, peliculas }) => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % peliculas.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + peliculas.length) % peliculas.length);
  };

  return (
    <section className="mb-5">
      <h2 className="mb-3">{titulo}</h2>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary me-2" onClick={anterior}>
          ⬅
        </button>
        <div className="row flex-nowrap overflow-hidden w-100">
          {peliculas[index].map((peli, idx) => (
            <div key={idx} className="col-md-3 col-6">
              <Card {...peli} />
            </div>
          ))}
        </div>
        <button className="btn btn-outline-secondary ms-2" onClick={siguiente}>
          ➡
        </button>
      </div>
    </section>
  );
};

export default Carrusel;