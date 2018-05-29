var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addcategory');
});
module.exports = router;
