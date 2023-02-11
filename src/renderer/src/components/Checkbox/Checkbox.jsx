import PropTypes from 'prop-types'

import Checkbox from '@mui/material/Checkbox'
import { Square, CheckSquare } from 'phosphor-react'

export const CheckboxInput = ({ marked, changedMark }) => {
  return (
    <Checkbox
      icon={<Square size={32} color="white" />}
      checkedIcon={<CheckSquare size={32} color="white" />}
      checked={marked}
      onChange={changedMark}
    />
  )
}

CheckboxInput.propTypes = {
  marked: PropTypes.number,
  changedMark: PropTypes.func
}
