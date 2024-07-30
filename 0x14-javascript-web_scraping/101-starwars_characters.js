#!/usr/bin/node

const axios = require('axios');

if (process.argv.length < 3) {
  console.log('Usage: ./101-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

axios.get(apiUrl)
  .then(response => {
    const characters = response.data.characters;
    characters.forEach(characterUrl => {
      axios.get(characterUrl)
        .then(charResponse => {
          console.log(charResponse.data.name);
        })
        .catch(error => {
          console.error('Error fetching character:', error.message);
        });
    });
  })
  .catch(error => {
    console.error('Error fetching movie:', error.message);
  });
