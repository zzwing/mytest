/**
 * Created by LEJU on 2017/7/17.
 */
let express = require('express');
let router = express.Router();
module.exports = router;
router.get('/signin',function (req,res) {
    res.send('登录');
});
router.get('/signup',function (req,res) {
    res.send('注册');
});