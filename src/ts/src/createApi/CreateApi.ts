/* To create Apis */ 

class createApi {
   route: String;
   apis: any;
   Middleware: any[];

   constructor (route: String, callback:any) {
             this.route = route;
             callback ();
             this.Middleware = [()=>{}]

   }
    //To handle http requests
   request ({GET, POST, PUT, DELETE, PATCH, MIDDLEWARE=[()=>{}]}:any):any {
         this.apis = (req:any, res:any)=>{
             MIDDLEWARE.forEach((middleware: (arg0: any, arg1: any) => void)=>{
                 middleware(req, res);
             })
             
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
   
   //Add Middleware
   use (middleware:any=(req:any,res:any)=>{/*Insert suitable error response*/}) {
       this.Middleware.push(middleware) 
   }
   
    //returns methods to be recorder in the recorder of class Spyce
    methods(req:any, res:any) {
        return this.apis(req, res)
    }



}

export default createApi ;