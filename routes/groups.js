var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res){
	res.send('respond');
});

module.exports = router;
