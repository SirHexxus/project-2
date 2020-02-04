///If we want to implement passport.js
const LocalStrategy = require('passport-local').Strategy
const User = require('./../../models/User')


const initialize = (passport, getUserById) => {
    
    passport.use(new LocalStrategy(
        function(username, password, done) {
            
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.validPassword(password)) { return done(null, false); }
            return done(null, user);
          });
        }
      ));
    passport.serializeUser((user, done) => done(null, user._id))
    passport.deserializeUser((_id, done) => {
      return done(null, getUserById(_id)) 
    })

}

module.exports = initialize