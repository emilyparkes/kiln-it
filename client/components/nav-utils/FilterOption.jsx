import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { withStyles } from '@mui/styles'

export default function FilterOption({
  category,
  name,
  colour,
  select,
  remove,
  checked: initChecked,
}) {
  const CustomCheckbox = withStyles({
    root: {
      color: colour,
      '&$checked': {
        color: colour,
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />)

  const [checked, setChecked] = useState(Boolean(initChecked))

  const handleChange = () => {
    setChecked(!checked)
  }

  const handleSelection = (category, value) => {
    setChecked(!checked)
    checked ? remove(category, value) : select(category, value)
  }

  return (
    <FormControlLabel
      control={
        <CustomCheckbox
          checked={checked}
          name={name}
          onChange={handleChange}
          onClick={() => handleSelection(category, name)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label={name}
    />
  )
}
