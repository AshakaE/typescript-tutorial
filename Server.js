"use strict";
exports.__esModule = true;
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.someLogic = function () {
        console.log('Used only in Server.');
    };
    Server.prototype.createServer = function () {
        console.log('Server created.');
    };
    return Server;
}());
exports.Server = Server;
