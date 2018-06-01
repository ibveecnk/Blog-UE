var createError = require('http-errors');
var express = require('express');
var app = express();
var uuid = require('uuid/v4');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var encryption = uuid();
app.use(cookieParser(encryption));
var db = require('./database');
var Array = [];

app.get('/*', function(req, res, next){
  if(req.signedCookies.logged_in == '01e6efdb-9421-4271-83eb-b685f618e2c3') {
    req.admin = true;
  } else {
    req.admin = false;
  }
  db.Category.find({}).lean().exec(function (err, category) {
    req.categories = category;
    next();
  });
})

var indexRouter = require('./routes/index');
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
var logoutRouter = require('./routes/logout');
var successRouter = require('./routes/success');
var editcategoryRouter = require('./routes/editcategory');
var editauthorRouter = require('./routes/editauthor');
var editpostRouter = require('./routes/editpost');
var author_editRouter = require('./routes/author_edit');
var post_editRouter = require('./routes/post_edit');
var category_editRouter = require('./routes/category_edit');

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
app.use('/kontakt', kontaktRouter);
app.use('/addauthor', addauthorRouter);
app.use('/author_db', author_dbRouter);
app.use('/categories', categoriesRouter);
app.use('/posts', postsRouter);
app.use('/addpost', addpostRouter);
app.use('/post_db', post_dbRouter);
app.use('/addcategory', addcategoryRouter);
app.use('/category_db', category_dbRouter);
app.use('/wrong_url', wrong_urlRouter);
app.use('/login', loginRouter);
app.use('/do_login', do_loginRouter);
app.use('/logout', logoutRouter);
app.use('/success', successRouter);
app.use('/editcategory', editcategoryRouter);
app.use('/editauthor', editauthorRouter);
app.use('/editpost', editpostRouter);
app.use('/author_edit', author_editRouter);
app.use('/post_edit',post_editRouter);
app.use('/category_edit',category_editRouter)

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