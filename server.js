//  Package Variable Declarations
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

//  Package Dependent Variable Declarations
const app = express();

//  Global Variable Declarations
const PORT = process.env.PORT || 5000;

//  File Import Variable Declarations
//  //  API Routes For Login Info
const loginRoutes = require('./routes/api/login');
//  //  Configuration for MongoDB
const db = require('./config/keys').mongoURI;

//  Middleware Method Calls
//  //  Configures the use of .env files
// require("dotenv").config();
//  //  Allows the creation of nested objects from a query string
app.use(express.urlencoded({ extended: true }));
//  //  Recognizes incoming Request Objects as JSON Objects
app.use(express.json());
//  //  Logs information about requests for development use
app.use(morgan('dev'));
//  //  Configures MongoDB options to avoid deprication errors
const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//  Routes
//  //  All Routes for Users APIs
app.use('/api/users', require('./routes/api/user'));
//  //  All Routes for Measurements APIs
app.use('/api/measurements', require('./routes/api/measurement'));
//  //  All Routes For Login APIs
app.use(loginRoutes);

//  Production Only Assets
//  //  Serve static assets if app is in production
if (process.env.NODE_ENV === 'production') {
  //  //  Set static folder
  app.use(express.static('client/build'));
  //  //  GET all relevant information, and send it to where it needs to be
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//  Connections
//  //  Connecting to MongoDB
mongoose
  .connect(db, configOptions)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//  //  Starting the server, syncing our models ------------------------------------/
app.listen(PORT, () => {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT
  );
});

//  Exports
module.exports = app;
