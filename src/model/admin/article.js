/**
 * 文章表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: { type: String }, //博客题目
    abstract: { type: String }, //摘要
    content: { type: String }, //文章内容
    click: { type: Number },//点击量
    created: { type: String },//文章的创建时间
    labelId: {
        type: Schema.Types.ObjectId,
        ref: 'label' //这里要写你指向的数据库表名字
    },
    //一对多，因为一篇文章不止一个评论是多个
    commons: [
        {
            content: { type: String },//评论内容
            call: { type: String },//称呼
            email: { type: String }//电子邮箱
        }
    ]
});
module.exports = mongoose.model('article', articleSchema, 'article');