import { useAppSelector } from '../hooks'

import DataOption from './DataOption'

function AddDataOptions () {

  const clay = useAppSelector(store => store.clay)
  const glazes = useAppSelector(store => store.glazes)
  const shapes = useAppSelector(store => store.shapes)
  const statuses = useAppSelector(store => store.statuses)

  return (
    <>
      { (statuses && clay && glazes && shapes) &&
        <div className='container'>
          <h3 className='pg-title heading'>Manage options</h3>
          <div className='options'>
            <DataOption name='clay' arrOfType={clay} />
            <DataOption name='glaze' arrOfType={glazes} />
            <DataOption name='shape' arrOfType={shapes} />
            <DataOption name='status' arrOfType={statuses} />
          </div>
        </div>
      }
    </>
  )
}

export default AddDataOptions
