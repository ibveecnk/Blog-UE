var express = require('express');
var router = express.Router();
var db = require('../database')
var mongoose = require('mongoose');
var post = [];

for(var i=0;i<10;i++) {
    post.push({
        title: "Titel " + i,
        date: new Date(i),
        author: "Autor "+i,
        content: "lorem ipsum"
    })
}

var category = mongoose.model('Category', )
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
    res.render('categories',{post:post,title:"Kategorie"})
});
module.exports = router;