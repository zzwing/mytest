/**
 * Created by LEJU on 2017/7/20.
 */
let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let messages = [];
app.use(bodyParser.json());
app.use(express.static(path.resolve('../../css')));
app.use(express.static(path.resolve('../../js')));

app.get('/',function (req,res) {
    res.sendFile('leave.html',{root:__dirname});
})
app.post('/leaves',function (req,res) {
    let msg = req.body;
    messages.push(msg);
    res.send(messages);
})
app.listen(8080);