import React from 'react';
import { Refresh } from "@styled-icons/ionicons-outline/Refresh"

import * as S from './styled';

const SWUpdater = () => {
  return (
    <S.NotificationWrapper>
      <p>Tem uma atualização disponivel</p>
      <S.IconWrapper onClick={() => window.location.reload()}>
        <Refresh />
      </S.IconWrapper>
    </S.NotificationWrapper>
  )
}

export default SWUpdater