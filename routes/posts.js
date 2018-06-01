var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var app = express();

router.all('/:post', function (req, res, next) {
    var post = req.params.post;

    db.Post.findOne({ _id: post }).populate('author').lean().exec(function (err, post) {
        if (post == null) {
            res.render('categorynotfound', { title: 'Post nicht gefunden', admin: req.admin, globalCategory: req.categories })
        } else {
            var dateObj = new Date(post.date);
            var months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            post.date = ('0' + dateObj.getDate()).slice(-2) + '. ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear() + ' | ' + ('0' + dateObj.getHours()).slice(-2) + ':' + ('0' + dateObj.getMinutes()).slice(-2) + ' Uhr';
            if(post.author == null) {
                post.author = {Surname: 'Anonymer', Name: 'Autor'};
            }
            res.render('posts', { post: post, title: 'Post: ' + post.title, admin: req.admin, globalCategory: req.categories })
        }
    })
})
router.get('/', function (req, res, next) {
    db.Post.find({}).populate('author').populate('category').lean().exec(function (err, result) {
        result.forEach(current_post => {
            var dateObj = new Date(current_post.date);
            var months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            current_post.date = ('0' + dateObj.getDate()).slice(-2) + '. ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear() + ' | ' + ('0' + dateObj.getHours()).slice(-2) + ':' + ('0' + dateObj.getMinutes()).slice(-2) + ' Uhr';
            current_post.path = 'posts/';
            if(current_post.author == null) {
                current_post.author = {Surname: 'Anonymer', Name: 'Autor'};
            }
        });
        res.render('postoverview', { title: 'Alle Posts', post: result, admin: req.admin, globalCategory: req.categories })
    })
})
module.exports = router;