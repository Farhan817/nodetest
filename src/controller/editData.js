const data = require("../data/data");
var _ = require('lodash');
module.exports={
    editData:async (req,res)=>{

        const{id,amount,desc,date,type} = req.body;
        console.log(id,"id")
        if(id==null||id==""){
            return res.status(400).json({
                message: "something is missing please check the input",
            })
        }
        try{
            console.log("this", id)
            let index = _.findIndex(data, function(o) { return o.id == id; });
            console.log(index,'index')
            if(index){
            data[index].amount=amount;
            data[index].date=date;
            data[index].desc=desc;
            data[index].type=type;
            res.status(200).json({
                message:"record updated",
                data:data[index]
            })
        }
        else{
            return  res.status(204).json({
                "message":"could not find the record",
            })
        }
        }
        catch(e){
            console.log("error",e.message)
            return  res.status(500).json({
                "message":"internal server error",
            })
        }
    }
}