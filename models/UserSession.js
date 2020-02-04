//  Package Variable Declarations
const mongoose = require('mongoose');

//  Package Dependent Variable Declarations
const Schema = mongoose.Schema;

//  New Schema Declaration
const UserSessionSchema = new Schema({
	//  //  Defines the fields for the UserSessionSchema
	userId: {
		type: String,
		default: ''
	},
	timestamp: {
		type: Date,
		default: Date.now()
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
});

//  Exports
//  //  Declares UserSession using the UserSessionSchema
const UserSession = mongoose.model('UserSession', UserSessionSchema);
//  //  Exports the UserSession Model
module.exports = UserSession;
