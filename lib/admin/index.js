var express = require('express');
var router = express.Router();

var authorization = require('express-authorize');
var ensureSpecial = authorization.isPermitted('admin:adminSpecial');

router.get('/', function (req, res) {
  res.render('admin', {title: 'ADMIN DASHBOARD' });
  //res.end('admin');
});

router.get('/special', ensureSpecial, function (req, res) {
  res.render('admin', {title: 'ADMIN SPECIAL' });
  //res.end('admin');
});

module.exports = router;
