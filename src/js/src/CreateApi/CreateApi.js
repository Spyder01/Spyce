"use strict";
/* To create Apis */
Object.defineProperty(exports, "__esModule", { value: true });
class createApi {
    constructor(route, callback) {
        this.route = route;
        callback();
    }
    //To handle http requests
    request({ GET, POST, PUT, DELETE, PATCH }, middleware = (req, res) => { }) {
        this.apis = (req, res) => {
            middleware(req, res);
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
    //returns methods to be recorder in the recorder of class Spyce
    methods(req, res) {
        return this.apis(req, res);
    }
}
exports.default = createApi;
