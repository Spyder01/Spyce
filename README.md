# Spyce
A personal backend framework for node.js. 
 
### Build the js framework 
``` Shell     
    npm run buid
```
Following the above command a directory named spyce consisting of framework's build files is created.

## Getting Started with Spyce

``` Javascript
const Spyce = require('spyce')
const app = new Spyce ()
```
The above code initializes a new spyce app.

#### To start a spyce server

``` Javascript 
app.listen(PORT, ()=>{
    console.log('Server Started')
})

```

#### To initialize a new api:
``` Javascript
const api = app.createApi('/api', ()=>{
    /*Some callback function*/
})

```

#### Basic api body.
``` Javascript
api.request({
    //GET request
    GET: (req, res)=>{
        console.log('This is to prove get request works');
        //Sending reponse
        res.json({
            status: "Success"
        })
    },
    //POST request
    POST: async (req, res)=>{
        //Fetching api
        const body = await req.body ()
        console.log("BODbY", JSON.parse(body))
        res.json(JSON.parse(body))
    },
    // Any middlewares 
    MIDDLEWARE: [()=>{
        console.log('This is to prove that Middleware stack works')
    }, (req, res)=>{
        console.log('Current url ', req.url)
    }]
})
```
#### Using Global middlewares

``` Javascript
app.use(()=>{
    console.log('This is to prove that GlobalMiddleware works\n ************************************\n')
})
```

### On Using Middlewares

        NOTE: All the middlewares in Spyce follow a certain heirarchy in execution i.e, 
             1.  Global Middlewares are executed first. 
             2.  Middlewares defined during api defination are executed next. 
             3.  Finally the additional middlewares i.e one used with api.use() are executed at the end.






