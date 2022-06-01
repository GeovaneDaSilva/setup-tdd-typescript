import { AuthenticationError } from '../../domain/errors'
import { FacebookAuthentication } from '../../domain/features'
import { LoadFacebookUserApi } from '../contracts/api'

export class FacebookAuthenticationService {
  constructor (private readonly loadFacebookUserApi: LoadFacebookUserApi) {
    this.loadFacebookUserApi = loadFacebookUserApi
  }

  async perform (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    this.loadFacebookUserApi.loadUser(params)
    return new AuthenticationError()
  }
}
