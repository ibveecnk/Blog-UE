var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var array = mongoose.Types.Array;
var moment = require('moment');
var formatted_date = '';
var months = [];
var app = express();

router.all('/:category', function (req, res, next) {
    var category = req.params.category;
    console.log("CATEGORIES ROUTER")
    db.Category.findOne({
        caturl: category
    }, function (err, category) {
        if(category == null) {
            res.render('categorynotfound',{title:'Kategorie nicht gefunden', admin:req.admin, globalCategory: req.categories})
        } else {
            db.Post.find({
                category: category._id
            }, function (err, posts) {}).populate("author").lean().exec(function (err, posts) {
                posts.forEach(current_post => {
                    var dateObj = new Date(current_post.date);
                    var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
                    current_post.date = ("0" + dateObj.getDate()).slice(-2) + ". " + months[dateObj.getMonth()] + " " + dateObj.getFullYear() + " | " + ("0" + dateObj.getHours()).slice(-2) + ":" + ("0" + dateObj.getMinutes()).slice(-2) + " Uhr";
                });
                if (req.cookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
                    app.locals.admin = true;
                } else {
                    app.locals.admin = false;
                }
                console.log("CAT")
                console.log(req.categories)
                res.render('categories', {
                    category: category,
                    posts: posts,
                    title: "Kategorie: " + category.catname, admin:req.admin, globalCategory: req.categories
                });
            })
        }
    })
})
router.get('/', function(req, res, next){
    db.Category.find({}).lean().exec(function(err,category){
        category.forEach(cat => {
            cat.path = 'categories/'
        })
        res.render('categoryoverview',{globalCategory:req.categories, title: "Alle Kategorien", admin:req.admin, category:category})
    })
})


module.exports = router;