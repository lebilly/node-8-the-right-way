"use strict";

const fs = require("fs");
const filename = process.argv[2];

if (!filename) {
  throw Error("a filename must be provided as an argument");
}

fs.watch(filename, () => {
  console.log(`${filename} has been changed`);
});

console.log(`watching ${filename} for changes...`);
