var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js');

/* GET users listing. */
router.get('/:author', function (req, res, next) {
  var authorId = req.params.author;
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    //app.locals.admin = true;
    db.Author.findOne({_id:authorId},function(err,result){
    }).lean().exec(function(err,result){
      console.log(result.Name);
      res.render('editauthor', { title: "Autor bearbeiten" ,author:result, admin:req.admin, globalCategory: req.categories});
    })
  } else {
    //app.locals.admin = false;
    res.redirect('/login')
  }
});
router.get('/', function(req, res, next) {
  db.Author.find({},function(err,result){
    res.render('authoroverview',{title:"Autor bearbeiten",authors:result, admin:req.admin, globalCategory: req.categories});
  })
})

module.exports = router;
