const express=require("express")
const dotenv=require("dotenv")
dotenv.config({})
const { MDB_connect } = require("./Database/db.js")
const {createTodo,getTodo,deleteTodo,updateTodo}=require("./Controller/todo")
MDB_connect()


const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get("/getTodo",(req,res)=>{
    getTodo(req,res)

})

app.post("/createTodo",(req,res)=>{
    createTodo(req,res)
})

app.delete("/deleteTodo",(req,res)=>{
    deleteTodo(req,res)
})

app.put("/updateTodo",(req,res)=>{
    updateTodo(req,res)
})


app.listen(process.env.PORT||5000,()=>{
    console.log("server is ok ")
})