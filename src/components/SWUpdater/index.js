import React from 'react';
import { Refresh } from '@styled-icons/boxicons-regular/Refresh';

import * as S from './styled';

const SWUpadater = () => (
  <S.NotificationWrapper>
    <p>Tem uma atualização disponível</p>
    <S.IconWrapper onClick={() => window.location.reload()}>
      <Refresh />
    </S.IconWrapper>
  </S.NotificationWrapper>
)

export default SWUpadater