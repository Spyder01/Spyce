/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here 
*/



const req= (request:any):any => {
   const req:methods = new methods(request)  
    var reqDef = {
    host: {
       value: req.host()
    },
    body: {
       value: async ()=>{
         return await req.body()
       }
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

body:any = () =>{
   return new Promise((resolve, reject) => {
      try {
          let body = "";
          // listen to data sent by client
          this.req.on("data", (chunk:any):any => {
              // append the string version to the body
              body += chunk.toString();
          });
          // listen till the end
          this.req.on("end", () => {
              // send back the data

              resolve(body);
          });
      } catch (error) {
          reject(error);
      }
  });
} 

params:any = (req:any)=>{
   
} 
}