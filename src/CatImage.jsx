import React, { useState, useEffect } from 'react';
export default function Content(name) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search?${name}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
        <section >
        {images.map((image) => (
          <img src={image.url} alt="Animal" key={image.id} onClick={() => handleImageClick(image)} />
        ))}
        {selectedImage && (
            <div>
                {images.map((image) => (
                    <img src={image.url} alt="Animal" key={image.id} />
                ))}
            </div>
        )}
        </section>
    );
  }