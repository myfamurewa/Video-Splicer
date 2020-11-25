const router = require('express').Router()
const Splice = require('../models/splice-model')
const temp = require("temp")


router.post('/', async (req, res) => {
    console.log("req.files", req.files)
    if(!req.files.vid1 || !req.files.vid2){
        res.status(400).json({errorMessage: 'Please submit two videos'})
    }
    const vid1 = req.files.vid1
    const vid2 = req.files.vid2
    temp.track();
    vid1.mv('./videos/'+vid1.name, function(err) {
        if(err) {
            res.json({err})
        } else {
            console.log("successfully moved file")
        }
    })
    vid2.mv('./videos/'+vid2.name, function(err) {
        if(err) {
            res.json({err})
        } else {
            console.log("successfully moved file")
        }
    })
    
    
    Splice.stitch(vid1, vid2).then(newVid => {
        console.log("this is the new video", newVid)
        res.status(200).json(newVid)
    }).catch(err => {
        console.log('an error occurred when trying to splice the video')
        res.status(500).json({errorMessage: 'The post request was unsuccessful', err})
    })
});

module.exports = router;
