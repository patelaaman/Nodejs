 const stuModel =require("../Models/stuModel")

const stuSave= async (req,res)=>{
      const {rollno,name,city,clas} = req.body;
      try{
        const studata = await stuModel.create({
            rollno:rollno,
            name:name,
            city:city,
            clas:clas
         })
         res.status(200).send("Data Added Succesfully")
      }catch(error){
          res.status(404).send("Mongodb server not started")
      }
    
}


const stuDisplay= async(req,res)=>{
    try{
        const studata = await stuModel.find();
        res.status(200).send(studata)
}catch(error){
      res.status(404).send("Data From Mongodb not found")
    }
      

}

   const stuDataSearch=async(req,res)=>{
         let {rollno} = req.body;
         const mydata = await stuModel.find({rollno:rollno}) 

         res.send(mydata)
   }

module.exports={
    stuSave,
    stuDisplay,
    stuDataSearch
}