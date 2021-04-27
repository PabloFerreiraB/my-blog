import styled from "styled-components"
import media from "styled-media-query"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import transitions from '../../styles/transitions'

export const PostWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  padding: 1.5rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    justify-content: center;

    &:hover {
      padding-left: 35px;
      transition: padding-left 0.3s ease 0s;
    }
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}

  &:hover {
    padding-left: 35px;
    transition: padding-left 0.3s ease 0s;
  }
`

export const PostLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: ${transitions.COLOR};

  body & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : 'var(--highlight)'};
  color: var(--white);
  border-radius: 5%;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  width: 110px;
  padding: 6px;

  ${media.lessThan("large")`
    border-radius: 2%;
    font-size: 1rem;
    min-height: auto;
    min-width: 80px;
    padding: .3rem .5rem;
    margin-bottom: .7rem;
  `}

  &.is-js {
    background: #EFD81D;
    color: #fff;
  }

  &.is-angular {
    background: #D6002F;
    color: #fff;
  }

  &.is-react {
    background: #5ED3F3;
    color: #fff;
  }

  &.is-vue {
    background: #3FB27F;
    color: #fff;
  }

  &.is-css {
    background: #0264AB;
    color: #fff;
  }

  &.is-html {
    background: #DD4B25;
    color: #fff;
  }

  &.is-git {
    background: #E84E31;
    color: #fff;
  }

  &.is-dev {
    background: #617222;
    color: #fff;
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostDate = styled.time`
  font-size: 0.9rem;
`

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.5rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
