"use strict";
/* * * * * * * * * * *
   This the module intended to  extend the functionalities of pre-defined http request module.  Here
*/
Object.defineProperty(exports, "__esModule", { value: true });
const req = (request) => {
    var reqDef = {
        testurl: {
            value: request.url
        }
    };
    return Object.create(request, reqDef);
};
exports.default = req;
