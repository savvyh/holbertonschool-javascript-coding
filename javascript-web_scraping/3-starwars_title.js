#!/usr/bin/node

const request = require('request');
const movieID = process.argv[2];
const apiSW = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request(apiSW, (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        body = JSON.parse(body);
        console.log(body.title);
    }
});