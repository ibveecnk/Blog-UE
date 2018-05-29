var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  var category = new db.Category({
    catname: req.body.catname,
    caturl: req.body.caturl
  });

  category.save(function(err){
    if (err) return console.error(err);
  });
  res.redirect('/addpost')
});

module.exports = router;
