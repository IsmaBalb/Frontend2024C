import React from 'react';
import './CharacterList.css';

function CharacterList({ characters, onSelect }) {
  return (
    <ul className="character-list">
      {characters.map(character => (
        <li key={character._id} onClick={() => onSelect(character._id)}>
          <div className="character-item">
            <img src={character.imageUrl} alt={character.name} className="character-image"/>
            <span>{character.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;