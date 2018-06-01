var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  db.Post.findById(req.body.id, function (err, Post) {
    if (err) return handleError(err);
    if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
      if (req.body.edit_post) {
        Post.title = req.body.title;
        Post.content = req.body.content;
        Post.author = req.body.author;
        Post.category = req.body.category;
        Post.save(function (err, updatedPost) {
          if (err) return handleError(err);
          res.redirect('/editpost')
        })
      } else {
        db.Post.findByIdAndRemove(req.body.id, function (err, post) {
          if (err) return handleError(err);
          res.redirect('/editpost');
        })
      }
    }
  })
})

module.exports = router;