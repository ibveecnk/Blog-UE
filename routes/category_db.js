var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')
var arrayurl;

router.post('/', function (req, res, next) {
  var category = new db.Category({
    catname: req.body.catname,
    caturl: req.body.caturl
  });
  app.locals.push({ catname: req.body.catname, caturl: req.body.caturl })
  db.Category.count({ caturl: req.body.caturl }, function (err, count) {
    if (count === 0) {
      category.save(function (err) {
        if (err) return console.error(err);
        res.redirect('/addpost');
      });
    } else {
      res.redirect('/wrong_url');
    }
  });
});

module.exports = router;
