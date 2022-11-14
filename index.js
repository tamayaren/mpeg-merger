// MPEG MP4-MP3 Merger
const ffmpeg = require('ffmpeg');
const fs = require('fs-extra');

// input
fs.ensureDirSync("input");
// output
fs.ensureDirSync("output");