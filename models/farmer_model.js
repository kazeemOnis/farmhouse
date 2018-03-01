var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var farmSchema = new Schema({
	name: {
		type: String
	},
	type: {
		type: String
	},
	price: {
		type: String
	},
	image: {
		type: String
	}
});

var farmerSchema = new Schema({
	name: {
		type: String
	},
	username: {
		type: String
	},
	password: {
		type: String
	},
	image: {
		type: String
	}
});