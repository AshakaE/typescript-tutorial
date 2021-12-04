import { UserCredentialsDBAccess } from '../src/Authorization/UserCredentialsDBAccess'

class DbTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
}

new DbTest().dbAccess.putUSerCredential({
    username: 'user',
    password: 'password',
    accessRights: [1, 2, 3],
})
