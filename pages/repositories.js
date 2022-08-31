import Head from 'next/head'
import Container from '@mui/material/Container'
import TitlePage from 'components/TitlePage'
import FieldSearch from 'components/FieldSearch'
import List from '@mui/material/List'
import { useState } from 'react'
import SkeletonList from 'components/SkeletonList'
import Navbar from 'components/Navbar'
import useGithubRepos from 'hooks/useGithubRepos'
import RepositoryItem from 'components/RepositoryItem'

export default function Repositories() {
  const [name, setName] = useState()
  const [nameFinal, setNameFinal] = useState()

  const { data, load, message } = useGithubRepos({ name: nameFinal })

  function handleClick() {
    setNameFinal(name)
  }
  function handleChange(e) {
    const { value } = e.target
    setName(value)
  }

  const repos = (data || []).map((repo) => (
    <RepositoryItem key={repo.id} {...repo} />
  ))

  return (
    <div>
      <Head>
        <title>Github Search</title>
        <meta name="description" content="Find the user" />
        <link rel="icon" href="/github.svg" />
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ pt: '2' }}>
        <TitlePage>Search github repositories by name.</TitlePage>

        <FieldSearch
          label="Name"
          value={name}
          onChange={handleChange}
          handleClick={handleClick}
        />
        <List
          sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
        >
          <SkeletonList load={load} />
          {!load && data.length === 0 && message}
          {!load && repos}
        </List>
      </Container>
    </div>
  )
}
