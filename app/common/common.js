var express = require('express');
var koda = require('../model/kodaSchema').koda;
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
function commonMethod() {

}



commonMethod.prototype.save = function(kodaData, callback) {
    // console.log("pinupData::",pinupData);
    var kodaObj = new koda(kodaData);
    kodaObj.save(function(error, data) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, data);
        }
    });
};



module.exports = commonMethod;
