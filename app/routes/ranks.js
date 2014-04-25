'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var ranks = require('../../app/controllers/ranks');

	// Ranks Routes
	app.get('/ranks', ranks.list);
	app.post('/ranks', users.requiresLogin, ranks.create);
	app.get('/ranks/:rankId', ranks.read);
	app.put('/ranks/:rankId', users.requiresLogin, ranks.update);
	app.del('/ranks/:rankId', users.requiresLogin, ranks.hasAuthorization, ranks.delete);

	// Finish by binding the Rank middleware
	app.param('rankId', ranks.rankByID);
};