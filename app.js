var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var app = express();
var db = require('./database');
var Array = [];

db.Category.find({},function(err,category){app.locals.globalCat = category});
//console.log(globalCat);
//app.locals.globalCat = [{catname:"abc",caturl:"def"}];


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kontaktRouter = require('./routes/kontakt');
var addauthorRouter = require('./routes/addauthor');
var addpostRouter = require('./routes/addpost')
var categoriesRouter = require('./routes/categories');
var author_dbRouter = require('./routes/author_db');
var post_dbRouter = require('./routes/post_db')
var addcategoryRouter = require('./routes/addcategory');
var category_dbRouter = require('./routes/category_db');
var postsRouter = require('./routes/posts.js');
var wrong_urlRouter = require('./routes/wrong_url');
var loginRouter = require('./routes/login');
var do_loginRouter = require('./routes/do_login');

app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: './views/layouts/'
}));
app.set('views', path.join(__dirname, 'views'));

var postSchema = new Schema({
  public: Boolean,
  title: String,
  content: String,
  author: ObjectId,
  date: {
    type: Date,
    default: Date.now
  },
  category: ObjectId,
})
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kontakt', kontaktRouter);
app.use('/addauthor', addauthorRouter);
app.use('/author_db', author_dbRouter);
app.use('/categories', categoriesRouter);
app.use('/posts',postsRouter);
app.use('/addpost', addpostRouter);
app.use('/post_db', post_dbRouter);
app.use('/addcategory', addcategoryRouter);
app.use('/category_db',category_dbRouter);
app.use('/wrong_url', wrong_urlRouter);
app.use('/login', loginRouter)
app.use('/do_login', do_loginRouter)

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

function handleError(err) {
  console.log(err);
}
module.exports = app;