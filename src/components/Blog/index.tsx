import Image1 from '../../assets/news_1.svg'
import Image2 from '../../assets/news_2.svg'
import Image3 from '../../assets/news_3.svg'
import { BlogContainer, BlogContent, BlogPost, BlogTitle, BlogWrapper, PostAbstract, PostDateRelease, PostDescription, PostLink, PostThumbnail, PostTitle } from './BlogElements'

const Blog = () => {
  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogTitle>News &#38; Update</BlogTitle>
        <BlogContent>
          <BlogPost>
            <PostThumbnail src={Image1} />
            <PostDescription>
              <PostDateRelease>12 Jan</PostDateRelease>
              <PostTitle>Elementos de conteúdo em Epoxy Paint</PostTitle>
            </PostDescription>
            <PostAbstract>
              Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...
            </PostAbstract>
            <PostLink>Ler mais</PostLink>
          </BlogPost>

          <BlogPost>
            <PostThumbnail src={Image2} />
            <PostDescription>
              <PostDateRelease>12 Jan</PostDateRelease>
              <PostTitle>Elementos de conteúdo em Epoxy Paint</PostTitle>
            </PostDescription>
            <PostAbstract>
              Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...
            </PostAbstract>
            <PostLink>Ler mais</PostLink>
          </BlogPost>

          <BlogPost>
            <PostThumbnail src={Image3} />
            <PostDescription>
              <PostDateRelease>12 Jan</PostDateRelease>
              <PostTitle>Elementos de conteúdo em Epoxy Paint</PostTitle>
            </PostDescription>
            <PostAbstract>
              Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...
            </PostAbstract>
            <PostLink>Ler mais</PostLink>
          </BlogPost>
        </BlogContent>
      </BlogWrapper>
    </BlogContainer>
  )
}

export { Blog }