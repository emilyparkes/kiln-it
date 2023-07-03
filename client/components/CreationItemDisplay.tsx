interface Props {
  creation: any
}

function CreationItemDisplay ({ creation }: Props) {
  return (
    <>
      <img className='creation-img' src={creation.image} />
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
