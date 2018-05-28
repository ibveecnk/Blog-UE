var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addauthor');
});

router.post('/testsubmit', function (req, res) {
  console.log('Request erhalten')
});

module.exports = router;
