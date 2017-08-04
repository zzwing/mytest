/**
 * Created by LEJU on 2017/7/26.
 */
let mongoose = require('mongoose');
let conn = mongoose.connect('mongodb://localhost/201704node');

let MessageSchema = new mongoose.Schema({
    username:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
let Message = conn.model('Message',MessageSchema);
exports.Message = Message;