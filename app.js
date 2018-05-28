var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: './views/layouts/'
}));
var categorySchema = new Schema({
  catname: String,
  caturl: String,
  _id: Schema.Types.ObjectId
})
var authorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Surname: String,
  Name: String,
  Since: {
  type: Date,
  default: Date.now
  }
})

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

//author.save(function (err, ) {
 // if (err) return handleError(err);
//});

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function handleError(err) {
console.log(err);
}
module.exports = app;