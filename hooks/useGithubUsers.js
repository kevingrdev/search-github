import { UserUseCases } from 'domain/usecases/user'
import { useEffect, useState } from 'react'

export default function useGithubUsers({ name = '' }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const nameFinal = name === '' ? 'kevingrdev' : name
    getUserData(nameFinal)
  }, [name])

  async function getUserData(name = '') {
    setLoad(true)
    const userUseCases = new UserUseCases()
    const res = await userUseCases.searchUserByName(name)

    setData(res.data)
    setError(res.error)
    setMessage(res.message)
    setLoad(false)
  }

  return {
    error,
    message,
    data,
    load,
  }
}
