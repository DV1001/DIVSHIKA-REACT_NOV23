import React from 'react';

const Destinations = () => {
  // Array of destinations with their image URLs
  const destinations = [
    {
      name: 'Destination 1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZX_y0s5TKf7wTqRJJGbyg2Mz5_eQ_ahnihA&usqp=CAU',
    },
    {
      name: 'Destination 2',
      imageUrl: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Destination 3',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw7dtljIjr8tDu6WobJ-3vtVGL6oKtMESbQ&usqp=CAU',
    },
    {
      name: 'Destination 4',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPijwrj36hvJIgGiaW2IYQu9c4-g-5yosg-w&usqp=CAU',
    },
    {
      name: 'Destination 5',
      imageUrl: 'https://i0.wp.com/www.opindia.com/wp-content/uploads/2023/07/INDIA.jpg?resize=696%2C398&ssl=1',
    },
    {
      name: 'Destination 6',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICzNfOpsnHjH84wHUaQqLPOBgL3PCynJtxw&usqp=CAU',
    },
    {
      name: 'Destination 7',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJfIOUNSnaSMI-nSMz4rK3o6IIkTjDToJTQ&usqp=CAU',
    },
    {
      name: 'Destination 8',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64-XO5GhTRGxANfJRWRVZJEr2eS6skh-73g&usqp=CAU',
    },
    // Add more destinations as needed
  ];

  return (
    <div>
      <div style={{backgroundColor:'lightblue'}}><h1 >Destinations</h1></div>
      <div style={{ display:'contents', justifyContent: 'space-between' }}>
        {destinations.map((destination, index) => (
          <div key={index}>
            <h2>{destination.name}</h2>
            <img src={destination.imageUrl} alt={destination.name} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Destinations;
