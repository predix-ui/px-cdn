"use strict";

const fs = require("fs-extra");

const distFolderMaps = [
  {
    source: "./bower_components/px-typography-design/type",
    dest: "./dist/type/2.0.0"
  },
  {
    source: "./bower_components/px-typography-design-v1/type",
    dest: "./dist/type/1.0.0"
  }
];

for (const folderMap of distFolderMaps) {
  // Create folder if missing.
  fs.ensureDirSync(folderMap.dest);
  // Copy assets to destination folder.
  fs.copySync(folderMap.source, folderMap.dest);
}
