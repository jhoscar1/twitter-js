const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
var app = express();

nunjucks.configure('./views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

const routes = require('./routes');

var server = app.listen(3000, function() {
    console.log('listening on 3000');
});

var io = socketio.listen(server);

app.use(bodyParser.urlencoded({ extended: false })); // for HTML form submits because HTML forms always use urlencoded requests
app.use(bodyParser.json()); // for AJAX requests
app.use('/', routes(io));

app.use(volleyball);

app.use(express.static(__dirname + '/public'))

app.use('/', function(req, res, next) {
    res.status(200);
    next();
});

