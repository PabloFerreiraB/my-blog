import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    margin: auto;

    ${media.lessThan("large")`
      height: 2rem;
      width: 2rem;
  `}
  }
`
