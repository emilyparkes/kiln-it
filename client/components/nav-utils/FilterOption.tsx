import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
// import { withStyles } from '@mui/system'

interface Props {
  category: string,
  name: string,
  colour: string,
  select: (category: string, value:string) => void,
  remove: (category: string, value: string) => void,
  checked: boolean,
}
export default function FilterOption({
  category,
  name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colour,
  select,
  remove,
  checked: initChecked,
}: Props) {

  // const CustomCheckbox = withStyles({
  //   root: {
  //     color: colour,
  //     '&$checked': {
  //       color: colour,
  //     },
  //   },
  //   checked: {},
  // })((props) => <Checkbox color="default" {...props} />)

  const [checked, setChecked] = useState(Boolean(initChecked))

  const handleChange = () => {
    setChecked(!checked)
  }

  const handleSelection = (category: string, value: string) => {
    setChecked(!checked)
    checked ? remove(category, value) : select(category, value)
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
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
