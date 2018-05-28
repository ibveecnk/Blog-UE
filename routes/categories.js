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
router.get('/', function(req, res, next){
    res.render('categories',{post:post,title:"Kategorie"})
});

module.exports = router;