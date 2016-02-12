var express = require('express');
var router = express.Router();

//var authorization = require('express-authorize');

router.get('/', function (req, res) {
  res.render('admin', {title: 'ADMIN DASHBOARD' });
  //res.end('admin');
});

module.exports = router;
