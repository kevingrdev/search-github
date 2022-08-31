import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Skeleton from '@mui/material/Skeleton'

function SkeletonUser() {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Skeleton variant="circular" width={45} height={45} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Skeleton
            variant="rectangular"
            height={20}
            sx={{ maxWidth: '100%', mb: '10px' }}
          />
        }
        secondary={
          <Skeleton
            variant="rectangular"
            sx={{ maxWidth: '100%' }}
            height={32}
          />
        }
      />
    </ListItem>
  )
}

export default SkeletonUser
