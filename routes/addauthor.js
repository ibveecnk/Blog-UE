var express = require('express');
var app = express();
var router = express.Router();
app.use(express.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addauthor');
});

router.post('/', function (req, res) {
  console.log('Request erhalten');
  console.log(req.get.testtext);
});

module.exports = router;
