var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var array = mongoose.Types.Array;
var moment = require('moment');

router.all('/:category', function (req, res, next) {
    var category = req.params.category;

    db.Category.findOne({caturl:category},function(err,category){
        db.Post.find({category:category._id},function(err,post){
        }).populate("author").exec(function(err,post){
            post.forEach(posts => {
                post.date = moment(post.date).format('YYYY-DD-MM');
            }); 
            res.render('categories',{category:category,posts:post});
        })
    })
})

module.exports = router;