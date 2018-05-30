var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res, next) {
  if (req.cookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    app.locals.admin = false;
    res.clearCookie('logged_in');
    res.render('success', { title: 'Erfolgreich ausgeloggt' });
  } else {
    res.redirect('/');
  }

});

module.exports = router;
