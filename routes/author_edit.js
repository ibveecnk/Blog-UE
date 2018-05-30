var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
    console.log(req.body.id);
  var Authorupd = new db.Author({
    _id: req.body._id,
    Name: req.body.name,
    Surname: req.body.surname,
  });

  /*Authorupd.update({ _id: req.body.id }, function (err) {
    if (err) return console.error(err);
  });*/
  Authorupd.update({_id: req.body.id}, { 
      Name: req.body.name, 
      Surname: req.body.surname }
    ,function (err, authorupd) {
    if (err) return handleError(err);
  });
  res.redirect('/addpost')
});

module.exports = router;
