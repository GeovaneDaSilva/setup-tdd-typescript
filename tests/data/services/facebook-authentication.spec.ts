import { AuthenticationError } from '../../../src/domain/errors'
import { FacebookAuthenticationService } from '../../../src/data/services'

import { mock, MockProxy } from 'jest-mock-extended'
import { LoadFacebookUserApi } from '../../../src/data/contracts/api'

type SutTyps = {
  sut: FacebookAuthenticationService
  loadFacebookUserApi: MockProxy<LoadFacebookUserApi>
}

const makeSut = (): SutTyps => {
  const loadFacebookUserApi = mock<LoadFacebookUserApi>()
  const sut = new FacebookAuthenticationService(loadFacebookUserApi)
  return {
    sut,
    loadFacebookUserApi
  }
}

describe('FacebookAuthenticationService', () => {
  it('Should call LoadFacebookUserApi with correct params.', async () => {
    const { sut, loadFacebookUserApi } = makeSut()

    await sut.perform({ token: 'any_token' })

    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledWith({ token: 'any_token' })
    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledTimes(1)
  })

  it('Should return AuthenticationError when LoadFacebookUserApi return undefined.', async () => {
    const { sut, loadFacebookUserApi } = makeSut()

    loadFacebookUserApi.loadUser.mockResolvedValueOnce(undefined)

    const authResult = await sut.perform({ token: 'any_token' })

    expect(authResult).toEqual(new AuthenticationError())
  })
})
