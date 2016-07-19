var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var sessionSchema = new Schema({
	op1: 		{ type: String },
	op2: 		{ type: String },
	res:	 	{ type: String }  
});

module.exports = mongoose.model('Session', sessionSchema);