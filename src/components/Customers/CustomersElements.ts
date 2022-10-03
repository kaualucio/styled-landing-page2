import styled from "styled-components";


export const CustomersContainer = styled.section`
  z-index: 10;
  width: 100%;
  max-width: 66.5rem;
  height: 35.375rem;
  padding: 4rem;
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  display: flex;
  background: linear-gradient(to bottom right, #474747, #222222);

  @media screen and (max-width: 1200px) {
    bottom: -25%;
    transform: translate(-50%, -25%);
  }

  @media screen and (max-width: 768px) {
    bottom: -13%;
    height: auto;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }

`

export const Customer = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CustomerImage = styled.img`
  width: 100%;
  max-width: 16rem;
  height: 21.5rem;
`

export const AboutCustomer = styled.div`
  width: 263px;
  min-height: 171px;
  position: absolute;
  bottom: 0px;
  left: 130px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.25rem 1rem 1.25rem;

  @media screen and (max-width: 960px) {
    left: 30px;
  }
`

export const QuoteIcon = styled.div`
  width: 3.98rem;
  height: 3.98rem;
  border-radius: 999px;
  font-size: 1.5rem;
  color: #0a72ad;
  background: #fff;
  box-shadow: 0 10px 15px 0 rgba(10, 114, 173, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;                                     
  position: absolute;
  top: -31px;
  z-index: 99999;
  
`

export const CustomerName = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  color: #242527;
  margin: 2rem 0 0.5rem 0;
`

export const CustomerQuote = styled.p`
  color: #939393;
  font-size: 0.8125rem;
  text-align: justify;
`

export const SectionContent = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SectionTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const SectionDescription = styled.p`
  color: #c4c4c4;
  font-size: 1.125rem;
  
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
  }
`