const express = require('express');
const volleyball = require('volleyball');
var app = express();

app.use(volleyball);

app.use('/', function(req, res, next) {
    res.status(200);
    next();
});

app.get('/', function(req, res, next) {
    res.send('Hey there\n');
    next();
});

app.get('/news', function(req, res) {
    res.send('Extra extra read all about it');
});

app.get('/special/', function(req, res, next) {
    res.send('You reached the special area.\n');
    next();
})

// app.use(function(req, res, next) {
//     console.log(req.method, req.url, res.statusCode);
// });


app.listen(3000, function() {
    console.log('listening on 3000');
});