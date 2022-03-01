const data= require("../data/data")
module.exports={
    fetchall:async (req,res)=>{
        try{
            if(data.length!==0){
                return res.status(200).json({
                    data:data,
                    messge:`Got ${data.length} records`
                })
            }
            else{
                return res.status(204).json({
                    messge:`no dat found`
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