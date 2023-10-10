import { useMemo } from "react"
import { FormHelperText, useFormControl } from "@mui/material"

function MyFormHelperText() {
  const { focused, error } = useFormControl() || {}

  const helperText = useMemo(() => {
    if (focused) {
      return 'This field is being focused'
    }
    if (error) {
      return 'This field is not right'
    }

    return 'Helper text'
  }, [focused, error])

  return <FormHelperText color='secondary'>{helperText}</FormHelperText>
}

export default MyFormHelperText