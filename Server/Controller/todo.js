const { UserModel } = require("../Database/Model")
const mongoose=require("mongoose")

const getTodo = async (req, res) => {
    try {
        const users = await UserModel.find()
        return res.status(200).json({
            success: true,
            message: "user fetch successfully",
            user: users
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "server problem ",
        })
    }

}

const createTodo = async (req, res) => {
    const { title, desc } = req.body
    if (!title || !desc) {
        return res.status(400).json({
            message: "please fill all the fields"
        })
    }
    try {

        const users = await UserModel.create({ titlemd: title, descmd: desc })
        return res.status(201).json({
            message: "todo created sussefully",
            user: users
        })



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "todo is not created"
        })

    }

}

const deleteTodo=async(req,res)=>{
    const {id}=req.body

    if(!id){
        return res.status(400).json({
            message:"please provide a valid id "
        }) 
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid ID format",
        });
    }
    try {
        const user=await UserModel.findByIdAndDelete(id)
        return res.status(200).json({
            message:"todo deleted succesfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"todo not deleted succesfully"
        })
        
    }
}


const updateTodo= async(req,res)=>{
    const{id,title,desc,check}=req.body
    
        if (!id||!title || !desc || typeof check == "undefined") {
            return res.status(400).json({
                message: "please fill all the fields"
            })
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }
    
    try {
     
        const users = await UserModel.findByIdAndUpdate(id,{titlemd: title, descmd: desc,checkmd:check})

        return res.status(200).json({
            message: "todo updated sussefully",
            user:users
            
        })
   
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({

            message: "todo is not updated"
        })
    }

}


module.exports = { getTodo, createTodo,deleteTodo,updateTodo }