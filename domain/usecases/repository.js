import { RepositoryRepository } from 'repositories/repository'

export class RepositoryUseCases {
  constructor() {
    this.RepositoryRepository = new RepositoryRepository()
  }

  async searchRepoByName(name = '') {
    const res = await this.RepositoryRepository.searchRepoByName(name)
    return res
  }
}
