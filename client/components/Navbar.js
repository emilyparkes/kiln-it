import React from 'react'
import styled from 'styled-components'

const Toolbar = styled.div`
  width: 100%;
  display: flex;
  @media (min-width: 480px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) {
    // max-width: 614px;
    // margin-left: auto;
    // margin-right: auto;
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

const Logo = styled.div`
  font-family: 'Alegreya Sans SC', sans-serif;
  flex: 0 0 auto;
  color: #744F44;
  padding: 12px;
  margin-left: 20%;
  margin-right: 33%;
  font-size: 2rem;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  justify-content: center
`

const LinkTexts = styled.div`
  display: flex;
  padding: 12px;

  @media (min-width: 468px) {
    flex-flow: column no-wrap;
  }
`

export const LinkText = styled.span`
  font-family: 'Alegreya Sans', sans-serif;
  color: #744F44;
  font-size: 1rem;
  display: block;
  padding: 8px;
  text-decoration: none;
`

export const Navbar = ({ navLinks }) => (
  <Toolbar>
    <LinkTexts>{navLinks}</LinkTexts>
    <Logo>{'Dirty Hands Studio'}</Logo>
  </Toolbar>
)
