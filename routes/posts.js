var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')

router.all('/:post', function(req, res, next) {
    var post = req.params.post;

    db.Post.findOne({_id:post},function(err,category){

    }).populate("author").lean().exec(function(err,post){
        var dateObj = new Date(post.date);
        var months = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
        post.date = ("0"+dateObj.getDate()).slice(-2) + ". " + months[dateObj.getMonth()] + " " + dateObj.getFullYear() + " | " + ("0"+dateObj.getHours()).slice(-2) + ":" + ("0"+dateObj.getMinutes()).slice(-2) + " Uhr";
        res.render('posts',{post:post})
    })
})

module.exports = router;