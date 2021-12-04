import { UserCredentials } from '../Shared/Model'

export class UserCredentialsDBAccess {
    public async putUSerCredential(
        userCredentials: UserCredentials,
    ): Promise<any> {}

    public async getUSerCredential(
        username: string,
        password: string,
    ): Promise<UserCredentials | undefined> {}
}
