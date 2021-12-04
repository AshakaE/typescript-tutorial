import { UserCredentialsDBAccess } from '../src/Authorization/UserCredentialsDBAccess'

class DbTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
}

new DbTest().dbAccess.putUserCredentials({
    username: 'user',
    password: 'test1234',
    accessRights: [1, 2, 3],
})
