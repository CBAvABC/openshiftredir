var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://sb-results.sports998.com/en-gb/info-centre/sportsbook-info/results/1/normal/1', function (error, response, body) {
  	res.end(body);
  });
});

module.exports = router;
