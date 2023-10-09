import { ReactNode } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  save: () => void,
  close: () => void,
  open: boolean,
  resetState: () => void,
  children: ReactNode
}

function StatusModal ({ save, close, open, resetState, children }: Props) {

  const handleCancel = () => {
    resetState()
    close()
  }

  const handleSave = () => {
    save()
    close()
  }

  return (
    <Dialog onClose={close} open={open} fullWidth={true}>
      <DialogTitle>Set new status</DialogTitle>
      <IconButton
          aria-label='close'
          onClick={handleCancel}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
      </IconButton>
      <DialogContent >
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color='secondary'>
          Save changes
        </Button>
        </DialogActions>
    </Dialog>
  )
}

export default StatusModal
