import ReactStars from 'react-rating-stars-component';

const Estrellas = ({ onChange }) => {
  const handleRatingChange = (newRating) => {
    onChange(newRating); // Envía el número de estrellas al padre
  };

  return (
    <div>
      <h3>Filtrar por rating:</h3>
      <ReactStars
        count={5}
        onChange={handleRatingChange}
        size={30}
        activeColor="#ffd700"
        isHalf={false}
      />
    </div>
  );
};

export default Estrellas;