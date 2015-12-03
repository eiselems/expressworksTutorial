var express = require('express');
var app = express();

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    var resStr = req.body.str.split('').reverse().join('')
    res.end(resStr);
});

app.listen(process.argv[2]);
