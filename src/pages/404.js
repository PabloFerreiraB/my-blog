import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"
import GlobalStyles from "../styles/global"

const Container = styled.section`
  background: var(--background);
  align-items: center;
  color: #222;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco",
    "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial,
    sans-serif;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100vw;
`

const Title = styled.h1`
  color: var(--texts);
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`

const Text = styled.p`
  color: var(--texts);
  font-size: 18px;
  font-family: Courier, monospace;
`

const Button = styled(Link)`
  background: var(--mediumBackground);
  border: 1px solid var(--borders);
  border-radius: 6px;
  color: var(--texts);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 2rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }
`

const NotFoundPage = () => (
  <Container>
    <Seo title="404: Not found" />
    <GlobalStyles />
    <Title>404</Title>
    <Text>Página não encontrada</Text>
    <Button to="/">← Voltar ao blog</Button>
  </Container>
)

export default NotFoundPage
