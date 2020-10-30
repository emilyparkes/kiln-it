import React from 'react'
import styled from 'styled-components'

// @media (min-width: 480px) { mobile
//   max-width: 80%;
//   margin-left: auto;
//   margin-right: auto;
// }

// @media (min-width: 768px) { tablet
//   max-width: 80%;
//   margin-left: auto;
//   margin-right: auto;
// }
// @media (min-width: 1024px) { desktop
//   max-width: 80%;
//   margin-left: auto;
//   margin-right: auto;
// }
// @media (min-width: 1280px) { desktop-large
//   max-width: 80%;
//   margin-left: auto;
//   margin-right: auto;
// }
// @media (min-width: 1600px) { desktop-xlarge
//   max-width: 80%;
//   margin-left: auto;
//   margin-right: auto;
// }

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 480px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) {
    max-width: 614px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1024px) {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1600px) { 
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
}
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 480px) {
    max-width: 258px;
  }
  @media (min-width: 768px) {
    max-width: 614px;
  }
  @media (min-width: 1024px) { 
    max-width: 614px;
}
  @media (min-width: 1280px) { 
    max-width: 850px;
}
  @media (min-width: 1600px) { 
    max-width: 1125px;
}
`

const StyledCard = styled.div`
  max-width: 258px;
  align-self: flex-start;
  background-color: #744F44;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
`
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`

const Header = styled.div`
display: flex;
padding: 8px;
align-items: center;
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  margin: 0px;
  padding: 12px;
  @media (min-width: 320px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  padding: 16px 0px 13px 0px;
  @media (min-width: 320px) {
    font-size: 0.8rem;
  }
  transform: rotate(0deg);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-left: auto;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  padding: 16px;
  @media (min-width: 320px) {
    font-size: 0.75rem;
  }
`

export const Card = ({
  img,
  title,
  date,
  description
}) => (
  <StyledCard>
    <Image src={img}/>
    <Header>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Header>
    <Description>{description}</Description>
  </StyledCard>
)
