/*jshint esversion: 6 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://kazonis:kazman3@ds263367.mlab.com:63367/farmhouse');

app.use(express.static('public'));

// initialize body parser middleware 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//port no to connect to server
var portNo = 3000;

//listen to portNo and connect to the server
app.listen(portNo,()=>{
	console.log("Server running on " + portNo);
});