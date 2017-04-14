var express = require('express');
var router = express.Router();
var koda = require('../models/kodaSchema').koda;
var common = require('../common/common');
var com = new common();

router.post('/', function(req, res) {
  try {
        data={
          firstname:req.body.firstName,
          lastname:req.body.lastName,
          // username:"",
          // userEmailAddress:"",
          // parentEmailAddress:'',
          // ParentPassword:'',
          // userPassword:'',
          // location:'',
          // activityZone:'',
          // gameZone:''
        };
        console.log(data);
    var loginDetail=com.save(data,function (err,detail) {
      if(err){
        throw 401;
      }
      else{
        res.json({
          "status":true,
          "message":"logined Successfully"
        });
      }
    });
  } catch (e) {
    if(e===401){
      res.status(401).send({
        "status":false,
        "message":"logined data alreay exist"
      });
    }
  }

});
module.exports = router;
