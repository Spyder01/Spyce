const Spyce = require('../index');





//Initializing Spyce App
const app = new Spyce();

const api1 = app.createApi('/api', ()=>{
    console.log('An api succesfully initialized')

})

api1.request({
    GET: (req, res) => {
        res.setHeader('Content-Type', 'text/*')
        res.end('Get Request')
    
       for(let i=0; i<1000; i++){
        if(i%10==0)
        console.log(i)
       } 
    },
    POST: (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.end('Post Request')
        console.log("Post Request Made")
    },
    PUT: (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.end('Put Request')
        console.log("Put Request Made")
    }
})

app.listen(5000, ()=>{
    console.log("Spyce Server Started...")
})


//testing speed with express
const express = require('express');
const app2 = express()


app2.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/*')
    res.end('Get Request')

    for(let i=0; i<1000; i++){
        if(i%10==0)
        console.log(i)
       } 
})

app2.post('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('Post Request')
    console.log("Post Request Made")
})

app2.put('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('Put Request')
    console.log("Put Request Made")
})


app2.listen(5001, ()=>{
    console.log("Express Server Started...")
})

