import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const AddIcon = styled(Entypo).attrs(({ theme }) => ({
  color: theme.colors.default.white.main,
  size: theme.rfvalue(28),
}))``;

export const AddButton = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.default.primary.main};
    border-radius: 14px;
    height: 48px;
    justify-content: center;
    width: 48px;
  `}
`;
