import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function FullWidthTextField({ handleClick, ...props }) {
  return (
    <Box
      style={{
        display: 'flex',
        gap: 8,
        margin: '32px 0px',
        maxWidth: '500px',
        width: '100%',
      }}
    >
      <TextField {...props} fullWidth />{' '}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        href="#contained-buttons"
      >
        Search
      </Button>
    </Box>
  )
}
