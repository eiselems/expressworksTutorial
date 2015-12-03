var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/home', function(req, res) {
    res.end('Hello World!')
});

app.listen(process.argv[2]);
