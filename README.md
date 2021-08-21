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

To start a spyce server

``` Javascript 
app.listen(PORT, ()=>{
    console.log('Server Started')
})

```

To initialize a new api:
``` Javascript
const api = app.createApi('/api', ()=>{
    /*Some callback function*/
})

```





