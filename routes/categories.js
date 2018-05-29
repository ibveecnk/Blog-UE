var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose');
var array = mongoose.Types.Array;
var post = [];

for (var i = 1; i <= 10; i++) {
    post.push({
        title: "Titel " + i,
        date: new Date(i * 1000000),
        author: {
            Surname: i,
            Name: "Autor",
            Since: new Date(i * 1000000),
        },
        content: "lorem ipsum"
    })
}

/*router.get('/food', function(req, res, next){
var category = mongoose.model('Category', )
router.get('/food', function(req, res, next){
    res.render('food')
});
    mongoose.categorySchema.findOne({ caturl: ca
rou
    mongoose.categorySchema.findOne({ caturl: caget('/travel', function(req, res, next){
   
    mongoose.categorySchema.findOne({ caturl: ca.render('travel')
});
    mongoose.categorySchema.findOne({ caturl: ca
router.get('/fashion', function(req, res, next){
    res.render('fashion')
});*/
/*router.get('/', function(req, res, next){
    res.render('categories',{post:post,title:"Kategorie"})
});*/

/*router.all('/:category', function (req, res, next) {
    var category = req.params.category;
    findCategoryByLink(category, function (error, category) {
        if (error) return next(error);
        res.render('categories', category/*, surname, name, since);
    })
})
var findCategoryByLink = function (categorylink, callback) {
    //var cat = mongoose.model('Category', category);
    db.Category.findOne({caturl: categorylink}, function (err, category) {
        findPostsByCategory(category._id,function(err,post){
            var obj = category;
            console.log(obj)
            console.log({category:obj,post:post});
            obj.posts = post;
            callback(null, {category:obj,post:post});
            console.log(obj);
        })
    });

    var findAuthorById = function (surname, name, since, callback) {
        //var cat = mongoose.model('Category', category);
        db.Category.find({
            Surname: surname,
            Name: name,
            Since: since
        }, function (err, surname, name, since) {
            callback(null, surname, name, since);
        });
        };
   }
        module.exports = router;
    };
}*/
var findPostsByCategory = function(categoryid, callback) {
    db.Post.find({category:categoryid},function(err,post) {
        callback(null,post);
    })
}
module.exports = router;