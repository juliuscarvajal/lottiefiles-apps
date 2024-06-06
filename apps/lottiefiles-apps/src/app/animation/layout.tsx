import { BackNav } from '@lottiefiles-apps/components';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <BackNav />
      {children}
    </>
  );
}
