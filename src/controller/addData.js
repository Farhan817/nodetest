const data = require("../data/data");
module.exports={
    addData:async (req,res)=>{
        const datalength= data.length;
        const{id,amount,desc,date,type} = req.body;
        if(id==null||id==""||amount==null||amount==""||date==null||type==null|type==""){
            return res.status(400).json({
                message: "something is missing please check the input",
            })
        }
        try{
        data.push({
            id:id,
            amount:amount,
            desc:desc?desc:"",
            date:date,
            type:type,
        })
        if(data.length!== datalength){
            res.status(201).json({
                message:"recorde inserted",
                data:data[data.length]
            })
        }
        }
        catch(e){
            return  res.status(500).json({
                "message":"internal server error",
            })
        }
    }
}