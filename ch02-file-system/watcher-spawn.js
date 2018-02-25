"use strict";

const fs = require("fs");
const spawn = require("child_process").spawn;
const filename = process.argv[2];

if (!filename) {
  throw Error("a filename must be provided as an argument");
}

fs.watch(filename, () => {
  const ls = spawn("ls", ["-l", "-h", filename]);
  ls.stdout.pipe(process.stdout);
});

console.log(`watching ${filename} for changes...`);
