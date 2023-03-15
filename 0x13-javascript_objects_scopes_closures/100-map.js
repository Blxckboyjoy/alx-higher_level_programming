#!/usr/bin/node
const list = require('./100-data.js');

const newData = data.map((value, index) => value * index);
console.log("Initial array:", data);
console.log("New array:", newData);
