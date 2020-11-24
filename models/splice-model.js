const concat = require('ffmpeg-concat')

module.exports = {
    stitch
}

function stitch(vid1, vid2){
     let result = concat({
        output: 'newvid.mp4',
        videos: [
            `${vid1.name}`,
            `${vid2.name}`
        ],
        transition: {
            name: 'circleOpen',
            duration: 1000
        }
    })
    return result
}