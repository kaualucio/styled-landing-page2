import styled from "styled-components"

export const AboutUsContainer = styled.section`
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

export const AboutUsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 575px;
  max-height: 470px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
/* 
  @media screen and (max-width: 1200px) {
    display: none
  } */
`

export const AboutUsContent = styled.div` 
  width: 100%;
  gap: 3.25rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }

`

export const SectionContent = styled.div`
  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
`

export const SectionDescription = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 2.8rem;
  font-size: 1.125rem;
  font-weight: 400;
  color: #c4c4c4;
  line-height: 2rem;
  max-width: 520px;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`

export const SeeMoreButton = styled.button`
  width: 11.3125rem;
  height: 4rem;
  background: #0a72ad;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  border: 0;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`