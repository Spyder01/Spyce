"use strict";
/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here
*/
Object.defineProperty(exports, "__esModule", { value: true });
const req = (request) => {
    var reqDef = {
        host: {
            value: host(request)
        }
    };
    return Object.create(request, reqDef);
};
exports.default = req;
const host = (req) => {
    const { rawHeaders } = req;
    return req.rawHeaders[rawHeaders.indexOf('Host') + 1];
};
