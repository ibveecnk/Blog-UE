var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js');

/* GET users listing. */
router.get('/:post', function (req, res, next) {
  var postID = req.params.post;
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    app.locals.admin = true;
  } else {
    app.locals.admin = false;
    res.redirect('/login')
  }
  db.Post.findOne({_id:postID}).populate('author').exec(function(err,thispost){
    db.Category.find({}).lean().exec(function(err,categories){
      db.Author.find({}).lean().exec(function(err,authors){
        for(var i=0;i<categories.length;i++) {
          if(categories[i]._id.toString() == thispost.category.toString()) {
            categories[i].selected = true;
          } else {
            categories[i].selected = false;
          }
        }
        for(var i=0;i<authors.length;i++) {
          if(authors[i]._id.toString() == thispost.author._id.toString()) {
            authors[i].selected = true;
          } else {
            authors[i].selected = false;
          } 
        }
        res.render('editpost', { title: "Post bearbeiten" , post:thispost, categories:categories, authors:authors});
      })
    })
  })
});
router.get('/', function(req, res, next) {
  db.Post.find({}).populate('author').populate('category').lean().exec(function(err,result){
    result.forEach(current_post => {
      var dateObj = new Date(current_post.date);
      var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
      current_post.date = ("0" + dateObj.getDate()).slice(-2) + ". " + months[dateObj.getMonth()] + " " + dateObj.getFullYear() + " | " + ("0" + dateObj.getHours()).slice(-2) + ":" + ("0" + dateObj.getMinutes()).slice(-2) + " Uhr";
    });
    res.render('postoverview',{title:"Posts bearbeiten" , post:result})
  })
})
module.exports = router;
