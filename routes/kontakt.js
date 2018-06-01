var express = require('express');
var router = express.Router();
var app = express();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('kontakt', { title: "Kontakt", admin: req.admin, globalCategory: req.categories });
});

module.exports = router;
