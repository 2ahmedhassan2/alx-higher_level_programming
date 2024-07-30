#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.log('Usage: ./101-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie:', error);
    return;
  }
  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    const characters = data.characters;
    characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error fetching character:', charError);
          return;
        }
        if (charResponse.statusCode === 200) {
          const charData = JSON.parse(charBody);
          console.log(charData.name);
        }
      });
    });
  } else {
    console.error('Failed to fetch movie data. Status code:', response.statusCode);
  }
});
