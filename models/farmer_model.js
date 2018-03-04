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
	},
	owner: {
		type: String
	},
	investor: {
		type: String
	}
});

var farmerSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	farm:[farmSchema]

});

var Farmer = mongoose.model('Farmer',farmerSchema);
module.exports = Farmer;
