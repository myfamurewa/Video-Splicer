require('dotenv').config()
const express = require("express");
const morgan = require('morgan')
const helmet = require("helmet");
const fileUpload = require('express-fileupload')
const cors = require("cors");
const bodyParser = require('body-parser')
const spliceRouter = require("./routes/spliceRouter")
const server = express()
server.use(helmet.noSniff()); 
server.use(bodyParser.json())
server.use(fileUpload({
    createParentPath: true
}));
server.use(bodyParser.urlencoded({extended: true}))
server.use(express.json());
server.use(cors());
server.use(morgan('dev'))

server.use('/splice', spliceRouter)

server.get("/", (req, res) => {
    res.status(200).send("API functional")
})


module.exports = server;