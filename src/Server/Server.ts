import { createServer, IncomingMessage, ServerResponse } from 'http'
import { Authorizer } from '../Authorization/Authorizer'
import { LoginHandler } from './LoginHandler'
import { Utils } from './Utils'

export class Server {
    private authorizer: Authorizer = new Authorizer()
    port: number = 8080

    public createServer() {
        createServer(async (req: IncomingMessage, res: ServerResponse) => {
            console.log('Request received from ' + req.url)
            const basePath = Utils.getUrlBasePath(req.url)

            switch (basePath) {
                case 'login':
                    await new LoginHandler(
                        req,
                        res,
                        this.authorizer,
                    ).handleRequest()
                    break

                default:
                    break
            }

            res.end()
        }).listen(this.port)
        console.log('Server running on port ' + this.port)
    }
}
