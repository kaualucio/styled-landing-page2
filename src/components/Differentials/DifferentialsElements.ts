import styled from 'styled-components';


export const DifferentialsContainer = styled.section`
 background: #fff;
  width: 100%;
  padding: 5rem 7.5rem;

  @media screen and (max-width: 875px) {
    padding: 5rem 6.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5.5rem;
  }
`

export const DifferentialsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export const DifferentialsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 2rem;
  }
`

export const Differential = styled.div`
  max-width: 16.25rem;
  width: 100%;
  min-height: 20.625rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05)
  }
`

export const OutsideCircle = styled.div`
  width: 5.875rem;
  height: 5.875rem;
  border-radius: 9999px;
  background: rgba(35, 134, 192, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InsideCircle = styled.div`
  width: 4.625rem;
  height: 4.625rem;
  border-radius: 9999px;
  background: rgba(35, 134, 192, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconImage = styled.img``

export const DifferentialTitle = styled.h2`
  color: #242527;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0;
`

export const DifferentialDescription = styled.p`
  color: #c4c4c4;
  font-size: 1.125rem;
  font-weight: 400;
`