/**
 * Created by LEJU on 2017/7/17.
 */
let express = require('express');
let path = require('path');
let app = express();
app.listen(8080);
let user = require('./routes/user');
//使用模板
app.set('view engine','ejs');
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
//使用模板 end
app.use('/user',user);