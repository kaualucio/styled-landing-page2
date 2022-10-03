import styled from "styled-components";


export const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MetricData = styled.h3`
  font-size: 2.25rem;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 520px) {
    font-size: 1.85rem;
  }
`

export const MetricLabel = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: #c4c4c4;
  max-width: 100px;
  @media screen and (max-width: 520px) {
    font-size: 0.90rem;
  }
`