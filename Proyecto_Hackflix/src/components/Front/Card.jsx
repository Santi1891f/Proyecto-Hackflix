import React from "react";

const Card = ({ poster, titulo }) => {
  return (
    <div className="card mb-4">
      <img src={poster} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
      </div>
    </div>
  );
};

export default Card;