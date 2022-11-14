// MPEG MP4-MP3 Merger
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const path = require('path');
const fs = require('fs-extra');
const { readdir } = require('fs');
const { PassThrough } = require('stream');

// input
fs.ensureDirSync("input");
// output
fs.ensureDirSync("output");

//
var count = 0;
(async () => {
    try {
        console.log("Getting files from Input...");
        const files = await fs.readdir("input");

        if (files.length > 0) {
            const promises_threshold = 6;
            var promises = [];
            for (const file of files) {
                if (path.extname(file) === ".mp4") {
                    console.log(`[Job ${count}] Trying to merge ${file}...`);

                    const fileName = path.basename(file, ".mp4")
                    const theoreticalAudioName = path.format({
                        name: fileName,
                        ext: ".mp3"});
                    const ifAudio = fs.existsSync(path.join("input", theoreticalAudioName));
                    
                    console.log(`[${count}] Getting audio for ${file}: ${theoreticalAudioName}`);
                    if (ifAudio) {
                        console.log(`[${count}] Audio found! Reading...`);
                        const audio = fs.readFileSync(path.join("input", theoreticalAudioName));
                        
                        try {
                            const tempCount = count;
                            console.log(`[${count}] Added merging job: Merging ${file} and ${theoreticalAudioName}...`);
                            
                            if (promises.length <= promises_threshold) {
                                promises.push(new Promise((resolve) => {
                                    ffmpeg()
                                        .addInput(path.join("input", file))
                                        .addInput(path.join("input", theoreticalAudioName))
                                        .addOptions(["-map 0:v", "-map 1:a", "-c:v copy"])
                                        .format("mp4")
                                        .on('error', error => {
                                            throw error
                                        })
                                        .on('end', () => {
                                            console.log(`COMPLETE: [${tempCount}] Finished merging: output/${fileName}.mp4`)
                                            resolve()
                                        })
                                        .saveToFile(path.join("output", fileName + ".mp4"));
                                }));
                            } else {
                                console.log("[MERGER] Doing merging jobs...");
                                await Promise.all(promises);
                                
                                promises = [];
                                console.log("[MERGER] Completed merging process.");
                            }
                        } catch(err) {
                            console.log(`!!! [${tempCount}] There's an error, skipping this job: ${err}`)
                            return err
                        }
                    } else {
                        console.log(`[${count}] No audio found! Skipping...`)
                    }
                    
                    count++;
                }
            }

            console.log("Merging completed!");
        } else throw "No input found!";
    } catch (err) {
        console.error(err)
    }
})();