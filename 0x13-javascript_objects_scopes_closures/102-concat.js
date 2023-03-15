#!/usr/bin/node

const fs = require('fs');
const path = require('path');

const file1 = process.argv[2];
const file2 = process.argv[3];
const dest = process.argv[4];

const contents1 = fs.readFileSync(path.resolve(file1), 'utf-8');
const contents2 = fs.readFileSync(path.resolve(file2), 'utf-8');

const combinedContents = contents1 + contents2;

fs.writeFileSync(path.resolve(dest), combinedContents);
