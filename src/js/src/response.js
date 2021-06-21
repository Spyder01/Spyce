"use strict";
/* * * * * * * * * * *
   This the module intended to extend the functionalities of pre-defined http response module.  Here
*/
Object.defineProperty(exports, "__esModule", { value: true });
const response = (request, response) => {
    const res = new methods(request, response);
    const resDef = {
        json: {
            value: (content) => { res.json(content); }
        },
        redirect: {
            value: (route) => { res.redirect(route); }
        },
        redirectUrl: {
            value: (url) => { res.redirectUrl(url); }
        }
    };
    Object.defineProperties(response, resDef);
    return response;
};
exports.default = response;
class methods {
    constructor(request, response) {
        //function to redirect the url 
        this.redirect = (route) => {
            const { headers } = this.req;
            const host = headers.host;
            this.res.writeHead(302, { "Location": `http://${host}/${route}/` });
            return this.res.end();
        };
        this.redirectUrl = (url) => {
            this.res.writeHead(302, { "Location": `${url}` });
            return this.res.end();
        };
        this.json = (content) => {
            this.res.writeHead(200, { 'Content-type': 'application/json' });
            this.res.end(JSON.stringify({ content }));
        };
        this.req = request;
        this.res = response;
    }
}
