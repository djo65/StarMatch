import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Body.css';

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://miadil.github.io/starwars-api/api/all.json');
        setData(response.data.slice(0, 3)); // Limiting to 3 characters
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      {data.length > 0 ? (
        data.map((character, index) => (
          <div key={index} className="character-card">
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Body;
