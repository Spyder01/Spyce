"use strict";
/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here
*/
Object.defineProperty(exports, "__esModule", { value: true });
const req = (request) => {
    const req = new methods(request);
    var reqDef = {
        host: {
            value: req.host()
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
        this.params = (req) => {
        };
        this.req = request;
    }
}
