#!/usr/bin/node
'use strict';

const fs = require('fs');
const filePath = process.argv[2];

try {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} catch (err) {
  console.error(err);
}
