var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')

router.all('/:post', function(req, res, next) {
    var post = req.params.post;

    db.Post.findOne({_id:post},function(err,category){

    }).populate("author").lean().exec(function(err,post){
        post.date = "abc";
        res.render('posts',{post:JSON.stringify(post)})
    })
})

module.exports = router;