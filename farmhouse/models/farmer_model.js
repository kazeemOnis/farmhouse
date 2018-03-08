var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
	}
});

var Farmer = mongoose.model('Farmer',farmerSchema);
module.exports = Farmer;
