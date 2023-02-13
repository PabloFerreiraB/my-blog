import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Olá, meu nome é Pablo Ferreira. <br />
        <br /> Tenho 10 anos de experiência em desenvolvimento de software, sou
        apaixonado por projetos criativos e desafiadores que exigem soluções
        inovadoras. Iniciei minha carreira como Desenvolvedor Full-Stack e,
        desde então, tenho me especializado em Desenvolvimento Front-end, com
        foco em Angular. <br />
        <br />
        Como profissional altamente motivado, estou sempre em busca de novos
        conhecimentos e habilidades, o que me permite criar soluções eficientes
        e escaláveis para os clientes. Meus valores incluem a escrita de códigos
        limpos, legíveis e de acordo com as melhores práticas de
        desenvolvimento. <br />
        <br />
        Além disso, tenho amplo conhecimento em HTML5, CSS3 (pré-processadores:
        SASS, LESS), Javascript, TypeScript, Angular, RxJS, NgRx, Gatsby, React,
        Git, GraphQL, API's REST, Metodologias Ágeis, Micro Front-end, Design
        Responsivo, Integração Contínua e Entrega Contínua, Teste Unitário, C# e
        SQL Server. <br />
        <br />
        Com essa ampla gama de habilidades, posso abordar projetos complexos com
        confiança e criatividade.
      </p>
      <h2>Contatos</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
      <SocialLinks showOnMobile />
    </MainContent>
  </Layout>
)

export default AboutPage
