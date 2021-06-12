'use strict';
var express = require('express');
var controller = require('../controller/public/label');
var router = express.Router();

router.get('/get', controller.List)
router.post('/add', controller.addLabel)
module.exports = router;