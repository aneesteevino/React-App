const mongoose=require("mongoose")

const MDB_schema=mongoose.Schema({
    titlemd:{
        type :String,
        required:true
    },
    descmd:{
        type :String,
        required:[true,"please give title"]
    },
    checkmd:{
        type:Boolean,
        default:false
    }


})
// MDB_schema()

const UserModel=mongoose.model("todo",MDB_schema)

module.exports={UserModel}
