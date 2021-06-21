const Spyce = require('../index');


//Initialize the Spyce App 
const app = new  Spyce();
const PORT = process.env.PORT || 5010;

//Initialize a new api 
const api = app.createApi('/api', ()=>{
    console.log('And api is succesfully initialized.')
})

//Assing http requests
api.request({
    GET: (req, res)=>{
        console.log('This is to prove get request works');
        res.json({
            status: "Success"
        })
    },
    POST: async (req, res)=>{
        const b = await req.body
        let body = await b()
        console.log("BODbY", JSON.parse(body))
        res.json(JSON.parse(body))
    },
    MIDDLEWARE: [()=>{
        console.log('This is to prove that Middleware stack works')
    }, (req, res)=>{
        console.log('Current url ', req.url)
    }]
})

app.use(()=>{
    console.log('This is to prove that GlobalMiddleware works\n ************************************\n')
})



//Start the Spyce server 
app.listen(PORT, ()=>{
    console.log('Server Started')
})