var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var app = express();

router.all('/:post', function (req, res, next) {
    var post = req.params.post;

    db.Post.findOne({ _id: post }, function (err, category) {

    }).populate("author").lean().exec(function (err, post) {
        var dateObj = new Date(post.date);
        var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        post.date = ("0" + dateObj.getDate()).slice(-2) + ". " + months[dateObj.getMonth()] + " " + dateObj.getFullYear() + " | " + ("0" + dateObj.getHours()).slice(-2) + ":" + ("0" + dateObj.getMinutes()).slice(-2) + " Uhr";
        if (req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
            //app.locals.admin = true;
        } else {
            //app.locals.admin = false;
        }
        res.render('posts', { post: post, title: "Post: " + post.title , admin:req.admin, globalCategory: req.categories})
    })
})

module.exports = router;