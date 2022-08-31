import { RepositoryAdapter } from 'domain/adapters/repository'
import { githubApi } from 'services'

export class RepositoryRepository {
  constructor() {
    this.repositoryAdapter = new RepositoryAdapter()
    this.githubApi = githubApi
  }

  async searchRepoByName(name = '') {
    try {
      const parameters = {
        url: `/search/repositories?q=${name}`,
      }
      const data = await this.githubApi.get(parameters.url)

      const reposCrude = data?.data?.items || []
      const repos = this.repositoryAdapter.toRepositories(reposCrude)

      const message = repos.length === 0 ? 'Repo not exist' : 'Success'
      return {
        error: false,
        data: repos,
        message,
      }
    } catch (error) {
      console.error({ error })
      return {
        error: error,
        data: [],
        message: 'Not Found',
      }
    }
  }
}
