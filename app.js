const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
var env = nunjucks.configure('./views', { noCache: true });
var app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(volleyball);

app.use('/', function(req, res, next) {
    res.status(200);
    next();
});

app.get('/', function(req, res, next) {
    res.render('index.html', {title: 'An Example', people: [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]});
    next();
});

app.get('/news', function(req, res) {
    res.send('Extra extra read all about it');
});

app.get('/special/', function(req, res, next) {
    res.send('You reached the special area.\n');
    next();
})

nunjucks.render('index.html', {title: 'An Example', people: {
    wizard: {
        name: 'Gandalf'
    }
}});

// app.use(function(req, res, next) {
//     console.log(req.method, req.url, res.statusCode);
// });


app.listen(3000, function() {
    console.log('listening on 3000');
});
