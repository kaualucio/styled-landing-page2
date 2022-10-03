import React from 'react'
import { PartnerLogo, PartnersContainer, PartnersWrapper } from './PartnersElements'

import Partner1 from '../../assets/brand1.svg'
import Partner2 from '../../assets/brand2.svg'
import Partner3 from '../../assets/brand3.svg'
import Partner4 from '../../assets/brand4.svg'
import Partner5 from '../../assets/brand5.svg'

const Partners = () => {
  return (
    <PartnersContainer>
      <PartnersWrapper>
        <PartnerLogo src={Partner1} alt="" />
        <PartnerLogo src={Partner2} alt="" />
        <PartnerLogo src={Partner3} alt="" />
        <PartnerLogo src={Partner4} alt="" />
        <PartnerLogo src={Partner5} alt="" />
      </PartnersWrapper>
    </PartnersContainer>
  )
}

export { Partners }