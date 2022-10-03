
import Image1 from '../../assets/architecture_2.svg'
import { AboutUsContainer, AboutUsContent, AboutUsWrapper, ActionButtons, Image, ImageContainer, SectionContent, SectionDescription, SectionTitle, SeeMoreButton } from './AboutUsElements'

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsWrapper>
        <AboutUsContent>
          <SectionContent>
            <SectionTitle>
              Nossa História <br /> Quem nós somos
            </SectionTitle>
            <SectionDescription>
              Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta. As the company grows, now we are present as a reliable...
            </SectionDescription>
            <ActionButtons>
              <SeeMoreButton>
                Ver mais
              </SeeMoreButton>
            </ActionButtons>
          </SectionContent>
        </AboutUsContent>
        <ImageContainer>
          <Image src={Image1} />
        </ImageContainer>
      </AboutUsWrapper>
    </AboutUsContainer>
  )
}

export { AboutUs }