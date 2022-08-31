import { UserAdapter } from 'domain/adapters/user'
import { githubApi } from 'services'

export class UserRepository {
  constructor() {
    this.userAdapter = new UserAdapter()
    this.githubApi = githubApi
  }

  async searchUserByName(name = '') {
    try {
      const parameters = {
        url: `/search/users?q=${name}`,
      }
      const data = await this.githubApi.get(parameters.url)

      const usersCrude = data?.data?.items || []
      const users = this.userAdapter.toUsers(usersCrude)
      const message = users.length === 0 ? 'Name user not exist' : 'Success'
      return {
        error: false,
        data: users,
        message,
      }
    } catch (error) {
      return {
        error: error,
        data: [],
        message: 'Not Found',
      }
    }
  }
}
