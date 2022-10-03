import styled from "styled-components"

export const OurTeamContainer = styled.section`
  position: relative;
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

export const OurTeamWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 504px;
  max-height: 540px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    display: none
  }
`

export const OurTeamContent = styled.div` 
  position: absolute; 
  top: 0;
  right: 10rem;
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3.25rem;

  @media screen and (max-width: 1330px) {
    position: initial; 
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    height: auto;
  }

`

export const Teammate = styled.div`
  width: 294px;
  height: 312px;
  background: linear-gradient(to bottom right, #474747, #222222);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

export const ImageTeammate = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 999px;
`

export const TeammateName = styled.h2`
  color: #fff;
  font-size: 1.375rem;
  font-weight: 500;
  margin: 1.3rem 0;
`

export const AboutTeammate = styled.p`
  color: #e5e5e5;
  font-size: 0.875rem;
  text-align: center;
`

export const SectionContent = styled.div`

`

export const SectionTitle = styled.h2`
font-size: 2.8rem;
font-weight: 500;
max-width: 500px;
`

export const SectionDescription = styled.p`
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

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const SeeAllButton = styled.button`
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

export const HowItWorkButton = styled.button`
  width: 11.3125rem;
  height: 4rem;
  background: transparent;
  color: #242527;
  font-weight: 500;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`