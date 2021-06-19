/* Creates Api */

class CreateApi {
    constructor(route, callback) {
           this.route = route
           callback();
           this.apis = []
    }

    //To handle http requests
    request ({GET, POST, PUT, PATCH, DELETE}) {
          this.apis = (req,res)=>{
              switch(req.method) {
                  case 'GET': GET (req, res)
                  break;
                  case 'POST': POST (req, res)
                  break;
                  case 'PUT': PUT (req, res)
                  break;
                  case 'PATCH': PATCH(req, res)
                  break;
                  case 'DELETE': DELETE (req, res)
                  break; 
              }

          }
    }

   //returns methods to be recorder in the recorder of calss Spyce
    methods(req, res) {
        return this.apis(req, res)
    }

  
}


module.exports = CreateApi