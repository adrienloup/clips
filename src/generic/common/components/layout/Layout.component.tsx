import { MainComponent } from '@/src/generic/common/components/main/Main.component.tsx';
import { HeaderComponent } from '@/src/generic/common/components/header/Header.component.tsx';
import { FooterComponent } from '@/src/generic/common/components/footer/Footer.component.tsx';
import { Layout } from '@/src/generic/common/components/layout/Layout.type.ts';

export const LayoutComponent = ({ children }: Layout) => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
