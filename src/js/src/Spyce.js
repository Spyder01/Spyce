"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const CreateApi_1 = __importDefault(require("./createApi/CreateApi"));
class Spyce {
    constructor(server_type = { type: 'http', credentials: null }) {
        this.record = [];
        this.obj = server_type;
        this.MIDDLEWARE = [() => { }];
    }
    //To create the server and start listening
    listen(port, callback) {
        switch (this.obj.type) {
            case 'http':
                {
                    const server = http_1.default.createServer((req, res) => {
                        this.record.forEach((api) => {
                            if (api.route == req.url) {
                                api.Api.apis(req, res);
                            }
                        });
                    });
                    server.listen(port, callback);
                }
                break;
            case 'https': {
                const server = https_1.default.createServer(this.obj.credentials, (req, res) => {
                    this.record.forEach((api) => {
                        if (api.route == req.url) {
                            api.Api.apis(req, res);
                        }
                    });
                });
                server.listen(port, callback);
            }
        }
    }
    //Initializing Api
    createApi(route, callback) {
        var Api = new CreateApi_1.default(route, callback);
        //Records Api methods
        this.Recorder(route, Api);
        return Api;
    }
    //FILLING MIDDLEWARE STACK  
    use(middleware) {
        this.MIDDLEWARE.push(middleware);
        this.record.forEach(api => {
            var { Api } = api;
            Api.FetchMiddlewares(this.MIDDLEWARE);
        });
    }
    //Records API methods
    Recorder(route, Api) {
        console.log(route, "Rouueuo");
        this.record.push({
            route: route,
            Api: Api
        });
    }
}
module.exports = Spyce;
