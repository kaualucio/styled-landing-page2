import { Logo } from '../Header/HeaderElements'
import { AboutCompany, AbstractCompany, FooterContainer, FooterLink, FooterLinks, FooterLinkTitle, FooterWrapper, LogoCompany, MediaButton, OthersFooterLinks, SocialMedias } from './FooterElements'

import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <AboutCompany>
          <LogoCompany>Logo</LogoCompany>
          <AbstractCompany>
            is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.
          </AbstractCompany>
          <SocialMedias>
            <MediaButton>
              <AiOutlineGoogle />
            </MediaButton>

            <MediaButton>
              <AiOutlineTwitter />
            </MediaButton>

            <MediaButton>
              <AiOutlineInstagram />
            </MediaButton>

            <MediaButton>
              <AiFillLinkedin />
            </MediaButton>
          </SocialMedias>
        </AboutCompany>
        <FooterLinks>
          <FooterLinkTitle>Company</FooterLinkTitle>
          <FooterLink>Sobre nós</FooterLink>
          <FooterLink>Como funciona?</FooterLink>
          <FooterLink>Termos e Serviço</FooterLink>
          <FooterLink>Política de privacidade</FooterLink>
        </FooterLinks>
        <OthersFooterLinks>
          <FooterLinkTitle>More</FooterLinkTitle>
          <FooterLink>Documentação</FooterLink>
          <FooterLink>Licença</FooterLink>
        </OthersFooterLinks>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer