import HeaderSection from '../HeaderSection'
import Differential1 from '../../assets/bag.png'
import Differential2 from '../../assets/tag.png'
import Differential3 from '../../assets/clock.png'
import Differential4 from '../../assets/shield.png'
import { Differential, DifferentialDescription, DifferentialsContainer, DifferentialsContent, DifferentialsWrapper, DifferentialTitle, IconImage, InsideCircle, OutsideCircle } from './DifferentialsElements'

const Differentials = () => {
  return (
    <DifferentialsContainer>
      <DifferentialsWrapper>
        <HeaderSection
          title="O que nos torna diferentes?"
          label="Confira nosso melhor serviço que você pode encomendar na construção sua empresa e não se esqueça de perguntar pelo nosso e-mail ou pelo nosso atendimento ao cliente se você estiver interessado em usar nossos serviços."
        />
        <DifferentialsContent>
          <Differential>
            <OutsideCircle>
              <InsideCircle>
                <IconImage src={Differential1} />
              </InsideCircle>
            </OutsideCircle>
            <DifferentialTitle>
              Experiência
            </DifferentialTitle>
            <DifferentialDescription>
              Nossa experiência de 25 anos construindo e realizando conquistas no mundo do desenvolvimento.
            </DifferentialDescription>
          </Differential>

          <Differential>
            <OutsideCircle>
              <InsideCircle>
                <IconImage src={Differential2} />
              </InsideCircle>
            </OutsideCircle>
            <DifferentialTitle>
              Preços Competitivos
            </DifferentialTitle>
            <DifferentialDescription>
            Os preços que lhe oferecemos são muito competitivos sem reduzir minimamente a qualidade do trabalho da empresa.
            </DifferentialDescription>
          </Differential>

          <Differential>
            <OutsideCircle>
              <InsideCircle>
                <IconImage src={Differential3} />
              </InsideCircle>
            </OutsideCircle>
            <DifferentialTitle>
              Na hora
            </DifferentialTitle>
            <DifferentialDescription>
              Prezamos pela qualidade do trabalho e terminamos no tempo.
            </DifferentialDescription>
          </Differential>

          <Differential>
            <OutsideCircle>
              <InsideCircle>
                <IconImage src={Differential4} />
              </InsideCircle>
            </OutsideCircle>
            <DifferentialTitle>
              Melhores Materiais
            </DifferentialTitle>
            <DifferentialDescription>
              O material determina o edifício em si, por isso recomendamos que você use os melhores materiais de qualidade em sua classe.
            </DifferentialDescription>
          </Differential>
        </DifferentialsContent>
      </DifferentialsWrapper>
    </DifferentialsContainer>
  )
}

export { Differentials }