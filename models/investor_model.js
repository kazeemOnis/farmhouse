var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var investorSchema = new Schema({
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
	},
	farm: {
		type: String
	}
});

var Investor = mongoose.model('investor',investorSchema);
module.exports = Investor;

