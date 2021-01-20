import React from 'react'
import styled from 'styled-components'

import { Title, Date } from './typography'

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

const Image = styled.img`
  width: 100%;
  height: 1000%;
  object-fit: cover;
`

export const Text = styled.div`
  
`

export const SubTitle = styled.h4`
  
`

const Description = styled.p`
  
`

export const CreationItemDisplay = ({ creation }) => (

  <>
    <Image src={creation.image} />
    <Text>
      <Title>{creation.name}</Title>
      <SubTitle>{creation.shape}</SubTitle>
      <Date>{creation.date}</Date>
      <Description>{creation.description}</Description>
    </Text>
  </>
)
