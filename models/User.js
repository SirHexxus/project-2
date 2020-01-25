//  Package Variable Declarations
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//  Package Dependent Variable Declarations
const Schema = mongoose.Schema;

//  New Schema Declaration
const UserSchema = new Schema({
	//  //  Defines the fields for the UserSchema
	firstName: { type: String, default: '', required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isDeleted: { type: Boolean, default: false },
	wantsUpdates: { type: Boolean, default: false },
	date: { type: Date, default: Date.now }
});

//  Schema Methods
//  //  Generates a Hash based on the password passed in
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//  //  Checks to see if given password is valid
UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

//  Exports
//  //  Declares User using the UserSchema
const User = mongoose.model('User', UserSchema);
//  //  Exports the User Model
module.exports = User;
