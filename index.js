const server = require("./server")

const port = process.env.PORT || 7000

server.listen(port, function() {
    console.log(`\n Server is running on localhost:${port} \n`)

})