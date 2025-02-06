import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  top?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 5%;
    margin-top: ${theme.rhvalue(50)}px;
  `}
`;

export const UserImage = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.rfvalue(14)}px;
    height: ${theme.rwvalue(48)}px;
    margin-right: ${theme.rwvalue(8)}px;
    width: ${theme.rwvalue(48)}px;
  `}
`;
