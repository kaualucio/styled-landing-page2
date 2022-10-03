import styled from "styled-components"

interface ProjectProps {
  pathImage: string
}

export const ProjectsContainer = styled.section`
  position: relative;
  background: #fff;
  width: 100%;
  padding: 5rem 7.5rem 22rem 7.5rem;

  @media screen and (max-width: 875px) {
    padding: 5rem 6.5rem 15rem 6.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5rem 15rem 5rem;
  }
`

export const ProjectsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export const ProjectsSectionTitle = styled.h2`
  font-size: 2.875rem;
  font-weight: 600;
`

export const ProjectsContent = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Project = styled.div`
  width: 100%;
  min-height: 29.875rem;
  padding: 0.75rem;
  background: ${({ pathImage }: ProjectProps) => `url(${pathImage})` };
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  /* @media screen and (max-width: 768px) {
    width: auto;
  } */
`

export const ProjectDetails = styled.div`
  width: 100%;
  padding: 1.375rem 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`

export const ProjectDetailsWrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
`

export const ProjectName = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #242527;
`

export const ProjectStatus = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #c4c4c4;
`
export const SeeProjectButton = styled.button`
  cursor: pointer;
  width: 100%;
  max-width: 3.5rem;
  height: 3.5rem;
  font-size: 2rem;
  color: #fff;
  background: #0a72ad;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`
