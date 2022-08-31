import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

function TitlePage({ children }) {
  return (
    <>
      <Typography
        variant="h3"
        align="Left"
        style={{ marginTop: '80px', marginBottom: '8px' }}
        component="h1"
      >
        {children}
      </Typography>
      <Link href="https://github.com/kevingrdev/search-github" target="_blank">
        Check the repository of this website
      </Link>
    </>
  )
}

TitlePage.propTypes = {
  children: PropTypes.string.isRequired,
}

export default TitlePage
