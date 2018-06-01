var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
    var Comment = new db.Comment({
      username: req.body.name,
      commentmsg: req.body.comment,
      postID: req.body.id
    });

    Comment.save(function (err) {
      if (err) return console.error(err);
    });
    res.redirect('/posts/'+req.body.id)
});

module.exports = router;
