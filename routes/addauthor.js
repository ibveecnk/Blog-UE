var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addauthor');
});
module.exports = router;
