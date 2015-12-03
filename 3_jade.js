var express = require('express');
var app = express();

app.use(express.static('static'));
app.set('view engine', 'jade');

app.set('views', 'template');


app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
});

app.listen(process.argv[2]);
