import express from "express";
import fs from 'fs'
import cors from 'cors'
const app=express()
const port=1234
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.json(
        {
            greeting:"Hello be aware of yourself"
        }
    )
})
app.post("/add",(req,res)=>{
    res.json(
        {
            greeting:'Iam post'
        }
    )
})
app.delete("/delete",(req,res)=>{
    res.json(
        {
            greeting:'Iam delete'
        }
    )
})
app.patch("/edit",(req,res)=>{
    res.json(
        {
            greeting:"Ima edit"
        }
    )
})
app.listen(port,()=>{
    console.log(`Server is started working on http://localhost:${port}`)
})
