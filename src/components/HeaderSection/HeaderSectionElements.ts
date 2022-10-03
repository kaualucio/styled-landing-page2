import styled from "styled-components"

export const HeaderSectionContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const HeaderSectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  max-width: 500px;
`

export const HeaderLabel = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #c4c4c4;
  line-height: 2rem;
  width: 520px;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`