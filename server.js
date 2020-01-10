require("dotenv").config();
const express = require("express");
const path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var User = require('./models/User');
const app = express();
const mongoose = require('mongoose');


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set morgan to log info about requests for development use
app.use(morgan('dev'));

// initialize cookie-parser to allow access the cookies stored in the browser
app.use(cookieParser());

// initialize express-session to allow tracking for the logged-in user across sessions
app.use(session({
    key: 'user_sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
// will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

// config MongoDB
const db = require('./config/keys_prod').mongoURI;

// set Mongo config options to avoid deprication errors
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// connect to MongoDB
mongoose.connect(db, configOptions)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Routes

// added separate routes for users and measurements for clarity
app.use('/api/users', require('./routes/api/user'));
app.use('/api/measurements', require('./routes/api/measurement'));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Serve static assets if we're in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3300;

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
  
      res.redirect('/dashboard');
  } else {
      next();
  }    
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});


// route for user signup
app.route('/signup')
  .get((req, res) => {
      res.sendFile(__dirname + '/public/signup.html');
      // res.render('signup', hbsContent);
  })
  .post((req, res) => {
      User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          wantsUpdates: req.body.wantsUpdates
      })
      .then(user => {
          req.session.user = user.dataValues;
          res.redirect('/account');
      })
      .catch(error => {
          res.redirect('/login');
      });
  });


// route for user Login
app.route('/login')
  .get(sessionChecker, (req, res) => {
      res.sendFile(__dirname + '/public/login.html');
      // res.render('login', hbsContent);
  })
  .post((req, res) => {
      var username = req.body.username,
          password = req.body.password;

      User.findOne({ where: { username: username } }).then(function (user) {
          if (!user) {
              res.redirect('/login');
          } else if (!user.validPassword(password)) {
              res.redirect('/login');
          } else {
              req.session.user = user.dataValues;
              res.redirect('/account');
          }
      });
  });


// route for user's dashboard
app.get('/account', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
  // hbsContent.loggedin = true; 
  // hbsContent.userName = req.session.user.username; 
  //console.log(JSON.stringify(req.session.user)); 
  console.log(req.session.user.username); 
  // hbsContent.title = "You are logged in"; 
      res.sendFile(__dirname + '/public/account.html');
      // res.render('index', hbsContent);
  } else {
      res.redirect('/login');
  }
});


// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
  // hbsContent.loggedin = false; 
  // hbsContent.title = "You are logged out!"; 
      res.clearCookie('user_sid');
  // console.log(JSON.stringify(hbsContent)); 
      res.redirect('/');
  } else {
      res.redirect('/login');
  }
});

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
