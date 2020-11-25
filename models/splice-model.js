let videoStitch = require('video-stitch')

let videoConcat = videoStitch.concat;

module.exports = {
    stitch
}

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