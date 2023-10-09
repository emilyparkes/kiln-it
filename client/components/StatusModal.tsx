import { ReactNode } from "react"

interface Props {
  save: () => void,
  close: () => void,
  show: boolean,
  resetState: () => void,
  children: ReactNode
}

function StatusModal ({ save, close, show, resetState, children }: Props) {
  const showHideClassName = show ? 'modal open' : 'modal closed'

  const handleCancel = () => {
    resetState()
    close()
  }

  const handleSave = () => {
    save()
    close()
  }

  return (
    <div className={showHideClassName}>
      <section className='model-box'>
        {children}
        <div className='modal-actions'>
        <button className='save' type='button' onClick={handleCancel}>
          Cancel
        </button>
        <button className='save' type='button' onClick={handleSave}>
          Apply
        </button>
        </div>
      </section>
    </div>
  )
}

export default StatusModal
