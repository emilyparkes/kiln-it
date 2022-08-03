import { makeStyles } from '@mui/styles'

export const useEditStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textField: {
    width: '22ch',
  },
  name: {
    width: '40ch',
  },
}))
