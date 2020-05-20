import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
    <Layout>
        <SEO
            title="Sobre mim"
            description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
        />
        <MainContent>
            <h1>Sobre mim</h1>
            <p>
                Meu nome é Pablo Ferreira Branzan, nasci em Macaubal-SP, atualmente moro em São José do Rio Preto-SP e trabalho na
                <a href="https://stefanini.com/pt-br" target="_blank" rel="noopener noreferrer" > Stefanini </a> como Desenvolvedor Fullstack.
            </p>

            <h2>Habilidades</h2>
            <ul>
                <li>HTML</li>
                <li>CSS (Sass, Less)</li>
                <li>Css Frameworks (Bootstrap, Bulma)</li>
                <li>Design Responsivo (Mobile First)</li>
                <li>Javascript (ES6/7)</li>
                <li>NodeJS</li>
                <li>Angular</li>
                <li>.NET Core</li>
                <li>.NET Framework</li>
                <li>LINQ e Lambda</li>
                <li>Git</li>
                <li>MySQL / SQL Server</li>
                <li>Scrum</li>
                <li>Algolia</li>
                <li>Github</li>
                <li>SEO</li>
            </ul>

            <h2>Contato</h2>
            <p>Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.</p>

            <SocialLinks showOnMobile />
        </MainContent>
    </Layout>
)

export default AboutPage
