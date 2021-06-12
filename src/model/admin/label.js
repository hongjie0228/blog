/**
 * 标签表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var labelSchema = new Schema(
    {
        // blogid: { type: Schema.Types.ObjectId, ref: 'article' },//这里即为子表的外键，关联主表。  ref后的blog代表的是主表blog的Model
        label: { type: String } //标签名。
    });
module.exports = mongoose.model('label', labelSchema, 'label');