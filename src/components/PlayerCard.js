import React from 'react';

function PlayerCard(props) {
  const { name, position, age, height, image } = props; // Get data passed as props

  return (
    <div className="player-card">
      {/* Display player information here */}
      <img src={image} alt={name} /> {/* Image (optional) */}
      <h2>{name}</h2>
      <p>Position: {position}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default PlayerCard;