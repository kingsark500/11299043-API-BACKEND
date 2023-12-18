const express = require('express')
const mongoose = require('mongoose')
const app = express()


//routes

app.get('/', (req, res)=> {
    res.send('Hello blog my name is maxwell')
})



mongoose.connect('mongodb+srv://admin:xdedse@cluster0.5acm9qs.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
    app.listen(3000, ()=>{
    console.log("Node api app is running on port 3000")
})
    //connecting to the database
    console.log('connected to Mongodb')
}).catch(()=> {
    console.log('error could not connect to mongodb')
})


