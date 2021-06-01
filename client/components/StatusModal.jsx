import React from 'react'

function StatusModal ({ save, close, show, children }) {
  const showHideClassName = show ? 'modal open' : 'modal closed'

  const handleSave = () => {
    save()
    close()
  }

  return (
    <div className={showHideClassName}>
      <section className='model-box'>
        {children}
        <button className='save' type='button' onClick={handleSave}>
          Save
        </button>
      </section>
    </div>
  )
}

export default StatusModal
