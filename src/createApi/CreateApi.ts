/* To create Apis */ 

import Req from '../request'
import Res from '../response'

class createApi {
   route: String;
   apis: any;
   //Global Middleware Stack
    GlobalMiddleware: any[];

   //Api specific middleware stack 
   Middleware: any[];

   constructor (route: String, callback:any) {
             this.route = route;

             callback ();
             this.GlobalMiddleware = [()=>{}];
             this.Middleware = [()=>{}]

   }

 
    //To handle http requests
   request ({GET, POST, PUT, DELETE, PATCH, MIDDLEWARE=[()=>{}]}:any):any {
       
            this.apis = (request:any, response:any)=>{
             const req:any = Req(request)
             const res:any = Res(request, response)
             //const req:any = Req(request)   
            //Implementing global middlewares
            this.GlobalMiddleware.forEach(method=>{
                method (req, res); 
            })

            //Implementing middlewares defined during api defination.
            MIDDLEWARE.forEach((middleware: (arg0: any, arg1: any) => void)=>{
                 middleware(req, res);
             })
            
            //Implementing add on middlewares
            this.Middleware.forEach(method=>{
                method (req, res); 
            })


            switch(req.method) {
                case 'GET': GET (req, res)
                break;
                case 'POST': POST (req, res)
                break;
                case 'PUT': PUT (req, res)
                break;
                case 'PATCH': PATCH (req, res)
                break;
                case 'DELETE': DELETE (req, res)
                break; 
            }
         }
   }
   
   //Add api specific Middleware
   use (middleware:any=(req:any,res:any)=>{/*Insert suitable error response*/}):void {
       this.Middleware.push(middleware) 
   }

   
   
    //returns methods to be recorder in the recorder of class Spyce
    methods(req:any, res:any):any {
        return this.apis(req, res)
    }

   //Fetching all the global middlewares from the main Spyce class
   FetchMiddlewares(middlewares:any):void {
       this.GlobalMiddleware = middlewares;
   }



}

export default createApi;