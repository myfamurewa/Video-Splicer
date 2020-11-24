const concat = require('ffmpeg-concat')

module.exports = {
    stitch
}

function stitch(vid1, vid2, filename = ""){
     let result = concat({
        output: filename !== ""? `${filename}.mp4` : 'newvid.mp4',
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