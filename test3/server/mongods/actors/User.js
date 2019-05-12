const {UserSchema} = require('../dbs.js')
class User{
    constructor(){
        
    }
    static async getRole(name){
        let user = await UserSchema.findOne({loginname:name});
        let rz = user.role
        return rz;
    }
    static async isExist(data){
        const {loginname,password} = data;
        let olduser = await UserSchema.findOne({ loginname: loginname });

        if(olduser && olduser.password == password){
            return {state:1,message:'登录成功'}
        }else{
            return {state:0,message:'该用户不未注册'}
        }
    }
    static async isRigesited(name){
       
        
        let olduser = await UserSchema.findOne({ loginname: name });
        console.log(olduser);
        
        if(olduser){
            return {state:0}
        }else{
            return {state:1}
        }
    }
    static  async create(data){   
        const {name,password} = data;
        const olduser  = await UserSchema.findOne({loginname:name});
        if(olduser){
            return {state:0,message:'该用户已注册'};
        }else{
            let user = await new UserSchema({
              
                loginname: name,
                password: password,
            })
            await user.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
            return { message: "注册成功", state:1};
        }
        
    }
    static async delete(data){
        const {id} = data;
        await UserSchema.findOneAndRemove({id:id});
        
    }
    static async updatePassword(data){
        const {password,id} = data;
        await UserSchema.findOneAndUpdate({id:id},{password:password});

    }
   static async  updateRole(data){
        const {role,id} = data;
        await UserSchema.findOneAndUpdate({id:id},{role:role})
    }
    
} 
module.exports = User;