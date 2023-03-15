#!/usr/bin/node

const dict = require('./101-data');

const result = {};
for (const [userId, occurrence] of Object.entries(dict)) {
  if (occurrence in result) {
    result[occurrence].push(userId);
  } else {
    result[occurrence] = [userId];
  }
}

console.log(result);
