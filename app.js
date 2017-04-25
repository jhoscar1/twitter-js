const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
var env = nunjucks.configure('./views', { noCache: true });
var app = express();
const routes = require('./routes');

app.use('/', routes);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(volleyball);

app.use(express.static(__dirname + '/public'))

app.use('/', function(req, res, next) {
    res.status(200);
    next();
});


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
