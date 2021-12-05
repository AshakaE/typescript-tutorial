import Nedb from 'nedb'
import { User } from '../Shared/Model'

export class UserDBAccess {
    private nedb: Nedb

    constructor() {
        this.nedb = new Nedb('database/Users.db')
        this.nedb.loadDatabase()
    }

    public async putUser(user: User): Promise<void> {
        return new Promise((resolve, reject) => {
            this.nedb.insert(user, (err: Error) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}
