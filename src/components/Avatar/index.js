import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from './styled'

const Avatar = () => {
  return(
    <S.AvatarWrapper>
      <StaticImage  
        src="../../../static/assets/img/profile-photo.jpg"
        alt="Pablo Avatar"
        placeholder="blurred" 
      />
    </S.AvatarWrapper>
  )
}

export default Avatar