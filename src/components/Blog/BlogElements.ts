import styled from "styled-components"


export const BlogContainer = styled.section`
  background: #fff;
  width: 100%;
  padding: 5rem 7.5rem;

  @media screen and (max-width: 875px) {
    padding: 5rem 6.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5.5rem;
  }
`

export const BlogWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export const BlogTitle = styled.h2`
  font-size: 2.875rem;
  font-weight: 600;
`

export const BlogContent = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const BlogPost = styled.div`
  width: 23rem;
  min-height: 38rem;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

export const PostThumbnail = styled.img`
  width: 100%;
`

export const PostDescription = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PostDateRelease = styled.h2`
  width: 50px;
  font-size: 1.2rem;
  text-align: center;
`

export const PostTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`

export const PostAbstract = styled.div`
  font-size: 1.125rem;
  color: #c4c4c4;
`

export const PostLink = styled.a`
  font-size: 1.125rem;
  color: #0a72ad;
  cursor: pointer;
`