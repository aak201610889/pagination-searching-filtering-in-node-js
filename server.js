const express=require('express')
const mongoose=require('mongoose')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})
const port=process.env.PORT||5000
app.listen(port,` server on port ${port}`)
