let data = require("../data/data");
var _ = require('lodash');
module.exports={
    deleteData:async (req,res)=>{

        const{id,amount,desc,date,type} = req.body;
        console.log(id,"id")
        if(id==null||id==""){
            return res.status(400).json({
                message: "something is missing please check the input",
            })
        }
        try{
            console.log("this", id)
            let index = _.findIndex(data, function(o) { return o.id ===id; });
            console.log(index,'index')
            if(index){
                var newdata = _.remove(data, function(o) {
                    return o.id == id
                  });
                data=newdata;
            res.status(202).json({
                message:"record removed",
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
            