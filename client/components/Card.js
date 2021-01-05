import React from 'react'
import styled from 'styled-components'

import { Header, Title, Date } from './typography'

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
  background-color: #744f44;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  padding: 16px;
  @media (min-width: 320px) {
    font-size: 0.75rem;
  }
`

export const Card = ({ img, title, date, description }) => (
  <StyledCard>
    <Image src={img} />
    <Header>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Header>
    <Description>{description}</Description>
  </StyledCard>
)
