#!/usr/bin/node

const request = require('request');
const movieId = require('process').argv[2];

function fetchData (URL) {
  return new Promise((resolve, reject) => {
    request(URL, (err, res, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}

async function getMovieCharacters (url) {
  const cUrls = await fetchData(url);
  //   links = cUrls.results.map((data)=> data.characters);
  for (const cUrl of cUrls.characters) {
    const c = await fetchData(cUrl);
    console.log(c.name);
  }
}

getMovieCharacters(`https://swapi-api.alx-tools.com/api/films/${movieId}`);
