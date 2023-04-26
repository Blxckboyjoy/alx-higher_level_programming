#!/usr/bin/node
'use strict';

const fs = require('fs');
const filePath = process.argv[2];
const fileContent = process.argv[3];

try {
  fs.writeFile(filePath, fileContent, 'utf8', (err) => {
    if (err) throw err;
    console.log('File saved successfully.');
  });
} catch (err) {
  console.error(err);
}
