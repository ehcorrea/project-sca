import styled, { css } from 'styled-components/native';
import { ImageBackground } from 'expo-image';

import { Text } from '@/components';

export const Header = styled(ImageBackground).attrs({
  contentFit: 'cover',
  source: require('@/assets/images/elipses.svg'),
})`
  ${({ theme }) => css`
    align-items: end;
    height: ${theme.rhvalue(90)}px;
    justify-content: flex-end;
    padding-horizontal: 5%;
    padding-vertical: 2%;
    width: 100%;
  `}
`;
export const Label = styled(Text)`
  color: #5b5b5e;
`;
