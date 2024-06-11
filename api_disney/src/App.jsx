import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Swal from 'sweetalert2';
import './App.css';
import './assets/CSS/fondo.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Cargar personajes al montar el componente
  useEffect(() => {
    fetch('https://api.disneyapi.dev/characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.data);
      })
  }, []);

  // Buscar personajes basado en el input
  const handleSearch = (query) => {
    setSearch(query);
    setSelectedCharacter(null); // Restablecer el personaje seleccionado al iniciar una nueva búsqueda
    if (query.length > 0) {
      fetch(`https://api.disneyapi.dev/character?name=${query}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.data.length === 0) {
            setSearchResults([]);
            Swal.fire('No results', 'No characters found', 'info');
          } else {
            setSearchResults(data.data);
          }
        })
        .catch(error => {
          setSearchResults([]);
          Swal.fire('Error', `Search failed: ${error.message}`, 'error');
        });
    } else {
      setSearchResults([]);
    }
  };

  // Seleccionar un personaje para ver más detalles
  const selectCharacter = (id) => {
    fetch(`https://api.disneyapi.dev/characters/${id}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCharacter(data.data); // Cambiado a data.data para seleccionar el objeto de personaje directamente
      })
      .catch(error => {
        Swal.fire('Error', 'Failed to fetch character details', 'error');
      });
  };

  // Volver a la lista de personajes
  const backToList = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <center><h1>Api Disney</h1></center>
      <hr />
      <Search onSearch={handleSearch} />
      {selectedCharacter ? (
        <div>
          
          <CharacterDetails character={selectedCharacter} />
        </div>
      ) : (
        <CharacterList characters={search ? searchResults : characters} onSelect={selectCharacter} />
      )}
    </div>
  );
}

export default App;

