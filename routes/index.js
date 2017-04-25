const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { showForm: true, tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find({ name: name });
    res.render('index', { showForm: true, tweets: tweets, name: name });
});

router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    console.log(tweetBank.list());
    var tweets = tweetBank.find({ id: parseInt(id, 10) });
    console.log(tweets);
    res.render('index', { tweets: tweets });
})

router.post('/tweets', function(req, res) {
    console.log('here');
    console.log(req.body);
    tweetBank.add(req.body.name, req.body.text);
    res.redirect('/');
});

module.exports = router;