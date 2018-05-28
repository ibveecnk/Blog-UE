var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:32769/ArticleDB');

var connection = mongoose.connection;

connection.on('connected', function() {
    console.log('Erfolgreich mit Datenbank verbunden');
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
module.exports = connection;