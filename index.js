"use strict";

const fs = require("fs-extra");

const headerFile = "./dist/_headers";
const distFolderMaps = [
  {
    source: "./bower_components/px-typography-design/type",
    dest: "./dist/px-cdn/type/2.0.0"
  },
  {
    source: "./bower_components/px-typography-design-v1/type",
    dest: "./dist/px-cdn/type/1.0.0"
  }
];

// Prepare assets
for (const folderMap of distFolderMaps) {
  // Create folder if missing.
  fs.ensureDirSync(folderMap.dest);
  // Copy assets to destination folder.
  fs.copySync(folderMap.source, folderMap.dest);
}

fs.outputFileSync(
  headerFile,
  `/*
  Access-Control-Allow-Origin: *`
);
