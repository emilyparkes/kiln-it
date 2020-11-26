import React from "react"
import styled from "styled-components"

const Toolbar = styled.div``

const Logo = styled.div`
  flex: 0 0 auto;
  color: black;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
`

const LinkTexts = styled.div`
  color: blue;
`

export const LinkText = styled.div`
  color: blue;
`

export const Navbar = ({ navLinks }) => (
  <Toolbar>
    <Logo>{"hi"}</Logo>
    <LinkTexts>{navLinks}</LinkTexts>
  </Toolbar>
)
