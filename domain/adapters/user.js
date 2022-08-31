export class UserAdapter {
  toUsers(items = []) {
    if (!Array.isArray(items) || items.length === 0) {
      return []
    }

    function format(user) {
      return {
        id: user?.id || '',
        name: user?.login || '',
        avatar: user?.avatar_url || '',
        url: user?.html_url || '',
      }
    }
    return items.map(format)
  }
}
