#!/usr/bin/node

const request = require('request');
const apiSW = 'https://swapi-api.hbtn.io/api/films/';

request(apiSW, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    films.forEach(film => {
      const characters = film.characters;
      if (characters.some(url => url.includes('/18/'))) {
        count++;
      }
    });
    console.log(count);
  }
});
