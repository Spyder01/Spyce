/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here 
*/



const req= (request:any):any => {
   const req:methods = new methods(request)  
    var reqDef = {
    host: {
       value: req.host()
    }
 }

   Object.defineProperties(request,reqDef)
   return request

}

export default req;


class methods {
   req: any;
   constructor (request:any) {
        this.req = request
   }
   
 host:any = ()=>{
   const {headers} = this.req; 
   return headers.host;
}

params:any = (req:any)=>{
   
} 
}