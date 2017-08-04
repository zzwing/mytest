/**
 * Created by LEJU on 2017/7/24.
 */
let express = require('express');
let path = require('path');
let app = express();
app.get('/clock',function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342')
    res.send(new Date().toLocaleString());
});
app.get('/',function (req,res) {
   res.sendFile(path.resolve('./3.iframe.html'));
});
app.get('/clock2',function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    setInterval(function () {
        let html = '<script>window.parent.changeTime("'+new Date().toLocaleString()+'");</script>'
        res.write(html);
    },1000);

   // res.send(html);
});
app.listen(8080);