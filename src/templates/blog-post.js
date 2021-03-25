import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPost from "../components/RecommendedPosts"

import getThemeColor from "../utils/getThemeColor"

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
  ButtonBack
} from '../styles/base'

const BlogPost = props => {
  const post = props.data.markdownRemark
  const next = props.pageContext.nextPost
  const previous = props.pageContext.previousPost

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image} />
      <PostHeader>

        <ButtonBack
          to="/"
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.8}
        >
          ← Voltar na listagem
        </ButtonBack>

        <PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura.
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </MainContent>

      <RecommendedPost next={next} previous={previous} />
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`
