import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/seo'
// import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
    <Layout>
        <SEO
            title="Sobre mim"
            description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
        />
        <MainContent>
            <h1>Sobre mim</h1>
            {/* <p>Atualmente trabalho na <a href="https://stefanini.com/pt-br"
                target="_blank"
                rel="noopener noreferrer" > Stefanini
                </a>
            </p> */}

            <h4>Em construção...</h4>
            {/* <p>
                ...
            </p>

            <h2>Habilidades</h2>

            <ul>
                <li>...</li>
            </ul>

            <h2>Contato</h2>

            <p>
                Você pode entrar em contato comigo através de qualquer uma das minhas
                redes sociais.
            </p>

            <SocialLinks hideStyle /> */}
        </MainContent>
    </Layout>
)

export default AboutPage
