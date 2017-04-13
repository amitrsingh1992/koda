var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var BaseSchema = require('./abstract').BaseSchema;


// var topic = require('./topicSchema');

var kodaSchema = new BaseSchema({
      username:{
        type:String,
        unique:false,
        required:false,
        trim:true
      },
      userEmailAddress:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
        trim:true
      },
      parentEmailAddress:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
        trim:true
      },
      userPassword:{
        type:String,
        required:true,
        match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/),
        trim:true
      },
      ParentPassword:{
        type:String,
        required:true,
        match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/),
        trim:true
      },
      personalDetail:[{
        firstname:{
         type:String,
         unique:false,
         required:true,
         trim:true
       },
       lastname:{
         type:String,
         required:true,
         trim:true
       },
       birthDate:{
         type:Number,
         required:true,
       },
       location:[{
         city:{
           type:String,
           requried:true
         },
         country:{
           type:String,
           required:true,
         }
     }]
      }],
      activityZone:[{
        tutorial:[{
          lionDance:[{}],
          guruGiraffe:[{}]
        }],
        gameZone:[{
          fruitCatcher:[{
            hourSpend:{
              type:Number,
              required:true
            },
            status:{
              type:String,
              required:true
            }
          }],
          flyCatcher:[{
            hourSpend:{
              type:Number,
              required:true
            },
            status:{
              type:String,
              required:true
            }
          }],
          hangMan:[{
            hourSpend:{
              type:Number,
              required:true
            },
            status:{
              type:String,
              required:true
            }
          }],
          turtleName:[{
            hourSpend:{
              type:Number,
              required:true
            },
            status:{
              type:String,
              required:true
            }
          }],
          mindGame:[{
            hourSpend:{
              type:Number,
              required:true
            },
            status:{
              type:String,
              required:true
            }
          }]
        }]
      }]

});

// specify the transform schema option
if (!kodaSchema.options.toObject) kodaSchema.options.toObject = {};
kodaSchema.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  ret.userID = ret._id;
  delete ret._id;
  delete ret.__v;
  return ret;
};

module.exports = {
    koda : mongoose.model('koda',kodaSchema),
    };
