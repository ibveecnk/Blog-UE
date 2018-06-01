var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js');




/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    res.render('addauthor', { title: 'Autor hinzufügen', admin: req.admin, globalCategory: req.categories });
  } else {
    res.redirect('/login');
  }
});
module.exports = router;
