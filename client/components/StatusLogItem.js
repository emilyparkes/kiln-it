import React from 'react'
import styled from 'styled-components'

import { Date } from './utils'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
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

const StyledLog = styled.div`
  max-width: 80%;
  display: flex;
  background-color: #744F44;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  margin: 2px auto 2px auto;
`

const Text = styled.div`
  width: 150px;
  color: #fff;
  font-weight: 200;
  margin: 8px;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (min-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 320px) {
    font-size: 1rem;
  }
`

const handleColorType = status => {
  console.log(status)
  switch (status) {
    case 'Wet':
      return '#744F44'
    case 'Leather Hard':
      return '#C09F93'
    case 'Bone Dry':
      return '#03a9f3'
    case 'Bisque Firing':
      return '#03a9f3'
    case 'Bisque Fired':
      return '#744F44'
    case 'Glazed':
      return '#744F44'
    case 'Glaze Firing':
      return '#03a9f3'
    case 'Complete':
      return '#C09F93'
    default:
      return '#fff'
  }
}

const Status = styled.div`
  width: 150px;
  color: rgba(0, 0, 0, 0.87);
  background-color: ${(props) => handleColorType(props.children)};
  font-weight: 200;
  text-transform: uppercase;
  text-align: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin: 8px;
  padding: 6px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (min-width: 320px) {
    font-size: 1rem;
  }
`

export const StatusLogItem = ({
  creation
}) => (
  <StyledLog key={creation.id}>
    {/* Img */}
    <Text>{creation.shape}</Text>
    <Date>{creation.date_created}</Date>
    <Status>{creation.status}</Status>
  </StyledLog>
)
