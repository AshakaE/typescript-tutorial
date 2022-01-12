import {
    Account,
    SessionToken,
    TokenGenerator,
    TokenRights,
    TokenState,
    TokenValidator,
} from '../Server/Model'
import { countInstances } from '../Shared/ObjectCounter'
import { SessionTokenDBAccess } from './SessionTokenDBAccess'
import { UserCredentialsDBAccess } from './UserCredentialsDBAccess'

@countInstances
export class Authorizer implements TokenGenerator, TokenValidator {
    private userCredDBAccess: UserCredentialsDBAccess =
        new UserCredentialsDBAccess()
    private sessionTokenDBAccess: SessionTokenDBAccess =
        new SessionTokenDBAccess()

    async generateToken(account: Account): Promise<SessionToken | undefined> {
        const resultAccount = await this.userCredDBAccess.getUserCredentials(
            account.username,
            account.password,
        )
        if (resultAccount) {
            const token: SessionToken = {
                accessRights: resultAccount.accessRights,
                expirationTime: this.generateExpirationTime(),
                username: resultAccount.username,
                valid: true,
                tokenId: this.generateRandomToken(),
            }
            await this.sessionTokenDBAccess.storeSessionToken(token)
            return token
        } else {
            return undefined
        }
    }

    public async validatateToken(tokenId: string): Promise<TokenRights> {
        const token = await this.sessionTokenDBAccess.getToken(tokenId)
        if (!token || !token.valid) {
            return {
                accessRights: [],
                state: TokenState.INVALID,
            }
        } else if (token.expirationTime < new Date()) {
            return {
                accessRights: [],
                state: TokenState.EXPIRED,
            }
        }
        return {
            accessRights: token.accessRights,
            state: TokenState.VALID,
        }
    }

    private generateExpirationTime() {
        return new Date(Date.now() + 60 * 60 * 1000)
    }

    private generateRandomToken() {
        return Math.random().toString(36).slice(2)
    }
}
