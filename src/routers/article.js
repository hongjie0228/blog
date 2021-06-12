'use strict';
var express = require('express');
var controller = require('../controller/public/article');
var router = express.Router();
// router.get('/', controller.List);
router.get('/get', controller.List);
router.post('/add', controller.add);
router.post('/remove', controller.remove);
router.post('/update', controller.update);
router.post('/addComment', controller.addComment)
// router.post('/addLabel', controller.addLabel);
module.exports = router;