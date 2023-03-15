#!/usr/bin/node

const data = require('./100-data.js').list;

const newData = data.map((value, index) => value * index);

console.log('Initial array:', data);
console.log('New array:', newData);
