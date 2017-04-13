var express = require('express');
var router = express.Router();
var pinUp = require('../model/pinupSchema').pinUp;
var common = require('../common/common');
var com = new common();

router.post('/', function(req, res) {
  com.save(data,function (err,detail) {

  });
});
module.exports = router;
