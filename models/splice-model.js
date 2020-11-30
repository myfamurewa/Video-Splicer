const videoStitch = require('video-stitch')
const fs = require('fs')
let videoConcat = videoStitch.concat;



async function stitch(vid1, vid2){
    videoConcat({
        silent: false,
        overwrite: false
    })
    .clips([
        {"fileName": vid1.name},
        {"fileName": vid2.name}
    ])
    .output("newVid")
    .concat()
    .then((newVid) => {
        return newVid
    })
}

function deleteFile(filepath) {
    new Promise(
        (resolve) => fs.unlink(filePath, resolve)
    )
}
function rmDir(dirPath) {
    try { var files = fs.readdirSync(dirPath); }
    catch(e) { return; }
    if (files.length > 0)
      for (var i = 0; i < files.length; i++) {
        var filePath = dirPath + '/' + files[i];
        if (fs.statSync(filePath).isFile())
          fs.unlinkSync(filePath);
        else
          rmDir(filePath);
      }
    fs.rmdirSync(dirPath);
  };

  module.exports = {
    stitch,
    deleteFile,
    rmDir
}