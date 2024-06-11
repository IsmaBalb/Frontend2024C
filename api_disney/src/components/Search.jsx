import React, { useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search characters..."
      />
    </div>
  );
}

export default Search;
