import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import PropTypes from 'prop-types'

function AlignItemsList({ name = '', avatar = '', url = '' }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Profile Github
            </Typography>
            {' - '}
            <Link href={url} target="_blank">
              Show
            </Link>
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

AlignItemsList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  url: PropTypes.string,
}

export default AlignItemsList
