var mongoose = require('mongoose');
var express = require('express')
var app = express();
var localvariables = require('./localvariables.js');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var connection = mongoose.connection;

mongoose.connect(localvariables);

connection.on('connected', function () {
  console.log('Erfolgreich mit Datenbank unter ' + localvariables + ' verbunden');
});


var categorySchema = new Schema({
  catname: String,
  caturl: String,
})

var commentSchema = new Schema({
  Username: String,
  PostID: {
    type: Schema.Types.ObjectId,
    ref:'Post'
  }
})

var authorSchema = new Schema({
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
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: Schema.Types.ObjectId,
    ref:'Category'
  },
})

var Author = mongoose.model('Author', authorSchema);
var Comment = mongoose.model('Comment', commentSchema)
var Category = mongoose.model('Category', categorySchema);
var Post = mongoose.model('Post', postSchema);


connection.on('disconnected', function () {
  console.log('Datenbankverbindung verloren');
});

connection.on('error', function (error) {
  console.log('Fehler: ', error);
});

process.on('SIGINT', function () {
  connection.close(function () {
    console.log('Datenbankverbindung durch Prozessende verloren');
    process.exit(0);
  });
});

module.exports = {
  connection: connection,
  Category: Category,
  Comment: Comment,
  Author: Author,
  Post: Post
};