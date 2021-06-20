/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here 
*/



const req= (request:any):any => {  
    var reqDef = {
    host: {
       value: host(request)
    }
 }

  return Object.create(request,reqDef)

}

export default req;

const host:any = (req:any)=>{
      const {rawHeaders} = req; 
      return req.rawHeaders[rawHeaders.indexOf('Host')+1]
}