var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  var Author = new db.Author({
    Name: req.body.name,
    Surname: req.body.surname,
  });

  Author.save(function(err){
    if (err) return console.error(err);
  });
  res.send('Hallo');
});

module.exports = router;
