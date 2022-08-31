import SkeletonUser from 'components/SkeletonUser'
import PropTypes from 'prop-types'

function SkeletonList({ load = false }) {
  if (!load) {
    return null
  }
  return (
    <div>
      <SkeletonUser />
      <SkeletonUser />
      <SkeletonUser />
      <SkeletonUser />
    </div>
  )
}

SkeletonList.propTypes = {
  load: PropTypes.bool,
}

export default SkeletonList
