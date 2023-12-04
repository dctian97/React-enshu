import React, { useState, useEffect } from 'react';

export default function CatContent() {
  const [breeds, setBreeds] = useState([]);
  const [breedImages, setBreedImages] = useState({});

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = () => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then(response => response.json())
      .then(data => {
        setBreeds(data);
        data.forEach(breed => {
          fetchBreedImage(breed.id);
        });
      })
      .catch(error => console.error('Error fetching breeds:', error));
  };

  const fetchBreedImage = (breedId) => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`)
      .then(response => response.json())
      .then(imageData => {
        setBreedImages(prevImages => ({...prevImages, [breedId]: imageData[0]}));
      })
      .catch(error => console.error('Error fetching image:', error));
  };

  const handleReloadClick = (breedId) => {
    fetchBreedImage(breedId); 
  };

  return (
    <main>
      <h2>猫の種類</h2>
      <ol className='breeds-list'>
        {breeds.map(breed => (
          <li key={breed.id}>
            {breedImages[breed.id] && (
              <img src={breedImages[breed.id].url} alt={breed.name} />
            )}
            <strong>{breed.name}</strong> ({breed.origin})
            <button onClick={() => handleReloadClick(breed.id)}>他の写真</button>
          </li>
        ))}
      </ol>
    </main>
  );
}

