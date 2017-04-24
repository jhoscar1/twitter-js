const express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hey there');
});

app.get('/news', function(req, res) {
    res.send('Extra extra read all about it');
});


app.listen(3000, function() {
    console.log('listening on 3000');
});