var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js');

/* GET users listing. */
router.get('/:author', function (req, res, next) {
  var authorId = req.params.author;
  if (req.cookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    app.locals.admin = true;
  } else {
    app.locals.admin = false;
    res.redirect('/login')
  }
  db.Author.findOne({_id:authorId},function(err,result){
  }).lean().exec(function(err,result){
    //console.log(result.Name);
    res.render('editauthor', { title: "Autor bearbeiten" ,author:result});
  })
});

module.exports = router;
