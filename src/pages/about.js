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
                Meu nome é Pablo Ferreira, atualmente estou trabalhando como Desenvolvedor Front-end para <a href="https://www.digitalbusiness.com.br" target="_blank" rel="noopener noreferrer" >
                Digital Business </a> no modelo PJ.
            </p>

            <h2>Habilidades</h2>
            <ul>
                <li>HTML</li>
                <li>CSS (Sass)</li>
                <li>Design Responsivo (Mobile First)</li>
                <li>JavaScript (ES6/7)</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Git</li>
                <li>SEO</li>
                <li>Scrum</li>
                <li>Github</li>
                <li>AWS</li>
            </ul>

            <h2>Contato</h2>
            <p>Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.</p>

            <SocialLinks showOnMobile />
        </MainContent>
    </Layout>
)

export default AboutPage
