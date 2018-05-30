var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  res.redirect('/addpost')
  var Author = new db.Author({
    Name: req.body.name,
    Surname: req.body.surname,
  });

  Author.update({_id: req.body.id}, Author, function (err) {
    if (err) return console.error(err);
  });
});

module.exports = router;
