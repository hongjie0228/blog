'use strict';
var mongoose = require('mongoose');
var common = require('../common');
var article = mongoose.model('article');
/**
 * 查询数据，根据条件查询
 * @param {*} req 
 * @param {*} res 
 */
module.exports.List = function (req, res) {
    var title = req.query.name;//根据博客标题查询，如果不传则获取全部
    // label.find({}).populate('blogid').exec(function (err, docs) {
    //     common.sendResponse(res, 200, docs);
    // })
    article.find({
    }).populate('labelId').populate('commonId').exec((err, doc) => {
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
        common.sendResponse(res, 200, doc);
    })
    // article.find({
    // $or: [ //多条件
    //     { title: { $regex: new RegExp(title, 'i') } },
    // ]
    // }, function (err, data) {
    //     if (err) {
    //         common.sendJsonResponse(res, 500, err);
    //         return;
    //     }
    //     common.sendResponse(res, 200, data);
    // })
}
/**
 * 给文章添加评论
 * @param {*} req 
 * @param {*} res 
 */
module.exports.addComment = function (req, res) {
    let condition = {
        _id: req.body._id
    }
    let content = req.body.content
    let email = req.body.email
    let call = req.body.call
    article.updateOne(condition,
        {
            '$push': {
                commons: {
                    content,
                    email,
                    call
                }
            }
        }, (err, docs) => {
            if (err) {
                console.log(err)
                common.sendJsonResponse(res, 500, err);
                return;
            }
            common.sendResponse(res, 200, '添加成功');
        })
}
/**
 * 添加信息
 * @param {*} req 
 * @param {*} res 
 */
module.exports.add = function (req, res) {
    article.create({
        title: req.body.title,
        abstract: req.body.abstract,
        content: req.body.content,
        click: req.body.click,
        created: req.body.created,
        labelId: req.body.labelId,
    }, (err, docs) => {
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
        common.sendResponse(res, 200, '添加成功');
    })
}
/**
 * 根据id删除
 * @param {*} req 
 * @param {*} res 
 */
module.exports.remove = function (req, res) {
    var wherestr = { _id: req.body._id };
    article.findOneAndRemove(wherestr, (err, doc) => {
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
        common.sendResponse(res, 200, '操作成功');
    })
}
/**
 * 修改文章
 * @param {*} req 
 * @param {*} res 
 */
module.exports.update = function (req, res) {
    console.log()
    let condition = {
        _id: req.body._id
    }
    article.updateOne(condition,
        {
            content: req.body.content,
            title: req.body.title,
            abstract: req.body.abstract,
            click: req.body.click,
            // $set: {
            //     // abstract: req.body.abstract,
            //     content: req.body.content,
            // }
        },
        (err, doc) => {
            if (err) {
                common.sendJsonResponse(res, 500, err);
                return;
            }
            common.sendResponse(res, 200, 'ok');
        }
    )
}
