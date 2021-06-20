/* To create Apis */ 

class createApi {
   route: String;
   apis: any;

   constructor (route: String, callback:any) {
             this.route = route;
             callback ();

   }
    //To handle http requests
   request ({GET, POST, PUT, DELETE, PATCH}:any, middleware:any=(req:any,res:any)=>{}):any {
         this.apis = (req:any, res:any)=>{
             middleware(req,res);
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
   
    //returns methods to be recorder in the recorder of class Spyce
    methods(req:any, res:any) {
        return this.apis(req, res)
    }



}

export default createApi ;