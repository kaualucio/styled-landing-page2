import styled from "styled-components";

export const ServicesContainer = styled.section`
  background: #f6f6f6;
  width: 100%;
  padding: 5rem 7.5rem;

  @media screen and (max-width: 875px) {
    padding: 5rem 6.5rem;
  }
  
  @media screen and (max-width: 768px) {
    padding: 5rem 5.5rem;
  }
`

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export const ServicesContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Service = styled.div`
  width: 100%;
  min-height: 550px;
  max-width: 23.125rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05)
  }
`

export const ServiceImage = styled.img`
  width: 100%;
`

export const ServiceTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 2.375rem 0;
`

export const AboutService = styled.p`
  font-size: 1rem;
  color: #c4c4c4;
  line-height: 1.8rem;
`