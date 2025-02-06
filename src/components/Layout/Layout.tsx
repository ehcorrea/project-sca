import * as S from './Layout.styles';

import { HeaderUser } from '../HeaderUser/HeaderUser';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <S.Container>
      <HeaderUser />
      {children}
    </S.Container>
  );
}
