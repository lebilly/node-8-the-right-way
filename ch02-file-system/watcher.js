"use strict";

const fs = require("fs");

fs.watch("target.txt", () => {
  console.log("target.txt has been changed.");
});

console.log("watching target.txt file for changes");
