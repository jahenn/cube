var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res) {
	res.render('users_index', { title: 'Usuarios'});
});

router.get('/all', function(req, res){
	UserModel.getUsers(function(err, data){
		res.json(200, data);
	});
});

module.exports = router;
