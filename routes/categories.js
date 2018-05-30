var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var array = mongoose.Types.Array;
var moment = require('moment');
var formatted_date = '';
var months = [];

router.all('/:category', function (req, res, next) {
    var category = req.params.category;

    db.Category.findOne({caturl:category},function(err,category){
        db.Post.find({category:category._id},function(err,posts){
        }).populate("author").lean().exec(function(err,posts){
            posts.forEach(current_post => {
                current_post.post = '';
                var date = new Date(current_post.date);
                var formatted_date = date.toLocaleDateString();
                console.log(formatted_date);
                current_post.date = 'abc';
            });
            
            res.render('categories',{category:category,posts:posts});
        })
    })
})

module.exports = router;