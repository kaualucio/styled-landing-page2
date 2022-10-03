import { BsArrowRightShort } from 'react-icons/bs'
import { Project, ProjectDetails, ProjectDetailsWrapper, ProjectName, ProjectsContainer, ProjectsContent, ProjectsSectionTitle, ProjectStatus, ProjectsWrapper, SeeProjectButton } from './ProjectsElements'

import Image1 from "../../assets/project_1.svg"
import Image2 from "../../assets/project_2.svg"
import Image3 from "../../assets/project_3.svg"
import Image4 from "../../assets/project_4.svg"
import Customers from '../Customers'

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsSectionTitle>Nossa coleção <br /> Melhores Projetos</ProjectsSectionTitle>
        <ProjectsContent>
          <Project pathImage={Image1}>
            <ProjectDetails>
              <ProjectDetailsWrapper>
                <ProjectName>Treasury Tower</ProjectName>
                <ProjectStatus>Projeto completo</ProjectStatus>
              </ProjectDetailsWrapper>
              <SeeProjectButton>
                <BsArrowRightShort />
              </SeeProjectButton>
            </ProjectDetails>
          </Project>

          <Project pathImage={Image2}>
            <ProjectDetails>
              <ProjectDetailsWrapper>
                <ProjectName>Treasury Tower</ProjectName>
                <ProjectStatus>Projeto completo</ProjectStatus>
              </ProjectDetailsWrapper>
              <SeeProjectButton>
                <BsArrowRightShort />
              </SeeProjectButton>
            </ProjectDetails>
          </Project>

          <Project pathImage={Image3}>
            <ProjectDetails>
              <ProjectDetailsWrapper>
                <ProjectName>Treasury Tower</ProjectName>
                <ProjectStatus>Projeto completo</ProjectStatus>
              </ProjectDetailsWrapper>
              <SeeProjectButton>
                <BsArrowRightShort />
              </SeeProjectButton>
            </ProjectDetails>
          </Project>

          <Project pathImage={Image4}>
            <ProjectDetails>
              <ProjectDetailsWrapper>
                <ProjectName>Treasury Tower</ProjectName>
                <ProjectStatus>Projeto completo</ProjectStatus>
              </ProjectDetailsWrapper>
              <SeeProjectButton>
                <BsArrowRightShort />
              </SeeProjectButton>
            </ProjectDetails>
          </Project>

          
        </ProjectsContent>
      </ProjectsWrapper>
      <Customers />
    </ProjectsContainer>
  )
}

export { Projects }