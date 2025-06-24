const Card = ({ title, poster_path, vote_average, overview, release_date }) => {
  return (
    <div className="card">
      <img src={poster_path} alt={title} />
      <h3>{title}</h3>
      <p>{overview}</p>
      <p>⭐ {vote_average}</p>
      <p>📅 {release_date}</p>
    </div>
  );
};

export default Card;