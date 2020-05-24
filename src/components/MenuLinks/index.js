import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import links from "./content"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => {
    const menuLinkClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <AniLink
                            to={link.url}
                            cover
                            direction="right"
                            bg={getThemeColor()}
                            duration={0.8}
                            activeClassName="active"
                            onClick={menuLinkClick}
                        >
                            {link.label}
                        </AniLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    )
}

export default MenuLinks