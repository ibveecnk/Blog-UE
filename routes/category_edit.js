var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  db.Category.findById(req.body.id, function (err, category) {
    if (err) return handleError(err);

    category.catname = req.body.catname;
    if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
      if (req.body.edit_category) {
        category.save(function (err, updatedCategory) {
          if (err) return handleError(err);
          res.redirect('/editcategory')
        })
      } else {
        console.log(req.body.id);
        db.Category.findByIdAndRemove(req.body.id, function (err, category) {
          if (err) return handleError(err);
          res.redirect('/editcategory')
        })
      }
    }
  })
});

module.exports = router;