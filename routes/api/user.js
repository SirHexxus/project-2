// `UPDATE: 1-30-2020`
// `This route is inop. Does not produce successful routing`


//  Package Variable Declarations
const express = require('express');

//  Package Dependent Variable Declarations
const router = express.Router();

//  File Import Variable Declarations
//  //  Pull in User model
const User = require('../../models/User');

//  Get all Users
//  //  @route      GET /api/users
//  //  @desc       Get all users
//  //  @access     Public
router.get('/', (req, res) => {
	User.find().then(users => res.json(users));
});

//  Get one User by id
//  //  @route      PUT api/users/:id
//  //  @desc       Get User info by id
//  //  @access     Public
router.get('/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => res.status(404).json(`User Not Found\nError: ${err}`));
});

//  Get one User by username
//  //  @route      PUT api/users/verify/:username
//  //  @desc       Get User info by id
//  //  @access     Public
// router.get('/api/users/verify/:username', (req, res) => {
// 	// console.log(`username: ${req.params.username}`);
// 	User.findOne({ username: req.params.username })
// 		.then(user => res.json(user))
// 		.catch(err => res.status(404).json(`User Not Found\nError: ${err}`));
// });

//  Add new User
//  //  @route      POST /api/users
//  //  @desc       Create new User
//  //  @access     Public
router.post('/', (req, res) => {
	const newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		isDeleted: req.body.isDeleted,
		wantsUpdates: req.body.wantsUpdates
	});

	newUser.save().then(user => res.json(user));
});

//  Modify existing User
//  //  @route      PUT api/users/:id
//  //  @desc       Update existing user info
//  //  @access     Public
router.put('/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user =>
			user.update(req.body).then(() => res.json({ success: true }))
		)
		.catch(err => res.status(404).json({ success: false, error: err }));
});

//  Remove existing User
//  //  @route      DELETE /api/users/:id
//  //  @desc       Delete a user
//  //  @access     Public
router.delete('/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false, error: err }));
});

//  Exports
module.exports = router;
