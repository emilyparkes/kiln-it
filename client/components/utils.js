import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`

export const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  margin: 0px;
  padding: 12px;
  @media (min-width: 320px) {
    font-size: 1rem;
  }
`
export const Date = styled.div`
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
