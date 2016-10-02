'use strict';

var express = require('express');
var proxy = require('./proxy.controller');

var router = express.Router();

// this will make it wasy to build on this in the future
router.post('/vrmail', proxy.sendMail);

module.exports = router;