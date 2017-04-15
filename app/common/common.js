var express = require('express');
var koda = require('../models/kodaSchema').koda;
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
function commonMethod() {

}



commonMethod.prototype.save = function(kodaData, callback) {
    console.log("koda",kodaData);
    var kodaObj = new koda(kodaData);
    console.log("kodaObj",kodaObj);
    kodaObj.save(function(error, data) {
        if (error) {
          console.log("entered error");
          callback(error, null);
        } else {
          console.log("entered data");
          callback(null, data);
        }
    });
};



module.exports = commonMethod;
