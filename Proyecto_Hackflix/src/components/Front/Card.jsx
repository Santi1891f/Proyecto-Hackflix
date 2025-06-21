import React from "react";

const Card = ({ title, poster_path}) => {
  return (
    <div className="card mb-4 card-custom">
      <img src={poster_path} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5
  className="card-title text-truncate"
  title={title}
  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
>
  {title}
</h5>
      </div>
    </div>
  );
};

export default Card;