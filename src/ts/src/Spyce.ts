import http from "http";
import https from "https";
import createApi  from './createApi/CreateApi';

interface ServerType {
    type: String;
    credentials: any;
}

class Spyce {
    record: any[]
    obj: ServerType

   

    constructor(server_type:ServerType = {type: 'http', credentials: null}) {
        //Class member to keep record of all routes url and underlying methods         
        this.obj = server_type
        this.record = [];
    }

        //To create the server and start listening
        listen(port:Number, callback:any) {
            switch(this.obj.type) {
              case 'http':   {
                 const server = http.createServer((req, res):any =>{
                  this.record.forEach((api: { route: string | undefined; Api: { apis: (arg0: http.IncomingMessage, arg1: http.ServerResponse) => void; }; })=>{
                    
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
               this.record.forEach((api: { route: string | undefined; Api: { apis: (arg0: http.IncomingMessage, arg1: http.ServerResponse) => void; }; })=>{
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
        createApi(route:String, callback:any) {
        var Api = new createApi(route, callback)
        
        //Records Api methods
        this.Recorder(route, Api)
        return Api
 }

       //Records API methods
      Recorder(route: String, Api:any) {
         this.record.push({
           route: route,
           Api: Api
        })
    }
    
    

    //Router 
    


}

module.exports = Spyce;
