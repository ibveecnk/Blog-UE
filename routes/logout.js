var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res, next) {
  if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    //app.locals.admin = false;
    res.clearCookie('logged_in');
    req.admin = false;
    var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
    console.log('User with IP: ' + ip + " logged out")
    res.render('success', { title: 'Erfolgreich ausgeloggt' , admin:req.admin});
  } else {
    res.redirect('/');
  }

});

module.exports = router;
