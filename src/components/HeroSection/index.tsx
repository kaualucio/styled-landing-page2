import { Logo } from "../Header/HeaderElements"
import { HeroSectionButtonCTA, HeroSectionContainer, HeroSectionCornerInfo, HeroSectionDescription, HeroSectionFooter, HeroSectionImage, HeroSectionImageColumn, HeroSectionInfoColumn, HeroSectionShortAboutUs, HeroSectionTimeInMarket, HeroSectionTitle, HeroSectionWrapper, OurMetrics, Span } from "./HeroSectionElements"

import HeroImage from '../../assets/hero-img.png'
import Metric from "../Metric"

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroSectionWrapper>
        <HeroSectionInfoColumn>
          <HeroSectionTitle>
            Nós fornecemos <br /> Design Aquitetural <br /> e Construção
          </HeroSectionTitle>
          <HeroSectionDescription>
            Mais de 100 projetos de prédios e casas que nós criamos.
            O proprietário da construção nos escolhe ao invés de outros contrustores em Jokarta, por que nosso trabalho é diferente.
          </HeroSectionDescription>
          <HeroSectionButtonCTA>Descubra Mais</HeroSectionButtonCTA>
        </HeroSectionInfoColumn>
        <HeroSectionImageColumn>
          <HeroSectionImage src={HeroImage} alt="Hero Image"/>
        </HeroSectionImageColumn>
      </HeroSectionWrapper>
      <HeroSectionFooter>
        <OurMetrics>
          <Metric data={300} label="Clientes Felizes" />
          <Metric data={900} label="Projetos Incríveis" />
          <Metric data={20} label="Prêmios Ganhos" />
        </OurMetrics>
        <HeroSectionCornerInfo>
          <Logo>Logo</Logo>
          <HeroSectionTimeInMarket>
              25 anos <br /> <Span>de operação</Span>
          </HeroSectionTimeInMarket>
          <HeroSectionShortAboutUs>
            Como uma empresa de confiança que está em operação há 25 anos, nosso comprometimento é prioridade é sempre priorizar a satisfação dos nossos clientes.
          </HeroSectionShortAboutUs>
        </HeroSectionCornerInfo>
      </HeroSectionFooter>
    </HeroSectionContainer>
  )
}

export { HeroSection }