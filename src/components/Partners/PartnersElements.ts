import styled from "styled-components";


export const PartnersContainer = styled.section`
  width: 100%;
  background: #fff;
  padding: 1.9rem 8.125rem;

  @media screen and (max-width: 768px) {
    padding: 1.9rem 4rem;
  }
`
export const PartnersWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`

export const PartnerLogo = styled.img`
  /* display: block; */
  object-fit: contain;
`