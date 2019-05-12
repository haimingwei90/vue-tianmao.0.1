const mongoose = require('mongoose');
const uuid = require('uuid').v1;
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('we are connected!');
     
});
exports.pruductSchema = mongoose.model('pruductSchema',{
   id:{type:String,default:uuid()},
   name:String,
   price:Number,
   disprice:Number,
   imgurl:String,
   logourl:String 
})
exports.topicSchema = mongoose.model('topicSchema',{
    id:{type:String,default:uuid()},
    title: String,
    content: String,
    imgurl: {type:String,default:[]},
    hidden:{type:Boolean,default:false},
    votes:{type:Number,default:0},
    messages:{type:Array,default:[]},
    date: { type: Date, default: Date.now }
});
exports.UserSchema = mongoose.model('UserSchema',{
    
    loginname: String,
    password: String,
    role:{type:Number, default:1},
    data: { type: Date, default: Date.now }
});
