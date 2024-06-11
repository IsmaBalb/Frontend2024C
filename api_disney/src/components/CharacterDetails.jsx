import React from 'react';
import './CharacterDetails.css';

function CharacterDetails({ character }) {
  console.log(character); // Agregar este console.log para verificar los detalles del personaje

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <img src={character.imageUrl} alt={character.name} />
      {/* Renderizar todos los detalles */}
      <div>
        <p>
          <strong>TV Shows:</strong> {character.tvShows.join(', ')}
        </p>
        <p>
          <strong>Created At:</strong> {character.createdAt}
        </p>
        <p>
          <strong>Updated At:</strong> {character.updatedAt}
        </p>
        {/* Renderizar otros detalles si es necesario */}
      </div>
    </div>
  );
}

export default CharacterDetails;