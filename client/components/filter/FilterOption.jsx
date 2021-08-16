import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

export default function FilterOption ({ category, name, select, remove, checked: initChecked }) {
  const CustomCheckbox = withStyles({
    root: {
      color: '#3A2E39',
      '&$checked': {
        color: '#3A2E39'
      }
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />)

  const [checked, setChecked] = useState(Boolean(initChecked))

  const handleChange = (event) => {
    setChecked(!checked)
  }

  const handleSelection = (category, value) => {
    setChecked(!checked)
    checked
      ? remove(category, value)
      : select(category, value)
  }

  return (
    <FormControlLabel
      control={<CustomCheckbox
        checked={checked}
        name={name}
        onChange={handleChange}
        onClick={() => handleSelection(category, name)}
        inputProps={{ 'aria-label': 'primary checkbox' }} />}
      label={name}
    />

  )
}
