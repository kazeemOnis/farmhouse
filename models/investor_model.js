/*jshint esversion: 6 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var investorSchema = new Schema({
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
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	farm: {
		type: String
	}
});

var Investor = mongoose.model('Investor',investorSchema);
module.exports = Investor;


