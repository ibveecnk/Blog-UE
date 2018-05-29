var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js')

router.get('/', function(req, res, next) {
  db.Category.find({},function(err,result){
    db.Author.find({},function(err,authors){
      res.render('addpost',{categories:result,authors:authors})
    })
  })
});
module.exports = router;
