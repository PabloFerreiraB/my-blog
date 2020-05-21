import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  transition: ${transitions.ALL};
  border-bottom: 1px solid var(--borders);

  ${media.lessThan("large")`
     align-items: flex-start;
     height: auto;
     width: 100%;
     padding: 1rem;
  `}
`