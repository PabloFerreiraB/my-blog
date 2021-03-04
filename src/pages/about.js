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
            <p>Meu nome é Pablo Ferreira, moro em São José do Rio Preto - SP. No meu tempo livre gosto de curtir minha família (👪), jogar e assistir futebol (⚽️), ouvir música (🎵), assistir filmes ou séries (🎞️) e diariamente estudo sobre tecnologia.</p>
            <p>Atualmente estou trabalhando como Desenvolvedor Front-end para empresa <a href="https://www.digitalbusiness.com.br" target="_blank" rel="noopener noreferrer" > Digital Business </a> no modelo PJ, atuando em um cliente de Portugal.</p>

            <h2>Contato</h2>
            <p>Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.</p>
            <SocialLinks showOnMobile />
        </MainContent>
    </Layout>
)

export default AboutPage
