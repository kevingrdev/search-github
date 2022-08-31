/* eslint-disable @next/next/no-img-element */
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from '@mui/material'
import useWindowSize from 'hooks/useWindowSize'

const pages = [
  {
    name: 'Users',
    link: '/',
  },
  { name: 'Repositories', link: '/repositories' },
]

const ResponsiveAppBar = () => {
  return (
    <AppBar
      position="static"
      variant="outlined"
      sx={{
        background: 'transparent',
        color: 'black',
        justifyContent: 'space-around',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src="/github.svg" alt="cat github"></img>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Search Github
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <div style={{ display: 'flex' }}>
              {pages.map(({ name = '', link = '' }) => (
                <Link
                  key={name + link}
                  href={link}
                  sx={{
                    ml: 2,
                    fontSize: '16px',
                    textDecoration: 'none',
                    lineHeight: '1.6',
                    fontWeight: '500',
                  }}
                >
                  {name}
                </Link>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
