import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  inputLabel: {
    width: '22ch',
  },
  multiSelect: {
    width: '43.5ch',
  },
  titleLabel: {
    width: '40ch',
  },
  saveButton: {
    position: 'absolute',
    color: '#e3c6a4',
    backgroundColor: '#744F44',
    right: '18px',
    width: '95px',
    bottom: '50px',
    height: '35px'
  },
  MuiFab: {
    position: 'fixed',
    bottom: '1rem',
    right: '2rem',
  },
}))
