var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  /*res.redirect('/addpost')
  var Author = new db.Author({
    Name: req.body.name,
    Surname: req.body.surname,
  });

  Author.update({_id: req.body.id}, Author, function (err) {
    if (err) return console.error(err);
  });*/
  db.Author.findById(req.body.id,function(err,author){
    if (err) return handleError(err);

    author.Surname = req.body.surname;
    author.Name = req.body.name;
    author.save(function(err,updatedAuthor){
      if(err) return handleError(err);
      res.send(updatedAuthor);
    })
  })
});

module.exports = router;
