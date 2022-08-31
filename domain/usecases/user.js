import { UserRepository } from 'repositories/user'

export class UserUseCases {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async searchUserByName(name = '') {
    const res = await this.userRepository.searchUserByName(name)
    return res
  }
}
