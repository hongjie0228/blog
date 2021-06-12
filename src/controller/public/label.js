'use strict';
var mongoose = require('mongoose');
var common = require('../common');
var label = mongoose.model('label');

module.exports.List = function (req, res) {
    //子表关联主表查询，populate里面为子表外键
    label.find({}, function (err, docs) {
        common.sendResponse(res, 200, docs);
    })
}

/**
 * 添加信息
 * @param {*} req 
 * @param {*} res 
 */
module.exports.addLabel = function (req, res) {
    let labelName = req.body.labelName
    label.create({ label: labelName }, function (err, doc) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
        common.sendResponse(res, 200, '添加成功');
    })
}