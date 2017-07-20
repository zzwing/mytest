/**
 * Created by LEJU on 2017/7/17.
 */
let express = require('express');
let app = express();
let userRoute = require('./routes/user');
app.use('/user',userRoute);

app.listen(8080,function () {
    console.log('server start init 8080');
});