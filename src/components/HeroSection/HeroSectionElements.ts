import styled from "styled-components";


export const HeroSectionContainer = styled.section`
  width: 100%;
  height: 802px;
  padding: 56px 0;
  position: relative;
`

export const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const HeroSectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: medium;
  color: #fff;

  @media screen and (max-width: 520px) {
    font-size: 2.5rem;
  }
`

export const HeroSectionDescription = styled.p`
  font-size: 1.125rem;
  font-weight: medium;
  line-height: 2rem;
  color: #c4c4c4;
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 520px) {
    font-size: 1rem;
  }
`

export const HeroSectionButtonCTA = styled.button`
  width: 200px;
  height: 64px;
  background: linear-gradient(to bottom right, #60BBEE, #0A72AD);
  box-shadow: 0, 10, 15, 0 (1, 115, 153, .2);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: 0;
  cursor: pointer;
`
export const HeroSectionInfoColumn = styled.div`
  grid-column: 1 / span 2;

  @media screen and (max-width: 1200px) {
    grid-column: 1 / span 3;
  }

  @media screen and (max-width: 840px) {
    grid-column: 1 / span 5;
    text-align: center;
  }
`

export const HeroSectionImageColumn = styled.div`
  grid-column: 4 / span 1;

`

export const HeroSectionImage = styled.img`
  width: 100%;
  max-width: 37.125rem;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;

  @media screen and (max-width: 1200px) {
    max-width: 30rem;
  }

  @media screen and (max-width: 920px) {
    max-width: 25rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`

export const HeroSectionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 90.625rem;
  height: 166px;
  max-height: 166px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 4;

  @media screen and (max-width: 840px) {
    justify-content: center;
    position: initial;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const HeroSectionCornerInfo = styled.div`
  width: 100%;
  max-width: 745px;
  height: 166px;
  background: linear-gradient(to right, #60BBEE, #0A72AD, #003756);
  color: #fff;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const HeroSectionTimeInMarket = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  width: 18.75rem;
  line-height: 1.5rem;

`

export const HeroSectionShortAboutUs = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
`

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 500;
`

export const OurMetrics = styled.div`
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 520px) {
    gap: 2rem;
  }
`