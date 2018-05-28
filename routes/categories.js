var express = require('express');
var router = express.Router();

router.get('/food', function(req, res, next){
    res.render('food')
});
router.get('/travel', function(req, res, next){
    res.render('travel')
});
router.get('/fashion', function(req, res, next){
    res.render('fashion')
});
router.get('/music', function(req, res, next){
    res.render('music')
});
router.get('/', function(req, res, next){
    res.render('categories')
});
module.exports = router;