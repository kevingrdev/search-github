export class RepositoryAdapter {
  toRepositories(items = []) {
    if (!Array.isArray(items) || items.length === 0) {
      return []
    }

    function format(repository) {
      return {
        id: repository?.id || '',
        name: repository?.full_name || '',
        avatar: repository?.owner?.avatar_url || '',
        stargazers: repository?.stargazers_count || '',
        url: repository?.homepage || repository?.html_url || '',
      }
    }
    return items.map(format)
  }
}
