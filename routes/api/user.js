const express = require('express');
const router = express.Router();

// pull in user model
const User = require('../../models/User');

// use postman to test api routes

// @route GET /api/users
// get all users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
});

// @route POST /api/users
// create new user
router.post('/', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        wantsUpdates: req.body.wantsUpdates
    });

    newUser.save()
        .then(user => res.json(user));
});

// @route PUT api/users
// update existing user info
router.put('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.update(req.body)
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// @route DELETE /api/users/:id
// delete a user
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;