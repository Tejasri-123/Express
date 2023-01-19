const express = require("express")
const mongoose = require("mongoose")
const url ='mongodb://localhost/Aliendb'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',() => {
    console.log("conected....")
})
app.use(express.json())
const alienRouter = require("./Routes/Aliens")
app.use("/aliens",alienRouter)
app.listen(9000,() =>{
    console.log("Server started")
})