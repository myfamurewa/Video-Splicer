const router = require('express').Router()
const Splice = require('../models/splice-model')
const fs = require('fs')
const path = require('path')


router.post('/', async (req, res) => {
    // console.log("req.files", req.files)
    if(!req.files.vid1 || !req.files.vid2){
        res.status(400).json({errorMessage: 'Please submit two videos'})
    }
    const vid1 = req.files.vid1
    const vid2 = req.files.vid2


    await vid1.mv('./public/uploads/'+vid1.name, function(err) {
        if(err) {
            res.json({err})
        } 
    })
    await vid2.mv('./public/uploads/'+vid2.name, function(err) {
        if(err) {
            res.json({err})
        } 
    })
    console.log("files moved")
    console.log("vid 1 path", path.parse(vid1.name))
    res.status(200).json({message: "success"})
    // Splice.stitch(vid1, vid2).then(newVid => {
    //     console.log("this is the new video", newVid)
    //     res.status(200).download(newVid)
    // }).catch(err => {
    //     console.log('an error occurred when trying to splice the video')
    //     res.status(500).json({errorMessage: 'The post request was unsuccessful', err})
    // })
});

module.exports = router;
