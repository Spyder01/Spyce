const Spyce = require('../index');


//Initializing Spice App
const app = new Spyce();

const api1 = app.createApi('/api', ()=>{
    console.log('An api succesfully initialized')

})

api1.request({GET: (req,res) =>{console.log('Get Request made'); res.setHeader('Content-Type', 'text/html'); res.end('<h1>Hello, World!</h1>')}, POST: (req,res)=>{res.setHeader('Content-Type', 'text/html'); res.end('<h1>Post Request!</h1>')} })

app.listen(5000, ()=>{
    console.log("Server Started")
})

