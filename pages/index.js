import Head from 'next/head'
import Container from '@mui/material/Container'
import TitlePage from 'components/TitlePage'
import FieldSearch from 'components/FieldSearch'
import UserItem from 'components/UserItem'
import List from '@mui/material/List'
import useGithubUsers from 'hooks/useGithubUsers'
import { useState } from 'react'
import SkeletonList from 'components/SkeletonList'
import Navbar from 'components/Navbar'

export default function Home() {
  const [name, setName] = useState()
  const [nameFinal, setNameFinal] = useState()

  const { data, load, message } = useGithubUsers({ name: nameFinal })

  function handleClick() {
    setNameFinal(name)
  }
  function handleChange(e) {
    const { value } = e.target
    setName(value)
  }
  const users = (data || []).map((user) => <UserItem key={user.id} {...user} />)
  return (
    <div>
      <Head>
        <title>Github Search::Users</title>
        <meta name="description" content="Find users by name" />
        <link rel="icon" href="/github.svg" />
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ pt: '2' }}>
        <TitlePage>Search github users by name.</TitlePage>
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
          {!load && users}
        </List>
      </Container>
    </div>
  )
}
