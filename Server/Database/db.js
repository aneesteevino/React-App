const mongoose=require("mongoose")





const MDB_connect=async()=>{
      try {
        await mongoose.connect(process.env.MongoUrl)
        console.log("mongo is connected")
        
      } catch (error) {
        console.log("mongo DB is connected")
        resizeBy.status(500).json({
          message:"mongo not connected"
        })

        
      }


}
// MDB_connect()

module.exports={MDB_connect}