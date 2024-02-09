interface CardProps {
  img: string,
  name: string,
  shape: string, 
  description: string
}

// eslint-disable-next-line no-unused-vars
export default function Card ({ img, name, shape, description }: CardProps) {
  return (
    <div className='card' >
      <div className='card-overlay'>
        <div className='card-overlay-text'>
          <p>{name}</p>
          <p>{shape}</p>
        </div>
        <p>{description}</p>
      </div>
      <img className='card-img' src={img} alt='description tbd'/>
    </div>
  )
}
