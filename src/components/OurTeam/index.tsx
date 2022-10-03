import { AboutTeammate, ActionButtons, HowItWorkButton, Image, ImageContainer, ImageTeammate, OurTeamContainer, OurTeamContent, OurTeamWrapper, SectionContent, SectionDescription, SectionTitle, SeeAllButton, Teammate, TeammateName } from './OurTeamElements'

import Image1 from '../../assets/architecture_1.svg'
import Employee from '../../assets/employer.png'

const OurTeam = () => {
  return (
    <OurTeamContainer>
      <OurTeamWrapper>
        <ImageContainer>
          <Image src={Image1} />
        </ImageContainer>
        <OurTeamContent>
          <Teammate>
            <ImageTeammate src={Employee}/>
            <TeammateName>Dianne Russel</TeammateName>
            <AboutTeammate>
            More than 20 years of experience in the field architecture and has worked on project. up to 100+
            </AboutTeammate>
          </Teammate>
          <SectionContent>
            <SectionTitle>
              Meet and talk with our best architecture
            </SectionTitle>
            <SectionDescription>
            All our teams are professional and competent in their fields and will help realize your dream building with the excellent result.
            </SectionDescription>
            <ActionButtons>
              <SeeAllButton>
                Ver todo o time
              </SeeAllButton>
              <HowItWorkButton>
                Como funciona
              </HowItWorkButton>
            </ActionButtons>
          </SectionContent>
        </OurTeamContent>
      </OurTeamWrapper>
    </OurTeamContainer>
  )
}

export { OurTeam }