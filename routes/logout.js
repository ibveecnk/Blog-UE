var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.clearCookie('logged_in');
    res.render('success', {title: 'Erfolgreich ausgeloggt'})
});

module.exports = router;
