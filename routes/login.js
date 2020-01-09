//this handles all of the login/sign-up/logout calls
const User = require("../models/User")
const UserSession = require("../models/UserSession")

module.exports = (app) => {

    // Sign up
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;
        if (!firstName) {
           return res.send({
              success: false,
              message: 'Error: First name cannot be blank.'    
            });
        }
        if (!lastName) {
            return res.send({
              success: false,
              message: 'Error: Last name cannot be blank.'    
            });
        }
        if (!email) {
            return res.send({
              success: false,
              message: 'Error: Email cannot be blank.'    
            });
        }
        if (!password) {
            return res.send({
              success: false,
              message: 'Error: Password cannot be blank.'    
            });
        }

        email = email.toLowerCase();

        //Verify if email exists 
        //Save it

        User.find({
            email: email
        }, (err, pastUser) => {
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: Server Error.'    
                  });
            } else if (pastUser.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exists.'    
                  });
                
            }

            const newUser = new User ()

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save (( err, user) => {
                if(err){
                    return res.send({
                        success: false,
                        message: 'Error: Server Error.'    
                      });
                } 
                    return res.send({ 
                        success: true,
                        message: 'Account Created.'    
                      });

            })
        });

    });

    //login 
    app.post('/api/account/login', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;

        if (!email) {
            return res.send({
              success: false,
              message: 'Error: Email cannot be blank.'    
            });
        }
        if (!password) {
            return res.send({
              success: false,
              message: 'Error: Password cannot be blank.'    
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if(err) {
                return res.send({
                  success: false,
                  message: 'Error: Server error'
                });
            }
            if(users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const user = users[0];
            if(!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid Password'
                });
            }

            //Otherwise correct user
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if(err) {
                    return res.send({
                      success: false,
                      message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                })
            });
        });
    });
    app.post('/api/account/verify', (req, res, next) =>{
        //Grab token
        const { query } = req;
        const { token } = query;

        //verify token is unique and is not deleted
        UserSession.find({
            _id: token,
            isDeleted: false,
        }, (err, sessions) => {
            if(err) {
                return res.send ({
                    sucess: false,
                    message: 'Error: Server error'
                });
            }

            if(sessions.length != 1){
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                })
            } else {
                return res.send({
                    success: false,
                    message: 'Good'
                });
            }
        })
    })
    app.post('/api/account/logout', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        //verify token is unique and is not deleted
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false,
        },{
            $set:{isDeleted:true}
        }, null, (err, sessions) => {
            if(err) {
                return res.send ({
                    sucess: false,
                    message: 'Error: Server error'
                });
            }
                return res.send({
                    success: false,
                    message: 'Good'
                });
            
        })
    })
}