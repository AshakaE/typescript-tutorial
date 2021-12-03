import { createServer, IncomingMessage, ServerResponse } from 'http'
import { LoginHandler } from './LoginHandler'
import { Utils } from './Utils'

export class Server {
    port: number = 8080

    public createServer() {
        createServer((req: IncomingMessage, res: ServerResponse) => {
            console.log('Request received from ' + req.url)
            const basePath = Utils.getUrlBasePath(req.url)

            switch (basePath) {
                case 'login':
                    new LoginHandler(req, res).handleRequest()
                    break

                default:
                    break
            }

            res.end()
        }).listen(this.port)
        console.log('Server running on port ' + this.port)
    }
}
