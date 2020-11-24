let videoStitch = require('video-stitch')

let videoConcat = videoStitch.concat;

module.exports = {
    stitch
}

function stitch(vid1, vid2, filename){
    videoConcat({
        silent: false,
        overwrite: false
    })
    .clips([
        {"fileName": vid1.name},
        {"fileName": vid2.name}
    ])
    .output(filename? `${filename}` : 'myNewVideo')
    .concat()
    .then((outputFileName) => {
        return outputFileName
    })
}