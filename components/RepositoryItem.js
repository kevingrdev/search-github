import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import PropTypes from 'prop-types'

function RepositoryItem({
  name = '',
  avatar = '',
  url = '',
  stargazers_count,
}) {
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
              {stargazers_count} starts
            </Typography>
            {' - '}
            <Link href={url} target="_blank">
              Show webSite
            </Link>
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

RepositoryItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  url: PropTypes.string,
}

export default RepositoryItem
