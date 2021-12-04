import { UserCredentials } from '../Shared/Model'
import Nedb from 'nedb'

export class UserCredentialsDBAccess {
    private nedb: Nedb

    constructor() {
        this.nedb = new Nedb('database/UserCredentials.db')
        this.nedb.loadDatabase()
    }

    public async putUSerCredential(
        userCredentials: UserCredentials,
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            this.nedb.insert(userCredentials, (err: Error, docs: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(docs)
                }
            })
        })
    }

    public async getUSerCredential(
        username: string,
        password: string,
    ): Promise<UserCredentials | undefined> {
        return
    }
}
