//Create web server
var express = require('express');
var app = express();
var fs = require("fs");

//Get comments
app.get('/listComments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//Post comments
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addComment', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var comment = req.body;
       data["comment" + comment.id] = comment;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//Delete comments
app.delete('/deleteComment', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["comment" + req.body.id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//Put comments
app.put('/updateComment', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var comment = req.body;
       data["comment" + comment.id] = comment;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
})
