var express = require('express');
var router = express.Router();
var db = require('../database');
var mongoose = require('mongoose');
var array = mongoose.Types.Array;
var post = [];

for(var i=1;i<=10;i++) {
    post.push({
        title: "Titel " + i,
        date: new Date(i),
        author: "Autor "+i,
        content: "lorem ipsum"
    })
}

/*router.get('/food', function(req, res, next){
var category = mongoose.model('Category', )
router.get('/food', function(req, res, next){
    res.render('food')
});
router.get('/travel', function(req, res, next){
    res.render('travel')
});
router.get('/fashion', function(req, res, next){
    res.render('fashion')
});*/
router.get('/music', function(req, res, next){
    res.render('music',{topic:"MUSIK"})
    console.log("MUSIK")
});
/*router.get('/:category', function(req, res, next){
    console.log("ABABABABAB")
    var category = req.params.category;
    res.render('categories',{post:post,topic:category})
});*/
router.get('/:category', function(req, res, next) {
    console.log("LINKKEEKKE")
    var category = req.params.category;
    //findCategoryByLink(category, function(error,category){
        //if(error) return next(error);
        res.render('categories',{topic:category});
    //})
})
var findCategoryByLink = function(categorylink,callback) {
    mongoose.categorySchema.findOne({ caturl: categorylink }, function (err, category) {});
    //return {topic:"ABC"}
    return callback(null,{topic:"ABC"})
}
module.exports = router;