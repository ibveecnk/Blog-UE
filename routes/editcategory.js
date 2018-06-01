var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js');

/* GET users listing. */
router.get('/:category', function (req, res, next) {
  var categoryURL = req.params.category;
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    app.locals.admin = true;
    db.Category.findOne({caturl:categoryURL},function(err,result){
      res.render('editcategory', { title: "Kategorie bearbeiten" , category:result});
    })
  } else {
    app.locals.admin = false;
    res.redirect('/login');
  }
});
router.get('/', function(req, res, next) {
  db.Category.find({},function(err,result){
    res.render('categoryoverview',{title:"Kategorie bearbeiten",category:result});
  })
})
module.exports = router;
