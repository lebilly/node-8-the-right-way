"use strict";

const fs = require("fs");

fs.writeFile("target.txt", "Billy boy", err => {
  if (err) {
    throw err;
  }

  console.log("file saved!");
});
