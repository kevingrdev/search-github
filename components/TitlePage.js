import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

function TitlePage({ children }) {
  return (
    <Typography
      variant="h3"
      align="Left"
      style={{ marginTop: '80px' }}
      component="h1"
    >
      {children}
    </Typography>
  )
}

TitlePage.propTypes = {
  children: PropTypes.string.isRequired,
}

export default TitlePage
