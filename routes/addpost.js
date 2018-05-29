var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Category.find({},function(err,result){
    //getAuthors(res,result);
    //res.render('addpost',{categories:result})
    db.Author.find({},function(err,authors){
      res.render('addpost',{categories:result,authors:authors})
    })
  })
  //console.log(result);
  //res.render('addpost',{categories:result})
});
module.exports = router;
