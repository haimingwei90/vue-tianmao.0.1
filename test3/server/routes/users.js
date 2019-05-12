var express = require('express');
var router = express.Router();
const User = require('../mongods/actors/User.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/unique",async function (req,res,next) {
      let rz =  await  User.isRigesited(req.query.name)
      console.log(rz);
      res.send(rz)
       
})
router.post('/create', async function(req,res,next){

    const {name,password} = req.body;
    req.session.user = name;
    let rz = await User.create({name,password});
    res.send(rz);
})
router.get('./outlogin',function(req,res,next){
    if(req.session.user){
      req.session.user = undefined;
    }
})
router.post('/login',async function(req,res,next){
    const {loginname,password,captcha} = req.body;
    if(req.session.captcha == captcha){
      if(req.session.user == loginname){
        res.send({state:0,message:'该用户已登录'})
      }else{
        let rz = await User.isExist({loginname,password});
        if(rz.state == 1){
          req.session.user = loginname
        }
        res.send(rz)
      }
      
    }else{
      res.send({state:0,message:'验证码不对'})
    }
    
})
module.exports = router;