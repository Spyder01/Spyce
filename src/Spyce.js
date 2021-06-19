const http = require('http');
const CreateApi = require('./methods/CreateApi');


//Initializing Main server 
class Spyce {
    constructor(request_obj = {type: 'http', credentials: null} ) {
        //Class member to keep record of all routes url and underlying methods         
        this.record = []
        this.obj = request_obj
    }
    
    //To create the server and start listening
    listen(port, callback) {
      switch(this.obj.type) {
        case 'http':   {
           const server = http.createServer((req, res) =>{
            this.record.forEach(api=>{
                if(api.route==req.url) {
                    api.Api.apis(req, res)
                }
            })
        })
        server.listen(port, callback)
      }
      break;
      case 'https': {
        const server = https.createServer(this.obj.credentials, (req, res) =>{
         this.record.forEach(api=>{
             if(api.route==req.url) {
                 api.Api.apis(req, res)
             }
         })
     })
     server.listen(port, callback)
   }
    }
        
    }
    
    //Initializing Api
    createApi(route, callback) {
           var Api = new CreateApi(route, callback)
           
           //Records Api methods
           this.Recorder(route, Api)
           return Api
    }

    //Records API methods
    Recorder(route, Api) {
        this.record.push({
            route: route,
            Api: Api
        })
    }


}

module.exports  = Spyce