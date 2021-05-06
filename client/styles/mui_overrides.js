import { makeStyles } from '@material-ui/core/styles'

export const useEditStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  textField: {
    width: '22ch'
  },
  name: {
    width: '40ch'
  }
}))
