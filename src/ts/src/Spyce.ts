import http from "http";
import https from "https";
import createApi  from './createApi/CreateApi';

interface ServerType {
    type: String;
    credentials: any;
}

class Spyce {
     //Class member to keep record of all routes url and underlying methods   
    record: any[]
    //Class member to specify protocol type http or https.
    obj: ServerType

    /*
        ****************************************************************
        NOTE: All the middlewares in Spyce follow a certain heirarchy in execution i.e, 
             1.  Global Middlewares are executed first. 
             2.  Middlewares defined during api defination are executed next. 
             3.  Finally the additional middlewares i.e one used with api.use() are executed at the end. 
        
        *****************************************************************        
        NOTE: It is important to know that currently in Spyce middlewares are executed first, before any specific HTTTP request codes are executed. 
    
    
    
    */

    //Array to store all the global middlewares 
    MIDDLEWARE: any[]
   

    constructor(server_type:ServerType = {type: 'http', credentials: null}) {
        this.record = [];
        this.obj = server_type
        this.MIDDLEWARE = [()=>{}]
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

  //FILLING MIDDLEWARE STACK  
  use(middleware: any) {
       this.MIDDLEWARE.push(middleware)
       this.record.forEach(api=>{
           var {Api} = api;
           Api.FetchMiddlewares(this.MIDDLEWARE)
       })
  }

       //Records API methods
      Recorder(route: String, Api:any) {
         this.record.push({
           route: route,
           Api: Api
        })
    }
    
    
    


}

module.exports = Spyce;
