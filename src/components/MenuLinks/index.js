import React from "react"

import links from "./content"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink cover direction="right" bg={getThemeColor()} duration={0.8} to={link.url} activeClassName="active">
                        {link.label}
                    </S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default MenuLinks