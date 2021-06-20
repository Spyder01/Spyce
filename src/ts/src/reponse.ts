/* * * * * * * * * * *
   This the module intended to extend the functionalities of pre-defined http response module.  Here 
*/


const response: any = (res:any, req:any) => {     
      const resDef: any = {

      } 
}

export default response

//function to redirect the url 
const redirect:any = (req:any) => {
    const {rawHeaders} = req; 
    const host = req.rawHeaders[req.rawHeaders.indexOf('Host')+1]
} 

