const express = require('express');
const spdy = require('spdy')
const fs = require('fs')
const app = express();
const path = require("path");

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.use('/static', express.static(path.join(__dirname, 'public')));
const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert:  fs.readFileSync(__dirname + '/server.crt')
}
spdy.createServer(options, app).listen(3000, (error) => {
    if (error) {
        console.error(error)
        return process.exit(1)
    } else {
        console.log('Example app listening on port 3000!');
    }
});