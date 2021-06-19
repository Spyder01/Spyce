const Spyce = require('../index');


//Initializing Spyce App
const app = new Spyce();

const api1 = app.createApi('/api', ()=>{
    console.log('An api succesfully initialized')

})

api1.request({
    GET: (req, res) => {
        res.setHeader('Content-Type', 'text/*')
        res.write('Get Request')
        console.log("Get Request Made")
    },
    POST: (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.write('Post Request')
        console.log("Post Request Made")
    }
})

app.listen(5000, ()=>{
    console.log("Server Started")
})

