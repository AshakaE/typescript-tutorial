import { createServer, IncomingMessage, ServerResponse } from 'http'

export class Server {
  port: number = 8080

  public createServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      console.log('Request received from ' + req.url)
      res.end()
    }).listen(this.port)
    console.log('Server running on port ' + this.port)
  }
}
