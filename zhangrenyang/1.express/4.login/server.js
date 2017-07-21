/**
 * Created by LEJU on 2017/7/17.
 */
let express = require('express');
let app = express();
let user = require('./routes/user');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let path = require('path');
app.set('view engine','ejs');
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/user',user);
/*app.get('/bootstrap/dist/css/bootstrap.css',function (req,res) {
    res.sendFile(path.resolve('../../../node_modules/bootstrap/dist/css/bootstrap.css'));
});*/
app.use(express.static(path.resolve('../../../node_modules')));



app.listen(8080);

