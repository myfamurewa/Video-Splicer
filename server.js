require('dotenv').config()
const express = require("express");
const morgan = require('morgan')
const helmet = require("helmet");
const cors = require("cors");
const server = express()
server.use(helmet.noSniff()); 
server.use(express.json());
server.use(cors());
server.use(morgan('dev'))


server.get("/", (req, res) => {
    res.status(200).send("API functional")
})

module.exports = server;