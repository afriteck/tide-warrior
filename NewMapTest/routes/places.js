var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('places-view', { 
	  	title: 'Tide-Warrior',
	  	partials: {
	  		head: 'partials/head',
	  		navigation: 'partials/navigation'
	  	}
	});
});

module.exports = router;