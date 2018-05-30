var express = require('express');
var router = express.Router();
var app = express();

/* GET users listing. */
router.get('/:category', function (req, res, next) {
  var categoryURL = req.params.category;
  if (req.cookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    app.locals.admin = true;
  } else {
    app.locals.admin = false;
    res.redirect('/login');
  }
  res.render('kontakt', { title: "Kontakt" });
});

module.exports = router;
