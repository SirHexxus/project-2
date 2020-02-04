//  Package Variable Declarations
const path = require('path');
const router = require('express').Router();

//  File Import Variable Declarations
const apiRoutes = require('/api');

//  Middleware Method Calls
//  //  API Routes
router.use('/api', apiRoutes);
//  //  If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//  Exports
module.exports = router;
