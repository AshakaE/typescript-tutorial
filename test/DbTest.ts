import { UserCredentialsDBAccess } from '../src/Authorization/UserCredentialsDBAccess'
import { UserDBAccess } from '../src/User/UsersDBAccess'

class DbTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
    public userDbAccess: UserDBAccess = new UserDBAccess()
}

new DbTest().dbAccess.putUserCredentials({
    username: 'user',
    password: 'test1234',
    accessRights: [0, 1, 2, 3],
})

// new DbTest().userDbAccess.putUser({
//     age: 30,
//     email: 'some@example.com',
//     id: 'ajdlaa11',
//     name: 'Fort bucks',
//     workingPosition: 3,
// })
