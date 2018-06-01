var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    res.redirect('/');
    var Post = new db.Post({
      public: req.body.public,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      category: req.body.category,
    });

    Post.save(function (err) {
      if (err) return console.error(err);
    });
  }
})

module.exports = router;
