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
app.get("/product/get",async (req,res)=>{
    fs.readFile("./lib/data.json","utf-8",(readError,data)=>{
        if(readError)
            {
                res.json(
                    {
                        "success":false
                    }
                )
            }
            let savedData=data ? JSON.parse(data) : [];
        res.json(
            {
                "products":savedData
            }
        )
    })

})
app.post("/product/add",(req,res)=>{
    if(!req.body)
    {
        res.json(
            {
                "succuss":false
            }
        )
    }
    fs.readFile("./lib/data.json","utf-8",(readError,data)=>{
        if(readError)
        {
            res.json(
                {
                    "success":false
                }
            )
        }
        const {name,category,price}=req.body
        let savedData=data ? JSON.parse(data) : []
        const newProduct=
        {
            id:Date.now().toString(),
            name:name,
            category:category,
            price:price
        }
        savedData.push(newProduct)
        fs.writeFile("./lib/data.json",JSON.stringify(savedData),(error)=>{
            if(error)
            {
                res.json(
                    {
                        "success":false
                    }
                )
            }
            else
            {
                res.json({
                    success:true
                  })
            }
        })
    })
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
