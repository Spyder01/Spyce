/* * * * * * * * * * *
   This the module intended to extend the functionalities of pre-defined http response module.  Here 
*/


const response: any = (request:any, response:any) => { 
      const res:methods = new methods(request,response)    
      const resDef: any = {
          json: {
              value: (content:object)=>{res.json(content)}
          },
          redirect: {
              value: (route:string)=>{res.redirect(route)}
          },
          redirectUrl: {
              value: (url:string)=>{res.redirectUrl(url)}
          }

      } 
      Object.defineProperties(response, resDef)
      return response
}

export default response

class methods {
    req:any;
    res:any;


    constructor(request:any, response:any) {
         this.req = request;
         this.res = response;
    }
    //function to redirect the url 
   redirect:any = (route:string) => {
    const {headers} = this.req; 
    const host = headers.host;
    this.res.writeHead(302, {"Location": `http://${host}/${route}/`})
    return this.res.end()

} 
    redirectUrl: any = (url: string) => {
        this.res.writeHead(302, {"Location": `${url}`})
        return this.res.end()
    }

  json:any = (content:object):void =>{
    this.res.writeHead(200, {'Content-type': 'application/json'})
    this.res.end(JSON.stringify({content}))
}
}

