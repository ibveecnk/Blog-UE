var mongoose = require('mongoose');
var express = require('express')
var app = express();
var localvariables = require('./localvariables.js');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var connection = mongoose.connection;

mongoose.connect(localvariables);

connection.on('connected', function() {
    console.log('Erfolgreich mit Datenbank verbunden');
});
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
  var Author = mongoose.model('Author', authorSchema);
  var Category = mongoose.model('Category', categorySchema);
  var Post = mongoose.model('Post', postSchema);

var cat = new Category({ _id:new mongoose.Types.ObjectId, catname:'travel',caturl: 'travel' });
cat.save(function (err) {
if (err) return handleError(err);
});

connection.on('disconnected', function() {
    console.log('Erfolgreich von Datenbank abgemeldet');
});
connection.on('error', function(error) {
    console.log('Fehler: ', error);
});
process.on('SIGINT', function() {
    connection.close(function(){
        console.log('Datenbankverbindung durch Prozessende verloren');
        process.exit(0);
    });
});
module.exports = {connection:connection, Category:Category};