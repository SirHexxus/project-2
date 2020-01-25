//  Exports
if (process.env.NODE_ENV === 'production') {
	//  //  When in the Production environment, file will export the contents of the keys_prod.js file
	module.exports = require('./keys_prod');
} else {
	//  //  All other environments, file will export the contents of the default.json file (Which contains our protected values)
	module.exports = require('./default.json');
}
