var express = require('express');
var router = express.Router();
var post = [];
for(var i=0;i<10;i++) {
    post.push({
        title: "Titel " + i,
        date: new Date(i),
        author: "Autor "+i,
        content: "lorem ipsum"
    })
}

/*router.get('/food', function(req, res, next){
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
});*/
router.get('/categories/:category', function(req, res, next) {
    var category = req.params.category;
    findCategoryByLink(category, function(error,category){
        if(error) return next(error);
        return res.render('categories',category);
    })
})
var findCategoryByLink = function(categorylink,callback) {
    
}
module.exports = router;