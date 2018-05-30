var express = require('express');
var router = express.Router();
var app = express();
var db = require('../database.js')

router.post('/', function (req, res, next) {
  db.Category.findById(req.body.id,function(err,category){
    if (err) return handleError(err);

    category.catname = req.body.catname;
    //category.caturl = req.body.caturl;
    category.save(function(err,updatedCategory){
      if(err) return handleError(err);
      //db.Category.find({}, function (err, category) { app.locals.globalCat = category });
      res.redirect('/editcategory')
    })
  })
});

module.exports = router;
