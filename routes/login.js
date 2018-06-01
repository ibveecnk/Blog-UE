var express = require('express');
var router = express.Router();
var app = express();

/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
        //app.locals.admin = true;
    } else {
        //app.locals.admin = false;
    }
    res.render('login', { title: "Login" , admin:req.admin, globalCategory: req.categories});
});

module.exports = router;
