"use strict";
/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const req = (request) => {
    const req = new methods(request);
    var reqDef = {
        host: {
            value: req.host()
        },
        body: {
            value: () => __awaiter(void 0, void 0, void 0, function* () {
                return yield req.body();
            })
        }
    };
    Object.defineProperties(request, reqDef);
    return request;
};
exports.default = req;
class methods {
    constructor(request) {
        this.host = () => {
            const { headers } = this.req;
            return headers.host;
        };
        this.body = () => {
            return new Promise((resolve, reject) => {
                try {
                    let body = "";
                    // listen to data sent by client
                    this.req.on("data", (chunk) => {
                        // append the string version to the body
                        body += chunk.toString();
                    });
                    // listen till the end
                    this.req.on("end", () => {
                        // send back the data
                        resolve(body);
                    });
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        this.params = (req) => {
        };
        this.req = request;
    }
}
