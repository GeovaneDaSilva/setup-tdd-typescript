import { FacebookAuthentication } from '../../../src/domain/features'

interface LoadFacebookUserApi {
  loadUserByToken: (params: LoadFacebookUserApi.Params) => Promise<void>
}

namespace LoadFacebookUserApi {
  export type Params = {
    token: string
  }
}

class FacebookAuthenticationService {
  constructor (private readonly loadFacebookUserByTokenApi: LoadFacebookUserApi) {
    this.loadFacebookUserByTokenApi = loadFacebookUserByTokenApi
  }

  async perform (params: FacebookAuthentication.Params): Promise<void> {
    this.loadFacebookUserByTokenApi.loadUserByToken(params)
  }
}

class LoadFacebookUserSpy implements LoadFacebookUserApi {
  token?: string
  async loadUserByToken (params: FacebookAuthentication.Params): Promise<void> {
    this.token = params.token
  }
}

describe('FacebookAuthenticationService', () => {
  it('Should call LoadFacebookUserApi with correct params.', async () => {
    const loadFacebookUserApi = new LoadFacebookUserSpy()
    const sut = new FacebookAuthenticationService(loadFacebookUserApi)

    await sut.perform({ token: 'any_token' })

    expect(loadFacebookUserApi.token).toBe('any_token')
  })
})
