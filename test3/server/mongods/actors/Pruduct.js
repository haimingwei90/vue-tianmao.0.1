const  {pruductSchema} = require ("../dbs");
const uuid = require('uuid').v1;
module.exports = class Pruduct {
    constructor(props){
        this.props = props;
    }
    static async getPruduct() {
        // await pruductSchema.remove();
        let prudcts = await pruductSchema.find();
        let rz = prudcts.map(item => {
            let arr =  {
                id: item.id,
                name: item.name,
                disprice: item.disprice,
                price:item.price,
                imgurl: item.imgurl,
               
            }
            return arr;
        })
        return rz;
    }
    static async  create(data){
  
        const {name,disprice,imgurl,price} = data;
        let prudct = await new pruductSchema({
            id:uuid(),
            name:name,
            imgurl:imgurl,
            price:price,
            disprice:disprice
            
        })
        await prudct.save(function (err) {
            if (err) {
                console.log(err);
               
            } else {
                console.log(
                );
                
                
                
            }
        });
        return {state:1,message:"添加成功"}
    }
    static async delete(data){
        const {id} = data;
        await pruductSchema.deleteOne({ id: id },function(err, res){
            if (err) {
                console.log("Error:" + err);
            }
        });
       
    }
    static async change(data){//有bug
        const { pruductname, logourl, imgurl, price,disprice} = data;
        if(imgurl){
            await pruductSchema.findOneAndUpdate(
                { id: id },
                { name:pruductname,imgurl:imgurl,disprice:disprice,price:price }
            );
        }else{
            await pruductSchema.findOneAndUpdate(
                { id: id },
                { name:pruductname,disprice:disprice,price:price }
            );
        }
       

    }

}