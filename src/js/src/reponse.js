"use strict";
/* * * * * * * * * * *
   This the module intended to extend the functionalities of pre-defined http response module.  Here
*/
Object.defineProperty(exports, "__esModule", { value: true });
const response = (res, req) => {
    const resDef = {};
};
exports.default = response;
//function to redirect the url 
const redirect = (req) => {
    const { rawHeaders } = req;
    const host = req.rawHeaders[req.rawHeaders.indexOf('Host') + 1];
};
