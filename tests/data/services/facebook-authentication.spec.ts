import { AuthenticationError } from '../../../src/domain/errors'
import { FacebookAuthentication } from '../../../src/domain/features'

namespace LoadFacebookUserApi {
  export type Params = {
    token: string
  }

  export type Result = undefined
}

interface LoadFacebookUserApi {
  loadUserByToken: (params: LoadFacebookUserApi.Params) => Promise<LoadFacebookUserApi.Result>
}

class FacebookAuthenticationService {
  constructor (private readonly loadFacebookUserByTokenApi: LoadFacebookUserApi) {
    this.loadFacebookUserByTokenApi = loadFacebookUserByTokenApi
  }

  async perform (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    this.loadFacebookUserByTokenApi.loadUserByToken(params)
    return new AuthenticationError()
  }
}

class LoadFacebookUserSpy implements LoadFacebookUserApi {
  token?: string
  result = undefined

  async loadUserByToken (params: FacebookAuthentication.Params): Promise<LoadFacebookUserApi.Result> {
    this.token = params.token
    return this.result
  }
}

describe('FacebookAuthenticationService', () => {
  it('Should call LoadFacebookUserApi with correct params.', async () => {
    const loadFacebookUserApi = new LoadFacebookUserSpy()
    const sut = new FacebookAuthenticationService(loadFacebookUserApi)

    await sut.perform({ token: 'any_token' })

    expect(loadFacebookUserApi.token).toBe('any_token')
  })

  it('Should return AuthenticationError when LoadFacebookUserApi return undefined.', async () => {
    const loadFacebookUserApi = new LoadFacebookUserSpy()
    loadFacebookUserApi.result = undefined
    const sut = new FacebookAuthenticationService(loadFacebookUserApi)

    const authResult = await sut.perform({ token: 'any_token' })

    expect(authResult).toEqual(new AuthenticationError())
  })
})
