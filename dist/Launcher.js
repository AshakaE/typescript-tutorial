"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
class Launcher {
    constructor() {
        this.server = new Server_1.Server();
    }
    launchApp() {
        console.log('App');
        this.server.createServer();
    }
}
new Launcher().launchApp();
