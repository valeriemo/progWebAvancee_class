const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello')
})


const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("App listening ", host, port)
})
