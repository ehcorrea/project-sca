import styled, { css } from 'styled-components/native';
import { Image as ImageEX } from 'expo-image';

export const Page = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding-horizontal: 1%;
  `}
`;

export const Image = styled(ImageEX).attrs((props) => ({
  ...props,
  contentFit: 'cover',
}))`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${theme.rfvalue(14)}px;
  `}
`;
