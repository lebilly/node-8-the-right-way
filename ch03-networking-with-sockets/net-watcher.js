"use strict";

const fs = require("fs");
const net = require("net");
const filename = process.argv[2];

if (!filename) {
  throw Error("Error: no filname specified!");
}

net
  .createServer(connection => {
    // Reporting
    console.log("subscriber connected");
    coneection.write(`Now watching "${filename}" for changes...\n`);

    const watcher = fs.watch(filename, () => {
      connection.write(`File changed: ${new Date()}\n`);
    });

    // Closing
    connection.on("close", () => {
      console.log("subscriber disconnected");
      watcher.close();
    });
  })
  .listen(60300, () => console.log("Listening for subscribers..."));
