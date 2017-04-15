var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var BaseSchema = require('./abstract').BaseSchema;


// var topic = require('./topicSchema');

var kodaSchema = new BaseSchema({
      // username:{
      //   type:String,
      //   unique:false,
      //   required:false,
      //   trim:true
      // },
      // userEmailAddress:{
      //   type:String,
      //   unique:true,
      //   lowercase:true,
      //   required:false,
      //   match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      //   trim:true
      // },
      // parentEmailAddress:{
      //   type:String,
      //   unique:true,
      //   lowercase:true,
      //   required:false,
      //   match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      //   trim:true
      // },
      // userPassword:{
      //   type:String,
      //   required:false,
      //   match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/),
      //   trim:true
      // },
      // ParentPassword:{
      //   type:String,
      //   required:false,
      //   match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/),
      //   trim:true
      // },
      firstname:{
       type:String,
       unique:true,
       required:true,
       trim:true
     },
     lastname:{
       type:String,
       unique:true,
       required:true,
       trim:true
     }
     //,
    //   personalDetail:[{
    //    birthDate:{
    //      type:Number,
    //      required:false,
    //    },
    //    location:[{
    //      city:{
    //        type:String,
    //        requried:false
    //      },
    //      country:{
    //        type:String,
    //        required:false,
    //      }
    //  }]
    //   }],
    //   activityZone:[{
    //     tutorial:[{
    //       lionDance:[{}],
    //       guruGiraffe:[{}]
    //     }],
    //     gameZone:[{
    //       fruitCatcher:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       flyCatcher:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       hangMan:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       turtleName:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       mindGame:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }]
    //     }]
    //   }]

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
