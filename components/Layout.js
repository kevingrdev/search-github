import Container from '@mui/material/Container'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return <Container maxWidth="sm">{children}</Container>
}

Layout.propTypes = { children: PropTypes.element }

export default Layout
