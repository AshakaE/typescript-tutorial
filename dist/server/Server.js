"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    someLogic() {
        console.log('Used only in Server.');
    }
    createServer() {
        console.log('Server created.');
    }
}
exports.Server = Server;
