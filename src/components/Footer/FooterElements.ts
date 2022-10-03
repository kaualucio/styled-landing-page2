import styled from "styled-components";


export const FooterContainer = styled.footer`
  width: 100%;
  padding: 22rem 7.5rem 5rem 7.5rem;

  @media screen and (max-width: 875px) {
    padding: 22rem 6.5rem 5rem 6.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 22rem 5rem 5rem 5rem;
  }

  @media screen and (max-width: 500px) {
    padding: 5rem 7.5rem 5rem 7.5rem;
  }
`

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const AboutCompany =  styled.div`
  grid-column-start: 1;
  grid-column-end: 4;

  @media screen and (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`

export const LogoCompany = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`

export const AbstractCompany = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  color: #fff;
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
` 

export const MediaButton = styled.button`
  width: 2.8rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(35, 134, 192, 0.1);
  color: #fff;
  font-size: 1.5rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const FooterLinks =  styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`

export const FooterLinkTitle = styled.h2`
  font-size: 1.125rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5rem;
` 

export const FooterLink = styled.a`
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
`

export const OthersFooterLinks =  styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`