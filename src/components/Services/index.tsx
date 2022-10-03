import { AboutService, Service, ServiceImage, ServicesContainer, ServicesContentContainer, ServicesWrapper, ServiceTitle } from './ServicesElements'

import Service1 from '../../assets/service1.svg'
import Service2 from '../../assets/service2.svg'
import Service3 from '../../assets/service3.svg'
import HeaderSection from '../HeaderSection'

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <HeaderSection 
          title={`
          Nossos excelentes serviços
          `} 
          label="Confira nosso melhor serviço que você pode encomendar na construção sua empresa e não se esqueça de perguntar pelo nosso e-mail ou pelo nosso atendimento ao cliente se você estiver interessado em usar nossos serviços."   
        />
        <ServicesContentContainer>
          <Service>
            <ServiceImage src={Service1} />
            <ServiceTitle>Industrial</ServiceTitle>
            <AboutService>
            O desenvolvimento industrial é o nosso principal linha de negócios. Fazemos fábrica construção, armazém e outros.
            </AboutService>
          </Service>

          <Service>
            <ServiceImage src={Service2} />
            <ServiceTitle>Comercial</ServiceTitle>
            <AboutService>
            Nossa experiência construindo no o campo comercial inclui showrooms, supermercados e edifícios de escritórios.
            </AboutService>
          </Service>

          <Service>
            <ServiceImage src={Service3} />
            <ServiceTitle>Residencial</ServiceTitle>
            <AboutService>
            O desenvolvimento residencial é o começo que nos moldou até hoje. Nosso desenvolvimento inclui casas e apartamentos.
            </AboutService>
          </Service>
        </ServicesContentContainer>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export { Services }