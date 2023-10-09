import { DBCreation } from "../../models/Creation"

interface Props {
  creation: DBCreation
}

function CreationItemDisplay ({ creation }: Props) {
  return (
    <>
      <img className='creation-img' src={creation.imgComplete} alt='some text'/>
      <div className='textbox'>
        <div>{creation.name}</div>
        {/* <SubTitle>{creation.shape}</SubTitle>
        <Date>{creation.date}</Date>
        <Description>{creation.description}</Description> */}
      </div>
    </>
  )
}

export default CreationItemDisplay
