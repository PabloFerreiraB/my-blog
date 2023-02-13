import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import links from "../components/Skills/content"
import Icons from "../components/Skills/icons"

import {
  SkillsHeader,
  SkillsList,
  SkillsItem,
  SkillsWrapper,
  SkillsSubTitle,
} from "../styles/skills"

const SkillsPage = () => (
  <Layout>
    <Seo title="Habilidades" />
    <SkillsHeader>Habilidades</SkillsHeader>
    <SkillsSubTitle>Tecnologias</SkillsSubTitle>

    <SkillsList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <SkillsWrapper key={link}>
            <SkillsItem>
              <Icon title={link.label} />
            </SkillsItem>
          </SkillsWrapper>
        )
      })}
    </SkillsList>
  </Layout>
)

export default SkillsPage
