import { Server } from './server/Server'

class Launcher {
  // private name: string
  private server: Server

  constructor() {
    this.server = new Server()
  }

  public launchApp() {
    console.log('App')
    this.server.createServer()
  }
}

new Launcher().launchApp()
