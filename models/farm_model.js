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

var Farm = mongoose.model('farm',farmSchema);
module.exports = Farm;