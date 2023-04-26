#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(movieUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(`Error: ${response.statusCode}`);
  } else {
    const characters = JSON.parse(body).characters;
    for (const characterUrl of characters) {
      request(characterUrl, function (error, response, body) {
        if (error) {
          console.error(error);
        } else if (response.statusCode !== 200) {
          console.error(`Error: ${response.statusCode}`);
        } else {
          const characterName = JSON.parse(body).name;
          console.log(characterName);
        }
      });
    }
  }
});
