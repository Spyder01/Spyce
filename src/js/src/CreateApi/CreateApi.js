"use strict";
/* To create Apis */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("../request"));
class createApi {
    constructor(route, callback) {
        this.route = route;
        callback();
        this.GlobalMiddleware = [() => { }];
        this.Middleware = [() => { }];
    }
    //To handle http requests
    request({ GET, POST, PUT, DELETE, PATCH, MIDDLEWARE = [() => { }] }) {
        this.apis = (request, res) => {
            const req = request_1.default(request);
            //const req:any = Req(request)   
            //Implementing global middlewares
            this.GlobalMiddleware.forEach(method => {
                method(req, res);
            });
            //Implementing middlewares defined during api defination.
            MIDDLEWARE.forEach((middleware) => {
                middleware(req, res);
            });
            //Implementing add on middlewares
            this.Middleware.forEach(method => {
                method(req, res);
            });
            switch (req.method) {
                case 'GET':
                    GET(req, res);
                    break;
                case 'POST':
                    POST(req, res);
                    break;
                case 'PUT':
                    PUT(req, res);
                    break;
                case 'PATCH':
                    PATCH(req, res);
                    break;
                case 'DELETE':
                    DELETE(req, res);
                    break;
            }
        };
    }
    //Add api specific Middleware
    use(middleware = (req, res) => { }) {
        this.Middleware.push(middleware);
    }
    //returns methods to be recorder in the recorder of class Spyce
    methods(req, res) {
        return this.apis(req, res);
    }
    //Fetching all the global middlewares from the main Spyce class
    FetchMiddlewares(middlewares) {
        this.GlobalMiddleware = middlewares;
    }
}
exports.default = createApi;
