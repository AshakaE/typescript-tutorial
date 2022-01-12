import { createServer, IncomingMessage, ServerResponse } from 'http'
import { Authorizer } from '../Authorization/Authorizer'
import { Monitor } from '../Shared/ObjectCounter'
import { LoginHandler } from './LoginHandler'
import { UsersHandler } from './UsersHandler'
import { Utils } from './Utils'

export class Server {
    private authorizer: Authorizer = new Authorizer()
    port: number = 8080

    public createServer() {
        createServer(async (req: IncomingMessage, res: ServerResponse) => {
            console.log('Request received from ' + req.url)
            this.addCorsHeader(res)
            const basePath = Utils.getUrlBasePath(req.url)

            switch (basePath) {
                case 'systemInfo':
                    res.write(Monitor.printInstances())
                    break
                case 'login':
                    await new LoginHandler(
                        req,
                        res,
                        this.authorizer,
                    ).handleRequest()
                    break
                case 'users':
                    await new UsersHandler(
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
    private addCorsHeader(res: ServerResponse){
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')
        res.setHeader('Access-Control-Allow-Methods', '*')
    }
}
